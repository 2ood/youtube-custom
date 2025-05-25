
/*
let resp = httpGet(`https://www.googleapis.com/youtube/v3/search?key=${key}&maxResults=25&videoEmbeddable=true&type=video&relatedToVideoId=Y4jJce6TiOk`);
console.log(resp);
const json = JSON.parse(resp);
const items = json.items;

const i = document.getElementById("main-video");
i.setAttribute("allow",`accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture`);
i.setAttribute("allowfullscreen","true");
i.src=`https://www.youtube.com/embed/${items[24].id.videoId}`;
*/
let res = 'GET https://www.googleapis.com/youtube/v3/videos';
/*
https://youtu.be/onfRKtDAyls
<iframe width="1832" height="811" src="https://www.youtube.com/embed/onfRKtDAyls" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/
