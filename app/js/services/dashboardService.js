define([
  'jquery',
  '../lib/cartoDBCollection'
], function($, CartoDBCollection) {

  'use strict';

  var DashboardService = CartoDBCollection.extend({

    dataForList: function(){

    }

  });

  return DashboardService;
});
