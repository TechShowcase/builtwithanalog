import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-footer",
	standalone: true,
	imports: [RouterLink],
	template: `
		<div class="footer">
			<div class="social"></div>
			<div class="info">
				<div class="links">
					<a routerLink="/fqa">FQA</a>
					<a routerLink="/about">About</a>
					<a href="https://github.com/TechShowcase/builtwithanalog" target="_blank">
						<img class="github" src="https://raw.githubusercontent.com/TechShowcase/images/080dcd98dafae9552bf7b6f8f29afebdbc5a95c0/icons/github.svg"
					/></a>
				</div>
				<small> This site is built with Analog </small>
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
            align-items: flex-start;
						justify-content: center;
						gap: 0.5rem;

						a {
              font-size:  0.9rem;
							font-weight: 600;
              text-transform: uppercase;

                .github {
                  color: gray;
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
			}
		`,
	],
})
export class FooterComponent implements OnInit {
	ngOnInit(): void {}
}
