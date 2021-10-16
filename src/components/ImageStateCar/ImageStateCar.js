import { Component } from "react";
// import { toast } from "react-toastify";

import ImageGallery from "../ImageGallery/ImageGallery";
import ImageApi from "../services/pixabay";
import ImageError from "./ImageError";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

class ImageStateCar extends Component {
  state = {
    images: this.props.images,
    error: null,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.imageValue;
    const nextValue = this.props.imageValue;

    if (prevValue !== nextValue) {
      this.setState({ status: Status.PENDING });
      console.log("status", this.state.status);

      // if (this.state.images.length < 1) {
      //   this.setState({ status: Status.REJECTED });
      // }

      // setTimeout(() => {
      //   ImageApi.fetchImages(nextValue)
      //     .then((images) => this.setState({ images, status: Status.RESOLVED }))
      //     .catch((error) => this.setState({ error, status: Status.REJECTED }));
      // }, 2000);

      setTimeout(() => {
        console.log("UPDATEEEEEE");

        ImageApi.fetchImages(nextValue)
          // .then((response) => {
          //   // if (response.ok) {
          //   //   return response.json();
          //   // }
          //   console.log("response: ", response.json());
          //   return response.json();
          //   // return Promise.reject(
          //   //   new Error(`По вашему запросу '${nextValue}' ничего не найдено`)
          //   // );
          // })
          .then((images) => {
            console.log("RESOLVE", images);
            this.setState({ images, status: Status.RESOLVED });
          })
          .catch((error) => this.setState({ error, status: Status.REJECTED }));
      });
    }
  }

  render() {
    const { images, error, status } = this.state;
    const { imageValue } = this.props;
    console.log(imageValue);

    if (status === "idle") {
      // return toast("Введите Ваш запрос");
      return <p>Введите Ваш запрос</p>;
    }

    if (status === "pending") {
      //   return <PokemonPendingView imageValue={imageValue} />;
      return <div>ожидаю...</div>;
    }

    if (status === "rejected") {
      return <ImageError message="блабла" />; //{error.message}
    }

    if (status === "resolved") {
      return <ImageGallery image={images} />;
    }
  }
}

export default ImageStateCar;
