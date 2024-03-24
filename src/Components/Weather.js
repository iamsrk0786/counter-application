import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [data,setdata] = useState([]);
  const[city, setcity]=useState("")
  function getweatherapi(city) {
    const apiurl =
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e1c1d8113e8e72b2dbc507308c290e4d`;
    axios
      .get(apiurl)
      .then((res) => {
        // console.log(res);
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handlesearch() {
    getweatherapi(city)
  }
  useEffect(()=>{
getweatherapi("")
  },[])
  return (  
    <div>
      {/* <section>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <img src="/media/weather logo.jpg" alt="logo" id="img" />
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section> */}
      <section id="wtr">
        <input
          type="text"
          id="inp"
          placeholder="search here"
          value={city} onChange={(e)=>{setcity(e.target.value)}}
        />
        <button type="submit" className="btn btn-primary" id="btn" onClick={handlesearch}>
          Search
        </button>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <img src="/media/weather3.jpg" alt="wtr" id="imgg"/>
        </div>
         <h3>Weather Update</h3>
         <h3>City:{data?.name}</h3>
         <h3>Temperature:{((data?.main?.temp)-273.15).toFixed(2)}</h3>
         <h3>min:{((data?.main?.temp_min)-273.15).toFixed(2)}</h3>
         <h3>max:{((data?.main?.temp_max)-273.15).toFixed(2)}</h3>



      </div>
    </div>
      </section>
    </div>
  );
};

export default Weather;


