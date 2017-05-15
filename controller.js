/**
 * @fileoverview Description of file, its uses and information
 * about its dependencies.
 */

'use strict';

/**
 *
 */
var glSetExtent;

/**
 *
 */
var backboneEvents;

/**
 *
 */
var cloud;

/**
 *
 * @type {string}
 */
var exId = "glsetextent";

/**
 *
 * @type {boolean}
 */
var active = false;

/**
 *
 */
var clicktimer;

/**
 *
 * @returns {*}
 */
module.exports = {
    set: function (o) {
        cloud = o.cloud;
        backboneEvents = o.backboneEvents;
        glSetExtent = o.extensions.glSetExtent.index;
        return this;
    },
    init: function () {


    }
};

