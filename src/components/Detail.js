import React from "react";
import axios from "axios";

class Detail extends React.Component {
  state = {
    isLoading: true,
    movie: [],
  };

  render() {
    const { isLoading, movie } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movie.description_full}
          </div>
        )}
      </section>
    );
  }

  getDetails = async () => {
    let id = window.location.pathname;
    let req = id.substring(id.lastIndexOf("/") + 1);
    const {
      data: {
        data: { movie },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/movie_details.json?movie_id=" + req
    );
    this.setState({ movie, isLoading: false });
  };

  componentDidMount() {
    this.getDetails();
  }
}

export default Detail;
