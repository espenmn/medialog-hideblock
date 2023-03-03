<?php
/**
 * Plugin Name: Disable Gutenberg Block
 * Plugin URI: https://github.com/espenmn
 * Description: medialog-hideblock — is a Gutenberg plugin. It adds a setting to disable/hide any block
 * Author: Espen Moe-Nilssen
 * Author URI: https://medialog.no
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package medialog-hideblock
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
