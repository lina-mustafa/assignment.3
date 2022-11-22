<script setup>
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

</script>

<template>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./script.js" defer></script>
    <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Bodoni&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Henny+Penny&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Atma&display=swap" rel="stylesheet">  
</head>

<body>
    <div id="myDIV">
    <h2>Movie Library &#127916</h2>
    <label for="Movies">Select A Movie. </label>
    <br></br>
    <p7>Then, click the "Get" button to recieve more info.</p7>
    <br></br>
    <select name="Movies" id="Movies">
    <option value="10634">Friday</option>
    <option value="10471">Next Friday</option>
    <option value="10426">Friday After Next</option>
    <option value="12153">White Chicks</option>
    <option value="4951">10 Things I Hate About You</option>
    <option value="8363">Superbad</option>
    <option value="9072">Little Man</option>
    <option value="4247">Scary Movie</option>
    <option value="10625">Mean Girls</option>
    <option value="21 Jump Street">21 Jump Street</option>
    </select>
    <!--<input id=get type="button" value="Get">-->
    <button id="get" onclick="myFunction()">Get</button>
    <div id="div1"></div>
    </div>
</body>
</template>

<style scoped>
body{
    margin: 0px;
    overflow-x: hidden;
}

.myDIV{
    background-repeat: no-repeat;
    margin-bottom: 0px;
}


h1{
    margin-top: -225px;
    margin-left: 20px;
    font-size: 60px;
    color: antiquewhite;
    font-family: 'Henny Penny', cursive;
}

h2{
    text-align: center;
    font-family: 'Cinzel', serif;
    font-size: 45px;
    padding-top: 160px;
    margin-top:-20px;
    padding-bottom: 10px;
    color:dimgrey;
}

p{
    color:whitesmoke;
    font-size: 25px;
    margin-left: 15px;
    margin-top: -40px;
    padding-bottom: 0px;
    font-family: 'Atma', cursive;
}

p1{
    margin-right: 420px;
    margin-top: 380px;
    float: right;
    font-size: 20px;
    color: rgb(49, 48, 48);
    font-size: 22px;
    font-family: 'Cinzel', serif;
    font-weight: 700;
}


p2{
    float: right;
    margin-right: 115px;
    margin-top: -455px;
    padding-top: 50px;
    font-size: 22px;
    color: rgb(49, 48, 48);
    font-family: 'Cinzel', serif;
    font-weight: 700;
}

p3{
    float: right;
    padding-right: 430px;
    padding-top: 100px;
    margin-top: -405px;
    font-size: 22px;
    color: rgb(90, 86, 86);
    font-family: 'Cinzel', serif;
    font-weight: 700;
}

p4{
    float: right;
    margin-right: 430px;
    margin-top: -135px;
    padding: 10px;
    font-size:22px;
    color: whitesmoke;
    font-family: 'Cinzel', serif;
    font-weight: 700;
    background-color: dimgray;
    border-radius: 300px;
}

p5{
    float: right;
    margin-right: 120px;
    margin-top: -135px;
    padding: 10px;
    font-size:22px;
    color: whitesmoke;
    font-family: 'Cinzel', serif;
    font-weight: 700;
    background-color: dimgray;
    border-radius: 300px;
}

p6{
    float: right;
    padding-right: 105px;
    padding-top: 200px;
    margin-top: -505px;
    font-size:22px;
    color: rgb(90, 86, 86);
    font-family: 'Cinzel', serif;
    font-weight: 700;
}

select{ 
    margin-left: 460px;
    margin-bottom: 300px;
    font-size: 20px;
    font-family: 'Libre Bodoni', serif;
}

button{
    margin-left: 5px;
    font-size: 20px;
    font-family: 'Libre Bodoni', serif;
}

label{
    padding-left: 520px;
    padding-top: 50px;
    font-size: 25px;
    text-align: center;
    font-family: 'Cinzel', serif;
    color: dimgrey;
}

p7{
    padding-left: 400px;
    color: dimgrey;
    font-family: 'Cinzel', serif;
    font-size: 17px;
}

p8{
    float: right;
    margin-right: 290px;
    margin-top: -225px;
    font-size: 22px;
    color: rgb(231, 226, 226);
    font-family: 'Cinzel', serif;
    font-weight: 700;
    position: absolute; bottom: -340px; right: -10px;
}

p9{
    float: right;
    /*margin-left: 600px;
    margin-top: -50px;*/
    color:whitesmoke;
    font-family: 'Atma', cursive;
    font-size: 23px;
    position: absolute; top: 580px; left: 590px;
}

img{
    margin-left: 20px;
    margin-top: -10px;
    border: rgb(211, 201, 194) solid 20px;
    border-radius: 10px;
}

</style>
