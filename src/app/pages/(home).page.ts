import { HttpClient } from "@angular/common/http";
import { Component, inject, OnChanges, OnInit } from "@angular/core";
import { Project } from "../models/project";
import { FormsModule } from "@angular/forms";

import { DropdownModule } from "primeng/dropdown";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { TooltipModule } from 'primeng/tooltip';

@Component({
	selector: "app-home",
	standalone: true,
	imports: [
		FormsModule,
		DropdownModule,
		CardModule,
		ButtonModule,
		CheckboxModule,
    TooltipModule
	],
	template: `
		<div class="content">
			<div class="filtering">
				<div class="filtering-actions">
					<p-dropdown
						[options]="categories"
						[(ngModel)]="selectedCategory"
						optionLabel="name"
						(onChange)="applyFilter()"
						placeholder="Category"
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
							<p-checkbox
								[(ngModel)]="showFree"
								label="Free"
								[binary]="true"
								name="free"
								(onChange)="applyFilter()"
							/>
						</div>
						<div class="checkbox-wrapper">
							<p-checkbox
								[(ngModel)]="threeDElements"
								label="3D"
								[binary]="true"
								name="3D"
								(onChange)="applyFilter()"
							/>
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
					<p-card class="home">
						<img
							class="main-image"
							src="{{ project.imageSrc }}"
							alt="{{ project.name }}"
              pTooltip="by {{ project.developer }}"
              tooltipPosition="bottom"
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
										<h2>{{ project.name }}</h2>
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
											src="/icons/analog.svg"
                      pTooltip="{{ project.analogVersion }}"
                      tooltipPosition="top"
										/>
										@if (isVersion16OrAbove(project.version)) {
										<img
											src="/icons/angular.svg"
                      pTooltip="{{ project.version }}"
                      tooltipPosition="top"
										/>
										} @else {
										<img
											src="/angular-old.svg"
                      pTooltip="{{ project.version }}"
                      tooltipPosition="top"
										/>
										}
									</div>
									<div class="ui">
										@if (project.uiLib.includes('Spartan UI')) {
										<img
											class="ui-lib"
											src="/icons/spartan.png"
                      pTooltip="{{ project.uiLib }}"
                      tooltipPosition="top"
										/>
										} @if (project.uiLib.includes('PrimeNG')) {
										<img
											class="ui-lib"
											src="/icons/primeng.svg"
                      pTooltip="{{ project.uiLib }}"
                      tooltipPosition="top"
										/>
										}
									</div>
								</div>
							</div>
						</div>
					</p-card>
				</a>
				} } @else { @for (project of filteredProjects; track project) {
				<a href="{{ project.url }}?source=builtwithanalog.dev" target="_blank">
					<p-card class="home">
						<img
							class="main-image"
							src="{{ project.imageSrc }}"
							alt="{{ project.name }}"
              pTooltip="by {{ project.developer }}"
              tooltipPosition="bottom"
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
										<h2>{{ project.name }}</h2>
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
											src="/icons/analog.svg"
                      pTooltip="{{ project.analogVersion }}"
                      tooltipPosition="top"
										/>
										@if (isVersion16OrAbove(project.version)) {
										<img
											src="/icons/angular.svg"
                      pTooltip="{{ project.version }}"
                      tooltipPosition="top"
										/>
										} @else {
										<img
											src="/icons/angular-old.svg"
                      pTooltip="{{ project.uiLib }}"
                      tooltipPosition="top"
										/>
										}
									</div>
									<div class="ui">
										@if (project.uiLib.includes('Spartan UI')) {
										<img
											class="spartan"
											src="/icons/spartan.png"
                      pTooltip="{{ project.uiLib }}"
                      tooltipPosition="top"
										/>
										} @if (project.uiLib.includes('PrimeNG')) {
										<img
											class="spartan"
											src="/icons/primeng.svg"
                      pTooltip="{{ project.uiLib }}"
                      tooltipPosition="top"
										/>
										}
									</div>
								</div>
							</div>
						</div>
					</p-card>
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
				min-height: 80vh;
				margin: 1rem;

				.filtering {
					display: flex;
					flex-direction: column;
					margin-top: 1.5rem;

					.filtering-actions {
						display: flex;
						align-items: center;
						gap: 1rem;

						.p-dropdown {
							width: 13rem;
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
								margin: 0 0.5rem;

								.p- checkbox {
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

					.p-card {
						display: flex;
						flex-direction: column;
						align-items: center;
						width: 20rem;

						img {
							width: 100%;
							object-fit: cover;
              margin-bottom: 0.1rem;
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
                  padding: 0 0.5rem 0.5rem;
									gap: 0.3rem;

									img {
										width: 1.5rem;
										height: 1.5rem;

										&.ui-lib {
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

						.p-card {
							width: 80vw;
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
	threeDElements: boolean = false;
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
				this.projectsUIlib = Array.from(
					new Set(
						this.projects.map((project) => project.uiLib.split(", ")).flat()
					)
				).map((uiLib) => ({ name: uiLib }));
			});
	}

  // this is related to the content not loading after I return from visiting one of the pages
  // I tried ngAfterViewInit, but both options are not resolving it
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
				this.projectsUIlib = Array.from(
					new Set(
						this.projects.map((project) => project.uiLib.split(", ")).flat()
					)
				).map((uiLib) => ({ name: uiLib }));
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
				(!this.threeDElements || project.threeD === true)
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
		this.threeDElements = false;
	}

	isVersion16OrAbove(version: string): boolean {
		const majorVersion = parseInt(version.split(".")[0], 10);
		return majorVersion >= 16;
	}
}
