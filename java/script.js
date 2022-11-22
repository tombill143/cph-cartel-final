window.addEventListener("DOMContentLoaded", getData);

const endpoint =
  "https://tripoli.dk/Cph-cartel-backend/wp-json/wp/v2/product?_embed";

function getData() {
  //console.log('DOM fully loaded and parsed');
  //"our routing in the script"
  /*   if (the_bikini_id) {
    console.log("++the_bikini_id");
    fetch(
      "https://tripoli.dk/Cph-cartel-backend/wp-json/wp/v2/product/" +
        the_bikini_id +
        "?_embed"
    )
      .then((res) => res.json())
      .then(showbikini); //skipping the forEach loop
  } else {
    console.log("no the_bikini_id"); */
  fetch(endpoint)
    .then((res) => res.json())
    .then(handleData);
}
// }

function handleData(posts) {
  console.log("what", posts);
  posts.forEach(showbikini); //looping through all bikinis
}

function showbikini(bikini) {
  // console.log(bikini);
  // console.log(bikini.content.rendered);
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector("a").href += bikini.id;
  copy.querySelector("h2").textContent = bikini.title.rendered;
  copy.querySelector("h3").textContent = bikini.description_;
  copy.querySelector("img").src =
    bikini._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
  /*   console.log(
    bikini._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url
  ); */

  //console.log(bikini._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url)

  //lacj: copy.querySelector(".brand").textContent = bikinis.brand;

  /*  copy.querySelector(".brand").textContent =
    bikini._embedded["wp:term"][0][1].name; */
  //  console.log('hey')
  //  console.log(bikinis._embedded["wp:term"]);

  //lacj: copy.querySelector(".model").textContent = bikinis.model;
  /* copy.querySelector(".model").textContent = bikini.title.rendered;
  copy.querySelector(".price").textContent = bikini.price;
  copy.querySelector(".toPrice").textContent = bikini.price_to; */

  //    copy.querySelector(".colour").textContent = bikinis.colours;

  /* copy.querySelector(".inStock").textContent = bikini.in_stock; */

  /*   copy.querySelector(".img-bikini").src =
    bikini._embedded[
      "wp:featuredmedia"
    ][0].media_details.sizes.medium.source_url; */
  /* copy.querySelector(".img-bikini").alt = bikini.brand; */

  /*   if (bikini.price_to == false) {
    copy.querySelector(".twoPrices").classList.add("hide");
  } */
  // const colorArray = bikini.colours.split(",");
  /*   const colorArray = []; */
  const colorArray = [];
  console.log(bikini.colors);
  const ulEl = copy.querySelector("ul");
  bikini.colors.forEach((color) => {
    console.log(color);
    const liEl = document.createElement("li");
    liEl.style.background = color;
    ulEl.appendChild(liEl);
  });
  // alert("hey");
  /*console.log(bikini._embedded["wp:term"][1]);
  bikini._embedded["wp:term"][1].forEach((element) => {
    colorArray.push(element.name);
  });
  console.log(colorArray);

  colorArray.forEach((color) => {
    const col = document.createElement("div");
    col.classList.add("colourDiv");
    col.style.background = color;
    copy.querySelector(".colour").appendChild(col);
  }); */

  /*   if (bikini.colours == false) {
    copy.querySelector(".colour").textContent = "N/A";
  }

  const a = copy.querySelector("a");
  if (a) {
    a.href += bikini.id;
  } */
  /*takes the existing string value from the ahref attr.and adds the bikini.id from JSON to it*/

  //Perhaps add description on single-bikinii page?

  //  a.addEventListener('click', function (e) {
  //    e.preventDefault();
  //  });

  document.querySelector("main").appendChild(copy);
}
