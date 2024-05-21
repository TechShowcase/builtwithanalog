import { Component } from "@angular/core";

@Component({
	standalone: true,
	template: `
		<div class="content">
			<h1>FQA</h1>
			<div class="details-panel">
				<details class="card">
					<summary>
						Is it free to list my project on builtwithanalog.dev?
					</summary>
					<p>
						Yes, it is completely free to showcase any
						<strong>open source</strong> or free-to-use projects on
						builtwithangular.dev. Our primary goal is to provide a platform for
						Angular developers to highlight their work, especially those
						projects that are freely available to the community.
					</p>
					<p>
						Additionally, if you have a project that you intend to sell, we also
						support showcasing these. For projects with a price, there is a
						one-time listing fee.
					</p>
				</details>
				<details class="card">
					<summary>
						How do I submit my project to be showcased on builtwithanalog.dev?
					</summary>
					<p>
						Submitting your project for showcase is simple! Just head over to
						our GitHub organization and navigate to the
						<a
							href="https://github.com/orgs/TechShowcase/discussions"
							target="_blank"
							>Discussions</a
						>
						section. There, you'll find
						<a
							href="https://github.com/orgs/TechShowcase/discussions/1"
							target="_blank"
							>Instructions</a
						>
						and option to provide details about your project. Once you've added
						your project for consideration our team will review it. If your
						project is free and meets our criteria, we'll add it right away to
						our showcase for the Angular community to explore and enjoy!
					</p>
				</details>
				<details class="card">
					<summary>
						Is there a limit to the number of projects I can showcase?
					</summary>
					<p>
						Currently here is no limit to the number of projects you can
						showcase on builtwithangular.dev. Whether you have one project or
						multiple, we encourage you to submit them all for consideration.
						Each project will undergo review independently.
					</p>
				</details>
				<details class="card">
					<summary>
						How can I update information about my showcased project?
					</summary>
					<p>
						>If you need to update information about your showcased project,
						simply send an email to [contact email], detailing the changes you'd
						like to make. Our team will review your request and update the
						information accordingly.
					</p>
				</details>
				<details class="card">
					<summary>
						Can I remove my project from the showcase once it's been listed?
					</summary>
					<p>
						Yes, you can request to remove your project from the showcase at any
						time. Simply send us an email at [contact email] with your request,
						and we'll remove your project from the listing promptly.
					</p>
				</details>
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
				min-height: 85vh;

				.details-panel {
					width: 50vw;

					details {
						margin: 1rem 0;

						summary {
							font-size: 1.2rem;
							width: 50vw;
							cursor: pointer;

							&::marker {
								position: absolute;
								content: "";
							}
						}
					}
				}
			}
		`,
	],
})
export default class FqaPageComponent {}
