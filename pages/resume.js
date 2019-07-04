import { Component } from "react";
import Layout from "../components/layout";

class Resume extends Component {
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
					<h1>This will be where my resume will go</h1>
				</Layout>
			</div>
		);
	}
}

export default Resume;
