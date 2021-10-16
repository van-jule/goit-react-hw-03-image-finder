import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageStateCar from "./components/ImageStateCar";

// import axios from "axios";
// console.dir(axios);

// const base_url = `https://api.pexels.com/v1/`;
// const api_key = `563492ad6f917000010000001390f9fee0a794c1182a72e49e0e0eae2`;

// axios.defaults.baseURL = base_url;
// axios.defaults.headers.common.Authorization = api_key;

// let searchQuery = "banana";
// let searchPage = 1;
// let searchPerPage = 5;
// let endPoint = "search";
// let params = `?query=${searchQuery}&page=${searchPage}&per_page=${searchPerPage}`;
// let url = endPoint + params;

// axios
//   .get(url)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// import ImageGalleryItem from "./components/ImageGalleryItem";
// import Loader from "./components/Loader";
// import Button from "./components/Button";
// import Modal from "./components/Modal";

class App extends Component {
  state = {
    imageValue: "",
    images: [],
  };
  // const BASE_URL = 'https://pixabay.com/api/';
  // const KEY = '22993210-edd192b19fd9d2ee0b0d8e9c4';
  // https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
  // "https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=nature&page=1&per_page=12&key=22993210-edd192b19fd9d2ee0b0d8e9c4"
  componentDidMount() {
    fetch(
      "https://pixabay.com/api/?q=nature&page=1&key=22993210-edd192b19fd9d2ee0b0d8e9c4&image_type=photo&orientation=horizontal&per_page=12"
    )
      .then((res) => res.json())
      .then((images) => this.setState({ images }))
      .finally(() => this.setState({ loading: false }));
  }

  showPictures = () => {
    const list = this.state.image.hits
      .map(({ webformatURL, id, largeImageURL }) => (
        <li>
          <div>
            <img src={webformatURL} alt={id} />
          </div>
        </li>
      ))
      .join(" ");
    return list;
  };

  handleFormSubmit = (formValue) => {
    console.log(formValue);
    this.setState({ imageValue: formValue });
  };

  render() {
    return (
      <div className="App">
        {this.state.loading && <h1>Загружаем...</h1>}
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageStateCar
          images={this.state.images}
          imageValue={this.state.imageValue}
        />
        {/* <Loader /> */}
        {/* <Button /> */}
        {/* <Modal /> */} <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
