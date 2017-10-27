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
 * hej
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
        $(document).arrive("#glsetextent-select", function () {
            $(this).on("change", function (e) {

                glSetExtent.zoomTo($("#glsetextent-select").val());

                return false;

            });
        });
    }
};



