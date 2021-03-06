import logo from "./logo.svg";
import "./App.css";
import Landing from "./app/core/components/layouts/Landing";
import Header from "./app/core/components/layouts/Header";
import Footer from "./app/core/components/layouts/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./app/auth/components/Login";
import Register from "./app/auth/components/Register";
import { AuthRouters } from "./app/auth/routings/AuthRouters";

//redux imports
import { Provider } from "react-redux";
import store from "./redux/store";
import DashboardRouter from "./app/dashboard/routings/DashboardRouter";
import { useEffect } from "react";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./app/auth/action/authAction";
import Alert from "./app/core/components/Alert";
// react and redux
function App() {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }
    // do we need to update the userinfo?
  }, []);

  // it should do some fundamental checks for token.
  // useEffect
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Alert />
          <Routes>
            <Route path="/" element={<Landing></Landing>}></Route>
            <Route path="/auth/*" element={<AuthRouters></AuthRouters>}></Route>
            <Route
              path="/dashboard/*"
              element={<DashboardRouter></DashboardRouter>}
            ></Route>
          </Routes>
          <Footer></Footer>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
