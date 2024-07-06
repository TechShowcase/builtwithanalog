import { Component } from "@angular/core";

import { CardModule } from "primeng/card";

@Component({
	standalone: true,
	imports: [CardModule],
	template: `
		<div class="content">
			<h1>About</h1>
			<p-card>
				<a href="https://github.com/BuiltWithAnalog" target="_blank">
					<h2>BuiltWithAnalog</h2>
				</a>
				<p>
					BuiltWithAnalog is an open source project dedicated to showcasing
					various projects built with
					<a href="https://analogjs.org" target="_blank">AnalogJS</a>. All code
					within BuiltWithAnalog is public, promoting transparency and
					collaboration within the developer community.
				</p>
				<p>BuiltWithAnalog features one main repository:</p>
				<ul>
					<li>
						<a
							href="https://github.com/BuiltWithAnalog/builtwithanalog"
							target="_blank"
							>builtwithanalog</a
						>
					</li>
				</ul>
				<p>
					The main purpose of BuiltWithAnalog is to help developers find Analog
					open-source projects, Analog apps built by indie developers, and to
					serve as a source of inspiration. We believe that by showcasing these
					projects, we can inspire others to create and innovate.
				</p>
				<p>
					Whether you're a seasoned developer or just starting with Analog, this
					platform is designed to make it easy for you to showcase your projects
					and for others to discover them.
				</p>
				<p>
					This website itself is built with Analog, demonstrating the power and
					versatility of the Analog framework. We're continuously improving and
					expanding our platform to better serve the needs of the Analog
					community.
				</p>
				<p>
					Join us in celebrating the creativity and innovation of Analog
					developers around the world. Explore, showcase, and maybe even market
					your Analog projects on builtwithanalog.dev today!
				</p>
			</p-card>
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

				.p-card {
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
