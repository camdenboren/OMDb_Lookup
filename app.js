/*
##########################################################################################################################
#  OMDb Lookup Widget                                                                                                    #
#                                                                                                                        #
#  Uses the OMDb API to return the top result for given title and year inputs                                            #
#                                                                                                                        #
#  Written by Camden Boren 7/27/2023                                                                                     #
#                                                                                                                        #
#  This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not     #
#  distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.                                       #
##########################################################################################################################
*/

var apiKey = secrets.API_KEY;

function inputs() {
    let title = document.getElementById("searchTitle").value;
    let year = document.getElementById("searchYear").value;
    lookup(title,year);
}

async function lookup(title, year) {
    let url = 'http://www.omdbapi.com/?apikey=' + apiKey + '&t=' + title + '&y=' + year;
    let response = await fetch(url);
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