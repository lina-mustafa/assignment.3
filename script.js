const getData = async (url, params) => {
  try {
    return await axios.get(url, params);
  } catch (error) {
    console.log(error);
  }
};

get.addEventListener('click', async (_event) => {
  selectElement = document.querySelector('#Movies');
  output = selectElement.options[selectElement.selectedIndex].value;
  const moveData = await getMovies(output)
  console.log(moveData)
  callMovies(moveData)
});

const getMovies = async (output) => {
  const movieData = await getData(`https://api.themoviedb.org/3/movie/${output}`, {
    params: {
      api_key: "5ee6242bedc5de8c07acae66ee444042",
    }
  });
  return movieData.data;
}

function callMovies(movieData) {
  document.getElementById('div1').innerHTML = "";

  const original_title = document.createElement("h1");
  original_title.innerHTML = movieData['original_title'];
  document.getElementById('div1').appendChild(original_title);

  const tagline = document.createElement("p");
  tagline.innerHTML = movieData['tagline'];
  document.getElementById('div1').appendChild(tagline);

  const overview = document.createElement("p9");
  overview.innerHTML = '<br>Overview:<br/> ' + movieData['overview'];
  document.getElementById('div1').appendChild(overview);

  const img = document.createElement("img");
  img.src = 'https://image.tmdb.org/t/p/w500' + movieData['poster_path'];
  document.getElementById('div1').appendChild(img);

  const release_date = document.createElement("p1");
  release_date.innerHTML = 'Release Date: ' + movieData['release_date'];
  document.getElementById('div1').appendChild(release_date);

  const popularity = document.createElement("p2");
  popularity.innerHTML = 'Popularity: ' + movieData['popularity'];
  document.getElementById('div1').appendChild(popularity);

  const runtime = document.createElement("p3");
  runtime.innerHTML = 'Runtime: ' + movieData['runtime'] + ' minutes';
  document.getElementById('div1').appendChild(runtime);

  const budget = document.createElement("p4");
  budget.innerHTML = 'Budget: ' + '$' + movieData['budget'] + ' &#8594';
  document.getElementById('div1').appendChild(budget);

  const revenue = document.createElement("p5");
  revenue.innerHTML = 'Revenue: ' + '$' + movieData['revenue'];
  document.getElementById('div1').appendChild(revenue);

  const vote_average = document.createElement("p6");
  vote_average.innerHTML = 'Vote Average: ' + '&#10032 ' + movieData['vote_average'];
  document.getElementById('div1').appendChild(vote_average);

  let genres = genre(movieData['genres']);
  console.log(genres)
  const callgenres = document.createElement("p8");
  callgenres.innerHTML = 'Genres: ' + genres;
  //callgenres.setAttribute('id', 'genres');
  document.getElementById('div1').appendChild(callgenres);

  console.log(movieData['poster_path'])
}

function genre(genresArray) {
  let callgenres = ""
  for (i = 0; i < genresArray.length; i++) {
    let genre = genres[genresArray[i].id]
    callgenres = callgenres + (genre + ' ,')

  }

  let result = callgenres.slice(0, callgenres.length - 1)
  return result
}

const genres = {
  35: 'Comedy',
  80: 'Crime',
  10749: 'Romance',
  18: 'Drama',
  28: 'Action',
};

getMovies1();
getMovies2();
getMovies3();
getMovies4();
getMovies5();
getMovies6();
getMovies7();
getMovies8();
getMovies9();
getMovies10();
