const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
// initialising the elements
const main = document.getElementById("main");
const search = document.getElementById("search");
const form = document.getElementById("form");







  getMovies(APIURL)
  async function getMovies(url)
  {
      const resp = await fetch(url);
      const respData = await resp.json();
      console.log(respData);
    showData(respData.results)
  }
  function showData(movies)
  {
      
main.innerHTML = " ";
    movies.forEach((movie) =>{
        const poster_path = movie.poster_path;
        const title = movie.title;
        const vote_average = movie.vote_average;
        const language = movie.original_language;
        const release_date = movie.release_date;
        const overview = movie.overview;
        // const img = document.createElement("img");
        // img.src = IMGPATH + movie.poster_path;
        // document.body.appendChild(img);
        const movieEl = document.createElement("div");
        movieEl.classList.add("movies");
        movieEl.innerHTML = `
        <img src="${IMGPATH+poster_path}" alt="">
        <div class="movies-info">
            <h3>${title} (${language})</h3>
            <span class=${getRating(vote_average)}>${vote_average}</span>
            
        </div>
        <div class="date">
            <p>Release Date: ${release_date}</p>
        </div>
        <div class="overview">
        <h4> Overview: </h4>

            ${overview}
        </div>

    `;
    main.appendChild(movieEl);
    })
      
  }

function getRating(votes){
    if(votes >= 8)
    {
        return 'green'
    }
    else if(votes >= 5)
    {
        return 'orange';
    }
    else{
        return 'red';
    }

}






  form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const searchTerm  = search.value;
      if(searchTerm){
          getMovies(SEARCHAPI+searchTerm);
          search.value = ' ';
          //making placeholder empty after search
      }
  })
