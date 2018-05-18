<?php
/**
 * Options.php
 *
 * @package johnwatkins0/wp-snapshots
 */

namespace JohnWatkins\Snapshots;

use Carbon_Fields\Carbon_fields;
use Carbon_Fields\{Container, Field};
use Carbon_Fields\Helper\Helper;

/**
 * Sets up the plugin options page.
 */
class PostMeta {

	const IMAGE = Plugin::FILTER_NAMESPACE . 'image';

	/**
	 * Adds hooks.
	 */
	public function init() {
		add_action( 'after_setup_theme', function() {
			\Carbon_Fields\Carbon_Fields::boot();
		} );
		add_action( 'carbon_fields_register_fields', [ $this, 'create_container' ] );
		add_action( 'carbon_fields_register_fields', [ $this, 'add_meta_fields' ] );
	}

	/**
	 * Creates the options page.
	 */
	public function create_container() {
		$this->container = Container::make( 'post_meta', 'Extra Snapshots Fields' )
			->where( 'post_type', '=', Plugin::POST_TYPE );
	}

	/**
	 * Sets and returns an array of Carbon Fields theme options fields.
	 *
	 * @return array The fields.
	 */
	public static function get_fields() : array {
		return [
			Field::make( 'image', self::IMAGE, 'Extra featured image.' )
				->set_help_text( 'Upload an image to show in the single post template. <b>Warning</b>: Crop the image to the appropriate size and dimensions before adding it through this field.' )
				->set_value_type( 'url' )
				->set_visible_in_rest_api( true ),
		];
	}

	/**
	 * Adds the plugin options.
	 */
	public function add_meta_fields() {
		$this->container->add_fields( self::get_fields() );
	}

	/**
	 * Gets an option.
	 *
	 * @param string $key The option key.
	 * @return mixed The value.
	 */
	public static function get( $key, $post_id = null ) {
		static $cache = [];
		$post_id = null !== $post_id ? $post_id : get_the_ID();

		if ( ! isset( $cache[ $key ] ) ) {
			$value         = Helper::get_post_meta( $key, $post_id ) ?: '';
			$cache[ $key ] = $value;
		}
		return $cache[ $key ];
	}
}
