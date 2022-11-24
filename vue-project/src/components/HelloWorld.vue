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
//   img.src = 'https://image.tmdb.org/t/p/w500' + movieData['poster_path'];
 
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
        <h1>{{ response.original_title }}</h1>
        <p>{{ response.tagline }}</p>
        <p1>Release Date: {{ response.release_date }}</p1>
      </div>
</template>


<style scoped>

</style>
