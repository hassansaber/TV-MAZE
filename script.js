const getData = async () => {
  try {
    const response = await fetch("https://api.tvmaze.com/shows/82/episodes");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("not found...", error);
  }
};
getData().then((data) => {
  episodeData(data);
});

const section = document.querySelector("#section");

//function Card Maker
const episodeData = (data) => {
  data.map((episode) => {
    const article = document.createElement("article");
    //img
    const img = document.createElement("img");
    img.setAttribute("src", episode.image.medium);
    // run time
    const p = document.createElement("p");
    p.innerText = `Run Time ${episode.runtime}`;
    //link $ seoson
    const a = document.createElement("a");
    a.setAttribute("href", episode.url);
    // seoson
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
    article.append(img, p, a, details);
    //add article to section
    section.append(article);
  });
};
