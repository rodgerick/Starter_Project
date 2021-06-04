import React from "react";
import { Link } from "react-router-dom";


class Restaurants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount() {
    const url = "/api/v1/restaurants/index";
    console.log(1)
    fetch(url)
      .then((response) => {
        console.log(2)
        if (response.ok) {
          return response.json();
        }
        throw new Error("network response was not ok");
      })
      .then((response) => this.setState({ restaurants: response }))
      .catch(() => this.props.history.push("/"));
  }


  render() {
    const { restaurants } = this.state;
    const allRestaurants = restaurants.map((restaurant, index) => (
      <div key={index}>
        <Link to={`/restaurant/${restaurant.id}`} className="btn btn-dark">
          {restaurant.name}
        </Link>
      </div>
    ));
    const noRestaurant = (
      <div>
        <h4>
          No restaurants yet why not{" "}
          <Link to="/new_restaurant">create one!</Link>
        </h4>
      </div>
    );
    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div>ok</div>
        </section>
        <div>
          <main>
            <div>
              <Link to="/new_restaurant">Create New Restuarant</Link>
            </div>
            <div className="row">
              {restaurants.length > 0 ? allRestaurants : noRestaurant}
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default Restaurants;
