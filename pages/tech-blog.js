import { Component } from "react";
import Layout from "../components/layout";

class TechBlog extends Component {
	render() {
		return (
			<div>
				<style jsx>
					{`
						.header {
						}
						.test {
						}
					`}
				</style>
				<Layout>
					<h1>
						This will be where my tech blog will be Changing some text to test
						Travis
					</h1>
				</Layout>
			</div>
		);
	}
}

export default TechBlog;
