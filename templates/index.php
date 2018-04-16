<?php
/**
 * Post/archive template for the app.
 *
 * @package johnwatkins0/wp-snapshots
 */

use JohnWatkins\Snapshots\{Utils, Plugin};

get_header();

echo Plugin::render_app_root( Utils::get_first_category() ); // phpcs:disable WordPress.XSS.EscapeOutput.OutputNotEscaped

get_footer();
