import { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageStateCar from "./components/ImageStateCar";
class App extends Component {
  state = {
    imageValue: "",
  };

  handleFormSubmit = (formValue) => this.setState({ imageValue: formValue });

  render() {
    return (
      <div className="App">
        {this.state.loading && <h1>Загружаем...</h1>}
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageStateCar imageValue={this.state.imageValue} />
      </div>
    );
  }
}

export default App;
