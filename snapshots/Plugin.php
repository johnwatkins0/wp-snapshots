<?php
/**
 * SPlugin.php
 *
 * @package johnwatkins/wp-snapshots
 */

namespace JohnWatkins\Snapshots;

/**
 * Performs plugin initialization.
 */
class Plugin {
	const PROD             = true;
	const VERSION          = '0.0.4';
	const VENDOR           = 'johnwatkins';
	const TEXT_DOMAIN      = 'wp-snapshots';
	const FILTER_NAMESPACE = self::VENDOR . '__' . self::TEXT_DOMAIN . '__';
	const POST_TYPE        = 'snapshot';
	const POST_TYPE_LABELS = [
		'name'          => 'Snapshots',
		'singular_name' => 'Snapshot',
	];
	const TAXONOMY         = 'snapshot-category';
	const TAXONOMY_LABELS  = [
		'name'          => 'Snapshot Categories',
		'singular_name' => 'Snapshot Category',
	];

	/**
	 * Initiates the plugin.
	 */
	public static function init() {
		$options = new Options();
		$options->init();
		$post_meta = new PostMeta();
		$post_meta->init();
		add_action( 'init', [ __CLASS__, 'register_post_type' ] );
		add_action( 'init', [ __CLASS__, 'register_taxonomy' ] );
		add_action( 'template_redirect', [ __CLASS__, 'maybe_block_assets' ] );
		add_action( 'init', [ __CLASS__, 'register_assets' ] );
		add_action( 'wp_enqueue_scripts', [ __CLASS__, 'enqueue_assets' ] );
		add_action( 'template_include', [ __CLASS__, 'maybe_include_app_template' ] );
		add_action( 'wp_enqueue_scripts', [ __CLASS__, 'render_css_custom_properties' ] );
		add_filter( 'body_class', [ __CLASS__, 'normalize_body_class' ], 11 );
	}

	/**
	 * Template include callback possibly returning this plugin's template.
	 *
	 * @param string $template The template to be used.
	 * @return string The possibly modified template.
	 */
	public static function maybe_include_app_template( $template ) {
		if ( self::is_doing_app() ) {
			return dirname( __DIR__ ) . '/templates/index.php';
		}

		return $template;
	}

	/**
	 * Whether we're on a page where the app will run.
	 *
	 * @return boolean Yes or no.
	 */
	public static function is_doing_app() {
		static $is_doing_app;

		if ( null === $is_doing_app ) {
			$is_doing_app = is_singular( self::POST_TYPE )
				|| is_tax( self::TAXONOMY );
		}

		return $is_doing_app;
	}

	/**
	 * Registers the post type.
	 */
	public static function register_post_type() {
		register_post_type(
			self::POST_TYPE,
			[
				'labels'       => self::POST_TYPE_LABELS,
				'public'       => true,
				'supports'     => [ 'title', 'editor', 'thumbnail', 'excerpt' ],
				'show_in_rest' => true,
				'has_archive'  => true,
			]
		);
	}

	/**
	 * Registers the taxonomy.
	 */
	public static function register_taxonomy() {
		register_taxonomy(
			self::TAXONOMY,
			self::POST_TYPE,
			[
				'labels'       => self::TAXONOMY_LABELS,
				'hierarchical' => true,
				'show_in_rest' => true,
				'rewrite'      => [
					'slug' => 'snapshots',
				],
			]
		);
	}

	/**
	 * Registers scripts and styles.
	 */
	public static function register_assets() {
		$dist = self::get_dist_directory();
		$min  = self::PROD ? '.min' : '';

		wp_register_style(
			self::TEXT_DOMAIN,
			$dist . self::TEXT_DOMAIN . "$min.css",
			[],
			self::VERSION
		);

		wp_register_script(
			self::TEXT_DOMAIN,
			$dist . self::TEXT_DOMAIN . "$min.js",
			[ 'wp-api' ],
			self::VERSION,
			true
		);
	}

