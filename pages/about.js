import { Component } from "react";
import Layout from "../components/layout";

class About extends Component {
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
						This will be an about me page where I talk about how good I am
					</h1>
				</Layout>
			</div>
		);
	}
}

export default About;
