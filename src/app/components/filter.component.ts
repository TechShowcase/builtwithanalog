import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  inject,
  input,
  output,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';

type FormGroupOf<TForm> = FormGroup<{
  [TKey in keyof TForm]: FormControl<TForm[TKey]>;
}>;

export interface Filter {
  category: string | null;
  versionGroup: string | null;
  analogVersion: string | null;
  uiLib: string | null;
  isFree: boolean | null;
  isUsing3D: boolean | null;
}

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DropdownModule,
    ButtonModule,
    TriStateCheckboxModule,
  ],
  template: `
    <form id="filter-form" [formGroup]="filterForm">
      <p-dropdown
        formControlName="category"
        [options]="projectCategories()"
        placeholder="Category"
      />

      <p-dropdown
        formControlName="versionGroup"
        [options]="angularVersions()"
        placeholder="Angular Version"
      />

      <p-dropdown
        formControlName="analogVersion"
        [options]="analogVersions()"
        placeholder="Analog Version"
      />

      <p-dropdown
        formControlName="uiLib"
        [options]="uiLibs()"
        placeholder="UI Library"
      />

      <div class="buttons-wrapper">
        <div class="checkbox-wrapper">
          <p-triStateCheckbox
            formControlName="isFree"
            label="Free"
            binary
            name="free"
          />
        </div>

        <div class="checkbox-wrapper">
          <p-triStateCheckbox
            formControlName="isUsing3D"
            label="3D"
            binary
            name="3D"
          />
        </div>
      </div>

      <div>
        <p-button label="Clear Filters" (onClick)="reset()" />
      </div>
    </form>
  `,
  styles: `
    #filter-form {
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
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilterComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements ControlValueAccessor {
  readonly #fb = inject(FormBuilder);

  readonly analogVersions = input.required<string[]>();

  readonly angularVersions = input.required<string[]>();

  readonly projectCategories = input.required<string[]>();

  readonly uiLibs = input.required<string[]>();

  readonly filterForm: FormGroupOf<Filter>;

  changed: (filter: Filter) => void = () => {};
  touched: () => void = () => {};

  constructor() {
    this.filterForm = this.#fb.group({
      category: this.#fb.control<string | null>(null),
      versionGroup: this.#fb.control<string | null>(null),
      analogVersion: this.#fb.control<string | null>(null),
      uiLib: this.#fb.control<string | null>(null),
      isFree: this.#fb.control<boolean | null>(null),
      isUsing3D: this.#fb.control<boolean | null>(null),
    });

    this.filterForm.valueChanges
      .pipe(
        takeUntilDestroyed(),
        map(() => this.filterForm.getRawValue())
      )
      .subscribe((filter) => {
        this.changed(filter);
        this.touched();
      });
  }
  writeValue(filter: Filter | null): void {
    filter === null ? this.reset() : this.filterForm.setValue(filter);
  }

  registerOnChange(fn: (filter: Filter) => {}): void {
    this.changed = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.touched = fn;
  }

  reset(): void {
    this.filterForm.reset();
  }
}
