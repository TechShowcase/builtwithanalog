import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";

import { ToolbarModule } from "primeng/toolbar";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [
		RouterLink,
		ToolbarModule
	],
	template: `
		<p-toolbar>
			<div class="p-toolbar-group-start">
				<div class="logo">
					<img src="{{ analogLogo }}" alt="" />
					<a routerLink="/"><h1>Built with Analog</h1></a>
				</div>
			</div>
		</p-toolbar>
	`,
	styles: [
		`
			p-toolbar {
				.p-toolbar {
					padding: 0.5rem;
				}

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
	ngOnInit(): void {}
}
