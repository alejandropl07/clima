import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  const [city, saveCity] = useState("");
  const [country, saveCountry] = useState("");
  const [error, saveError] = useState(false);
  const [result, saveResult] = useState({});

  useEffect(() => {
    if (city === "") {
      return;
    }
    queryApi();
  }, [city, country]);

  const queryData = (data) => {
    if (data.city === "" || data.country === "") {
      saveError(true);
      return;
    }
    saveCity(data.city);
    saveCountry(data.country);
    saveError(false);
  };

  const queryApi = async () => {
    const appId = "1b8d6535472d1279a3616a0a1b7a57d0";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

    const response = await fetch(url);
    const result = await response.json();
    saveResult(result);
  };

  return (
    <div>
      <Header title="Weather conditions" />
      <div className="container">
        <Form queryData={queryData} />
        {error ? (
          <div className="font-weight-bold  alert alert-danger  text-center mt-3">
            Both fields are required
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
