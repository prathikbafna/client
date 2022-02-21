import "./App.css";
import Header from "./app/core/component/layouts/Header";
import Landing from "./app/core/component/layouts/Landing";
import Footer from "./app/core/component/layouts/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthRouters } from "./app/auth/routings/AuthRouters";
// import { Test } from "./propsDemo/Test";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          {/* <Test></Test> */}
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/auth/*" element={<AuthRouters />}></Route>
          </Routes>
          <Footer></Footer>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
