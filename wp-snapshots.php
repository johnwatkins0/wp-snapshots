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

if ( ! file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	return;
}

require __DIR__ . '/vendor/autoload.php';
new JohnWatkins\Snapshots\Plugin();
