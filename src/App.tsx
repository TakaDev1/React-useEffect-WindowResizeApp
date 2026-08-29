import "./App.css";
import HandleResize from "./components/HandleResize";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1>React-useEffect-WindowResizeApp</h1>
        <HandleResize />
      </div>
    </>
  );
}

export default App;
