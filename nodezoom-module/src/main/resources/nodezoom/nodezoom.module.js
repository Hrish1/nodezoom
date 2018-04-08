/*
 * Copyright (c) 2015 Cisco Systems, Inc. and others.  All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 */

define(['angularAMD', 'app/routingConfig', 'app/core/core.services', 'common/config/env.module'], function(ng) {
  var nodezoomApp = angular.module('app.nodezoom', ['app.core', 'ui.router.state','config']);

  nodezoomApp.config(function($stateProvider, $compileProvider, $controllerProvider, $provide, NavHelperProvider, $translateProvider) {
    nodezoomApp.register = {
      controller : $controllerProvider.register,
      directive : $compileProvider.directive,
      factory : $provide.factory,
      service : $provide.service

    };


    NavHelperProvider.addControllerUrl('app/nodezoom/nodezoom.controller');
    NavHelperProvider.addToMenu('nodezoom', {
     "link" : "#/nodezoom",
     "active" : "main.nodezoom",
     "title" : "nodezoom",
     "icon" : "",  // Add navigation icon css class here
     "page" : {
        "title" : "nodezoom",
        "description" : "nodezoom"
     }
    });

    var access = routingConfig.accessLevels;

    $stateProvider.state('main.nodezoom', {
        url: 'nodezoom',
        access: access.admin,
        views : {
            'content' : {
                templateUrl: 'src/app/nodezoom/nodezoom.tpl.html',
                controller: 'nodezoomCtrl'
            }
        }
    });

  });

  return nodezoomApp;
});
