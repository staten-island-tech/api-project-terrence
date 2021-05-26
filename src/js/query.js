import { DOMSelectors, allChampions } from "./DOM";

async function query() {
  try {
    const getData = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/11.8.1/data/en_US/champion.json"
    );
    const data = await getData.json();
    const list = data.data;
    const newList = Object.keys(list);
    // Creates new array from data
    const pretty = newList.splice(75, 1)[0];
    newList.splice(141, 0, pretty);
    // QOL change because some champions weren't in alphabetical order
    newList.forEach((champion) => {
      // Repeat until all champions are done
      allChampions.push(list[champion].name.toLowerCase());
      // Pushes champion to array
      const newBox = document.createElement("div");
      newBox.id = "box";
      newBox.className += `${list[champion].name.toLowerCase()}`;
      newBox.style.backgroundImage = `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg)`;
      newBox.setAttribute("alt", `${champion} picture`);
      // Creates new box based on champion
      const element = document.createElement("h1");
      newBox.appendChild(element);
      element.id = "championTitle";
      element.innerText = `${list[champion].name}`;
      // Creates h1 element to house champion title
      const anotherElement = document.createElement("h2");
      anotherElement.id = "class";
      const championClass = list[champion].tags;
      championClass.forEach((tag, index) => {
        if (index < championClass.length - 1) {
          anotherElement.innerText += `${tag}, `;
        } else if (index === championClass.length - 1) {
          anotherElement.innerText += `${tag}`;
        }
      });
      newBox.appendChild(anotherElement);
      // Creates h2 element to house champion classes
      DOMSelectors.allChampionBox.appendChild(newBox);
      // Appends box to the main div
    });
  } catch (error) {
    console.log(error);
    console.log("Something went wrong");
  }
}
export { query };
