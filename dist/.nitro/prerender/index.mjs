import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, fetchWithEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, setResponseHeader, send, removeResponseHeader, createError, getResponseHeader, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler } from 'file://D:/Estee/Programming/My-Open-Source/TechShowcase/builtwithanalog/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file://D:/Estee/Programming/My-Open-Source/TechShowcase/builtwithanalog/node_modules/ofetch/dist/node.mjs';
import destr from 'file://D:/Estee/Programming/My-Open-Source/TechShowcase/builtwithanalog/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://D:/Estee/Programming/My-Open-Source/TechShowcase/builtwithanalog/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://D:/Estee/Programming/My-Open-Source/TechShowcase/builtwithanalog/node_modules/hookable/dist/index.mjs';
import { klona } from 'file://D:/Estee/Programming/My-Open-Source/TechShowcase/builtwithanalog/node_modules/klona/dist/index.mjs';
import { snakeCase } from 'file://D:/Estee/Programming/My-Open-Source/TechShowcase/builtwithanalog/node_modules/scule/dist/index.mjs';
import defu, { defuFn } from 'file://D:/Estee/Programming/My-Open-Source/TechShowcase/builtwithanalog/node_modules/defu/dist/defu.mjs';
import { hash } from 'file://D:/Estee/Programming/My-Open-Source/TechShowcase/builtwithanalog/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file://D:/Estee/Programming/My-Open-Source/TechShowcase/builtwithanalog/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://D:/Estee/Programming/My-Open-Source/TechShowcase/builtwithanalog/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://D:/Estee/Programming/My-Open-Source/TechShowcase/builtwithanalog/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47fs_45lite from 'file://D:/Estee/Programming/My-Open-Source/TechShowcase/builtwithanalog/node_modules/unstorage/drivers/fs-lite.mjs';
import { toRouteMatcher, createRouter } from 'file://D:/Estee/Programming/My-Open-Source/TechShowcase/builtwithanalog/node_modules/radix3/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file://D:/Estee/Programming/My-Open-Source/TechShowcase/builtwithanalog/node_modules/pathe/dist/index.mjs';
import _FskY57 from 'file:///D:/Estee/Programming/My-Open-Source/TechShowcase/builtwithanalog/node_modules/@analogjs/vite-plugin-nitro/src/lib/runtime/api-middleware.mjs';

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {}
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  {
    return _sharedRuntimeConfig;
  }
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"public","dir":"D:/Estee/Programming/My-Open-Source/TechShowcase/builtwithanalog/dist/client"},{"baseName":"server","dir":"D:/Estee/Programming/My-Open-Source/TechShowcase/builtwithanalog/src/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"D:\\Estee\\Programming\\My-Open-Source\\TechShowcase\\builtwithanalog\\.data\\kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\Estee\\Programming\\My-Open-Source\\TechShowcase\\builtwithanalog","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\Estee\\Programming\\My-Open-Source\\TechShowcase\\builtwithanalog\\src\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\Estee\\Programming\\My-Open-Source\\TechShowcase\\builtwithanalog\\dist\\.nitro","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\Estee\\Programming\\My-Open-Source\\TechShowcase\\builtwithanalog\\dist\\.nitro\\cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function defineNitroErrorHandler(handler) {
  return handler;
}
const errorHandler = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const { stack, statusCode, statusMessage, message } = normalizeError(error);
    const errorObject = {
      url: event.path || "",
      statusCode,
      statusMessage,
      message,
      stack: void 0
    };
    if (error.unhandled || error.fatal) {
      const tags = [
        "[nitro]",
        "[request error]",
        error.unhandled && "[unhandled]",
        error.fatal && "[fatal]"
      ].filter(Boolean).join(" ");
      console.error(
        tags,
        error.message + "\n" + stack.map((l) => "  " + l.text).join("  \n")
      );
    }
    setResponseStatus(event, statusCode, statusMessage);
    if (isJsonRequest(event)) {
      setResponseHeader(event, "Content-Type", "application/json");
      return send(event, JSON.stringify(errorObject));
    } else {
      setResponseHeader(event, "Content-Type", "text/html");
      return send(event, renderHTMLError(errorObject));
    }
  }
);
function renderHTMLError(error) {
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Request Error";
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${statusCode} ${statusMessage}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico/css/pico.min.css">
  </head>
  <body>
    <main class="container">
      <dialog open>
        <article>
          <header>
            <h2>${statusCode} ${statusMessage}</h2>
          </header>
          <code>
            ${error.message}<br><br>
            ${"\n" + (error.stack || []).map((i) => `&nbsp;&nbsp;${i}`).join("<br>")}
          </code>
          <footer>
            <a href="/" onclick="event.preventDefault();history.back();">Go Back</a>
          </footer>
        </article>
      </dialog>
    </main>
  </body>
</html>
`;
}

const assets = {
  "/.gitkeep": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2024-05-31T07:40:47.778Z",
    "size": 0,
    "path": "../../analog/public/.gitkeep"
  },
  "/analog.svg": {
    "type": "image/svg+xml",
    "etag": "\"2f59-onYRgu96DadF9OF8r3hf4CPH2vk\"",
    "mtime": "2024-05-31T07:40:47.778Z",
    "size": 12121,
    "path": "../../analog/public/analog.svg"
  },
  "/vite.svg": {
    "type": "image/svg+xml",
    "etag": "\"5d9-9/Odcje3kalF1Spc16j7Nl8xM2Y\"",
    "mtime": "2024-05-31T07:40:47.813Z",
    "size": 1497,
    "path": "../../analog/public/vite.svg"
  },
  "/assets/(home).page-C9QXUqvl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2665f-T1MtFjc9Ib6tRFHRqYgZB1uziGQ\"",
    "mtime": "2024-06-04T17:48:11.337Z",
    "size": 157279,
    "path": "../../analog/public/assets/(home).page-C9QXUqvl.js"
  },
  "/assets/about.page-l__gUyQV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bc0-w/dKapp1k1S4nKTWo18vmIq3024\"",
    "mtime": "2024-06-04T17:48:11.337Z",
    "size": 3008,
    "path": "../../analog/public/assets/about.page-l__gUyQV.js"
  },
  "/assets/analogjs-content-qWF26wBA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"21f49-GkpgBGeXu1pjtp2a6PT6F06Ktio\"",
    "mtime": "2024-06-04T17:48:11.337Z",
    "size": 139081,
    "path": "../../analog/public/assets/analogjs-content-qWF26wBA.js"
  },
  "/assets/animations-gzmyZphA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1082-UkD6a2giqTdxfS9MSVOT13mTyp0\"",
    "mtime": "2024-06-04T17:48:11.337Z",
    "size": 4226,
    "path": "../../analog/public/assets/animations-gzmyZphA.js"
  },
  "/assets/browser-k2cBl3hX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"faa9-MAWOkdjQNLRacv+XmZYg6nPxW6c\"",
    "mtime": "2024-06-04T17:48:11.337Z",
    "size": 64169,
    "path": "../../analog/public/assets/browser-k2cBl3hX.js"
  },
  "/assets/color-OBgXniE1.png": {
    "type": "image/png",
    "etag": "\"2873-/0xLyyIHiRspL1RO202p0t9dRc8\"",
    "mtime": "2024-06-04T17:48:11.337Z",
    "size": 10355,
    "path": "../../analog/public/assets/color-OBgXniE1.png"
  },
  "/assets/favicon-ozIGJLo5.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"bb0-s6OeFNi9zSqDrxgeIIIUvb1T+j8\"",
    "mtime": "2024-06-04T17:48:11.321Z",
    "size": 2992,
    "path": "../../analog/public/assets/favicon-ozIGJLo5.ico"
  },
  "/assets/fqa.page-g53Q60h5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4547-YULr0wsJE06/6RkVWkXWvVfypF0\"",
    "mtime": "2024-06-04T17:48:11.337Z",
    "size": 17735,
    "path": "../../analog/public/assets/fqa.page-g53Q60h5.js"
  },
  "/assets/index-CofSVcJW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5466d-nJOGXs1U817mg6sOq8VeeG5NnJA\"",
    "mtime": "2024-06-04T17:48:11.338Z",
    "size": 345709,
    "path": "../../analog/public/assets/index-CofSVcJW.js"
  },
  "/assets/index-_1exa9sb.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2dabd-e/tZPnKE9bIScbKTsw/BdSrEdFU\"",
    "mtime": "2024-06-04T17:48:11.337Z",
    "size": 187069,
    "path": "../../analog/public/assets/index-_1exa9sb.css"
  },
  "/assets/Inter-italic.var-DhD-tpjY.woff2": {
    "type": "font/woff2",
    "etag": "\"3bd2c-byCgRpF7+G1LbMKcTiUVvWTSy5s\"",
    "mtime": "2024-06-04T17:48:11.337Z",
    "size": 245036,
    "path": "../../analog/public/assets/Inter-italic.var-DhD-tpjY.woff2"
  },
  "/assets/Inter-roman.var-C-r5W2Hj.woff2": {
    "type": "font/woff2",
    "etag": "\"3776c-eiYC0uuwjOiV4zrdtv5ZXxApQx4\"",
    "mtime": "2024-06-04T17:48:11.336Z",
    "size": 227180,
    "path": "../../analog/public/assets/Inter-roman.var-C-r5W2Hj.woff2"
  },
  "/assets/primeicons-C6QP2o4f.woff2": {
    "type": "font/woff2",
    "etag": "\"894c-g3wSebavnSl/NP20Pm/MkgannzI\"",
    "mtime": "2024-06-04T17:48:11.337Z",
    "size": 35148,
    "path": "../../analog/public/assets/primeicons-C6QP2o4f.woff2"
  },
  "/assets/primeicons-DMOk5skT.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"14ca4-4k7BPpU2bIK6aaghv2Wg6u8pRQw\"",
    "mtime": "2024-06-04T17:48:11.336Z",
    "size": 85156,
    "path": "../../analog/public/assets/primeicons-DMOk5skT.eot"
  },
  "/assets/primeicons-Dr5RGzOO.svg": {
    "type": "image/svg+xml",
    "etag": "\"539fd-oHrjkCfBp4C0L9gvrXV1wpJNnSg\"",
    "mtime": "2024-06-04T17:48:11.337Z",
    "size": 342525,
    "path": "../../analog/public/assets/primeicons-Dr5RGzOO.svg"
  },
  "/assets/primeicons-MpK4pl85.ttf": {
    "type": "font/ttf",
    "etag": "\"14bf4-O4eMp+iJRajsJYFIELlTZ9iXeuY\"",
    "mtime": "2024-06-04T17:48:11.337Z",
    "size": 84980,
    "path": "../../analog/public/assets/primeicons-MpK4pl85.ttf"
  },
  "/assets/primeicons-WjwUDZjB.woff": {
    "type": "font/woff",
    "etag": "\"14c40-Nh469xu05RX+6tL3hzSKkqVScVg\"",
    "mtime": "2024-06-04T17:48:11.337Z",
    "size": 85056,
    "path": "../../analog/public/assets/primeicons-WjwUDZjB.woff"
  },
  "/assets/primeng-card-4FJaDpPI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"df1-IIdnIpPse/l4PbuiLgeGELZoVDQ\"",
    "mtime": "2024-06-04T17:48:11.337Z",
    "size": 3569,
    "path": "../../analog/public/assets/primeng-card-4FJaDpPI.js"
  },
  "/assets/primeng-icons-chevrondown-1HPDuIud.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"488b-NR9qoRaTSBq4vX29UE/Huk394hs\"",
    "mtime": "2024-06-04T17:48:11.337Z",
    "size": 18571,
    "path": "../../analog/public/assets/primeng-icons-chevrondown-1HPDuIud.js"
  },
  "/images/projects/analog-anguhashblog.jpg": {
    "type": "image/jpeg",
    "etag": "\"543a5-/tOxU59gZkC/II/CHE7mi7CzjjI\"",
    "mtime": "2024-05-21T19:10:52.697Z",
    "size": 344997,
    "path": "../../analog/public/images/projects/analog-anguhashblog.jpg"
  },
  "/images/projects/anglebrackets.jpg": {
    "type": "image/jpeg",
    "etag": "\"6f55d-7av8rcHcC9YwnxIK/3oC6cC7qfQ\"",
    "mtime": "2024-05-21T14:52:43.783Z",
    "size": 456029,
    "path": "../../analog/public/images/projects/anglebrackets.jpg"
  },
  "/images/projects/anguhashblog.jpg": {
    "type": "image/jpeg",
    "etag": "\"547c6-W7h723l+itNnVsJyfox0EKF1BFU\"",
    "mtime": "2024-05-31T07:40:47.782Z",
    "size": 346054,
    "path": "../../analog/public/images/projects/anguhashblog.jpg"
  },
  "/images/projects/angular-belgrade.jpg": {
    "type": "image/jpeg",
    "etag": "\"3e93c-L32X5AhJI6Rw5P3A3oQJYgYnUJs\"",
    "mtime": "2024-05-31T13:34:17.423Z",
    "size": 256316,
    "path": "../../analog/public/images/projects/angular-belgrade.jpg"
  },
  "/images/projects/angular-hub.jpg": {
    "type": "image/jpeg",
    "etag": "\"bb08c-r3p2sqOpvIRHYzn1MhG/DdQACL0\"",
    "mtime": "2024-05-31T04:56:59.772Z",
    "size": 766092,
    "path": "../../analog/public/images/projects/angular-hub.jpg"
  },
  "/images/projects/angular-macedonia.jpg": {
    "type": "image/jpeg",
    "etag": "\"305a2-nUgu6v7SrT+Wnrz27ldtp33+wPI\"",
    "mtime": "2024-05-22T20:15:14.849Z",
    "size": 198050,
    "path": "../../analog/public/images/projects/angular-macedonia.jpg"
  },
  "/images/projects/builtwithanalog.jpg": {
    "type": "image/jpeg",
    "etag": "\"691e1-jSvkNKjd2MtRPew6tszYmFw+96k\"",
    "mtime": "2024-05-31T13:46:56.158Z",
    "size": 430561,
    "path": "../../analog/public/images/projects/builtwithanalog.jpg"
  },
  "/images/projects/mrrobot.jpg": {
    "type": "image/jpeg",
    "etag": "\"268fc-n6un0Ry5IcHf056pJkGB/LVUKYQ\"",
    "mtime": "2024-05-22T20:50:45.254Z",
    "size": 157948,
    "path": "../../analog/public/images/projects/mrrobot.jpg"
  },
  "/images/projects/pdfun.jpg": {
    "type": "image/jpeg",
    "etag": "\"12104-wUAMtGDyK2/cgq92D8Q+2AQnY58\"",
    "mtime": "2024-05-31T04:59:36.452Z",
    "size": 73988,
    "path": "../../analog/public/images/projects/pdfun.jpg"
  },
  "/images/projects/spartan-ui.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a49a-YKiHHpY5NXMxk4w3LtFOPoAT5II\"",
    "mtime": "2024-05-21T18:06:47.294Z",
    "size": 107674,
    "path": "../../analog/public/images/projects/spartan-ui.jpg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_YifxHs = () => import('./chunks/routes/projects.get.mjs');
const _lazy_eVR5kI = () => import('./chunks/routes/v1/hello.mjs');
const _lazy_XzqrwR = () => import('file://D:/Estee/Programming/My-Open-Source/TechShowcase/builtwithanalog/node_modules/@analogjs/vite-plugin-nitro/src/lib/runtime/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/projects', handler: _lazy_YifxHs, lazy: true, middleware: false, method: "get" },
  { route: '/v1/hello', handler: _lazy_eVR5kI, lazy: true, middleware: false, method: undefined },
  { route: '', handler: _FskY57, lazy: false, middleware: true, method: undefined },
  { route: '/**', handler: _lazy_XzqrwR, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
const closePrerenderer = () => nitroApp.hooks.callHook("close");
trapUnhandledNodeErrors();

export { closePrerenderer, localFetch };
//# sourceMappingURL=index.mjs.map
