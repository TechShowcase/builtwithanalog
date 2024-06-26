import { d as defineEventHandler } from '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'file:///D:/Estee/Programming/My-Open-Source/TechShowcase/builtwithanalog/node_modules/@analogjs/vite-plugin-nitro/src/lib/runtime/api-middleware.mjs';

const projects_get = defineEventHandler(() => [
  {
    name: "Spartan UI",
    imageSrc: "https://raw.githubusercontent.com/TechShowcase/images/main/projects/spartan-ui.jpg",
    url: "https://www.spartan.ng",
    category: "Open Source",
    version: "17.3.0",
    versionGroup: "v15 and up",
    analogVersion: "1.2.2",
    uiLib: "Spartan UI",
    pricing: "Free",
    threeD: false,
    developer: "Robin Goetz"
  },
  {
    name: "AngleBrackets",
    imageSrc: "https://raw.githubusercontent.com/TechShowcase/images/main/projects/anglebrackets.jpg",
    url: "https://anglebrackets.dev",
    category: "Personal Website",
    version: "17.3.0",
    versionGroup: "v15 and up",
    analogVersion: "1.3.1",
    uiLib: "None",
    pricing: "Free",
    threeD: false,
    developer: "Duncan Faulkner"
  },
  {
    name: "Angular Macedonia",
    imageSrc: "https://raw.githubusercontent.com/TechShowcase/images/main/projects/angular-macedonia.jpg",
    url: "https://www.angularmacedonia.org",
    category: "Community",
    version: "17.2.0",
    versionGroup: "v15 and up",
    analogVersion: "0.2.0",
    uiLib: "None",
    pricing: "Free",
    threeD: false,
    developer: "Angular Macedonia"
  },
  {
    name: "MrRobot",
    imageSrc: "https://raw.githubusercontent.com/TechShowcase/images/main/projects/mrrobot.jpg",
    url: "https://mrrobot.dev",
    category: "Personal Website",
    version: "17.3.2",
    versionGroup: "v15 and up",
    analogVersion: "1.2.0",
    uiLib: "None",
    pricing: "Free",
    threeD: false,
    developer: "Luis Castro"
  },
  {
    name: "AnguHashBlog",
    imageSrc: "https://raw.githubusercontent.com/TechShowcase/images/main/projects/analog-anguhashblog.jpg",
    url: "https://analog.anguhashblog.com",
    category: "Open Source",
    version: "17.3.0",
    versionGroup: "v15 and up",
    analogVersion: "1.2.0",
    uiLib: "None",
    pricing: "Free",
    threeD: false,
    developer: "Esther White"
  },
  {
    name: "Angular HUB",
    imageSrc: "https://raw.githubusercontent.com/TechShowcase/images/main/projects/angular-hub.jpg",
    url: "https://angular-hub.com",
    category: "Community",
    version: "18.0.0",
    versionGroup: "v15 and up",
    analogVersion: "1.4.0",
    uiLib: "PrimeNG",
    pricing: "Free",
    threeD: false,
    developer: "Gerome Grignon"
  },
  {
    name: "PDFun",
    imageSrc: "https://raw.githubusercontent.com/TechShowcase/images/main/projects/pdfun.jpg",
    url: "https://pdfun.xyz",
    category: "Open Source",
    version: "18.0.0",
    versionGroup: "v15 and up",
    analogVersion: "1.3.1",
    uiLib: "PrimeNG",
    pricing: "Free",
    threeD: false,
    developer: "Dale Nguyen"
  },
  {
    name: "Angular Belgrade",
    imageSrc: "https://raw.githubusercontent.com/TechShowcase/images/main/projects/angular-belgrade.jpg",
    url: "https://angularbelgrade.org",
    category: "Community",
    version: "16.2.2",
    versionGroup: "v15 and up",
    analogVersion: "0.2.0",
    uiLib: "None",
    pricing: "Free",
    threeD: false,
    developer: "Angular Belgrade"
  }
]);

export { projects_get as default };
//# sourceMappingURL=projects.get.mjs.map
