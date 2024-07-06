import { Component } from "@angular/core";

import { AccordionModule } from "primeng/accordion";

@Component({
	standalone: true,
	imports: [AccordionModule],
	template: `
		<div class="content">
			<h1>FQA</h1>
			<p-accordion [activeIndex]="0">
				<p-accordionTab
					header="Is it free to list my project on builtwithanalog.dev?"
				>
					<p>
						Yes, it is completely free to showcase any
						<strong>open source</strong> or free-to-use projects on
						builtwithangular.dev. Our primary goal is to provide a platform for
						Angular developers to highlight their work, especially those
						projects that are freely available to the community.
					</p>
					<p>
						Additionally, if you have a project that you intend to sell, we are
						going to be working on making it possible to list those projects as
						well. Stay tuned for updates!
					</p>
				</p-accordionTab>
				<p-accordionTab
					header="How do I submit my project to be showcased on builtwithanalog.dev?"
				>
					<p>
						Submitting your project for showcase is simple! Just head over to
						our GitHub organization and navigate to the
						<a
							href="https://github.com/orgs/BuiltWithAnalog/discussions/1"
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
				</p-accordionTab>
				<p-accordionTab
					header="Is there a limit to the number of projects I can showcase?"
				>
					<p>
						Currently here is no limit to the number of projects you can
						showcase on builtwithangular.dev. Whether you have one project or
						multiple, we encourage you to submit them all for consideration.
						Each project will undergo review independently.
					</p>
				</p-accordionTab>
				<p-accordionTab
					header="How can I update information about my showcased project?"
				>
					<p>
						If you need to update information about your showcased project, just
						head over to our GitHub organization and navigate to the
						<a
							href="https://github.com/orgs/TechShowcase/discussions"
							target="_blank"
							>Discussions</a
						>
						section, and follow the instructions.
					</p>
				</p-accordionTab>
				<p-accordionTab
					header="Can I remove my project from the showcase once it's been listed?"
				>
					<p>
						Yes, you can request to remove your project from the showcase at any
						time. just head over to our GitHub organization and navigate to the
						<a
							href="https://github.com/orgs/TechShowcase/discussions"
							target="_blank"
							>Discussions</a
						>
						section, and follow the instructions.
					</p>
				</p-accordionTab>
			</p-accordion>
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

				.p-accordion {
					width: 50vw;
				}
			}
			@media (max-width: 768px) {
				.content {
					.p-accordion {
						width: 80vw;
            margin-bottom: 2rem;
					}
				}
			}
		`,
	],
})
export default class FqaPageComponent {}
