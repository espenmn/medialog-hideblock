/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n// General settings for ALL blocks\nvar createHigherOrderComponent = wp.compose.createHigherOrderComponent;\nvar Fragment = wp.element.Fragment;\nvar InspectorControls = wp.blockEditor.InspectorControls;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    ToggleControl = _wp$components.ToggleControl;\n\n\nvar withInspectorControls = createHigherOrderComponent(function (BlockEdit) {\n\n  return function (props) {\n    var attributes = props.attributes,\n        setAttributes = props.setAttributes;\n    //props.className = \"hidden-\" + string({attributes.disableBlock});\n\n    return wp.element.createElement(\n      Fragment,\n      null,\n      wp.element.createElement(\n        InspectorControls,\n        null,\n        wp.element.createElement(\n          PanelBody,\n          {\n            title: \"Disable block\",\n            initialOpen: false\n          },\n          wp.element.createElement(\n            PanelRow,\n            null,\n            wp.element.createElement(ToggleControl, {\n              label: \"Hide block\",\n              onChange: function onChange() {\n                setAttributes({ disableBlock: !attributes.disableBlock });\n                setAttributes({ className: \"block-hidden-\" + !attributes.disableBlock });\n                if (!attributes.disableBlock) {\n                  setAttributes({ className: \"opacity20\" });\n                }\n              },\n              checked: attributes.disableBlock\n            })\n          )\n        )\n      ),\n      wp.element.createElement(BlockEdit, props)\n    );\n  };\n}, 'withInspectorControl');\n\nwp.hooks.addFilter('editor.BlockEdit', 'medialog/with-inspector-controls', withInspectorControls);\n\nfunction addDisabledAttribute(settings, name) {\n  if (typeof settings.attributes !== 'undefined') {\n    settings.attributes = Object.assign(settings.attributes, {\n      disableBlock: {\n        type: 'boolean'\n      }\n    });\n  }\n  return settings;\n}\n\nwp.hooks.addFilter('blocks.registerBlockType', 'medialog/disabled-attribute', addDisabledAttribute);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbi8vIEdlbmVyYWwgc2V0dGluZ3MgZm9yIEFMTCBibG9ja3NcbnZhciBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCA9IHdwLmNvbXBvc2UuY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQ7XG52YXIgRnJhZ21lbnQgPSB3cC5lbGVtZW50LkZyYWdtZW50O1xudmFyIEluc3BlY3RvckNvbnRyb2xzID0gd3AuYmxvY2tFZGl0b3IuSW5zcGVjdG9yQ29udHJvbHM7XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIFBhbmVsQm9keSA9IF93cCRjb21wb25lbnRzLlBhbmVsQm9keSxcbiAgICBQYW5lbFJvdyA9IF93cCRjb21wb25lbnRzLlBhbmVsUm93LFxuICAgIFRvZ2dsZUNvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5Ub2dnbGVDb250cm9sO1xuXG5cbnZhciB3aXRoSW5zcGVjdG9yQ29udHJvbHMgPSBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChmdW5jdGlvbiAoQmxvY2tFZGl0KSB7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcyxcbiAgICAgICAgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXM7XG4gICAgLy9wcm9wcy5jbGFzc05hbWUgPSBcImhpZGRlbi1cIiArIHN0cmluZyh7YXR0cmlidXRlcy5kaXNhYmxlQmxvY2t9KTtcblxuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBGcmFnbWVudCxcbiAgICAgIG51bGwsXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIEluc3BlY3RvckNvbnRyb2xzLFxuICAgICAgICBudWxsLFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgUGFuZWxCb2R5LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkRpc2FibGUgYmxvY2tcIixcbiAgICAgICAgICAgIGluaXRpYWxPcGVuOiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgUGFuZWxSb3csXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRvZ2dsZUNvbnRyb2wsIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiSGlkZSBibG9ja1wiLFxuICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoKSB7XG4gICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7IGRpc2FibGVCbG9jazogIWF0dHJpYnV0ZXMuZGlzYWJsZUJsb2NrIH0pO1xuICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBjbGFzc05hbWU6IFwiYmxvY2staGlkZGVuLVwiICsgIWF0dHJpYnV0ZXMuZGlzYWJsZUJsb2NrIH0pO1xuICAgICAgICAgICAgICAgIGlmICghYXR0cmlidXRlcy5kaXNhYmxlQmxvY2spIHtcbiAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBjbGFzc05hbWU6IFwib3BhY2l0eTIwXCIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjaGVja2VkOiBhdHRyaWJ1dGVzLmRpc2FibGVCbG9ja1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQmxvY2tFZGl0LCBwcm9wcylcbiAgICApO1xuICB9O1xufSwgJ3dpdGhJbnNwZWN0b3JDb250cm9sJyk7XG5cbndwLmhvb2tzLmFkZEZpbHRlcignZWRpdG9yLkJsb2NrRWRpdCcsICdtZWRpYWxvZy93aXRoLWluc3BlY3Rvci1jb250cm9scycsIHdpdGhJbnNwZWN0b3JDb250cm9scyk7XG5cbmZ1bmN0aW9uIGFkZERpc2FibGVkQXR0cmlidXRlKHNldHRpbmdzLCBuYW1lKSB7XG4gIGlmICh0eXBlb2Ygc2V0dGluZ3MuYXR0cmlidXRlcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzZXR0aW5ncy5hdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbihzZXR0aW5ncy5hdHRyaWJ1dGVzLCB7XG4gICAgICBkaXNhYmxlQmxvY2s6IHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHNldHRpbmdzO1xufVxuXG53cC5ob29rcy5hZGRGaWx0ZXIoJ2Jsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZScsICdtZWRpYWxvZy9kaXNhYmxlZC1hdHRyaWJ1dGUnLCBhZGREaXNhYmxlZEF0dHJpYnV0ZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);