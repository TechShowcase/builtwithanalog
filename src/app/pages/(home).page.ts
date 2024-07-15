import { HttpClient } from '@angular/common/http';
import {
  Component,
  effect,
  inject,
  model,
  OnChanges,
  OnInit,
  untracked,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Project } from '../models/project';

import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { Filter, FilterComponent } from '../components/filter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    DropdownModule,
    CardModule,
    ButtonModule,
    CheckboxModule,
    TooltipModule,
    FilterComponent,
  ],
  template: `
    <div class="content">
      <div class="filtering">
        <app-filter
          [analogVersions]="analogVersions"
          [angularVersions]="versionGroup"
          [projectCategories]="categories"
          [uiLibs]="projectsUIlib"
          [(ngModel)]="filter"
        />

        <div class="total">
          @if (!filterApplied) {
            <p>All Projects: {{ projects.length }}</p>
          } @else {
            <p>Projects found: {{ filteredProjects.length }}</p>
          }
        </div>
      </div>
      <div class="cards-wrapper">
        @if (!filterApplied) {
          @for (project of projects; track project) {
            <a
              href="{{ project.url }}?source=builtwithanalog.dev"
              target="_blank"
            >
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
                        @if (
                          project.category.includes('Open Source') ||
                          project.pricing === 'Free'
                        ) {
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
                            pTooltip="Spartan UI"
                            tooltipPosition="top"
                          />
                        }
                        @if (project.uiLib.includes('PrimeNG')) {
                          <img
                            class="ui-lib"
                            src="/icons/primeng.svg"
                            pTooltip="PrimeNG"
                            tooltipPosition="top"
                          />
                        }
                        @if (project.uiLib.includes('Tailwind CSS')) {
                          <img
                            class="ui-lib"
                            src="/icons/tailwind.svg"
                            pTooltip="Tailwind CSS"
                            tooltipPosition="top"
                          />
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </p-card>
            </a>
          }
        } @else {
          @for (project of filteredProjects; track project) {
            <a
              href="{{ project.url }}?source=builtwithanalog.dev"
              target="_blank"
            >
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
                        @if (
                          project.category.includes('Open Source') ||
                          project.pricing === 'Free'
                        ) {
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
                            class="ui-lib"
                            src="/icons/spartan.png"
                            pTooltip="Spartan UI"
                            tooltipPosition="top"
                          />
                        }
                        @if (project.uiLib.includes('PrimeNG')) {
                          <img
                            class="ui-lib"
                            src="/icons/primeng.svg"
                            pTooltip="PrimeNG"
                            tooltipPosition="top"
                          />
                        }
                        @if (project.uiLib.includes('Tailwind CSS')) {
                          <img
                            class="ui-lib"
                            src="/icons/tailwind.svg"
                            pTooltip="Tailwind CSS"
                            tooltipPosition="top"
                          />
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </p-card>
            </a>
          }
        }
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
  categories: string[] = [];
  versionGroup: string[] = [];
  analogVersions: string[] = [];
  projectsUIlib: string[] = [];
  filterApplied: boolean = false;
  selectedCategory: string | null = null;
  selectedVersionGroup: string | null = null;
  selectedAnalogVersion: string | null = null;
  selectedUIlib: string | null = null;
  showFree: boolean | null = null;
  threeDElements: boolean | null = null;

  http = inject(HttpClient);
  readonly #route = inject(ActivatedRoute);
  readonly #router = inject(Router);

  readonly filter = model<Filter>({
    analogVersion: null,
    category: null,
    uiLib: null,
    versionGroup: null,
    isUsing3D: null,
    isFree: null,
  });

  constructor() {
    const syncFiltersEffect = effect(() => {
      const filter = this.filter();
      untracked(() => this.updateFilter(filter));
    });
  }

  ngOnInit(): void {
    this.filterApplied = false;
    this.http
      .get<Project[]>('https://builtwithanalog.dev/api/projects')
      .subscribe((projects) => {
        this.projects = projects;
        this.categories = Array.from(
          new Set(this.projects.map((project) => project.category)),
        );

        this.versionGroup = Array.from(
          new Set(this.projects.map((project) => project.versionGroup)),
        );

        this.analogVersions = Array.from(
          new Set(this.projects.map((project) => project.analogVersion)),
        );

        this.projectsUIlib = Array.from(
          new Set(
            this.projects.map((project) => project.uiLib.split(', ')).flat(),
          ),
        );

        this.#seedFilter();
      });
  }

  ngOnChanges(): void {
    this.filterApplied = false;
    this.http
      .get<Project[]>('https://builtwithanalog.dev/api/projects')
      .subscribe((projects) => {
        this.projects = projects;
        this.categories = Array.from(
          new Set(this.projects.map((project) => project.category)),
        ).map((category) => ({ name: category }));
        this.versionGroup = Array.from(
          new Set(this.projects.map((project) => project.versionGroup)),
        ).map((versionGroup) => ({ name: versionGroup }));
        this.analogVersions = Array.from(
          new Set(this.projects.map((project) => project.analogVersion)),
        ).map((analogVersion) => ({ name: analogVersion }));
        this.projectsUIlib = Array.from(
          new Set(
            this.projects.map((project) => project.uiLib.split(', ')).flat(),
          ),
        ).map((uiLib) => ({ name: uiLib }));
      });
  }

  applyFilter(): void {
    this.filterApplied = true;
    this.filteredProjects = this.projects.filter((project) => {
      return (
        (this.selectedCategory === null ||
          project.category === this.selectedCategory) &&
        (this.selectedAnalogVersion === null ||
          project.analogVersion === this.selectedAnalogVersion) &&
        (this.selectedUIlib === null ||
          project.uiLib.split(', ').includes(this.selectedUIlib)) &&
        (this.selectedVersionGroup === null ||
          project.versionGroup === this.selectedVersionGroup) &&
        (this.showFree === null || this.showFree
          ? project.pricing === 'Free'
          : project.pricing !== 'Free') &&
        (this.threeDElements === null || project.threeD === this.threeDElements)
      );
    });
  }

  clearFilters(): void {
    this.filterApplied = false;
    this.selectedCategory = { name: '' };
    this.selectedAnalogVersion = { name: '' };
    this.selectedUIlib = { name: '' };
    this.selectedVersionGroup = { name: '' };
    this.showFree = false;
    this.threeDElements = false;
  }

  updateFilter(filter: Filter): void {
    this.selectedAnalogVersion = filter.analogVersion;
    this.selectedCategory = filter.category;
    this.selectedUIlib = filter.uiLib;
    this.selectedVersionGroup = filter.versionGroup;
    this.threeDElements = filter.isUsing3D;
    this.showFree = filter.isFree;

    this.applyFilter();
    this.#updateQueryParams(filter);

    const hasAnyFilterBeenSet = Object.values(filter).some(
      (filter) => filter !== null,
    );

    this.filterApplied = hasAnyFilterBeenSet;
  }

  #seedFilter(): void {
    const queryParams = this.#route.snapshot.queryParams;

    const asBoolean = (param: 'true' | 'false' | null) =>
      param === 'true' ? true : param === 'false' ? false : null;

    const filter: Filter = {
      analogVersion: queryParams['analogVersion'] ?? null,
      category: queryParams['category'] ?? null,
      uiLib: queryParams['uiLib'] ?? null,
      versionGroup: queryParams['versionGroup'] ?? null,
      isUsing3D: asBoolean(queryParams['isUsing3D']),
      isFree: asBoolean(queryParams['isFree']),
    };

    this.filter.set(filter);
  }

  #updateQueryParams(filter: Filter): void {
    const queryParams = Object.entries(filter)
      .filter(([, value]) => value !== null)
      .reduce((x, [k, v]) => ({ ...x, [k]: v }), {});

    this.#router.navigate([], {
      relativeTo: this.#route,
      queryParams: queryParams,
    });
  }

  isVersion16OrAbove(version: string): boolean {
    const majorVersion = parseInt(version.split('.')[0], 10);
    return majorVersion >= 16;
  }
}
