import { Component } from "@angular/core";

@Component({
	standalone: true,
	template: `
		<div class="content">
			<h1>About</h1>
			<div class="card">
				<h2>builtwithanalog.dev</h2>
				<p>is part of the</p>
				<a href="https://github.com/TechShowcase" target="_blank">
					<h2>TechShowcase GitHub Organization.</h2>
				</a>
				<p>
					TechShowcase is a public organization dedicated to showcasing various
					projects built with our favorite technologies. All code within
					TechShowcase is public, we're also considering the possibility of
					making TechShowcase an open-source project in the future, promoting
					transparency and collaboration within the developer community.
				</p>
				<p>
					TechShowcase features two main repositories, each with its own
					dedicated website:
				</p>
				<ul>
					<li>
						Built with Angular -
						<a href="https://builtwithangular.dev" target="_blank"
							>builtwithangular.dev</a
						>
					</li>
					<li>
						Built with Analog -
						<a href="https://builtwithanalog.dev" target="_blank"
							>builtwithanalog.dev</a
						>
					</li>
				</ul>
				<p>
					BuiltWithAnalog is a curated showcase of AnalogJS projects contributed
					by the community. Whether you're a seasoned developer or just starting
					with Analog, this platform is designed to make it easy for you to
					showcase your projects and for others to discover them.
				</p>
				<p>
					But BuiltWithAnalog is more than just a showcase. It's also a platform
					where developers can market their Analog apps. We believe in
					empowering developers by providing more opportunities to monetize
					their creations. So, if you have a remarkable Analog app that you've
					built and you're looking for ways to make it profitable, Built with
					Analog is the place for you.
				</p>
				<p>
					This website itself is built with Analog, demonstrating the power and
					versatility of the Analog framework. We're continuously improving and
					expanding our platform to better serve the needs of the Angular &
					Analog community.
				</p>
				<p>
					Join us in celebrating the creativity and innovation of Analog
					developers around the world. Explore, showcase, and market your Analog
					projects on builtwithanalog.dev today!
				</p>
			</div>
		</div>
	`,
	styles: [
		`
			.content {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: flex-start;
				min-height: 90vh;

				.card {
					width: 50vw;
					padding: 2rem;
					margin-bottom: 3rem;

					h2 {
						font-size: 1.3rem;
						font-weight: 500;
						text-align: center;
						margin: 0 0 0.5rem 0;
					}

					p {
						font-size: 1.1rem;
						line-height: 1.5rem;
						text-align: center;
						margin: 0 0 0.6rem 0;
					}

					li {
						font-size: 1.1rem;
						line-height: 1.5rem;
					}
				}
			}
		`,
	],
})
export default class AboutPageComponent {}
