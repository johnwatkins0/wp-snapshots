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
class Options {
	const PRIMARY_COLOR_KEY   = Plugin::FILTER_NAMESPACE . 'primary-color';
	const SECONDARY_COLOR_KEY = Plugin::FILTER_NAMESPACE . 'secondary-color';
	const LOGIN_KEY           = Plugin::FILTER_NAMESPACE . 'login_key';

	/**
	 * Adds hooks.
	 */
	public function init() {
		add_action( 'after_setup_theme', function() {
			\Carbon_Fields\Carbon_Fields::boot();
		} );
		add_action( 'carbon_fields_register_fields', [ $this, 'create_container' ] );
		add_action( 'carbon_fields_register_fields', [ $this, 'add_plugin_options' ] );
	}

	/**
	 * Creates the options page.
	 */
	public function create_container() {
		$this->container = Container::make( 'theme_options', 'Snapshot Options' )
			->set_page_parent( 'edit.php?post_type=' . Plugin::POST_TYPE );
	}

	/**
	 * Sets and returns an array of Carbon Fields theme options fields.
	 *
	 * @return array The fields.
	 */
	public static function get_fields() : array {
		return [
			Field::make( 'color', self::PRIMARY_COLOR_KEY, 'Primary color.' )
				->set_help_text( 'A main color to use in theming the snapshots.' )
				->set_default_value( '#0061ff' ),

			Field::make( 'color', self::SECONDARY_COLOR_KEY, 'Secondary color.' )
				->set_help_text( 'A secondary color to use in theming the snapshots.' )
				->set_default_value( '#ffa100' ),

			Field::make( 'checkbox', self::LOGIN_KEY, 'Require login.' )
				->set_help_text( 'Should viewing this feature require login?' ),
		];
	}

	/**
	 * Adds the plugin options.
	 */
	public function add_plugin_options() {
		$this->container->add_fields( self::get_fields() );
	}

	/**
	 * Gets an option.
	 *
	 * @param string $key The option key.
	 * @return mixed The value.
	 */
	public static function get( $key ) {
		static $cache;
		$cache = $cache ?: [];

		if ( isset( $cache[ $key ] ) ) {
			return $cache[ $key ];
		}

		$value         = Helper::get_theme_option( $key ) ?: '';
		$cache[ $key ] = $value;
		return $value;
	}
}
