window.addEventListener("DOMContentLoaded", getData);

const endpoint =
  "https://tripoli.dk/Cph-cartel-backend/wp-json/wp/v2/product?_embed";

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(handleData);
}

function handleData(posts) {
  console.log("what", posts);
  posts.forEach(showbikini); //looping through all bikinis
}

function showbikini(bikini) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector("a").href += bikini.id;
  copy.querySelector("h2").textContent = bikini.title.rendered;
  copy.querySelector("h3").textContent = bikini.description_;
  copy.querySelector("img").src =
    bikini._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;

  const colorArray = [];
  console.log(bikini.colors);
  const ulEl = copy.querySelector("ul");
  bikini.colors.forEach((color) => {
    console.log(color);
    const liEl = document.createElement("li");
    liEl.style.background = color;
    ulEl.appendChild(liEl);
  });

  document.querySelector("main").appendChild(copy);
}
