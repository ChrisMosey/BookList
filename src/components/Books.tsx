import * as React from "react";
import axios from "axios";
import { connect } from "react-redux";

import { getBooks } from "../actions/BooksAction";

@(connect((store: any)=>{return {books: store}}) as any) //REMEMBER THIS CAUSE IT TOOK A WHILE TO FIND

export default class Books extends React.Component {
	componentWillMount(): void{
		//enable loading
		this.props.dispatch(getBooks());
	}

	render(): any{
		let bookList: Array<JSON>;
		console.log(this.props);
		axios.get('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=d0495addd9154e7c9acef4f611d37745')
			.then(function (response: any) {
				bookList = response.data.results;
				//console.log(bookList);
			})
			.catch(function (error: any) {
				console.log(error);
			});

		return <h1>TEST</h1>;
	}
}