import { DOMSelectors } from "./DOM";
import { alternatePage } from "./Function";

const query = async function () {
  try {
    const getData = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/11.8.1/data/en_US/champion.json"
    );
    const data = await getData.json();
  } catch (error) {
    console.log(error);
    console.log("Something went wrong");
  }
};
query();

function website() {
  DOMSelectors.iconButton.addEventListener("click", () => {
    alternatePageTransition();
  });
}
website();
