<?php
/**
 * Namespaced utility functions.
 *
 * @package johnwatkins0/wp-snapshots
 */

namespace JohnWatkins\Snapshots;

/**
 * Class containing only static functions.
 */
class Utils {
	/**
	 * Gets a post's first category, or returns the category if it's the queried object.
	 *
	 * @return WP_Term|null The term or null.
	 */
	public static function get_first_category() {
		$queried_object = get_queried_object();

		if ( is_a( $queried_object, 'WP_Term' ) ) {
			return $queried_object;
		}

		if ( is_a( $queried_object, 'WP_Post' ) && Plugin::POST_TYPE === $queried_object->post_type ) {

			$terms = wp_get_post_terms( $queried_object->ID, Plugin::TAXONOMY );

			return ! empty( $terms ) ? $terms[0] : null;
		}

		return null;
	}
}
