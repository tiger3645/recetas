import React from "react";
import "./home.styles.scss";
import Carousel from "../../components/carousel/carousel.component";
import { SearchBox } from "../../components/search-box/search-box";
import { ALL_RECIPEES } from "../../Queries";
import Client from "../../client";
import { ReactComponent as Logo } from "../../assets/icon.svg";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      searchField: "",
      recipees: [],
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    Client.query({
      query: ALL_RECIPEES,
    })
      .then((data) => this.setState({ recipees: data.data.allRecipees }))
      .then(this.setState({ loading: false }));
  }

  render() {
    const { recipees, searchField } = this.state;
    const filteredRecipees = recipees.filter((recipee) =>
      recipee.title.toLowerCase().includes(searchField.toLowerCase())
    );
    document.title = "Recetas";
    return (
      <div className="home">
        {this.state.loading ? (
          <Logo />
        ) : (
          <React.Fragment>
            <SearchBox
              placeholder="Buscar..."
              handleChange={this.handleChange}
            />
            <Carousel recipees={filteredRecipees} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Home;
