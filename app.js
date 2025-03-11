const apiKey = "8635a8d7520f8d40e0ccfec431f0c9f6";
const url =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const searchInp = document.querySelector('.search input');
  const searchBtn = document.querySelector('.search button');
  const errorMessage = document.querySelector(".error"); // عنصر لعرض الخطأ

async function checkWeather(city) {
    try{

        const response = await fetch(url + city + `&appid=${apiKey}`);
        
        // error not response
        if(response.ok === false){
            Swal.fire({
                template: "#my-template"
              });
              return ;
        }

        let data = await response.json();
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
    checkWeather(searchInp.value);
})

