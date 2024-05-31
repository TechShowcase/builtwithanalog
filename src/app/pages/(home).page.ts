import { HttpClient } from "@angular/common/http";
import { Component, inject, OnChanges, OnInit } from "@angular/core";
import { Project } from "../models/project";
import { FormsModule } from "@angular/forms";

import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from "primeng/button";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [FormsModule, DropdownModule, ButtonModule],
	template: `
		<div class="content">
			<div class="filtering">
				<div class="filtering-actions">
					<p-dropdown
						[options]="categories"
						[(ngModel)]="selectedCategory"
						optionLabel="name"
						(onChange)="applyFilter()"
						placeholder="Select a Category"
					/>
					<p-dropdown
						[options]="versionGroup"
						[(ngModel)]="selectedVersionGroup"
						optionLabel="name"
						(onChange)="applyFilter()"
						placeholder="Angular Version"
					/>
					<p-dropdown
						[options]="analogVersions"
						[(ngModel)]="selectedAnalogVersion"
						optionLabel="name"
						(onChange)="applyFilter()"
						placeholder="Analog Version"
					/>
					<p-dropdown
						[options]="projectsUIlib"
						[(ngModel)]="selectedUIlib"
						optionLabel="name"
						(onChange)="applyFilter()"
						placeholder="UI Library"
					/>
					<div class="buttons-wrapper">
						<div class="checkbox-wrapper">
							<input
								type="checkbox"
								name="checkbox"
								class="checkbox"
								[(ngModel)]="showFree"
								(change)="applyFilter()"
							/>
							<label for="checkbox">Free</label>
						</div>
						<div class="checkbox-wrapper">
							<input
								type="checkbox"
								name="checkbox"
								class="checkbox"
								[(ngModel)]="thereDElements"
								(change)="applyFilter()"
							/>
							<label for="checkbox">3D</label>
						</div>
					</div>
					<p-button label="Clear Filters" (click)="clearFilters()" />
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
						<img
							class="main-image"
							src="{{ project.imageSrc }}"
							alt="{{ project.name }}"
						/>
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
											title="{{ project.analogVersion }}"
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
										} @if (project.uiLib.includes('PrimeNG')) {
										<img
											class="spartan"
											title="{{ project.uiLib }}"
											src="https://raw.githubusercontent.com/TechShowcase/images/080dcd98dafae9552bf7b6f8f29afebdbc5a95c0/icons/primeng.svg"
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
						<img
							class="main-image"
							src="{{ project.imageSrc }}"
							alt="{{ project.name }}"
						/>
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
											title="{{ project.analogVersion }}"
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
										} @if (project.uiLib.includes('PrimeNG')) {
										<img
											class="spartan"
											title="{{ project.uiLib }}"
											src="https://raw.githubusercontent.com/TechShowcase/images/080dcd98dafae9552bf7b6f8f29afebdbc5a95c0/icons/primeng.svg"
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
					margin-top: 1.5rem;

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

			@media (max-width: 768px) {
				.content {
					.filtering-actions {
						flex-direction: column;
						gap: 0;
					}

					.cards-wrapper {
						flex-direction: column;
						align-items: center;

						.card {
							width: 90vw;
						}
					}
				}
			}
		`,
	],
})
export default class HomeComponent implements OnInit, OnChanges {
	projects: Project[] = [];
	filteredProjects: Project[] = [];
	categories: { name: string }[] = [];
	versionGroup: { name: string }[] = [];
	analogVersions: { name: string }[] = [];
	projectsUIlib: { name: string }[] = [];
	filterApplied: boolean = false;
	selectedCategory: { name: "" } = { name: "" };
	selectedVersionGroup: { name: "" } = { name: "" };
	selectedAnalogVersion: { name: "" } = { name: "" };
	selectedUIlib: { name: "" } = { name: "" };
	showFree: boolean = false;
	thereDElements: boolean = false;
	http = inject(HttpClient);

	ngOnInit(): void {
		this.filterApplied = false;
		this.http
			.get<Project[]>("https://builtwithanalog.dev/api/projects")
			.subscribe((projects) => {
				this.projects = projects;
				this.categories = Array.from(
					new Set(this.projects.map((project) => project.category))
				).map((category) => ({ name: category }));
				this.versionGroup = Array.from(
					new Set(this.projects.map((project) => project.versionGroup))
				).map((versionGroup) => ({ name: versionGroup }));
				this.analogVersions = Array.from(
					new Set(this.projects.map((project) => project.analogVersion))
				).map((analogVersion) => ({ name: analogVersion }));
				this.projectsUIlib = Array.from(new Set(
						this.projects.map((project) => project.uiLib.split(", ")).flat())).map((uiLib) => ({ name: uiLib }));
            console.log(this.projectsUIlib);
			});
	}

	ngOnChanges(): void {
		this.filterApplied = false;
		this.http
			.get<Project[]>("https://builtwithanalog.dev/api/projects")
			.subscribe((projects) => {
				this.projects = projects;
				this.categories = Array.from(
					new Set(this.projects.map((project) => project.category))
				).map((category) => ({ name: category }));
				this.versionGroup = Array.from(
					new Set(this.projects.map((project) => project.versionGroup))
				).map((versionGroup) => ({ name: versionGroup }));
				this.analogVersions = Array.from(
					new Set(this.projects.map((project) => project.analogVersion))
				).map((analogVersion) => ({ name: analogVersion }));
				this.projectsUIlib = Array.from(new Set(
          this.projects.map((project) => project.uiLib.split(", ")).flat())).map((uiLib) => ({ name: uiLib }));
			});
	}

	applyFilter(): void {
		this.filterApplied = true;
		this.filteredProjects = this.projects.filter((project) => {
			return (
				(this.selectedCategory.name === "" ||
					project.category === this.selectedCategory.name) &&
				(this.selectedAnalogVersion.name === "" ||
					project.analogVersion === this.selectedAnalogVersion.name) &&
				(this.selectedUIlib.name === "" ||
					project.uiLib.split(", ").includes(this.selectedUIlib.name)) &&
				(this.selectedVersionGroup.name === "" ||
					project.versionGroup === this.selectedVersionGroup.name) &&
				(!this.showFree || project.pricing === "Free") &&
				(!this.thereDElements || project.thereD === true)
			);
		});
	}

	clearFilters(): void {
		this.filterApplied = false;
		this.selectedCategory = { name: "" };
		this.selectedAnalogVersion = { name: "" };
		this.selectedUIlib = { name: "" };
		this.selectedVersionGroup = { name: "" };
		this.showFree = false;
		this.thereDElements = false;
	}

	isVersion16OrAbove(version: string): boolean {
		const majorVersion = parseInt(version.split(".")[0], 10);
		return majorVersion >= 16;
	}
}
