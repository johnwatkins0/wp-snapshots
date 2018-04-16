<?php
/**
 * Sets up the environment for testing.
 *
 * @package johnwatkins0/wp-snapshots
 */

use JohnWatkins\Snapshots\Plugin;

require dirname( __DIR__ ) . '/vendor/autoload.php';

// phpcs:disable

class WP_Term {
	public $taxonomy = Plugin::TAXONOMY;
}

class WP_Post {
	public $ID        = 1;
	public $post_type = Plugin::POST_TYPE;
}


function wp_get_post_terms() {
	return [ new WP_Term() ];
}

function get_queried_object() {
	if ( $GLOBALS['queried_object_type'] === Plugin::TAXONOMY ) {
		return new WP_Term();
	} elseif ( $GLOBALS['queried_object_type'] === Plugin::POST_TYPE ) {
		return new WP_Post();
	}
}
