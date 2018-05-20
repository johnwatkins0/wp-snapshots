<?php
/**
 * Post/archive template for the app.
 *
 * @package johnwatkins0/wp-snapshots
 */

use JohnWatkins\Snapshots\{Utils, Plugin, Options};

add_action( 'wp_head', function() {
    $require_login = Options::get( Options::LOGIN_KEY );

    if ( true === $require_login ) {
        auth_redirect();
    }
    
} );

get_header();

echo Plugin::render_app_root( Utils::get_first_category() ); // phpcs:disable WordPress.XSS.EscapeOutput.OutputNotEscaped

get_footer();
