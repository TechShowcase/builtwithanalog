import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-footer",
	standalone: true,
	imports: [],
	template: `
  <div class="footer">
    <div class="social"></div>
    <div class="info"></div>
  </div>
  `,
	styles: [
		``],
  })
  export class FooterComponent implements OnInit {

    ngOnInit(): void {

    }
  }
