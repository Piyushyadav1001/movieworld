import {React, Component} from "react";
import './App.css';
import Mpage from "./Mpage.js"
import $ from 'jquery'
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props)
this.state={}
this.performSearch("Thor")
  }
performSearch(searchTerm){
  console.log('perform search')
  const urlString="https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query="+searchTerm;  
  $.ajax({
    url: urlString,
    success:(searchResults)=>{
      const results=searchResults.results
      var movieRows=[]
      results.forEach((movie)=>{
        movie.poster_src="http://image.tmdb.org/t/p/w185"+movie.poster_path
        const movieRow=<Mpage movie={movie}/>
        movieRows.push(movieRow)
      })
      this.setState({rows:movieRows})
    },
      error: (xhr,status,err)=>{
        console.log("failed to fetch data")
      }
  })
  }
  searchHandler=(event)=>{
const searchTerm=event.target.value;
    this.performSearch(searchTerm)
  }
  render(){
  return (
    <div className="App">
      {
        <div>
             <p>
                <h2>Piyush Movie App</h2>
              </p>
              <h3>Search any movie you want</h3>
</div>
      }
<input className="searchBox"onChange={this.searchHandler} placeholder="Enter movie name"></input>
{this.state.rows}
    </div>
  );
  }
}

export default App;