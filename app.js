/*
  The MIT License (MIT)

  Copyright (c) 2015 Tyler Coyner

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/

  var http = require('http');
  var query = require('querystring');

  var host = "api.lib.harvard.edu";
  var basePath = "/v2";

  var libcloud = {
    item: {
      /*
        libcloud.item.get

        Description:
          This will obtain a single record with the given ID
        Parameters:
          string:   ID
          function: Callback
        Return:
          JSON result
      */
      get: function(id, callback) {
        var qstring = "";
        var subpath = basePath + "/items/" + id;

        var options= {
            host: host,
            port: 80,
            path: subpath,
            method: "GET"
        };

        request(options, callback)
      },
      /*
        libcloud.item.search

        Description:
          Search for records based on given criteria (filters, limit, start, etc)
        Parameters:
          Json Object: params
          function:    callback
        Return:
          Json results
      */
      search: function(params, callback) {
        var qstring = "";
        var subpath = basePath + "/items";

        if( params!= undefined && params != {} )
        {
          qstring = query.stringify(params);
          subpath += "?" + qstring;
        }

        var options= {
            host: host,
            port: 80,
            path: subpath,
            method: "GET"
        };

        request(options, callback)
      }
    },

    collections:{
      /*
        libcloud.collections.get

        Description:
          This will obtain a single collection
        Parameters:
          string:   ID
          function: Callback
        Return:
          JSON result
      */
      get: function(id, callback) {
        var qstring = "";
        var subpath = basePath + "/collections/" + id;

        var options= {
            host: host,
            port: 80,
            path: subpath,
            method: "GET"
        };

        request(options, callback)
      },
      /*
        libcloud.collections.search

        Description:
          Search for collections based on given criteria (q, filters, limit, start, etc)
        Parameters:
          Json Object: params
          function:    callback
        Return:
          Json results
      */
      search: function(params, callback) {
        var qstring = "";
        var subpath = basePath + "/collections";

        if( params!= undefined && params != {} )
        {
          qstring = query.stringify(params)
          subpath += "?" + qstring
        }

        var options= {
            host: host,
            port: 80,
            path: subpath,
            method: "GET"
        };

        request(options, callback)
      }
    }
  };

  var request = function(options, callback)
  {
    options.headers = {
                        "Accept": "application/json"
                      };
    http.request(options, function(res){
      var body = '';
      var json;
      var error;

      res.setEncoding('utf8');

      res.on('data', function(chunk) {
        body += chunk;
      });

      res.on('end', function() {

        try{
          json = JSON.parse(body);
        }
        catch(e){
          error = e;
        }

        return callback(error, json);
      });
    }).end()
  }
module.exports = libcloud;
