<?php
/**
 * Plugin Name: WP Snapshots
 * Plugin URI: https://www.github.com/johnwatkins0/wp-snapshots
 * Description: A WordPress plugin providing a post type and display feature for images of notable people with text fields.
 * Version: 0.0.1
 * Author: John Watkins <johnwatkins0@gmail.com>
 * Text Doman: wp-snapshots
 *
 * @package johnwatkins0/wp-snapshots
 */

if ( ! defined( 'ABSPATH' ) ) {
	return;
}

if ( defined( 'WP_SNAPSHOTS' ) ) {
	return;
}

define( 'WP_SNAPSHOTS', true );

if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	require __DIR__ . '/vendor/autoload.php';
	JohnWatkins\Snapshots\Plugin::init();
}
