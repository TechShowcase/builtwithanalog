import { c as __defineComponent, e as __StandaloneFeature, w as __elementStart, x as __text, y as __elementEnd } from "../main.server.js";
import "zone.js/node";
import "rxjs";
import "rxjs/operators";
let FqaPageComponent = /* @__PURE__ */ (() => {
  var _FqaPageComponent;
  class FqaPageComponent2 {
  }
  _FqaPageComponent = FqaPageComponent2;
  _FqaPageComponent.ɵfac = function FqaPageComponent_Factory(t) {
    return new (t || _FqaPageComponent)();
  };
  _FqaPageComponent.ɵcmp = /* @__PURE__ */ __defineComponent({
    type: _FqaPageComponent,
    selectors: [["ng-component"]],
    standalone: true,
    features: [__StandaloneFeature],
    decls: 40,
    vars: 0,
    consts: [[1, "content"], [1, "details-panel"], [1, "card"], ["href", "https://github.com/orgs/TechShowcase/discussions", "target", "_blank"], ["href", "https://github.com/orgs/TechShowcase/discussions/1", "target", "_blank"]],
    template: function FqaPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        __elementStart(0, "div", 0)(1, "h1");
        __text(2, "FQA");
        __elementEnd();
        __elementStart(3, "div", 1)(4, "details", 2)(5, "summary");
        __text(6, " Is it free to list my project on builtwithanalog.dev? ");
        __elementEnd();
        __elementStart(7, "p");
        __text(8, " Yes, it is completely free to showcase any ");
        __elementStart(9, "strong");
        __text(10, "open source");
        __elementEnd();
        __text(11, " or free-to-use projects on builtwithangular.dev. Our primary goal is to provide a platform for Angular developers to highlight their work, especially those projects that are freely available to the community. ");
        __elementEnd();
        __elementStart(12, "p");
        __text(13, " Additionally, if you have a project that you intend to sell, we also support showcasing these. For projects with a price, there is a one-time listing fee. ");
        __elementEnd()();
        __elementStart(14, "details", 2)(15, "summary");
        __text(16, " How do I submit my project to be showcased on builtwithanalog.dev? ");
        __elementEnd();
        __elementStart(17, "p");
        __text(18, " Submitting your project for showcase is simple! Just head over to our GitHub organization and navigate to the ");
        __elementStart(19, "a", 3);
        __text(20, "Discussions");
        __elementEnd();
        __text(21, " section. There, you'll find ");
        __elementStart(22, "a", 4);
        __text(23, "Instructions");
        __elementEnd();
        __text(24, " and option to provide details about your project. Once you've added your project for consideration our team will review it. If your project is free and meets our criteria, we'll add it right away to our showcase for the Angular community to explore and enjoy! ");
        __elementEnd()();
        __elementStart(25, "details", 2)(26, "summary");
        __text(27, " Is there a limit to the number of projects I can showcase? ");
        __elementEnd();
        __elementStart(28, "p");
        __text(29, " Currently here is no limit to the number of projects you can showcase on builtwithangular.dev. Whether you have one project or multiple, we encourage you to submit them all for consideration. Each project will undergo review independently. ");
        __elementEnd()();
        __elementStart(30, "details", 2)(31, "summary");
        __text(32, " How can I update information about my showcased project? ");
        __elementEnd();
        __elementStart(33, "p");
        __text(34, " >If you need to update information about your showcased project, simply send an email to [contact email], detailing the changes you'd like to make. Our team will review your request and update the information accordingly. ");
        __elementEnd()();
        __elementStart(35, "details", 2)(36, "summary");
        __text(37, " Can I remove my project from the showcase once it's been listed? ");
        __elementEnd();
        __elementStart(38, "p");
        __text(39, " Yes, you can request to remove your project from the showcase at any time. Simply send us an email at [contact email] with your request, and we'll remove your project from the listing promptly. ");
        __elementEnd()()()();
      }
    },
    styles: ['.content[_ngcontent-%COMP%] {\n				display: flex;\n				flex-direction: column;\n				align-items: center;\n				justify-content: flex-start;\n				min-height: 85vh;\n\n				.details-panel {\n					width: 50vw;\n\n					details {\n						margin: 1rem 0;\n\n						summary {\n							font-size: 1.2rem;\n							width: 50vw;\n							cursor: pointer;\n\n							&::marker {\n								position: absolute;\n								content: "";\n							}\n						}\n					}\n				}\n			}']
  });
  return FqaPageComponent2;
})();
/* @__PURE__ */ (() => {
})();
export {
  FqaPageComponent as default
};
