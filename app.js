const apiKey = "8635a8d7520f8d40e0ccfec431f0c9f6";
const url =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const searchInp = document.querySelector('.search input');
  const searchBtn = document.querySelector('.search button');
  const errorMessage = document.querySelector(".error"); // عنصر لعرض الخطأ

async function checkWeather(city) {
    try{

        const response = await fetch(url + city + `&appid=${apiKey}`);
        console.log(document.querySelector('.weather-icon').src)
        // error not response
        if(response.ok === false){
            Swal.fire({
                template: "#my-template"
              });
              return ;
        }
        let data = await response.json();
        if(data.main.humidity < 40){
            document.querySelector('.weather-icon').src = 'assets/clear.png'
        }else if(data.main.humidity >= 40 && data.main.humidity <= 60){
            document.querySelector('.weather-icon').src = 'assets/clouds.png'
        }else if(data.main.humidity >= 80 && data.main.temp > 0){
            document.querySelector('.weather-icon').src = 'assets/rain.png'
        }else if(data.main.temp < 0){
            document.querySelector('.weather-icon').src = 'assets/snow.png'
        }
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main["humidity"] + "%";
        document.querySelector(".wind").innerHTML = data.wind["speed"] + "KM/H";
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "° C"

        // hidden error message if response true (ok)
        
    }catch{
        Swal.fire({
            template: "#my-template"
          });
    }

}

searchBtn.addEventListener('click', function(){
    checkWeather(searchInp.value.toLowerCase());
})

