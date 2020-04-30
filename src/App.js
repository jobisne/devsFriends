import React, { Component } from "react";
// import { robots } from "./robots";
import CardList from "./components/CardList";
import Search from "./components/Search";
import Scroll from "./components/Scroll";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => {this.setState({ robots: user })});
  }
  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
      const { robots, searchField } = this.state

    const filterList =robots.filter((robot) => {
      return robot.username
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });
    return  !robots ? 
      (<div><h1>LOADING</h1></div>)  :
    (
      <div className="tc">
        <h1 className="f1">MYDEVSFRIENDS</h1>
        <Search
          value={searchField}
          handleChange={this.handleChange}
        />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filterList} />
          </ErrorBoundary>          
        </Scroll>
        
      </div>
    );
  }
}

export default App;
