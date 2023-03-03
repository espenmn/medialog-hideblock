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

eval("/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n// General settings for ALL blocks\nvar createHigherOrderComponent = wp.compose.createHigherOrderComponent;\nvar Fragment = wp.element.Fragment;\nvar InspectorControls = wp.blockEditor.InspectorControls;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    ToggleControl = _wp$components.ToggleControl;\n\n\nvar withInspectorControls = createHigherOrderComponent(function (BlockEdit) {\n  return function (props) {\n    var attributes = props.attributes,\n        setAttributes = props.setAttributes;\n\n    return wp.element.createElement(\n      Fragment,\n      null,\n      wp.element.createElement(\n        InspectorControls,\n        null,\n        wp.element.createElement(\n          PanelBody,\n          {\n            title: \"Disable block\",\n            initialOpen: false\n          },\n          wp.element.createElement(\n            PanelRow,\n            null,\n            wp.element.createElement(ToggleControl, {\n              label: \"Hide block\",\n              onChange: function onChange() {\n                setAttributes({ disableBlock: !attributes.disableBlock });\n                setAttributes({ className: \"block-hidden-\" + !attributes.disableBlock });\n                if (!attributes.disableBlock) {\n                  setAttributes({ className: \"opacity20\" });\n                }\n              },\n              checked: attributes.disableBlock\n            })\n          )\n        )\n      ),\n      wp.element.createElement(BlockEdit, props)\n    );\n  };\n}, 'withInspectorControl');\n\nwp.hooks.addFilter('editor.BlockEdit', 'medialog/with-inspector-controls', withInspectorControls);\n\nfunction addDisabledAttribute(settings, name) {\n  if (typeof settings.attributes !== 'undefined') {\n    settings.attributes = Object.assign(settings.attributes, {\n      disableBlock: {\n        type: 'boolean'\n      }\n    });\n  }\n  return settings;\n}\n\nwp.hooks.addFilter('blocks.registerBlockType', 'medialog/disabled-attribute', addDisabledAttribute);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbi8vIEdlbmVyYWwgc2V0dGluZ3MgZm9yIEFMTCBibG9ja3NcbnZhciBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCA9IHdwLmNvbXBvc2UuY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQ7XG52YXIgRnJhZ21lbnQgPSB3cC5lbGVtZW50LkZyYWdtZW50O1xudmFyIEluc3BlY3RvckNvbnRyb2xzID0gd3AuYmxvY2tFZGl0b3IuSW5zcGVjdG9yQ29udHJvbHM7XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIFBhbmVsQm9keSA9IF93cCRjb21wb25lbnRzLlBhbmVsQm9keSxcbiAgICBQYW5lbFJvdyA9IF93cCRjb21wb25lbnRzLlBhbmVsUm93LFxuICAgIFRvZ2dsZUNvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5Ub2dnbGVDb250cm9sO1xuXG5cbnZhciB3aXRoSW5zcGVjdG9yQ29udHJvbHMgPSBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChmdW5jdGlvbiAoQmxvY2tFZGl0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXMsXG4gICAgICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzO1xuXG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgIEZyYWdtZW50LFxuICAgICAgbnVsbCxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBQYW5lbEJvZHksXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiRGlzYWJsZSBibG9ja1wiLFxuICAgICAgICAgICAgaW5pdGlhbE9wZW46IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBQYW5lbFJvdyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVG9nZ2xlQ29udHJvbCwge1xuICAgICAgICAgICAgICBsYWJlbDogXCJIaWRlIGJsb2NrXCIsXG4gICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSgpIHtcbiAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgZGlzYWJsZUJsb2NrOiAhYXR0cmlidXRlcy5kaXNhYmxlQmxvY2sgfSk7XG4gICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7IGNsYXNzTmFtZTogXCJibG9jay1oaWRkZW4tXCIgKyAhYXR0cmlidXRlcy5kaXNhYmxlQmxvY2sgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGVzLmRpc2FibGVCbG9jaykge1xuICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7IGNsYXNzTmFtZTogXCJvcGFjaXR5MjBcIiB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNoZWNrZWQ6IGF0dHJpYnV0ZXMuZGlzYWJsZUJsb2NrXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChCbG9ja0VkaXQsIHByb3BzKVxuICAgICk7XG4gIH07XG59LCAnd2l0aEluc3BlY3RvckNvbnRyb2wnKTtcblxud3AuaG9va3MuYWRkRmlsdGVyKCdlZGl0b3IuQmxvY2tFZGl0JywgJ21lZGlhbG9nL3dpdGgtaW5zcGVjdG9yLWNvbnRyb2xzJywgd2l0aEluc3BlY3RvckNvbnRyb2xzKTtcblxuZnVuY3Rpb24gYWRkRGlzYWJsZWRBdHRyaWJ1dGUoc2V0dGluZ3MsIG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBzZXR0aW5ncy5hdHRyaWJ1dGVzICE9PSAndW5kZWZpbmVkJykge1xuICAgIHNldHRpbmdzLmF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHNldHRpbmdzLmF0dHJpYnV0ZXMsIHtcbiAgICAgIGRpc2FibGVCbG9jazoge1xuICAgICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gc2V0dGluZ3M7XG59XG5cbndwLmhvb2tzLmFkZEZpbHRlcignYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlJywgJ21lZGlhbG9nL2Rpc2FibGVkLWF0dHJpYnV0ZScsIGFkZERpc2FibGVkQXR0cmlidXRlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);