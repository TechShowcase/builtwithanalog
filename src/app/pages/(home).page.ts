import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from "@angular/core";
import { Project } from "../models/project";
import { FormsModule } from "@angular/forms";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [FormsModule],
	template: `
		<div class="content">
			<div class="filtering">
				<div class="filtering-actions">
					<select
						[(ngModel)]="selectedCategory"
						(change)="applyFilter()"
					>
						<option value="" disabled hidden>Category</option>
						@for (category of categories; track category) {
						<option value="{{ category }}">{{ category }}</option>
						}
					</select>
					<select
						[(ngModel)]="selectedVersionGroup"
						(change)="applyFilter()"
					>
						<option value="" disabled hidden>Angular Version</option>
						@for (version of versionGroup; track version) {
						<option value="{{ version }}">{{ version }}</option>
						}
					</select>
					<select
						[(ngModel)]="selectedAnalogVersion"
						(change)="applyFilter()"
					>
						<option value="" disabled hidden>Analog Version</option>
						@for (analogVersion of analogVersions; track analogVersion) {
						<option value="{{ analogVersion }}">{{ analogVersion }}</option>
						}
					</select>
					<select
						[(ngModel)]="selectedUIlib"
						(change)="applyFilter()"
					>
						<option value="" disabled hidden>UI Library</option>
						@for (uiLib of projectsUIlib; track uiLib) {
						<option value="{{ uiLib }}">{{ uiLib }}</option>
						}
					</select>
					<div class="buttons-wrapper">
						<div class="checkbox-wrapper">
							<input type="checkbox" name="checkbox" class="checkbox" [(ngModel)]="showFree" (change)="applyFilter()"/>
							<label for="checkbox">Free</label>
						</div>
						<div class="checkbox-wrapper">
							<input type="checkbox" name="checkbox" class="checkbox" />
							<label for="checkbox">3D</label>
						</div>
					</div>
					<button (click)="clearFilters()">Clear Filters</button>
				</div>
				<div class="total">
					@if (!filterApplied) {
					<p>All Projects: {{ projects.length }}</p>
					} @else {
					<p>Projects found: {{ filteredProjects.length }}</p>
					}
				</div>
			</div>
			<div class="cards-wrapper">
				@if (!filterApplied) { @for (project of projects; track project) {
				<a href="{{ project.url }}?source=builtwithanalog.dev" target="_blank">
					<div class="card">
						<img class="main-image" src="{{ project.imageSrc }}" alt="{{ project.name }}" />
						<div class="card-content">
							<div class="details">
								<div class="info">
									<div class="main">
										@if (project.category.includes("Open Source") ||
										project.pricing === "Free") {
										<h2>{{ project.name }}</h2>
										} @else {
										<span
											class="material-symbols-outlined"
											title="{{ project.pricing }}"
										>
											paid
										</span>
										<h2 title="{{ project.name }}">{{ project.name }}</h2>
										}
									</div>
									<div class="more">
										<p>{{ project.category }}</p>
									</div>
								</div>
								<div class="features">
									<div class="version">
										<img
											class="analog"
											title="{{ project.version }}"
											src="https://raw.githubusercontent.com/TechShowcase/images/499181122a186d07a1ea115bdee6d5f206d6c6ab/icons/analog.svg"
										/>
										@if (isVersion16OrAbove(project.version)) {
										<img
											title="{{ project.version }}"
											src="https://raw.githubusercontent.com/TechShowcase/images/7dd89ae90f574df816661d4fba76ba971c277a26/icons/angular.svg"
										/>
										} @else {
										<img
											title="{{ project.version }}"
											src="https://raw.githubusercontent.com/TechShowcase/images/7dd89ae90f574df816661d4fba76ba971c277a26/icons/angular-old.svg"
										/>
										}
									</div>
									<div class="ui">
										@if (project.uiLib.includes('Spartan UI')) {
										<img
											class="spartan"
											title="{{ project.uiLib }}"
											src="https://raw.githubusercontent.com/TechShowcase/images/main/icons/spartan.png"
										/>
										}
									</div>
								</div>
							</div>
						</div>
					</div>
				</a>
				} } @else { @for (project of filteredProjects; track project) {
				<a href="{{ project.url }}?source=builtwithanalog.dev" target="_blank">
					<div class="card">
						<img class="main-image" src="{{ project.imageSrc }}" alt="{{ project.name }}" />
						<div class="card-content">
							<div class="details">
								<div class="info">
									<div class="main">
										@if (project.category.includes("Open Source") ||
										project.pricing === "Free") {
										<h2>{{ project.name }}</h2>
										} @else {
										<span
											class="material-symbols-outlined"
											title="{{ project.pricing }}"
										>
											paid
										</span>
										<h2 title="{{ project.name }}">{{ project.name }}</h2>
										}
									</div>
									<div class="more">
										<p>{{ project.category }}</p>
									</div>
								</div>
								<div class="features">
									<div class="version">
										<img
											class="analog"
											title="{{ project.version }}"
											src="https://raw.githubusercontent.com/TechShowcase/images/499181122a186d07a1ea115bdee6d5f206d6c6ab/icons/analog.svg"
										/>
										@if (isVersion16OrAbove(project.version)) {
										<img
											title="{{ project.version }}"
											src="https://raw.githubusercontent.com/TechShowcase/images/7dd89ae90f574df816661d4fba76ba971c277a26/icons/angular.svg"
										/>
										} @else {
										<img
											title="{{ project.version }}"
											src="https://raw.githubusercontent.com/TechShowcase/images/7dd89ae90f574df816661d4fba76ba971c277a26/icons/angular-old.svg"
										/>
										}
									</div>
									<div class="ui">
										@if (project.uiLib.includes('Spartan UI')) {
										<img
											class="spartan"
											title="{{ project.uiLib }}"
											src="https://raw.githubusercontent.com/TechShowcase/images/main/icons/spartan.png"
										/>
										}
									</div>
								</div>
							</div>
						</div>
					</div>
				</a>
				} }
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

						.buttons-wrapper {
							display: flex;
							flex-direction: column;
							align-items: flex-start;
							justify-content: center;
							gap: 0.3rem;

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
					flex-wrap: wrap;
					justify-content: center;
					gap: 1.5rem;
					margin: 1rem 4rem 2rem;

					.card {
						display: flex;
						flex-direction: column;
						align-items: center;
						width: 20rem;

						img {
							width: 100%;
							border-radius: 0.8rem;
							object-fit: cover;
						}

						.card-content {
							width: 100%;
							h2 {
								font-size: 1.1rem;
								font-weight: 500;
								margin: 0.6rem 0 0;
							}

							p {
								font-size: 0.9rem;
								margin: 0;
							}

							.details {
								display: flex;
								justify-content: space-between;
								align-items: center;

								.info {
									.main {
										display: flex;
										align-items: center;
										gap: 0.2rem;

										span {
											color: #36744c;
										}
									}
								}

								.features {
									display: flex;
									gap: 0.3rem;

									img {
										width: 1.5rem;
										height: 1.5rem;
										border-radius: 0;

										&.spartan {
											margin-top: 0.3rem;
										}
									}

									.version {
										display: flex;
										align-items: center;
										img {
											object-fit: contain;
											&.analog {
												width: 2rem;
												height: 2rem;
												border-radius: 0;
											}
										}
									}
								}
							}
						}
					}
				}
			}
		`,
	],
})
export default class HomeComponent implements OnInit {
	projects: Project[] = [];
	filteredProjects: Project[] = [];
	categories: string[] = [];
	analogVersions: string[] = [];
	projectsUIlib: string[] = [];
	versionGroup: string[] = [];
	filterApplied: boolean = false;
	selectedCategory: string = "";
	selectedVersionGroup: string = "";
	selectedAnalogVersion: string = "";
	selectedUIlib: string = "";
	showFree: boolean = false;
	http = inject(HttpClient);

