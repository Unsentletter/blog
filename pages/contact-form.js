import { Component } from "react";
import Layout from "../components/layout";

class ContactForm extends Component {
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
						This will be where my contact form will go so people can contact me
					</h1>
				</Layout>
			</div>
		);
	}
}

export default ContactForm;
