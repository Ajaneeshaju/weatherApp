function fetchData(){
    let cityName=place.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`)
    .then(res=>{
        if(res.ok){
            return res.json()
        }
        else{
            throw alert("enter valid location")
            
            
        }
    })
         .then(data=>dispayValue(data)).catch(err=>console.log(err.message))
    // .then(data=>console.log(data))

}

function dispayValue(data){
    let html_data=``

    
    let cityName=data.name;
    let temperature=data.main.temp;
    let min_temp=data.main.temp_min;
    let max_temp=data.main.temp_max;
    let windSpeed=data.wind.speed;
    let weatherType=data.weather[0].main;

    html_data+=`<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title"></h5>
    <i class="fas fa-cloud"></i>

      <h5 class="card-title">${cityName}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Temperature:${temperature}</li>
      <li class="list-group-item">Min_Temp:${min_temp}</li>
      <li class="list-group-item">Max_Temp${max_temp}</li>
      <li class="list-group-item">WindSpeed:${windSpeed}</li>
      <li class="list-group-item">WeatherType:${weatherType}</li>

    </ul>
  </div>
    `
    


    document.querySelector("#result").innerHTML=html_data
}

