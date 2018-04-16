<?php
/**
 * Tests util methods.
 *
 * @package johnwatkins0/wp-snapshots
 */

use PHPUnit\Framework\TestCase;
use JohnWatkins\Snapshots\{Utils, Plugin};

/**
 * Covers Utils.
 */
class UtilsTest extends TestCase {
	/**
	 * Tests whether the existing queried object is returned.
	 */
	public function test_get_first_category_on_tax_archive() {
		$GLOBALS['queried_object_type'] = Plugin::TAXONOMY;

		$this->assertEquals( Utils::get_first_category(), new WP_Term() );
	}

	/**
	 * Tests whether a post's first category is returned.
	 */
	public function test_get_first_categry_on_post() {
		$GLOBALS['queried_object_type'] = Plugin::POST_TYPE;

		$this->assertEquals( Utils::get_first_category(), new WP_Term() );
	}

	/**
	 * Tests whether null can be returned.
	 */
	public function test_get_first_categry_returns_null() {
		$GLOBALS['queried_object_type'] = null;

		$this->assertNull( Utils::get_first_category( new stdClass() ) );
	}
}
