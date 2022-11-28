<script setup>
import { ref } from "vue";
import axios from "axios";
 
const Movies = ref ("");
const response = ref(null);
 
const getData = async (url, params) => {
try {
  return await axios.get(url, params);
} catch (error) {
  console.log(error);
}
};
 
const getMovies = async () => {
  response.value = (await getData(`https://api.themoviedb.org/3/movie/${Movies.value}`, {
    params: {
      api_key: "5ee6242bedc5de8c07acae66ee444042",
    }
  })).data;
}

// function callMovies(movieData) {
//   const original_title = document.createElement("h1");
//   original_title.innerHTML = movieData['original_title'];
 
//   const tagline = document.createElement("p");
//   tagline.innerHTML = movieData['tagline'];
 
//   const overview = document.createElement("p9");
//   overview.innerHTML = '<br>Overview:<br/> ' + movieData['overview'];
 
//   const img = document.createElement("img");
//   img.src = 'https://image.tmdb.org/t/p/w500' + response['poster_path'];
 
//   const release_date = document.createElement("p1");
//   release_date.innerHTML = 'Release Date: ' + movieData['release_date'];
 
//   const popularity = document.createElement("p2");
//   popularity.innerHTML = 'Popularity: ' + movieData['popularity'];
 
//   const runtime = document.createElement("p3");
//   runtime.innerHTML = 'Runtime: ' + movieData['runtime'] + ' minutes';
 
//   const budget = document.createElement("p4");
//   budget.innerHTML = 'Budget: ' + '$' + movieData['budget'] + ' &#8594';
 
//   const revenue = document.createElement("p5");
//   revenue.innerHTML = 'Revenue: ' + '$' + movieData['revenue'];
 
//   const vote_average = document.createElement("p6");
//   vote_average.innerHTML = 'Vote Average: ' + '&#10032 ' + movieData['vote_average'];
 
//   let genres = genre(movieData['genres']);
//   console.log(genres)
//   callgenres.innerHTML = 'Genres: ' + genres;
//   console.log(movieData['poster_path'])
// }
//function genre(genresArray) {
//  let callgenres = ""
//  for (i = 0; i < genresArray.length; i++) {
//    let genre = genres[genresArray[i].id]
//    callgenres = callgenres + (genre + ' ,')
//  }
//  let result = callgenres.slice(0, callgenres.length - 1)
//  return result
//}
//const genres = {
//  35: 'Comedy',
//  80: 'Crime',
//  10749: 'Romance',
//  18: 'Drama',
//  28: 'Action',
//};
 
getMovies()
 
</script>

<template>
  <div id="myDIV">
    <h2>Movie Library &#127916</h2>
    <label for="Movies">Select A Movie. </label>
    <br>
    <p>Then, click the "Get" button to recieve more info.</p>
    <br>
    <select v-model="Movies">
      <option value="10634">Friday</option>
      <option value="10471">Next Friday</option>
      <option value="10426">Friday After Next</option>
      <option value="12153">White Chicks</option>
      <option value="4951">10 Things I Hate About You</option>
      <option value="8363">Superbad</option>
      <option value="9072">Little Man</option>
      <option value="4247">Scary Movie</option>
      <option value="10625">Mean Girls</option>
      <option value="64688">21 Jump Street</option>
    </select>
    <button @click="getMovies">Get</button>
    <div v-if="response" class="Movies">
      <h1>{{response.original_title}}</h1>
      <p1>{{response.tagline}}</p1>
      <br>
      <p2>Overview: <br>{{response.overview}}</p2>
      <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + response.poster_path">
      <p3>Release Date: {{response.release_date}}</p3>
      <p4>Popularity: {{response.popularity}}</p4>
      <p5>Runtime: {{response.runtime}} Minutes</p5>
      <p6>Budget: ${{response.budget}} &#8594</p6>
      <p7>Revenue: ${{response.revenue}}</p7>
      <p8>Vote average: &#10032{{response.vote_average}}</p8>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Atma&family=Cinzel:wght@500&family=Henny+Penny&display=swap");

div {
  background-color: lightgray;
  margin: 0px;
  margin-top: -50px;
  height: 1020px;
}

div h2{
  text-align: center;
  font-family: 'Cinzel', serif;
  font-size: 45px;
  margin-top:50px;
  margin-left: 30px;
  color:dimgrey;
}

label{
  padding-left: 520px;
  padding-top: 50px;
  font-size: 25px;
  text-align: center;
  font-family: 'Cinzel', serif;
  color: dimgrey;
}

p{
  padding-left: 400px;
  color: dimgrey;
  font-family: 'Cinzel', serif;
  font-size: 17px;
}

select{ 
  margin-left: 470px;
  margin-bottom: 300px;
  font-size: 20px;
  font-family: 'Libre Bodoni', serif;
}

button{
  margin-left: 5px;
  font-size: 20px;
  font-family: 'Libre Bodoni', serif;
}

h1{
  margin-top: -225px;
  margin-left: 20px;
  font-size: 60px;
  color: dimgrey;
  font-family: 'Henny Penny', cursive;
}

p1{
  color:dimgrey;
  font-size: 25px;
  margin-left: 15px;
  margin-top: -30px;
  font-family: 'Atma', cursive;
}

p2{
  float: right;
  /*margin-left: 600px;
  margin-top: -50px;*/
  color:dimgrey;
  font-family: 'Atma', cursive;
  font-size: 23px;
  margin-top: 50px;
  margin-left: 580px;
  /*position: absolute; top: 580px; left: 590px;*/
}

img{
  position:absolute; top:160px; left:20px;
  /*margin-left: 20px;
  margin-top: -130px;*/
  border: dimgrey solid 20px;
  border-radius: 10px;
}

p3{
  margin-right: 400px;
  margin-top: 150px;
  float: right;
  font-size: 20px;
  color:dimgrey;
  font-size: 22px;
  font-family: 'Cinzel', serif;
  font-weight: 600;
}

p4{
  float: right;
  margin-right: -570px;
  margin-top: 153px;
  /*padding-top: 50px;*/
  font-size: 22px;
  color: dimgrey;
  font-family: 'Cinzel', serif;
  font-weight: 700;
}

p5{
  float: right;
  padding-right: 430px;
  padding-top: 450px;
  margin-top: -405px;
  font-size: 22px;
  color: dimgrey;
  font-family: 'Cinzel', serif;
  font-weight: 700;
}


p6{
  float: right;
  margin-right: 405px;
  margin-top: 50px;
  padding: 10px;
  font-size:22px;
  color: whitesmoke;
  font-family: 'Cinzel', serif;
  font-weight: 700;
  background-color: dimgray;
  border-radius: 300px;
}

p7{
  float: right;
  margin-right: -570px;
  margin-top: 50px;
  padding: 10px;
  font-size:22px;
  color: whitesmoke;
  font-family: 'Cinzel', serif;
  font-weight: 700;
  background-color: dimgray;
  border-radius: 300px;
}

p8{
  float: right;
  margin-right: -580px;
  /*padding-top: 550px;*/
  margin-top: -35px;
  font-size:22px;
  color: dimgrey;
  font-family: 'Cinzel', serif;
  font-weight: 700;
}
</style>
