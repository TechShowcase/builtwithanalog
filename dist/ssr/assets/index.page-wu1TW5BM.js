import { c as __defineComponent, e as __StandaloneFeature, w as __elementStart, f as __element, x as __elementEnd, y as __text, r as __listener, z as __advance, B as __textInterpolate1 } from "../main.server.js";
import "zone.js/node";
import "rxjs";
import "rxjs/operators";
let HomeComponent = /* @__PURE__ */ (() => {
  var _HomeComponent;
  class HomeComponent2 {
    constructor() {
      this.count = 0;
    }
    increment() {
      this.count++;
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
    decls: 14,
    vars: 1,
    consts: [["href", "https://analogjs.org/", "target", "_blank"], ["alt", "Analog Logo", "src", "/analog.svg", 1, "logo", "analog"], [1, "card"], ["type", "button", 3, "click"], [1, "read-the-docs"], ["href", "https://analogjs.org", "target", "_blank"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        __elementStart(0, "div")(1, "a", 0);
        __element(2, "img", 1);
        __elementEnd()();
        __elementStart(3, "h2");
        __text(4, "Analog");
        __elementEnd();
        __elementStart(5, "h3");
        __text(6, "The fullstack meta-framework for Angular!");
        __elementEnd();
        __elementStart(7, "div", 2)(8, "button", 3);
        __listener("click", function HomeComponent_Template_button_click_8_listener() {
          return ctx.increment();
        });
        __text(9);
        __elementEnd()();
        __elementStart(10, "p", 4);
        __text(11, " For guides on how to customize this project, visit the ");
        __elementStart(12, "a", 5);
        __text(13, "Analog documentation");
        __elementEnd()();
      }
      if (rf & 2) {
        __advance(9);
        __textInterpolate1("Count ", ctx.count, "");
      }
    },
    styles: [".logo[_ngcontent-%COMP%] {\n        will-change: filter;\n      }\n      .logo[_ngcontent-%COMP%]:hover {\n        filter: drop-shadow(0 0 2em #646cffaa);\n      }\n      .read-the-docs[_ngcontent-%COMP%] {\n        color: #888;\n      }"]
  });
  return HomeComponent2;
})();
/* @__PURE__ */ (() => {
})();
export {
  HomeComponent as default
};
