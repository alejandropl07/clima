import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header title="Weather conditions" />
      <div className="container">
        <Form />
      </div>
    </div>
  );
}

export default App;
