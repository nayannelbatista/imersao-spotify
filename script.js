const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("result-playlists");

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
      .then((response) => response.json())
      .then((result) => displayResults(result));
}

function displayResults(result) {
    playlistContainer.classList.add("hidden");
    const artistName = document.getElementById("artist-name");
    const artistImage = document.getElementById("artist-img");
  
    result.forEach(element => {
      artistName.innerText = element.name;
      artistImage.src = element.urlImg;
    });
    resultArtist.classList.remove("hidden");
}
  

document.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === "") {
      playlistContainer.classList.remove("hidden");
      resultArtist.classList.add("hidden");
      return;
    }
    requestApi(searchTerm);
});

