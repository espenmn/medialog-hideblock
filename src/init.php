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


	register_block_type(
		'medialog/block-medialog-hideblock', array(
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'medialog_hideblock-js',
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
function medialog_block_wrapper( $block_content, $block ) {
	//$disabled = false;
	if ( isset( $block['attrs']['disableBlock'] ) && $block['attrs']['disableBlock'] ) {
		return '';
	} else {
		return $block_content;
	}

}

add_filter( 'render_block', 'medialog_block_wrapper', 10, 2 );
