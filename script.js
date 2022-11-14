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
    if (output == 'Friday') {
      const moveData = await getMovies1()
      console.log(moveData)
      callMovies(moveData)
    }
    if (output == 'Next Friday') {
      const moveData = await getMovies2()
      console.log(moveData)
      callMovies(moveData)
    }
    if (output == 'Friday After Next') {
      const moveData = await getMovies3()
      console.log(moveData)
      callMovies(moveData)
    }
    if (output == 'White Chicks') {
      const moveData = await getMovies4()
      console.log(moveData)
      callMovies(moveData)
    }
    if (output == '10 Things I Hate About You') {
      const moveData = await getMovies5()
      console.log(moveData)
      callMovies(moveData)
    }
    if (output == 'Superbad') {
      const moveData = await getMovies6()
      console.log(moveData)
      callMovies(moveData)
    }
    if (output == 'Little Man') {
      const moveData = await getMovies7()
      console.log(moveData)
      callMovies(moveData)
    }
    if (output == 'Scary Movie') {
      const moveData = await getMovies8()
      console.log(moveData)
      callMovies(moveData)
    }
    if (output == 'Mean Girls') {
      const moveData = await getMovies9()
      console.log(moveData)
      callMovies(moveData)
    }
    if (output == '21 Jump Street') {
      const moveData = await getMovies10()
      console.log(moveData)
      callMovies(moveData)
    }
  });
  
  const getMovies1 = async () => {
    const movieData = await getData("https://api.themoviedb.org/3/movie/10634", {
      params: {
        api_key: "5ee6242bedc5de8c07acae66ee444042",
        query: "Friday",
      }
    });
    return movieData.data;
  }
  
  
  const getMovies2 = async () => {
    const movieData = await getData("https://api.themoviedb.org/3/movie/10471", {
      params: {
        api_key: "5ee6242bedc5de8c07acae66ee444042",
        query: "Next Friday",
      }
    });
    return movieData.data;
  }
  
  const getMovies3 = async () => {
    const movieData = await getData("https://api.themoviedb.org/3/movie/10426", {
      params: {
        api_key: "5ee6242bedc5de8c07acae66ee444042",
        query: "Friday After Next",
      }
    });
    return movieData.data;
  }
  
  const getMovies4 = async () => {
    const movieData = await getData("https://api.themoviedb.org/3/movie/12153", {
      params: {
        api_key: "5ee6242bedc5de8c07acae66ee444042",
        query: "White Chicks",
      }
    });
    return movieData.data;
  }
  
  const getMovies5 = async () => {
    const movieData = await getData("https://api.themoviedb.org/3/movie/4951", {
      params: {
        api_key: "5ee6242bedc5de8c07acae66ee444042",
        query: "10 Things I Hate About You",
      }
    });
    return movieData.data;
  }
  
  const getMovies6 = async () => {
    const movieData = await getData("https://api.themoviedb.org/3/movie/8363", {
      params: {
        api_key: "5ee6242bedc5de8c07acae66ee444042",
        query: "Superbad",
      }
    });
    return movieData.data;
  }
  
  const getMovies7 = async () => {
    const movieData = await getData("https://api.themoviedb.org/3/movie/9072", {
      params: {
        api_key: "5ee6242bedc5de8c07acae66ee444042",
        query: "Little Man",
      }
    });
    return movieData.data;
  }
  
  const getMovies8 = async () => {
    const movieData = await getData("https://api.themoviedb.org/3/movie/4247", {
      params: {
        api_key: "5ee6242bedc5de8c07acae66ee444042",
        query: "Scary Movie",
      }
    });
    return movieData.data;
  }
  
  const getMovies9 = async () => {
    const movieData = await getData("https://api.themoviedb.org/3/movie/10625", {
      params: {
        api_key: "5ee6242bedc5de8c07acae66ee444042",
        query: "Mean Girls",
      }
    });
    return movieData.data;
  }
  
  const getMovies10 = async () => {
    const movieData = await getData("https://api.themoviedb.org/3/movie/64688", {
      params: {
        api_key: "5ee6242bedc5de8c07acae66ee444042",
        query: "21 Jump Street",
      }
    });
    return movieData.data;
  }
  
  
  function callMovies(movieData) {
    document.getElementById('div1').innerHTML = "";
  
    const original_title = document.createElement ("h1");
    original_title.innerHTML = movieData['original_title'];
    document.getElementById('div1').appendChild(original_title);
  
    const tagline = document.createElement ("p");
    tagline.innerHTML = movieData['tagline'];
    document.getElementById('div1').appendChild(tagline);
    
    const overview = document.createElement("p9");
    overview.innerHTML = '<br>Overview:<br/> ' + movieData['overview'];
    document.getElementById('div1').appendChild(overview);
  
    const img = document.createElement ("img");
    img.src = 'https://image.tmdb.org/t/p/w500' + movieData['poster_path'];
    document.getElementById('div1').appendChild(img);
    
    const release_date = document.createElement ("p1");
    release_date.innerHTML = 'Release Date: ' + movieData['release_date'];
    document.getElementById('div1').appendChild(release_date);
  
    const popularity = document.createElement ("p2");
    popularity.innerHTML = 'Popularity: ' + movieData['popularity'];
    document.getElementById('div1').appendChild(popularity);
    
    const runtime = document.createElement ("p3");
    runtime.innerHTML = 'Runtime: ' + movieData['runtime'] + ' minutes';
    document.getElementById('div1').appendChild(runtime);
  
    const budget = document.createElement ("p4");
    budget.innerHTML = 'Budget: ' + '$' + movieData['budget'] + ' &#8594';
    document.getElementById('div1').appendChild(budget);
  
    const revenue = document.createElement ("p5");
    revenue.innerHTML = 'Revenue: ' + '$' + movieData['revenue'];
    document.getElementById('div1').appendChild(revenue);
  
    const vote_average = document.createElement ("p6");
    vote_average.innerHTML = 'Vote Average: '  + '&#10032 ' + movieData['vote_average'] ;
    document.getElementById('div1').appendChild(vote_average); 
  
    let genres = genre(movieData['genres']);
    console.log(genres)
    const callgenres = document.createElement("p8");
    callgenres.innerHTML = 'Genres: ' +  genres;
    //callgenres.setAttribute('id', 'genres');
    document.getElementById('div1').appendChild(callgenres);
  
    console.log(movieData['poster_path'])
  }
  
  function genre(genresArray) {
    let callgenres = ""
    for (i=0 ; i < genresArray.length; i++) {
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
  