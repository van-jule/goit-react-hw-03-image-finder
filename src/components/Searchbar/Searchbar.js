import React, { Component } from "react";
import { toast } from "react-toastify";

// import { ReactComponent as MyIcon } from "";

class Searchbar extends Component {
  state = {
    value: "",
  };
  handleChange = (event) => {
    this.setState({ value: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.value.trim() === "") {
      return toast.error("Введи что-то нормальное, а не вот это вот всё!");
    }

    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={this.state.value}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
