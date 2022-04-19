import { SearchBar } from './components/AppBar'
import { DataFetv } from './components/FavoriteMovie'
import React from 'react'
import Home from "./Home";

import {Container,Nav,Navbar} from 'react-bootstrap'
// import Contact from "./Contact";
// import About from "./About";

import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css"
const App = () => {


  return( <Router>
   <nav className="navbars">
     <Link to="/" className="link">Home</Link>
   </nav>

    <Routes> 

      <Route path="/" element={<Home/>}/>
      </Routes> </Router>)
   
}
// class App extends React.Component{
//     state = {
//       title:'',
//       body:'',
//       posts:[]}
//     componentDidMount=() => {
//       this.getBlogPost();
//     };

//    getBlogPost = () => {
//     axios.get('http://localhost:5000/movieall').then((response)=>{
//       const data = response.data
//       this.setState({posts:data})
//       console.log('succses');
//     }).catch((err) => {console.log(err)})
// }
// displayBlogPost = (posts) =>{
//  return posts.map((post,index)=><div key={index}><p>{post.name}</p></div> )
// }
// render() {

//   console.log('State: ', this.state);

//   //JSX
//   return(
//     <div className="app">
//       <h2>Welcome to the best app ever</h2>
//       <div>
//         {this.displayBlogPost(this.state.posts)}
//       </div>

//     </div>
//   );
// }
// }

export default App;