	ngOnInit(): void {
		this.http
			.get<Project[]>("http://builtwithanalog.dev/api/projects")
			.subscribe((projects) => {
				this.projects = projects;
				this.categories = Array.from(
					new Set(this.projects.map((project) => project.category))
				);
				this.analogVersions = Array.from(
					new Set(this.projects.map((project) => project.analogVersion))
				);
				this.projectsUIlib = Array.from(
					new Set(
						this.projects.map((project) => project.uiLib.split(", ")).flat()
					)
				);
				this.versionGroup = Array.from(
					new Set(this.projects.map((project) => project.versionGroup))
				);
			});
	}

	applyFilter(): void {
		this.filterApplied = true;
		this.filteredProjects = this.projects.filter((project) => {
			return (
				(this.selectedCategory === "" ||
					project.category === this.selectedCategory) &&
				(this.selectedAnalogVersion === "" ||
					project.analogVersion === this.selectedAnalogVersion) &&
				(this.selectedUIlib === "" ||
					project.uiLib.split(", ").includes(this.selectedUIlib)) &&
				(this.selectedVersionGroup === "" ||
					project.versionGroup === this.selectedVersionGroup) &&
				(!this.showFree || project.pricing === "Free")
			);
		});
	}

	clearFilters(): void {
		this.filterApplied = false;
		this.selectedCategory = "";
		this.selectedAnalogVersion = "";
		this.selectedUIlib = "";
		this.selectedVersionGroup = "";
		this.showFree = false;
	}

	isVersion16OrAbove(version: string): boolean {
		const majorVersion = parseInt(version.split(".")[0], 10);
		return majorVersion >= 16;
	}
}
