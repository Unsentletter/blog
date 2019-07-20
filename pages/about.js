import { Component } from "react";
import Layout from "../components/layout";

class About extends Component {
	render() {
		return (
			<div>
				<style jsx>
					{`
						.body {
							height: 100vh;
							background-color: #f5f5f5;
							display: flex;
							flex-direction: row;
							margin-top: -80px;
							padding-top: 80px;
						}
						.left {
							width: 50%;
							padding: 50px;
							padding-top: 0;
							text-align: center;
						}
						img {
							border-radius: 50%;
							max-width: 100%;
							max-height: 100%;
							margin-top: -20px;
						}
						.right {
							width: 50%;
						}
					`}
				</style>
				<Layout>
					<div className="body">
						<div className="left">
							<img src="static/me.png" alt="This is me" />
						</div>
						<div className="right">
							<h1>
								This will be an about me page where I talk about how good I am
							</h1>
						</div>
					</div>
				</Layout>
			</div>
		);
	}
}

export default About;
