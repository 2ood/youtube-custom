const params = new URLSearchParams(window.location.search);

query = params.get("q");

fetch(`https://www.youtube.com/results?search_query=${query}`,{
    method: 'GET',
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'omit', // include, *same-origin, omit
    }).then((resp)=>{
        console.log(resp);
        resp.text().then((data) => {
            console.log("data:" + data);
    });
  });
