import { DOMSelectors } from "./DOM";
import {} from "./Function";

async function query() {
  try {
    const getData = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/11.8.1/data/en_US/champion.json"
    );
    const data = await getData.json();
    const championList = data.data;
    Object.keys(championList).forEach((champion) => {
      // Repeat until all champions are done
      const newBox = document.createElement("div");
      // First creates a new div element
      newBox.id = "box";
      // Makes its id box so it will be styled
      const championTitle = document.createTextNode(champion);
      // Creates a champion text for each champion depending on which index it is on
      newBox.appendChild(championTitle);
      // Adds the text to the new box
      newBox.style.backgroundImage = `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg)`;
      // Adds the background image by using url
      DOMSelectors.allChampionBox.appendChild(newBox);
      // Appends box to the main div
    });
    console.log(championList);
  } catch (error) {
    console.log(error);
    console.log("Something went wrong");
  }
}
query();
