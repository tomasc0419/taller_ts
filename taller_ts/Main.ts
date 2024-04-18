import { series } from './Data.js';

function calculateAverageSeasons(series: string | any[]) {
    let totalSeasons = 0;
    for (const serie of series) {
        totalSeasons += serie.seasons;
    }
    return totalSeasons / series.length;
}

window.onload = function() {

  const averageSeasons = calculateAverageSeasons(series);

  let tableHTML = '<table class="table"><thead class="thead-dark"><tr><th scope="col">#</th><th scope="col">Title</th><th scope="col">Network</th><th scope="col">Seasons</th></tr></thead><tbody>';

  for (const serie of series) {
    tableHTML += `<tr><th scope="row">${serie.id}</th><td>${serie.name}</td><td>${serie.channel}</td><td>${serie.seasons}</td></tr>`;
  }

  tableHTML += '</tbody></table>';
  tableHTML += `<p>The average number of seasons is ${averageSeasons.toFixed(2)}</p>`;
  document.body.innerHTML = tableHTML;
}
