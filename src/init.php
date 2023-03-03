<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package medialog-hideblock
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


function medialog_hideblock_assets() { // phpcs:ignore

	// Register block editor script for backend.
	wp_register_script(
		'medialog_hideblock-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'medialog_hideblock-editor-css', // Handle.
		plugins_url( 'dist/block-editor-styles.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `medialogGlobal` object.
	//wp_localize_script(
	//	'medialog_hideblock-js',
	//	'medialogGlobal', // Array containing dynamic data for a JS Global.
	//	[
	//''		'pluginDirPath' => plugin_dir_path( __DIR__ ),
	//		'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
	//		// Add more data here that you want to access from `medialogGlobal` object.
	//	]
	//);

	register_block_type(
		'medialog/block-medialog-hideblock', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			//'style'         => 'medialog_hideblock-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'medialog_hideblock-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'medialog_hideblock-editor-css',
			'render_callback' => 'medialog_hideblock_render',
			'attributes' => [
					'disableBlock' => [
						'type' => 'boolean',
						'default' => false,
					],
			]
		)
	);
}

// Hook: Block assets.
add_action( 'init', 'medialog_hideblock_assets' );


// Code to disable block from rendering if bool field 'disabled' is True
// Overrides the default rendering
function medialog_block_wrapper( $block_content, $block,  ) {
	$myAttr = $block['attrs'];
	$myKeys = array_keys($myAttr);
	$disabled = false;

	// Hack around multidimentional array problem
	foreach ($myKeys as $myKey) {
		$myValue = $myAttr[$myKey];
		if ($myKey == 'disableBlock' ){
			if ($myAttr[$myKey] != false) {
				$disabled = true;
			}
		}
	}

	if (!$disabled){
		//return content the normal way;
		return $block_content;
	}
	// Hide block;
	// Alternatively, we could show it only for admins
	return '';
}

add_filter( 'render_block', 'medialog_block_wrapper', 10, 2 );
