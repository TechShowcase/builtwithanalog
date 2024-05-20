import { Component } from "@angular/core";

@Component({
	selector: "app-home",
	standalone: true,
	template: `
		<div class="content">
			<div class="filtering">
				<form id="filter-form">
					<select name="type" id="type" value="type">
						<option selected hidden disabled>Type</option>
						<option value="open-source">Open Source</option>
						<option value="productivity">Productivity</option>
						<option value="template">Template</option>
					</select>
					<select name="angular-version" id="angular-version">
						<option selected hidden disabled>Angular Version</option>
						<option value="v15">v15 and up</option>
						<option value="v10-v15">v10 - v15</option>
						<option value="earlier-than-v10">earlier than v10</option>
					</select>
					<select name="structure" id="structure">
						<option selected hidden disabled>Angular Structure</option>
						<option value="modules">Modules</option>
						<option value="standalone">Standalone</option>
					</select>
					<select name="ui-lib" id="ui-lib">
						<option selected hidden disabled>UI Library</option>
						<option value="none">None</option>
						<option value="angular-material">Angular Material</option>
						<option value="primeng">PrimeNG</option>
						<option value="spartan">Spartan UI</option>
					</select>
					<div class="checkbox-wrapper">
						<input type="checkbox" name="checkbox" class="checkbox" />
						<label for="checkbox">Free</label>
					</div>
					<button type="reset">Clear Filters</button>
				</form>
				<div class="total">
					<p>Projects found: 100</p>
				</div>
			</div>
			<div class="cards-wrapper">
				<div class="card">
					<h2>Project Name</h2>
					<p>Details</p>
				</div>
				<div class="card">
					<h2>Project Name</h2>
					<p>Details</p>
				</div>
				<div class="card">
					<h2>Project Name</h2>
					<p>Details</p>
				</div>
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
				margin: 1rem;

				.filtering {
					display: flex;
					flex-direction: column;
					form {
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

						.checkbox-wrapper {
							display: flex;
							align-items: center;
							gap: 0.3rem;

							.checkbox {
								height: 1.1rem;
								width: 1.1rem;
								cursor: pointer;
							}
							label {
								font-size: 1.1rem;
							}
						}
					}

					.total {
						display: flex;
						justify-content: center;
						padding: 0.5rem;

						p {
							font-size: 1rem;
						}
					}
				}

				.cards-wrapper {
					display: flex;
					gap: 1.5rem;
					margin-top: 1rem;

					.card {
						width: 20rem;
					}
				}
			}
		`,
	],
})
export default class HomeComponent {}
