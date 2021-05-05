// const hi = "EHEN";
// function Ejs(input) {
//   const convert = input.toLowerCase();
//   if (convert === "ehen") {
//     console.log("yep");
//   } else {
//     console.log("nope");
//   }
// }

// Ejs(hi);
import { DOMSelectors } from "./DOM";

function alternatePageTransition() {
  DOMSelectors.introPage.style.display = "none";
  DOMSelectors.listPage.style.display = "flex";
}

export { alternatePage };
