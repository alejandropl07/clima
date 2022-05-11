import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  const [city, saveCity] = useState("");
  const [country, saveCountry] = useState("");
  const [error, saveError] = useState(false);

  const queryData = (data) => {
    if (data.city === "" || data.country === "") {
      saveError(true);
      return;
    }
    saveCity(data.city);
    saveCountry(data.country);
    saveError(false);
  };

  return (
    <div>
      <Header title="Weather conditions" />
      <div className="container">
        <Form queryData={queryData} />
        {error ? (
          <div className="font-weight-bold  alert alert-danger  text-center mt-3">
            Ambos campos son obligatorios
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
