const getData = async () => {
  try {
    const response = await fetch("https://api.tvmaze.com/shows/82/episodes");
    const data = await response.json();
    console.log(data);
    episodeData(data);
  } catch (error) {
    throw new Error("not found...", error);
  }
};
getData();
const section = document.querySelector("#section");

//function
const episodeData = (data) => {
  const api = data;
  api.map((episode) => {
    const article = document.createElement("article");
    console.log(episode.image.medium);
    const img = document.createElement("img");
    img.setAttribute(src, episode.image.medium);

    article.append(img);
    section.append(article);
  });
};

/* <article class="card">
  <img
    src="https://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg"
    alt=""
    srcset=""
  />
  <p class="runTime">run time 60</p>
  <a href="https://www.tvmaze.com/episodes/4952/game-of-thrones-1x01-winter-is-coming">
    <span class="episodeName">S01 - Episode 1</span>
  </a>
  <details>
    <summary>story line</summary>
    <p>
      Lord Eddard Stark, ruler of the North, is summoned to court by his old
      friend, King Robert Baratheon, to serve as the King's Hand. Eddard
      reluctantly agrees after learning of a possible threat to the King's life.
      Eddard's bastard son Jon Snow must make a painful decision about his own
      future, while in the distant east Viserys Targaryen plots to reclaim his
      father's throne, usurped by Robert, by selling his sister in marriage.
    </p>
  </details>
</article>; */
