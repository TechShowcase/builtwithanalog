import { Component } from "@angular/core";

@Component({
	selector: "app-home",
	standalone: true,
	template: `
		<div class="content">
			<div class="filtering">
				<div class="filtering-actions">
					<select name="type" id="type">
						<option value="open-source">Open Source</option>
						<option value="productivity">Productivity</option>
						<option value="template">Template</option>
					</select>
					<select name="angular-version" id="angular-version">
						<option value="v15">v15 and up</option>
						<option value="v10-v15">v10 - v15</option>
						<option value="earlier-than-v10">earlier than v10</option>
					</select>
					<select name="structure" id="structure">
						<option value="modules">Modules</option>
						<option value="standalone">Standalone</option>
					</select>
					<select name="ui-lib" id="ui-lib">
						<option value="none">None</option>
						<option value="angular-material">Angular Material</option>
						<option value="primeng">PrimeNG</option>
						<option value="spartan">Spartan UI</option>
					</select>
					<div class="checkbox">
						<input type="checkbox" name="checkbox" id="checkbox" />
						<label for="checkbox">Free</label>
					</div>
					<button>Clear Filters</button>
				</div>
			</div>
			<div class="cards-wrapper">
				<p class="card">Cards here</p>
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
				min-height: 70vh;
				.filtering {
					display: flex;
					.filtering-actions {
						display: flex;
						align-items: center;
						gap: 1rem;

						select {
							padding: 0.8rem 0.5rem 0.8rem 0.4rem;
							font-size: 1rem;
							width: 10rem;
              border-top: none;
              border-right: none;
              border-left: none;
              border-bottom: 2px solid transparent;
              border-radius: 0.5rem 0.5rem 0 0;
							cursor: pointer;

              &:focus {
                outline: none;
                border-bottom: 2px solid #646cff;
              }
						}
					}
				}
			}
		`,
	],
})
export default class HomeComponent {
}
