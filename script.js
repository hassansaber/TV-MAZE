// API
const getData = async () => {
  try {
    const response = await fetch("https://api.tvmaze.com/shows/82/episodes");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("not found...", error);
  }
};
getData().then((data) => {
  selectMaker(data);
});

// SELECT EPISODE
function selectMaker(data) {
  const select = document.querySelector("select");
  //default select
  const cOption = document.createElement("option");
  cOption.innerText = "all episodes";
  cOption.setAttribute("value", 0);
  select.append(cOption);
  //episodes
  data.map((episode) => {
    const ccOption = document.createElement("option");
    ccOption.innerText = `S${episode.season} E${episode.number}  ${episode.name}`;
    ccOption.setAttribute("value", episode.id);
    select.append(ccOption);
  });
  //default select
  select.options[0].selected = true;
  cardMaker(data);
  //change
  select.addEventListener("change", () => {
    data.map((e) => {
      if (e.id == select.value) {
        cardMaker([e]);
      }
      if (select.value == 0) {
        cardMaker(data);
      }
    });
  });

  //LIVE search
  const search = document.querySelector("#episode-search");
  search.addEventListener("input", (e) => {
    const ser = e.target.value.toLowerCase().trim();
    const data2 = data.filter((ep) => {
      return (
        ep.name.toLowerCase().includes(ser) ||
        ep.summary.toLowerCase().includes(ser)
      );
    });
    cardMaker(data2);
  });
}

// CARD MAKER
const cardMaker = (data) => {
  const section = document.querySelector("#section");
  section.innerHTML = "";
  data.map((episode) => {
    const article = document.createElement("article");
    //img
    const img = document.createElement("img");
    img.setAttribute("src", episode.image.medium);
    //name
    const name = document.createElement("h4");
    name.innerText = episode.name;
    // run time
    const p = document.createElement("p");
    p.innerText = `Run Time ${episode.runtime}`;
    //link $ season
    const a = document.createElement("a");
    a.setAttribute("href", episode.url);
    // season
    const span = document.createElement("span");
    span.innerText = `S${episode.season} E${episode.number}`;
    a.append(span);
    // Details
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.innerText = "Episode Story";
    const p2 = document.createElement("p");
    p2.innerText = episode.summary;
    details.append(summary, p2);
    //add elements to article
    article.append(img, name, p, a, details);
    //add article to section
    section.append(article);
  });
};
