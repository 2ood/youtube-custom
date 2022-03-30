const params = new URLSearchParams(window.location.search);

query = params.get("q");

let response =  fetch(`https://www.youtube.com/results?search_query=${query}`,{
    method: 'GET',
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'text/html'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }}).then()

console.log(response);
