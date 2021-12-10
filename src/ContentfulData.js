import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { client } from "./client";
import Posts from "./components/Posts";

export default class ContentfulDataComp extends React.Component {
	state = {
		articles: [],
	};

	componentDidMount() {
		client
			.getEntries()
			.then((response) => {
				console.log(response);
				this.setState({
					articles: response.items,
				});
			})
			.catch(console.error);
	}

	render() {
		return (
			<>
				<div className="wrapper">
					<Posts posts={this.state.articles} />
				</div>
			</>
		);
	}
}
