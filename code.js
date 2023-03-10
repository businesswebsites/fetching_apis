const x = document.getElementById("user_stats");

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        x.innerHTML = "Der Browser unterstützt die Lokalierung der geologischen Daten nicht."
    }
}

function showPosition(position){
    x.innerHTML = "Längengrad: " + position.coords.latitude + "<br> Breitengrad: " + position.coords.longitude;
}


//API here
//fetch universities data
let universities = document.getElementById("universities")
async function fetchData(){
    let country = document.getElementById("country").value;
    console.log(country)
    let response = await fetch("http://universities.hipolabs.com/search?country="+country.toString());
    let data = await response.text();
    console.log(data);
}
//let new_arr = [];
function fetchAPI(){
    let country = document.getElementById("country").value;
    fetch("http://universities.hipolabs.com/search?country="+country.toString())
    .then(response => response.json())
    .then(json =>
        {
            for(let i= 0; i < json.length; i++){
                //new_arr.push(json[i].name);
                universities.innerHTML = universities.innerHTML + json[i].name + "<br>"
            }  
            //universities.innerHTML = new_arr;
        })
    .catch(err => console.log("Request failed", err));
}

function del_val(){
    universities.innerHTML = "";
}

//fetch predict nationality api
let nationality = document.getElementById("nationality");
function guess_nationality(){
    let name = document.getElementById("name").value;
    fetch("https://api.nationalize.io?name="+name.toString())
    .then(response => response.json())
    .then(json =>
        {
            for(let i = 0; i<json.country.length; i++){
                nationality.innerHTML = nationality.innerHTML + json.country[i].country_id + "<br>";
            }
            //console.log(json.country[0].country_id)  
            //universities.innerHTML = new_arr;
        })
    .catch(err => console.log("Request failed", err));
}

function del_erg(){
    nationality.innerHTML = "";
}

