import axios from 'axios'

axios.get("https://api.themoviedb.org/3/movie/550?api_key=7008d2dbccd629d4af2c25667548835a")
  .then(response => {
    console.log(response.data);
  }).catch(err => {
    console.log(err);
  })