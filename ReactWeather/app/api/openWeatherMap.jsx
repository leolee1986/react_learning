var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=dcaddc29bca3c192480e0192446fdeb7&units=imperial';

// api key
// dcaddc29bca3c192480e0192446fdeb7
module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl =`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      debugger;
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    },function(res){
      throw new Error(res.data.message);
    });
  }
}
