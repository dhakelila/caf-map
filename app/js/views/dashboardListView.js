define([
  'jquery', 
  'backbone',
  '../templates/dashboardListTpl.handlebars'
], function($, Backbone, tpl) {
  
  'use strict';

  var StateModel = Backbone.Model.extend({});

  var DashboardListView = Backbone.View.extend({

    el: '#dashboardList',

    events: {
    },

    initialize: function() {
      this.state = new StateModel();
      this.render();
    },

    render: function() {
      this.$el.html(tpl);
    }

  });

  return DashboardListView;
});
