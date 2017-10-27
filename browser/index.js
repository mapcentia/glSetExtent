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
 * @type {*|exports|module.exports}
 */
var urlparser = require('./../../../browser/modules/urlparser');

/**
 * @type {string}
 */
var db = urlparser.db;

/**
 *
 * @type {string}
 */
var exId = "glsetextent";

var store;

var arr=[];

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

        backboneEvents.get().on("ready:meta", function () {
            store = new geocloud.sqlStore({
                jsonp: false,
                method: "POST",
                host: "",
                db: "gl_baselayers",
                uri: "/api/sql",
                clickable: true,
                lifetime: 0,
                sql: "SELECT * FROM public.extents where lower(komnavn)='" + db + "'",

                onLoad: function () {
                    var me = this,
                    features = me.geoJSON.features;
                    $.each(features, function (i, v) {
                        arr[v.properties.gid] = v.geometry.coordinates[0];

                    });

                    // Append to DOM
                    //==============
                    try {

                        ReactDOM.render(
                            <Glsetextent features={features}/>,
                            document.getElementById(exId)
                        );
                    } catch (e) {

                    }

                }
            });
            store.load();
        });

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
                this.features = props.features;
            }

            render() {
                return (
                    <div role="tabpanel">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form id="glsetextent-form" className="form-horizontal">
                                    <fieldset>


                                        <div className="form-group">
                                            <div className="form-control-wrapper">
                                                <label htmlFor="extent">By/bygd</label>
                                                <select id="glsetextent-select" name="glsetextent-select" className="form-control" required>
                                                    <option> </option>
                                                    {
                                                        this.features.map(function (name) {
                                                            return <option key={name.properties.kode} value={name.properties.gid}>{name.properties.navn}</option>;
                                                        })
                                                    }

                                                </select>
                                            </div>
                                        </div>


                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                );
            }
        }

        utils.createMainTab(exId, "Zoom til By", "Zoom til en By/bygd ved at vælge navnet på listen.", require('./../../../browser/modules/height')().max);

    },

    zoomTo(f){
        console.log(arr[f]);
        cloud.get().map.fitBounds(L.latLngBounds([arr[f][0][1],arr[f][0][0]], [arr[f][2][1],arr[f][2][0]]))
    },

    /**
     * Turns conflict off and resets DOM
     */
    off: function () {
        // Clean up
    }

};


