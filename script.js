const getData = async () => {
  try {
    const response = await fetch("https://api.tvmaze.com/shows/82/episodes");
    const data = await response.json();
    episodeData(data);
  } catch (error) {
    throw new Error("not found...", error);
  }
};
getData();

const episodeData = (data) => {
  data.forEach((episode) => {
    console.log(episode);
  });
};
