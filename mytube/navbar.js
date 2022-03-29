buildSearchbar();
buildHome();


function buildHome() {
  const home = document.querySelector("nav home:first-of-type");
  home.innerHTML = `<a href="index.html">MyTube</a>`;
}

function buildSearchbar() {
  searchbars = document.getElementsByTagName("searchbar");
  for(s of searchbars) {
    s.appendChild(buildSearchInput());
    s.appendChild(buildSearchButton());
  }
}

function buildSearchInput() {
  const result = document.createElement("input");
  result.type="text";
  result.placeholder = "search";

  result.addEventListener("keydown",(e)=>{
    if (e.keyCode =="Enter") {
      e.srcElement.parentNode.querySelector("button").click();
    }
  });

  return result;
}

function buildSearchButton() {
  const result = document.createElement("button");
  result.type="submit";
  result.innerHTML = `<span class="material-icons">search</span>`;
  result.addEventListener("click",handleSearch);

  return result;
}

function handleSearch(evt) {
  const searchbar = evt.srcElement.parentNode;
  const input = searchbar.querySelector("input:first-of-type");

  window.location.href=`list.html?q=${input.value}`;
}
