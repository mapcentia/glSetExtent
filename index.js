/**
 * @fileoverview Description of file, its uses and information
 * about its dependencies.
 */

'use strict';

/**
 *
 * @type {*|exports|module.exports}
 */
var cloud;

/**
 *
 * @type {*|exports|module.exports}
 */
var utils;

/**
 *
 * @type {*|exports|module.exports}
 */
var backboneEvents;


/**
 *
 * @type {string}
 */
var exId = "glsetextent";


/**
 *
 * @type {{set: module.exports.set, init: module.exports.init}}
 */

module.exports = module.exports = {

    /**
     *
     * @param o
     * @returns {exports}
     */
    set: function (o) {
        cloud = o.cloud;
        utils = o.utils;
        backboneEvents = o.backboneEvents;
        return this;
    },


    /**
     *
     */
    init: function () {

        /**
         *
         */
        var React = require('react');

        /**
         *
         */
        var ReactDOM = require('react-dom');

        /**
         *
         */
        class Glsetextent extends React.Component {
            constructor(props) {
                super(props);
            }

            render() {
                return (
                    <div role="tabpanel">
                        <div className="panel panel-default">
                            <div className="panel-body">

                            </div>
                        </div>
                    </div>
                );
            }
        }

        utils.createMainTab(exId, "Zoom til område", "......", require('./../../height')().max);

        // Append to DOM
        //==============
        try {

            ReactDOM.render(
                <Glsetextent />,
                document.getElementById(exId)
            );
        } catch (e) {

        }

    },

    /**
     * Turns conflict off and resets DOM
     */
    off: function () {
        // Clean up
    }

};


