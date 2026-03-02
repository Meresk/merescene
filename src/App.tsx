import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="title">mere _</h1>

      <div className="preview-wrapper">
        <iframe
          src="http://localhost:5173"
          className="preview-iframe"
        />
        <div
          className="overlay"
          onClick={() => window.open("http://localhost:5173", "_blank")}
        />
      </div>
    </div>
  );
}

export default App;