import { Component } from "react";

import MainBody from "../components/main-body";
import Layout from "../components/layout";

class App extends Component {
	render() {
		return (
			<div>
				<Layout>
					<MainBody />
				</Layout>
			</div>
		);
	}
}

export default App;
