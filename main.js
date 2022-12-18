const { createApp } = Vue

createApp({
  data() {
    return {
      albums: [],
    }
  },
  created() {
    axios.get('http://localhost:8888/php-dischi-json/api.php')
    .then((res) => {
        console.log(res.data);
    })
  }
}).mount('#app');