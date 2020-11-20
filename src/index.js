import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const movie = {
  title: "Avengers: Infinity War",
  vote_average: 9.9,
  image:
    "http://i2.wp.com/itc.ua/wp-content/uploads/2018/03/Infinity-War-logo.jpg",
  overview: "The fate of the Earth has never been so uncertain."
};

function Image(props) {
  return <img src={props.src} alt={props.alt} style={{ width: "100vw" }} />;
}

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      like: false
    };
  }

  toogleOverview = () => {
    this.setState({
      show: !this.state.show
    });
  };

  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
  };

  render() {
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
    return (
      <div>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toogleOverview}>
            {this.state.show ? "hide" : "show"}
          </button>
          <button
            type="button"
            onClick={this.handleLike}
            className={this.state.like ? "" : "btn--like"}
          >
            {this.state.like ? "onlike" : "Like"}
          </button>
        </div>

        {this.state.show ? <p>{overview}</p> : null}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
