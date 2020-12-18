import react from 'react';
import './App.css';

const api = {
  key: "408bdbeea5e5803234bbc214be44b6c1",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app ">
      <section>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="search..." />
        </div>
        <div className="location-box">
          <div className="location"> Ilorin City, Nigeria</div>
          <div className="date"></div>

        </div>

      </section>
    </div>
  );
}

export default App;
