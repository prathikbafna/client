import logo from "./logo.svg";
import "./App.css";
import Footer from "./core/component/layouts/Footer";
import Header from "./core/component/layouts/Header";
import Landing from "./core/component/layouts/Landing";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing></Landing>
      <Footer />
    </div>
  );
}

export default App;
