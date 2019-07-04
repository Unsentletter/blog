import { Component } from "react";
import Layout from "../components/layout";

class FishRoom extends Component {
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
					<h1>This will be where all my fun aquarium stuff will go</h1>
				</Layout>
			</div>
		);
	}
}

export default FishRoom;
