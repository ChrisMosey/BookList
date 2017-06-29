import axios from "axios";

import { UrlBuilder } from "../functions/UrlBuilder";

const baseUrl: string = "https://api.nytimes.com/svc/";
const apiKey: string = "d0495addd9154e7c9acef4f611d37745"

export function getBooks(){
    return (dispatch: any) => {
        const path: string = "books/v3/lists/best-sellers/history.json";

        let url = UrlBuilder(baseUrl, path, apiKey);

        axios.get(url)
			.then(function (response: any) {
                dispatch({type: "RECIEVE_BOOKS", payload: response.data.results});
			})
			.catch(function (error: any) {
				console.log(error);
                dispatch({type: "ERROR", msg: error});
			});
    }
}