//Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const container = document.querySelector(".games");

async function getGames() {
	try {
		const response = await fetch(url);

		const results = await response.json();

		const games = results.results;

		container.innerHTML = "";

		for (i = 0; i < games.length; i++) {
			if (i === 8) {
				break;
			}
			container.innerHTML += `<div class="games">${games[i].name} Rating: ${games[i].rating}</div>`;
		}
	} catch (error) {
		container.innerHTML = errorMessage("API error");
	}
}

getGames();
