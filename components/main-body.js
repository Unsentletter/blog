import { Component } from "react";

class MainBody extends Component {
	render() {
		return (
			<div>
				<style jsx>
					{`
						.body {
							height: 100vh;
							background-color: #f5f5f5;
							width: 100vw;
							text-align: center;
							margin-top: -80px;
						}
						.text-wrapper {
							position: absolute;
							left: 50%;
							top: 50%;
							transform: translate(-50%, -50%);
							width: 80%;
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
