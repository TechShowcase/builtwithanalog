import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [],
	template: `
		<div class="header">
			<div class="logo">
        <img src="{{analogLogo}}" alt="">
				<h1>Built With Analog</h1>
			</div>
		</div>
	`,
	styles: [
		`
			.header {
				justify-content: space-between;

        .logo {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          margin: 0 0 0 1rem;
          img {
            width: 2rem;
            height: 2rem;
          }
          h1 {
            font-size: 1.2rem;
            font-weight: 500;
          }
        }
			}
		`,
	],
})
export class HeaderComponent implements OnInit {
  analogLogo: string = "https://analogjs.org/img/logos/analog-logo.svg";
	ngOnInit(): void {
  }
}
