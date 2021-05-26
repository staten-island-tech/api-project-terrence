import { DOMSelectors, allChampions } from "./DOM";

function searchFilter() {
  DOMSelectors.searchBar.addEventListener("keyup", function change() {
    // Run whenever it detects a key is pressed
    DOMSelectors.allChampionBox.style.justifyContent = "flex-start";
    // Just to look better
    const userInput = DOMSelectors.searchBar.value.toLowerCase();
    // Makes all user answers lowercase so it can be equal
    allChampions.filter((champion) => {
      // Repeat until all champions are done
      const chimpBox = document.getElementsByClassName(`${champion}`)[0];
      console.log(chimpBox);
      // Creates reusable DOM
      if (champion.includes(userInput)) {
        chimpBox.style.display = "flex";
        // If user input is included in a champion, display box
      } else {
        chimpBox.style.display = "none";
        // Else disappear
      }
    });
  });
}

export { searchFilter };
