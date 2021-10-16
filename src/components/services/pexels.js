// import axios from "axios";

// export class PexelsFetchObject {
//   constructor(base_url, api_key) {
//     this.base_url = base_url;
//     this.api_key = api_key;
//   }

//   searchPhotos(searchQuery, searchPage, searchPerPage) {
//     axios.defaults.baseURL = this.base_url;
//     axios.defaults.headers.common.Authorization = api_key;

//     let endPoint = "search";
//     let params = `?query=${searchQuery}&page=${searchPage}&per_page=${searchPerPage}`;
//     let url = endPoint + params;

//     axios
//       .get(url)
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// }

// export function PexelsFetchObject() {
//   const base_url = base_url;
//   const api_key = api_key;
// }
