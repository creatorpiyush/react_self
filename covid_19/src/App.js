import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      stats: [],
      // searchField: "",
    };
  }
  async componentDidMount() {
    const resp = await fetch("https://api.covid19api.com/countries");
    const countries = await resp.json();
    this.setState({ countries });

    console.log(this.state.countries);

    this.state.countries.forEach(async (country) => {
      const resp = await fetch(
        `https://api.covid19api.com/total/country/${country.Slug}`
      );
      const data = await resp.json();
      console.log(data);

      console.log(data.length);

      if (data.length) {
        console.log(data.length);
        this.setState((pre) => ({
          stats: pre.stats,
        }));
      }
    });
  }
  render() {
    return (
      <div className="App">
        {/* <h1>Covid19 Stats Web App</h1>
        {this.state.stats.map((country) => (
          <h1>{country.Country}</h1>
        ))} */}
      </div>
    );
  }
}

export default App;
