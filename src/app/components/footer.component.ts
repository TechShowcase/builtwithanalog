import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-footer",
	standalone: true,
	imports: [RouterLink],
	template: `
		<div class="footer">
			<div class="info">
				<div class="links">
					<a routerLink="/fqa">FQA</a>
					<a routerLink="/about">About</a>
					<a
						class="github"
						href="https://github.com/TechShowcase/builtwithanalog"
						target="_blank"
					>
						<i class="pi pi-github"></i>
					</a>
				</div>
				<small> This site is built with <a href="https://analogjs.org/" target="_blank">Analog</a> </small>
			</div>
		</div>
	`,
	styles: [
		`
			.footer {
				display: flex;
				justify-content: center;

				.info {
					.links {
						display: flex;
						align-items: center;
						justify-content: center;
						gap: 0.5rem;

						a {
							font-size: 0.9rem;
							font-weight: 600;
							text-transform: uppercase;

							&.github {
								font-size: 1.2rem;
								line-height: 1.2rem;
								height: 1.2rem;
								width: 1.2rem;
							}
						}
					}
				}

				small {
					color: gray;
				}
			}
		`,
	],
})
export class FooterComponent implements OnInit {
	ngOnInit(): void {}
}
