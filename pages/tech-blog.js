import { Component } from "react";
import Layout from "../components/layout";

class TechBlog extends Component {
	render() {
		return (
			<div>
				<style jsx>
					{`
						.body {
							height: 100vh;
							background-color: #f5f5f5;
						}
					`}
				</style>
				<Layout>
					<div className="body">
						<h1>
							This will be where my tech blog will be Changing some text to test
							Travis
						</h1>
					</div>
				</Layout>
			</div>
		);
	}
}

export default TechBlog;
