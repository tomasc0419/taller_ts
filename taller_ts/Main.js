import { series } from './Data.js';
function calculateAverageSeasons(series) {
    var totalSeasons = 0;
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        totalSeasons += serie.seasons;
    }
    return totalSeasons / series.length;
}
window.onload = function () {
    var averageSeasons = calculateAverageSeasons(series);
    var tableHTML = '<table class="table"><thead class="thead-dark"><tr><th scope="col">#</th><th scope="col">Title</th><th scope="col">Network</th><th scope="col">Seasons</th></tr></thead><tbody>';
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        tableHTML += "<tr><th scope=\"row\">".concat(serie.id, "</th><td>").concat(serie.name, "</td><td>").concat(serie.channel, "</td><td>").concat(serie.seasons, "</td></tr>");
    }
    tableHTML += '</tbody></table>';
    tableHTML += "<p>The average number of seasons is ".concat(averageSeasons.toFixed(2), "</p>");
    document.body.innerHTML = tableHTML;
};
