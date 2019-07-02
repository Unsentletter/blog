import { Component } from "react";

class MainBody extends Component {
	render() {
		return (
			<div>
				<style jsx>
					{`
						.body {
							display: flex;
							flex-direction: column;
							height: 100%;
							align-items: center;
							justify-content: center;
							height: 100vh;
							margin-top: -100px;
						}
						.text-wrapper {
							text-align: center;
						}
					`}
				</style>
				<div className="body">
					<div className="text-wrapper">
						<h1>I like to write code and play with fish tanks</h1>
						<h4>This is a blog where I can write about both</h4>
					</div>
				</div>
			</div>
		);
	}
}

export default MainBody;
