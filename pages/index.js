import { Component } from "react";

import Header from "../components/header";
import MainBody from "../components/main-body";
import Layout from "../components/layout";

class App extends Component {
	render() {
		return (
			<div>
				<style jsx>
					{`
						.header {
							height: 80px;
							background-color: green;
						}
						.menu-wrapper {
							display: flex;
							flex-direction: row-reverse;
							align-items: center;
							height: 80px;
							list-style: none;
							padding-right: 50px;
						}
						.menu-item {
							padding: 10px;
						}
					`}
				</style>
				<Layout>
					<MainBody />
				</Layout>
			</div>
		);
	}
}

export default App;
