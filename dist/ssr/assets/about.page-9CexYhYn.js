import { c as __defineComponent, e as __StandaloneFeature, w as __elementStart, x as __text, y as __elementEnd } from "../main.server.js";
import "zone.js/node";
import "rxjs";
import "rxjs/operators";
let AboutPageComponent = /* @__PURE__ */ (() => {
  var _AboutPageComponent;
  class AboutPageComponent2 {
  }
  _AboutPageComponent = AboutPageComponent2;
  _AboutPageComponent.ɵfac = function AboutPageComponent_Factory(t) {
    return new (t || _AboutPageComponent)();
  };
  _AboutPageComponent.ɵcmp = /* @__PURE__ */ __defineComponent({
    type: _AboutPageComponent,
    selectors: [["ng-component"]],
    standalone: true,
    features: [__StandaloneFeature],
    decls: 32,
    vars: 0,
    consts: [[1, "content"], [1, "card"], ["href", "https://github.com/TechShowcase", "target", "_blank"], ["href", "https://builtwithangular.dev", "target", "_blank"], ["href", "https://builtwithanalog.dev", "target", "_blank"]],
    template: function AboutPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        __elementStart(0, "div", 0)(1, "h1");
        __text(2, "About");
        __elementEnd();
        __elementStart(3, "div", 1)(4, "h2");
        __text(5, "builtwithanalog.dev");
        __elementEnd();
        __elementStart(6, "p");
        __text(7, "is part of the");
        __elementEnd();
        __elementStart(8, "a", 2)(9, "h2");
        __text(10, "TechShowcase GitHub Organization.");
        __elementEnd()();
        __elementStart(11, "p");
        __text(12, " TechShowcase is a public organization dedicated to showcasing various projects built with our favorite technologies. All code within TechShowcase is public, we're also considering the possibility of making TechShowcase an open-source project in the future, promoting transparency and collaboration within the developer community. ");
        __elementEnd();
        __elementStart(13, "p");
        __text(14, " TechShowcase features two main repositories, each with its own dedicated website: ");
        __elementEnd();
        __elementStart(15, "ul")(16, "li");
        __text(17, " Built with Angular - ");
        __elementStart(18, "a", 3);
        __text(19, "builtwithangular.dev");
        __elementEnd()();
        __elementStart(20, "li");
        __text(21, " Built with Analog - ");
        __elementStart(22, "a", 4);
        __text(23, "builtwithanalog.dev");
        __elementEnd()()();
        __elementStart(24, "p");
        __text(25, " BuiltWithAnalog is a curated showcase of AnalogJS projects contributed by the community. Whether you're a seasoned developer or just starting with Analog, this platform is designed to make it easy for you to showcase your projects and for others to discover them. ");
        __elementEnd();
        __elementStart(26, "p");
        __text(27, " But BuiltWithAnalog is more than just a showcase. It's also a platform where developers can market their Analog apps. We believe in empowering developers by providing more opportunities to monetize their creations. So, if you have a remarkable Analog app that you've built and you're looking for ways to make it profitable, Built with Analog is the place for you. ");
        __elementEnd();
        __elementStart(28, "p");
        __text(29, " This website itself is built with Analog, demonstrating the power and versatility of the Analog framework. We're continuously improving and expanding our platform to better serve the needs of the Angular & Analog community. ");
        __elementEnd();
        __elementStart(30, "p");
        __text(31, " Join us in celebrating the creativity and innovation of Analog developers around the world. Explore, showcase, and market your Analog projects on builtwithanalog.dev today! ");
        __elementEnd()()();
      }
    },
    styles: [".content[_ngcontent-%COMP%] {\n				display: flex;\n				flex-direction: column;\n				align-items: center;\n				justify-content: flex-start;\n				min-height: 90vh;\n\n				.card {\n					width: 50vw;\n					padding: 2rem;\n					margin-bottom: 3rem;\n\n					h2 {\n						font-size: 1.3rem;\n						font-weight: 500;\n						text-align: center;\n						margin: 0 0 0.5rem 0;\n					}\n\n					p {\n						font-size: 1.1rem;\n						line-height: 1.5rem;\n						text-align: center;\n						margin: 0 0 0.6rem 0;\n					}\n\n					li {\n						font-size: 1.1rem;\n						line-height: 1.5rem;\n					}\n				}\n			}"]
  });
  return AboutPageComponent2;
})();
/* @__PURE__ */ (() => {
})();
export {
  AboutPageComponent as default
};
