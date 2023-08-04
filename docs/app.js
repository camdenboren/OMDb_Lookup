/*
##########################################################################################################################
#  OMDb Lookup Widget                                                                                                    #
#                                                                                                                        #
#  Calls the backend worker to return and display the top result for given title and year inputs                         #
#                                                                                                                        #
#  Written by Camden Boren 8/3/2023                                                                                      #
#                                                                                                                        #
#  This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not     #
#  distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.                                       #
##########################################################################################################################
*/

function inputs() {
    let titleParam = document.getElementById("searchTitle").value;
    let yearParam = document.getElementById("searchYear").value;
    lookup(titleParam,yearParam);
}

async function lookup(titleParam, yearParam) {
    let url = 'https://omdb-lookup.boren-camden.workers.dev/?';
    let response = await fetch(url + new URLSearchParams({
        title: titleParam,
        year: yearParam
    }));
    let results = await response.json();
    outputs(results);
}

function outputs(results) {
    document.getElementById("title").innerHTML = "Title: " + results["Title"];
    document.getElementById("year").innerHTML = "Year: " + results["Year"];
    document.getElementById("director").innerHTML = "Director: " + results["Director"];
    document.getElementById("runtime").innerHTML = "Runtime: " + results["Runtime"];
    document.getElementById("ratings").innerHTML = "Ratings: " + results.Ratings[0].Value + ", " + results.Ratings[2].Value;
}