/*
##########################################################################################################################
#  OMDb Lookup Widget                                                                                                    #
#                                                                                                                        #
#  Backend worker to serve OMDb_Lookup Widget requests                                                                   #
#                                                                                                                        #
#  Written by Camden Boren 8/4/2023                                                                                      #
#                                                                                                                        #
#  This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not     #
#  distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.                                       #
##########################################################################################################################
*/

export default {
    async fetch(request, env) {
      /* Read params from url and set base URL for API */
      const { searchParams } = new URL(request.url);
      let titleParam = searchParams.get('title');
      let yearParam = searchParams.get('year');
      let apiURL = 'http://www.omdbapi.com/?';
  
      /* API Fetch, passing params */
      let response = await fetch(apiURL + new URLSearchParams({
        apikey: env.API_KEY,
        t: titleParam,
        y: yearParam
      }));
      let results = await response.json();
  
      /* Return JSON response w/ formatting and CORS headers */
      const json = JSON.stringify(results, null, 2);
      return new Response(json, {
          headers: {
            "content-type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET",
          },
        });
    },
  };