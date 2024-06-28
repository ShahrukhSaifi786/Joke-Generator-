let jokeContainer = document.getElementById("joke");
let btn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
btn.addEventListener("click", () => {
  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      jokeContainer.innerHTML = data.joke;
    });
});
