import { DOMSelectors } from "./DOM";
import {} from "./Function";

const query = async function () {
  try {
    const getData = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/11.8.1/data/en_US/champion.json"
    );
    const data = await getData.json();
    const championList = data.data;
    Object.keys(championList).forEach((champion, index) => {
      DOMSelectors.championBox.innerHTML += `${champion}, `;
    });
  } catch (error) {
    console.log(error);
    console.log("Something went wrong");
  }
};
query();
