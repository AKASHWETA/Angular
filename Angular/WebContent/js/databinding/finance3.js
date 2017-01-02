(function(angular) {
  'use strict';
angular.module('finance3', [])
  .factory('currencyConverter', ['$http', function($http) {
	    var YAHOO_FINANCE_URL_PATTERN =
	          '//query.yahooapis.com/v1/public/yql?q=select * from '+
	          'yahoo.finance.xchange where pair in ("PAIRS")&format=json&'+
	          'env=store://datatables.org/alltableswithkeys&callback=JSON_CALLBACK';
                                          {
    var currencies = ['USD', 'EUR', 'CNY'];
    var usdToForeignRates = {};
    var convert = function (amount, inCurr, outCurr) {
      return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
    };

    var refresh = funtion(){
    	var url=YAHOO_FINANCE_URL_PATTERN.replace('PAIRS','USD' + currencies.join('","USD'));
    	return $http.jsonp(url).then(function(response){
    		var newUsdToForeginRates ={};
    		angular.foEach(response.data.query,results.rate,function(rate){
    			var currency = rate.id.substring(3,6);
    			newUsdToForeginRates[currency] =window.parseFloat(rate.Rate);
    		});
    		 usdToForeignRates = newUsdToForeignRates;
    	});
    };
    refresh();
    return {
      currencies: currencies,
      convert: convert
    };
  };
  } ]);
})(window.angular);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/