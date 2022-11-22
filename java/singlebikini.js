const urlParams = new URLSearchParams(window.location.search);
console.log("URLSearchParams " + window.location);
const the_bikini_id = urlParams.get("bikini_id"); //getting the id from the URL
console.log(the_bikini_id);
