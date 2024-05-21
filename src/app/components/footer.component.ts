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
						justify-content: center;
						gap: 0.5rem;

            a {
              font-weight: 500;
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
