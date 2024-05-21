import { c as __defineComponent, i as inject, H as HttpClient, e as __StandaloneFeature, w as __elementStart, x as __text, y as __elementEnd, f as __element, z as __repeaterCreate, B as __advance, C as __repeater, E as __repeaterTrackByIdentity, F as __propertyInterpolate1, G as __sanitizeUrl, J as __propertyInterpolate } from "../main.server.js";
import "zone.js/node";
import "rxjs";
import "rxjs/operators";
function HomeComponent_For_50_Template(rf, ctx) {
  if (rf & 1) {
    __elementStart(0, "a", 26)(1, "div", 27);
    __element(2, "img", 28);
    __elementEnd()();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    __propertyInterpolate1("href", "", project_r1.url, "?source=builtwithangular.dev", __sanitizeUrl);
    __advance(2);
    __propertyInterpolate("src", project_r1.imageSrc, __sanitizeUrl);
    __propertyInterpolate("alt", project_r1.name);
  }
}
let HomeComponent = /* @__PURE__ */ (() => {
  var _HomeComponent;
  class HomeComponent2 {
    constructor() {
      this.projects = [];
      this.filteredProjects = [];
      this.categories = [];
      this.projectsStructure = [];
      this.projectsUIlib = [];
      this.versionGroup = [];
      this.filterApplied = false;
      this.selectedCategory = "";
      this.selectedVersionGroup = "";
      this.selectedStructure = "";
      this.selectedUIlib = "";
      this.showFree = false;
      this.http = inject(HttpClient);
    }
    ngOnInit() {
      this.http.get("https://builtwithanalog.dev/api/projects").subscribe((projects) => {
        this.projects = projects;
        this.categories = Array.from(new Set(this.projects.map((project) => project.category)));
        this.projectsStructure = Array.from(new Set(this.projects.map((project) => project.structure)));
        this.projectsUIlib = Array.from(new Set(this.projects.map((project) => project.uiLib.split(", ")).flat()));
        this.versionGroup = Array.from(new Set(this.projects.map((project) => project.versionGroup)));
      });
    }
    applyFilter() {
      this.filterApplied = true;
      this.filteredProjects = this.projects.filter((project) => {
        return (this.selectedCategory === "" || project.category === this.selectedCategory) && (this.selectedStructure === "" || project.structure === this.selectedStructure) && (this.selectedUIlib === "" || project.uiLib.split(", ").includes(this.selectedUIlib)) && (this.selectedVersionGroup === "" || project.versionGroup === this.selectedVersionGroup) && (!this.showFree || project.pricing === "Free");
      });
    }
    clearFilters() {
      this.filterApplied = false;
      this.selectedCategory = "";
      this.selectedStructure = "";
      this.selectedUIlib = "";
      this.selectedVersionGroup = "";
      this.showFree = false;
    }
    isVersion16OrAbove(version) {
      const majorVersion = parseInt(version.split(".")[0], 10);
      return majorVersion >= 16;
    }
  }
  _HomeComponent = HomeComponent2;
  _HomeComponent.ɵfac = function HomeComponent_Factory(t) {
    return new (t || _HomeComponent)();
  };
  _HomeComponent.ɵcmp = /* @__PURE__ */ __defineComponent({
    type: _HomeComponent,
    selectors: [["app-home"]],
    standalone: true,
    features: [__StandaloneFeature],
    decls: 51,
    vars: 0,
    consts: [[1, "content"], [1, "filtering"], ["id", "filter-form", 1, "filtering-actions"], ["name", "type", "id", "type", "value", "type"], ["selected", "", "hidden", "", "disabled", ""], ["value", "open-source"], ["value", "productivity"], ["value", "template"], ["name", "angular-version", "id", "angular-version"], ["value", "v15"], ["value", "v10-v15"], ["value", "earlier-than-v10"], ["name", "structure", "id", "structure"], ["value", "modules"], ["value", "standalone"], ["name", "ui-lib", "id", "ui-lib"], ["value", "none"], ["value", "angular-material"], ["value", "primeng"], ["value", "spartan"], [1, "checkbox-wrapper"], ["type", "checkbox", "name", "checkbox", 1, "checkbox"], ["for", "checkbox"], ["type", "reset"], [1, "total"], [1, "cards-wrapper"], ["target", "_blank", 3, "href"], [1, "card"], [3, "src", "alt"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        __elementStart(0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "select", 3)(4, "option", 4);
        __text(5, "Type");
        __elementEnd();
        __elementStart(6, "option", 5);
        __text(7, "Open Source");
        __elementEnd();
        __elementStart(8, "option", 6);
        __text(9, "Productivity");
        __elementEnd();
        __elementStart(10, "option", 7);
        __text(11, "Template");
        __elementEnd()();
        __elementStart(12, "select", 8)(13, "option", 4);
        __text(14, "Angular Version");
        __elementEnd();
        __elementStart(15, "option", 9);
        __text(16, "v15 and up");
        __elementEnd();
        __elementStart(17, "option", 10);
        __text(18, "v10 - v15");
        __elementEnd();
        __elementStart(19, "option", 11);
        __text(20, "earlier than v10");
        __elementEnd()();
        __elementStart(21, "select", 12)(22, "option", 4);
        __text(23, "Angular Structure");
        __elementEnd();
        __elementStart(24, "option", 13);
        __text(25, "Modules");
        __elementEnd();
        __elementStart(26, "option", 14);
        __text(27, "Standalone");
        __elementEnd()();
        __elementStart(28, "select", 15)(29, "option", 4);
        __text(30, "UI Library");
        __elementEnd();
        __elementStart(31, "option", 16);
        __text(32, "None");
        __elementEnd();
        __elementStart(33, "option", 17);
        __text(34, "Angular Material");
        __elementEnd();
        __elementStart(35, "option", 18);
        __text(36, "PrimeNG");
        __elementEnd();
        __elementStart(37, "option", 19);
        __text(38, "Spartan UI");
        __elementEnd()();
        __elementStart(39, "div", 20);
        __element(40, "input", 21);
        __elementStart(41, "label", 22);
        __text(42, "Free");
        __elementEnd()();
        __elementStart(43, "button", 23);
        __text(44, "Clear Filters");
        __elementEnd()();
        __elementStart(45, "div", 24)(46, "p");
        __text(47, "Projects found: 100");
        __elementEnd()()();
        __elementStart(48, "div", 25);
        __repeaterCreate(49, HomeComponent_For_50_Template, 3, 4, "a", 26, __repeaterTrackByIdentity);
        __elementEnd()();
      }
      if (rf & 2) {
        __advance(49);
        __repeater(ctx.projects);
      }
    },
    styles: [".content[_ngcontent-%COMP%] {\n				display: flex;\n				flex-direction: column;\n				align-items: center;\n				justify-content: flex-start;\n				min-height: 70vh;\n				margin: 1rem;\n\n				.filtering {\n					display: flex;\n					flex-direction: column;\n					form {\n						display: flex;\n						align-items: center;\n						gap: 1rem;\n\n						select {\n							padding: 0.8rem 0.5rem 0.8rem 0.4rem;\n							font-size: 1rem;\n							width: 10rem;\n							border-top: none;\n							border-right: none;\n							border-left: none;\n							border-bottom: 2px solid transparent;\n							border-radius: 0.5rem 0.5rem 0 0;\n							cursor: pointer;\n\n							&:focus {\n								outline: none;\n								border-bottom: 2px solid #646cff;\n							}\n						}\n\n						.checkbox-wrapper {\n							display: flex;\n							align-items: center;\n							gap: 0.3rem;\n\n							.checkbox {\n								height: 1.1rem;\n								width: 1.1rem;\n								cursor: pointer;\n							}\n							label {\n								font-size: 1.1rem;\n							}\n						}\n					}\n\n					.total {\n						display: flex;\n						justify-content: center;\n						padding: 0.5rem;\n\n						p {\n							font-size: 1rem;\n						}\n					}\n				}\n\n				.cards-wrapper {\n					display: flex;\n					gap: 1.5rem;\n					margin-top: 1rem;\n\n					.card {\n						width: 20rem;\n					}\n				}\n			}"]
  });
  return HomeComponent2;
})();
/* @__PURE__ */ (() => {
})();
export {
  HomeComponent as default
};
