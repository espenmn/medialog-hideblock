/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */


// General settings for ALL blocks
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const {  PanelBody, PanelRow,  ToggleControl  } = wp.components;

const withInspectorControls = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        const { attributes, setAttributes, className  } = props;
        return (
            <Fragment>
              <InspectorControls __experimentalGroup="advanced">
                 <PanelRow>
                      <ToggleControl
              						label="Disable / Hide block"
              						onChange={ () => {
              								setAttributes( { disableBlock: !attributes.disableBlock } );
                              setAttributes( { className: "block-hidden-" + attributes.disableBlock  } );
              						} }
              						checked={ attributes.disableBlock }
              				/>
      				      </PanelRow>
                </InspectorControls>
                <BlockEdit { ...props  } />
            </Fragment>
        );
    };
}, 'withInspectorControl' );

wp.hooks.addFilter(
    'editor.BlockEdit',
    'medialog/with-inspector-controls',
    withInspectorControls
);

function addDisabledAttribute(settings, name) {
	if (typeof settings.attributes !== 'undefined') {
			settings.attributes = Object.assign(settings.attributes, {
				disableBlock: {
					type: 'boolean',
				},
			});

	}
	return settings;
}

wp.hooks.addFilter(
	'blocks.registerBlockType',
	'medialog/disabled-attribute',
	addDisabledAttribute
);
