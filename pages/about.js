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
							border-radius: 40%;
							max-width: 100%;
							max-height: 100%;
							margin-top: -20px;
						}
						.right {
							width: 50%;
							padding-top: 40px;
							padding-right: 50px;
						}
					`}
				</style>
				<Layout>
					<div className="body">
						<div className="left">
							<img src="static/me.png" alt="This is me" />
						</div>
						<div className="right">
							As you can probably tell by the url that brought you here my name
							is Tristan Southwell. What you probably can’t tell from that url
							is that I am a software developer, an aquarium enthusiast, an
							outdoors adventurer, and a fan of the oxford comma.
							<br />
							<br /> I created this blog as a fun way to share things I have
							learnt, and things I have achieved in my coding adventures, and in
							my aquarium adventures. It will also be fun for me to have a
							record of things I have learned and things I have achieved. It is
							always nice to look at your personal growth and feel good about
							yourself.
							<br />
							<br />
							The blogs are split into two categories. Tech Blog, and Fishroom.
							The titles are pretty self explanatory. Both blogs are a mixture
							of me writing down my thoughts, processes, and journeys, and posts
							where I will break a subject down and explain it. This will be as
							much for my own learning as well as anyone who happens upon this
							page. I love to learn and I love to teach, so this is me just
							living the dream.
						</div>
					</div>
				</Layout>
			</div>
		);
	}
}

export default About;
