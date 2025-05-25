
class YoutubeAccount{
  constructor(name, list) {
      this.name = name;
      this.list = list;
  }

  has(param) {
    return this.list.includes(param);
  }

  list_length() {
    return this.list.length;
  }
}

const lists = {
  "coder-time" : ["Computer programming", "AI", "Javascript"],
  "coffee-time" : ["Coffee","Espresso","Drip coffee"],
  "music-time" : ["Guitar","Music","Acoustic Guitar","Rhythm & Blues","Playlists","Soundtracks",],
  "KYUNGMIN CHOI" : ["Music"]
};

setTimeout(()=>{
  const button = document.getElementById("avatar-btn");
  button.click();
},1500);

setTimeout(()=>{
  const account_dom = document.querySelector("ytd-popup-container #channel-container #account-name");
  const list = document.querySelectorAll("iron-selector yt-chip-cloud-chip-renderer yt-formatted-string");

  const name = account_dom.innerHTML;
  const account =  new YoutubeAccount(name,lists[name]);

  const length = account.list_length();

  for(let i = 0;i<list.length;i++) {
    if(account.has(list[i].innerHTML)) {
      list[i].click();
      break;
    }
  }
},2000);
