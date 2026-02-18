const containerEl = document.querySelector(".container");

const careers = ["YouTube", "Web Developer", "Freelancer", "Instructor"];
containerEl.innerHTML = `<h1>I am a youtuber</h1>`;
let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  containerEl.innerHTML = `<h1>I am a ${careers[careerIndex].slice(0, characterIndex)}</h1>`;
  characterIndex++;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  setTimeout(updateText, 400);
}
