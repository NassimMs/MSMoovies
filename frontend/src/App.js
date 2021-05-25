import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import {BrowserRouter,Switch,Route}  from "react-router-dom";
import Home from "./Components/Home"
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import MoviesList from "./Components/MoviesList"
import AuthProvider from "./contexts/AuthContext";
import Add_review from "./Components/Add_review";
import All_reviews from "./Components/All_reviews";
import Trailer from "./Components/Trailer";


class App extends React.Component {
  render() {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Signup" component={Signup}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Profile" component={Profile}/>
            <Route path="/Update-profile" component={Profile}/>
            <Route path="/Movies" component={MoviesList}/>
            <Route path="/Add_review/:id" component={Add_review}/>
            <Route path="/All_reviews/:id" component={All_reviews}/>
            <Route path="/Trailer/:id" component={Trailer}/>
          </Switch>
      </BrowserRouter> 
    </AuthProvider>
    )
  }
}
export default App;
