import { HttpClient } from '@angular/common/http';
import {
  Component,
  computed,
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
import { toSignal } from '@angular/core/rxjs-interop';

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
          [analogVersions]="analogVersions()"
          [angularVersions]="versionGroup()"
          [projectCategories]="categories()"
          [uiLibs]="projectsUIlib()"
          [(ngModel)]="filter"
        />

        <div class="total">
          @if (!isFilterActive()) {
            <p>All Projects: {{ projects().length }}</p>
          } @else {
            <p>Projects found: {{ filteredProjects().length }}</p>
          }
        </div>
      </div>
      <div class="cards-wrapper">
        @for (project of filteredProjects(); track project) {
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
export default class HomeComponent {
  readonly #http = inject(HttpClient);
  readonly #route = inject(ActivatedRoute);
  readonly #router = inject(Router);

  readonly projects = toSignal(
    this.#http.get<Project[]>('https://builtwithanalog.dev/api/projects'),
    { initialValue: [] },
  );

  readonly categories = computed(() => {
    const projects = this.projects();
    return [...new Set(projects.map((project) => project.category))];
  });

  readonly versionGroup = computed(() => {
    const projects = this.projects();
    return [...new Set(projects.map((project) => project.versionGroup))];
  });

  readonly analogVersions = computed(() => {
    const projects = this.projects();
    return [...new Set(projects.map((project) => project.analogVersion))];
  });

  readonly projectsUIlib = computed(() => {
    const projects = this.projects();
    return [
      ...new Set(projects.map((project) => project.uiLib.split(', ')).flat()),
    ];
  });

  readonly filter = model<Filter>({
    analogVersion: null,
    category: null,
    uiLib: null,
    versionGroup: null,
    isUsing3D: null,
    isFree: null,
  });

  readonly filteredProjects = computed(() => {
    const projects = this.projects();
    const filter = this.filter();

    return projects.filter((project) => {
      return (
        (filter.category === null || project.category === filter.category) &&
        (filter.analogVersion === null ||
          project.analogVersion === filter.analogVersion) &&
        (filter.uiLib === null ||
          project.uiLib.split(', ').includes(filter.uiLib)) &&
        (filter.versionGroup === null ||
          project.versionGroup === filter.versionGroup) &&
        (filter.isFree === null || filter.isFree
          ? project.pricing === 'Free'
          : project.pricing !== 'Free') &&
        (filter.isUsing3D === null || project.threeD === filter.isUsing3D)
      );
    });
  });

  readonly isFilterActive = computed(() => {
    const filter = this.filter();
    return Object.values(filter).some((value) => value !== null);
  });

  constructor() {
    this.#seedFilter();

    const syncFilterWithQueryParams = effect(() => {
      const filter = this.filter();
      untracked(() => this.#updateQueryParams(filter));
    });
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
