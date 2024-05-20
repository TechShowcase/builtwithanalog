import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-footer",
	standalone: true,
	imports: [],
	template: `
		<div class="footer">
			<div class="social"></div>
			<div class="info">
				<div class="links">
					<a href="#">FQA</a>
					<a href="#">About</a>
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