	/**
	 * Enqueues plugin assets that are not blocked.
	 */
	public static function enqueue_assets() {
		/**
		 * Filters whether to enqueue this plugin's style.
		 *
		 * @param bool Yes or no.
		 */
		if ( apply_filters( self::FILTER_NAMESPACE . 'enqueue_style', true ) ) {
			wp_enqueue_style( self::TEXT_DOMAIN );
		}

		/**
		 * Filters whether to enqueue this plugin's script.
		 *
		 * @param bool Yes or no.
		 */
		if ( apply_filters( self::FILTER_NAMESPACE . 'enqueue_script', true ) ) {
			wp_enqueue_script( self::TEXT_DOMAIN );
		}
	}

	/**
	 * Maybe adds filters to prevent assets from loading.
	 */
	public static function maybe_block_assets() {
		if ( self::is_doing_app() ) {
			return;
		}

		add_filter( self::FILTER_NAMESPACE . 'enqueue_style', '__return_false' );
		add_filter( self::FILTER_NAMESPACE . 'enqueue_script', '__return_false' );
	}

	/**
	 * Gets the plugin's dist/ directory URL, whether this package is installed as a plugin
	 * or in a theme via composer. If the package is in neither of those places and the filter
	 * is not used, this whole thing will fail.
	 *
	 * @return string The URL.
	 */
	public static function get_dist_directory() {
		/**
		 * Filters the URL location of the /dist directory.
		 *
		 * @param string The URL.
		 */
		$dist = apply_filters( self::FILTER_NAMESPACE . 'dist', null );

		if ( ! empty( $dist ) ) {
			return $dist;
		}

		if ( file_exists( dirname( dirname( __DIR__ ) . '/plugins' ) ) ) {
			return plugin_dir_url(
				dirname( __DIR__ ) . '/' . self::TEXT_DOMAIN . '.php'
			) . 'dist/';
		}

		$composer_dir = get_template_directory_uri() . '/vendor/';
		$dist         = $composer_dir . self::VENDOR . '/' . self::TEXT_DOMAIN . '/dist/';
		return $dist;
	}

	/**
	 * Adds extra CSS from plugin options.
	 */
	public static function render_css_custom_properties() {
		if ( self::is_doing_app() === false ) {
			return;
		}

		$primary   = esc_html( Options::get( Options::PRIMARY_COLOR_KEY ) );
		$secondary = esc_html( Options::get( Options::SECONDARY_COLOR_KEY ) );
		$css       = ':root {
			--' . self::TEXT_DOMAIN . "-primary: $primary;
			--" . self::TEXT_DOMAIN . "-secondary: $secondary;
		}";

		wp_add_inline_style( self::TEXT_DOMAIN, $css );
	}

	/**
	 * Clear body class of single-/archive-related classes for the post type/taxonomy.
	 *
	 * @param array $classes Existing body classes.
	 * @return array Modified body classes.
	 */
	public static function normalize_body_class( $classes ) {
		return array_filter(
			$classes,
			function( $class ) {
				return ! in_array(
					$class,
					[
						'single',
						'single-' . self::POST_TYPE,
						'archive',
						'tax-' . self::TAXONOMY,
					],
					true
				)
				&& strpos( $class, 'term' ) !== 0
				&& strpos( $class, self::POST_TYPE ) !== 0
				&& strpos( $class, 'page' ) !== 0
				&& strpos( $class, 'postid' ) !== 0;
			}
		);
	}

	/**
	 * Returns necessary HTML for the app.
	 *
	 * @param \WP_Term $category A term object.
	 * @return string Rendered HTML.
	 */
	public static function render_app_root( $category ) {
		if ( ! is_a( $category, 'WP_Term' ) ) {
			return '';
		}

		$props  = '';
		$props .= 'data-term-id="' . esc_attr( $category->term_id ) . '"';
		$props .= 'data-term-name="' . esc_attr( $category->name ) . '"';
		$props .= 'data-term-slug="' . esc_attr( $category->slug ) . '"';
		$props .= 'data-term-description="' . esc_attr( $category->description ) . '"';
		$props .= 'data-basename-prefix="' . esc_attr( is_multisite() ? get_blog_details()->path : '/' ) . '"';

		return '<div
			data-' . self::TEXT_DOMAIN . '
			data-title-append="' . ' | ' . esc_attr( get_bloginfo( 'name' ) ) . '"
			data-root-url="' . esc_url( get_bloginfo( 'url' ) ) . "\"
			$props
			></div>";
	}
}
