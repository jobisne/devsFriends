import React, { Component } from "react";
// import { robots } from "./robots";
import { connect } from "react-redux";
import CardList from "./components/CardList";
import Search from "./components/Search";
import Scroll from "./components/Scroll";
import ErrorBoundary from "./components/ErrorBoundary";
import { setSearchField, requestRobots } from "./actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchDevs.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots:() => dispatch(requestRobots())
  };
};

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     robots: [],
  //   };
  // }

  componentDidMount() {

    this.props.onRequestRobots();

    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((user) => {
    //     this.setState({ robots: user });
    //   });
  }
  // handleChange = (event) => {
  //   this.setState({ searchField: event.target.value });
  // };

  render() {
    // const { robots } = this.state;
    const { searchField, handleChange, robots, isPending } = this.props

    const filterList = robots.filter((robot) => {
      return robot.username
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });
    return isPending ? (
      <div>
        <h1>LOADING</h1>
      </div>
    ) : (
      <div className="tc">
        <h1 className="f1">MYDEVSFRIENDS</h1>
        <Search value={searchField} handleChange={handleChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filterList} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
