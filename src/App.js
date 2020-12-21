import  {useState} from 'react';
import './App.css';

const api = {
  key: "408bdbeea5e5803234bbc214be44b6c1",
  base: "https://api.openweathermap.org/data/2.5/"
}



function App() {
// const [query, setQuery] = useState('lagos');
const [weather, setWeather] = useState('');

const search = e => {
  
  if (e.key === "Enter") {
    const city = (e.target.value).trim()
    e.target.value = ''
    // if(!city) return null
    fetch(`${api.base}weather?q=${city}&appid=${api.key}`)
    .then(res => (res.json()))
    .then(result =>{   
      setWeather(result);
      console.log(weather);
    })
  }
}


  const dateBuilder = (e) => {
let months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let days = [ 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

let day = days[e.getDay()];
let date = e.getDate();
let month = months[e.getMonth()];
let year = e.getFullYear();

return `${day} ${date} ${month} ${year}`


  }
  return (
    <div className={`app ${ weather.temp==='warm'? 'warm' : '' }0`}>
      <section>
        <div className="search-box">
          <input
           type="text"
            className="search-bar" 
            placeholder="search..." 
            onKeyPress={search}
           />
        </div>
        <div className="location-box">
          <div className="location"> Lagos City, Nigeria.</div>
          <div className="date">{dateBuilder(new Date())}</div>
          <div className="weather-wrapper">
            <div className="temp"> 20
            <span>&deg;C</span>
             
            </div>
            <div className="weather">cold</div>
          </div>

        </div>

      </section>
    </div>
  );
}

export default App;
