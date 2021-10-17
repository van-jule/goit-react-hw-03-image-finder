import { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ImageGallery from "../ImageGallery/ImageGallery";
import UserLoader from "../UserLoader/UserLoader";
import ImageApi from "../services/pixabay";
import ImageError from "./ImageError";
import Status from "../services/status";
import Button from "../Button";
import Modal from "../Modal";

class ImageStateCar extends Component {
  state = {
    images: null,
    page: 1,
    openModal: false,
    openModalIndex: undefined,
    status: Status.IDLE,
    scrollHeight: 0,
  };

  componentDidUpdate(prevProps) {
    const prevValue = prevProps.queryValue;
    const nextValue = this.props.queryValue;

    if (prevValue !== nextValue) {
      this.setState({ status: Status.PENDING, page: 1, scrollHeight: 0 });

      setTimeout(() => {
        ImageApi.fetchImages(nextValue)
          .then((images) => {
            this.setState({
              images,
              status: images.length > 0 ? Status.RESOLVED : Status.REJECTED,
            });
          })
          .catch((error) => this.setState({ error, status: Status.REJECTED }));
      }, 500);
    }

    window.scrollTo({
      top: this.state.scrollHeight,
      behavior: "smooth",
    });
  }

  loadMore = () => {
    const { page } = this.state;

    ImageApi.fetchImages(this.props.queryValue, page + 1)
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          status: Status.RESOLVED,
          scrollHeight: document.documentElement.scrollHeight - 150,
          page: page + 1,
        }));
      })
      .catch((error) => this.setState({ error, status: Status.REJECTED }));
  };

  closeModal = () => {
    this.setState({ openModal: false });
  };

  render() {
    const { images, status, openModal, openModalIndex } = this.state;

    if (status === "idle") {
      return <p>Введите Ваш запрос</p>;
    }

    if (status === "pending") {
      return <UserLoader />;
    }

    if (status === "rejected") {
      return <ImageError message="По вашему запросу ничего не найдено" />;
    }

    if (status === "resolved") {
      return (
        <>
          <ImageGallery
            images={images}
            onClick={(modalOpen) => this.setState(modalOpen)}
          />
          {images.length > 0 && <Button onClick={this.loadMore} />}

          {openModal && (
            <Modal
              closeModal={this.closeModal}
              image={images[openModalIndex]}
            />
          )}
        </>
      );
    }
  }
}

export default ImageStateCar;
