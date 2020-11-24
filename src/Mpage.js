import React, { Component } from 'react';
import "./App.css";
class MovieRow extends Component {
  viewMovie(){
      const url="http://themoviedb.org/movie/"+this.props.movie.id
window.location.href=url
                           }
    render(props) {
        return <table key={this.props.movie.id}>
            <tbody>
              <tr>
                <td>
                  <img alt="poster" width="100" src={this.props.movie.poster_src}></img>
                </td>
                <td>
                  <h2 className="blink_me">{this.props.movie.title}</h2>
                  <p>{this.props.movie.overview}</p>
                <input type="button" onClick={this.viewMovie.bind(this)} value="view"/>
                </td>
              </tr>
            </tbody>
          </table>
    }
}

export default MovieRow;