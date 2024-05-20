import { d as defineEventHandler } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'file:///D:/Estee/Programming/My-Open-Source/TechShowcase/builtwithanalog/node_modules/@analogjs/vite-plugin-nitro/src/lib/runtime/api-middleware.mjs';

const hello = defineEventHandler(() => ({ message: "Hello World" }));

export { hello as default };
//# sourceMappingURL=hello.mjs.map
