import { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
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
    images: null,
    error: null,
    status: Status.IDLE,
    openModal: false,
    openModalIndex: undefined,
    page: 1,
    scrollHeight: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.imageValue;
    const nextValue = this.props.imageValue;

    if (prevValue !== nextValue) {
      this.setState({ status: Status.PENDING, page: 1, scrollHeight: 0 });

      // if (this.state.images.length < 1) {
      //   this.setState({ status: Status.REJECTED });
      // }

      // setTimeout(() => {
      //   ImageApi.fetchImages(nextValue)
      //     .then((images) => this.setState({ images, status: Status.RESOLVED }))
      //     .catch((error) => this.setState({ error, status: Status.REJECTED }));
      // }, 2000);

      setTimeout(() => {
        ImageApi.fetchImages(nextValue)
          .then(({ hits }) => {
            this.setState({
              images: hits,
              status: hits.length > 0 ? Status.RESOLVED : Status.REJECTED,
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

    ImageApi.fetchImages(this.props.imageValue, page + 1)
      .then(({ hits }) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...hits],
          status: Status.RESOLVED,
          scrollHeight: document.body.scrollHeight - 150,
          page: page + 1,
        }));
      })
      .catch((error) => this.setState({ error, status: Status.REJECTED }));
  };

  render() {
    const { images, error, status, openModal, openModalIndex } = this.state;
    const { imageValue } = this.props;

    if (status === "idle") {
      // return toast("Введите Ваш запрос");
      return <p>Введите Ваш запрос</p>;
    }

    if (status === "pending") {
      //   return <PokemonPendingView imageValue={imageValue} />;
      // return <div>ожидаю...</div>;
      return (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      );
    }

    if (status === "rejected") {
      return <ImageError message="По вашему запросу ничего не найдено" />; //{error.message}
    }

    if (status === "resolved") {
      return (
        <>
          <ImageGallery
            images={images}
            onClick={(newData) => {
              console.log("click po state", newData);
              this.setState(newData);
            }}
          />
          {images.length > 0 && (
            <button type="button" onClick={this.loadMore}>
              Load more....
            </button>
          )}

          {openModal && (
            <div
              className="Overlay"
              onKeyPress={(e) => {}}
              onClick={() => this.setState({ openModal: false })}
            >
              <div className="Modal">
                {console.log(images, openModalIndex)}

                <img
                  src={images[openModalIndex].largeImageURL}
                  alt={images[openModalIndex].tags}
                />
              </div>
            </div>
          )}
        </>
      );
    }
  }
}

export default ImageStateCar;
