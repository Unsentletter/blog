import { Component } from "react";
import Link from "next/link";

class Header extends Component {
	render() {
		return (
			<div>
				<style jsx>
					{`
						.header {
							height: 80px;
							background-color: #f5f5f5;
							position: fixed;
							top: 0;
							width: 100%;
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
							color: inherit;
							font-size: 28px;
						}
					`}
				</style>
				<div className="header">
					<ul className="menu-wrapper">
						<li>
							<Link href="contact-form">
								<a className="menu-item">Contact</a>
							</Link>
						</li>
						<li>
							<Link href="/resume">
								<a className="menu-item">Resume</a>
							</Link>
						</li>
						<li>
							<Link href="/fish-room">
								<a className="menu-item">Fishroom</a>
							</Link>
						</li>
						<li>
							<Link href="/tech-blog">
								<a className="menu-item">Tech Blog</a>
							</Link>
						</li>
						<li>
							<Link href="/about">
								<a className="menu-item">About</a>
							</Link>
						</li>
						<li>
							<Link href="index">
								<a className="menu-item">Home</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Header;
