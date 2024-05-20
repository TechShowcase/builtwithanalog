var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { a as assertInInjectionContext, i as inject, D as DestroyRef, ɵ as __defineDirective, I as InjectionToken, b as __defineInjectable, A as ActivatedRoute, c as __defineComponent, d as __HostDirectivesFeature, e as __StandaloneFeature, f as __element, g as __classMap, h as __property, j as __viewQuery, k as __queryRefresh, l as __loadQuery, m as __NgOnChangesFeature, n as __pipe, o as __pipeBind1, p as AsyncPipe, q as DOCUMENT, L as Location, R as Router, r as __listener, P as PendingTasks, s as DomSanitizer, N as NgZone, t as PLATFORM_ID, u as isPlatformBrowser, v as __sanitizeHtml, V as ViewContainerRef } from "../main.server.js";
import fm from "front-matter";
import { Observable, of, from, isObservable, firstValueFrom } from "rxjs";
import { takeUntil, map, switchMap, tap, mergeMap, catchError } from "rxjs/operators";
import { marked } from "marked";
import { gfmHeadingId, getHeadingList } from "marked-gfm-heading-id";
import { markedHighlight } from "marked-highlight";
import "prismjs";
import "prismjs/components/prism-bash.js";
import "prismjs/components/prism-css.js";
import "prismjs/components/prism-javascript.js";
import "prismjs/components/prism-json.js";
import "prismjs/components/prism-markup.js";
import "prismjs/components/prism-typescript.js";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js";
import "prismjs/plugins/toolbar/prism-toolbar.js";
import "zone.js/node";
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);
  privateMap.set(obj, value);
}
function _assertClassBrand(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function _classPrivateFieldGet2(s, a) {
  return s.get(_assertClassBrand(s, a));
}
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((observer) => {
    const unregisterFn = destroyRef.onDestroy(observer.next.bind(observer));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}
var _AnchorNavigationDirective2, _RenderTaskService2, _pendingTasks, _ContentRenderer2, _MarkedSetupService2, _MarkdownContentRendererService2, _marked, _AnalogMarkdownRouteComponent2, _AnalogMarkdownComponent2;
var AnchorNavigationDirective = (_AnchorNavigationDirective2 = class _AnchorNavigationDirective {
  constructor() {
    this.document = inject(DOCUMENT);
    this.location = inject(Location);
    this.router = inject(Router);
  }
  handleNavigation(element) {
    if (element instanceof HTMLAnchorElement && isInternalUrl(element, this.document) && hasTargetSelf(element) && !hasDownloadAttribute(element)) {
      const {
        pathname,
        search,
        hash
      } = element;
      const url = this.location.normalize(`${pathname}${search}${hash}`);
      this.router.navigateByUrl(url);
      return false;
    }
    return true;
  }
}, _AnchorNavigationDirective2.ɵfac = function _AnchorNavigationDirective2_Factory(t) {
  return new (t || _AnchorNavigationDirective2)();
}, _AnchorNavigationDirective2.ɵdir = /* @__PURE__ */ __defineDirective({
  type: _AnchorNavigationDirective2,
  selectors: [["", "analogAnchorNavigation", ""]],
  hostBindings: function _AnchorNavigationDirective2_HostBindings(rf, ctx) {
    if (rf & 1) {
      __listener("click", function _AnchorNavigationDirective2_click_HostBindingHandler($event) {
        return ctx.handleNavigation($event.target);
      });
    }
  },
  standalone: true
}), _AnchorNavigationDirective2);
function hasDownloadAttribute(anchorElement) {
  return anchorElement.getAttribute("download") !== null;
}
function hasTargetSelf(anchorElement) {
  return !anchorElement.target || anchorElement.target === "_self";
}
function isInternalUrl(anchorElement, document) {
  return anchorElement.host === document.location.host && anchorElement.protocol === document.location.protocol;
}
var getContentFilesList = () => /* @__PURE__ */ Object.assign({});
var getContentFiles = () => /* @__PURE__ */ Object.assign({});
var getAgxFiles = () => /* @__PURE__ */ Object.assign({});
function getSlug(filename) {
  const parts = filename.match(/^(\\|\/)(.+(\\|\/))*(.+)\.(.+)$/);
  return parts?.length ? parts[4] : "";
}
var CONTENT_FILES_LIST_TOKEN = new InjectionToken("@analogjs/content Content Files List", {
  providedIn: "root",
  factory() {
    const contentFiles = getContentFilesList();
    return Object.keys(contentFiles).map((filename) => {
      const attributes = contentFiles[filename];
      const slug = attributes["slug"];
      return {
        filename,
        attributes,
        slug: slug ? encodeURI(slug) : encodeURI(getSlug(filename))
      };
    });
  }
});
var CONTENT_FILES_TOKEN = new InjectionToken("@analogjs/content Content Files", {
  providedIn: "root",
  factory() {
    const contentFiles = getContentFiles();
    const agxFiles = getAgxFiles();
    const allFiles = {
      ...contentFiles,
      ...agxFiles
    };
    const contentFilesList = inject(CONTENT_FILES_LIST_TOKEN);
    const lookup = {};
    contentFilesList.forEach((item) => {
      const fileParts = item.filename.split("/");
      const filePath = fileParts.slice(0, fileParts.length - 1).join("/");
      const fileNameParts = fileParts[fileParts.length - 1].split(".");
      lookup[item.filename] = `${filePath}/${item.slug}.${fileNameParts[fileNameParts.length - 1]}`;
    });
    const objectUsingSlugAttribute = {};
    Object.entries(allFiles).forEach((entry) => {
      const filename = entry[0];
      const value = entry[1];
      const newFilename = lookup[filename];
      if (newFilename !== void 0) {
        objectUsingSlugAttribute[newFilename] = value;
      }
    });
    return objectUsingSlugAttribute;
  }
});
function parseRawContentFile(rawContentFile) {
  const {
    body,
    attributes
  } = fm(rawContentFile);
  return {
    content: body,
    attributes
  };
}
function waitFor(prom) {
  return __async(this, null, function* () {
    if (isObservable(prom)) {
      prom = firstValueFrom(prom);
    }
    const macroTask = Zone.current.scheduleMacroTask(`AnalogContentResolve-${Math.random()}`, () => {
    }, {}, () => {
    });
    return prom.then((p) => {
      macroTask.invoke();
      return p;
    });
  });
}
var RenderTaskService = (_pendingTasks = /* @__PURE__ */ new WeakMap(), _RenderTaskService2 = class _RenderTaskService {
  constructor() {
    _classPrivateFieldInitSpec(this, _pendingTasks, inject(PendingTasks));
  }
  addRenderTask() {
    return _classPrivateFieldGet2(_pendingTasks, this).add();
  }
  clearRenderTask(id) {
    _classPrivateFieldGet2(_pendingTasks, this).remove(id);
  }
}, _RenderTaskService2.ɵfac = function _RenderTaskService2_Factory(t) {
  return new (t || _RenderTaskService2)();
}, _RenderTaskService2.ɵprov = /* @__PURE__ */ __defineInjectable({
  token: _RenderTaskService2,
  factory: _RenderTaskService2.ɵfac
}), _RenderTaskService2);
function getContentFile(contentFiles, prefix, slug, fallback) {
  const filePath = `/src/content/${prefix}${slug}`;
  const contentFile = contentFiles[`${filePath}.md`] ?? contentFiles[`${filePath}.agx`];
  if (!contentFile) {
    return of({
      filename: filePath,
      attributes: {},
      slug: "",
      content: fallback
    });
  }
  return new Observable((observer) => {
    const contentResolver = contentFile();
    {
      waitFor(contentResolver).then((content) => {
        observer.next(content);
      });
    }
  }).pipe(map((contentFile2) => {
    if (typeof contentFile2 === "string") {
      const {
        content,
        attributes
      } = parseRawContentFile(contentFile2);
      return {
        filename: filePath,
        slug,
        attributes,
        content
      };
    }
    return {
      filename: filePath,
      slug,
      attributes: contentFile2.metadata,
      content: contentFile2.default
    };
  }));
}
function injectContent(param = "slug", fallback = "No Content Found") {
  const contentFiles = inject(CONTENT_FILES_TOKEN);
  const renderTaskService = inject(RenderTaskService);
  const task = renderTaskService.addRenderTask();
  if (typeof param === "string" || "param" in param) {
    const prefix = typeof param === "string" ? "" : `${param.subdirectory}/`;
    const route = inject(ActivatedRoute);
    const paramKey = typeof param === "string" ? param : param.param;
    return route.paramMap.pipe(map((params) => params.get(paramKey)), switchMap((slug) => {
      if (slug) {
        return getContentFile(contentFiles, prefix, slug, fallback);
      }
      return of({
        filename: "",
        slug: "",
        attributes: {},
        content: fallback
      });
    }), tap(() => renderTaskService.clearRenderTask(task)));
  } else {
    return getContentFile(contentFiles, "", param.customFilename, fallback).pipe(tap(() => renderTaskService.clearRenderTask(task)));
  }
}
var ContentRenderer = (_ContentRenderer2 = class _ContentRenderer {
  render(content) {
    return __async(this, null, function* () {
      return content;
    });
  }
  getContentHeadings() {
    return [];
  }
  // eslint-disable-next-line
  enhance() {
  }
}, _ContentRenderer2.ɵfac = function _ContentRenderer2_Factory(t) {
  return new (t || _ContentRenderer2)();
}, _ContentRenderer2.ɵprov = /* @__PURE__ */ __defineInjectable({
  token: _ContentRenderer2,
  factory: _ContentRenderer2.ɵfac
}), _ContentRenderer2);
function injectContentFiles(filterFn) {
  const renderTaskService = inject(RenderTaskService);
  const task = renderTaskService.addRenderTask();
  const allContentFiles = inject(CONTENT_FILES_LIST_TOKEN);
  renderTaskService.clearRenderTask(task);
  if (filterFn) {
    const filteredContentFiles = allContentFiles.filter(filterFn);
    return filteredContentFiles;
  }
  return allContentFiles;
}
(function() {
  if (typeof Prism === "undefined") {
    return;
  }
  Prism.languages.angular = Prism.languages.extend("markup", {
    keyword: /(?:@if|@for|@switch|@defer|@loading|@error|@placeholder|prefetch)\b/,
    operator: /\b(?:on|when)\b/,
    number: {
      pattern: /\b(minimum|after)\s+\d+(?:s|ms|)/gi,
      lookbehind: true
    },
    builtin: {
      pattern: /\b(?:viewport|timer|minimum|after|hover|idle|immediate|interaction)/
    },
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/
  });
  Prism.languages.ng = Prism.languages.angular;
})();
var MarkedSetupService = (_MarkedSetupService2 = class _MarkedSetupService {
  constructor() {
    const renderer = new marked.Renderer();
    renderer.code = (code, lang) => {
      if (lang === "mermaid") {
        return '<pre class="mermaid">' + code + "</pre>";
      }
      if (!lang) {
        return "<pre><code>" + code + "</code></pre>";
      }
      const classes = lang.startsWith("diff") && Prism.languages["diff"] ? `language-${lang} diff-highlight` : `language-${lang.replace("diff-", "")}`;
      return `<pre class="${classes}"><code class="${classes}">${code}</code></pre>`;
    };
    marked.use(gfmHeadingId(), markedHighlight({
      async: true,
      highlight: (code, lang) => {
        let diff = lang?.startsWith("diff-");
        lang = diff ? lang.replace("diff-", "") : lang || "typescript";
        if (diff && !Prism.languages["diff"]) {
          diff = false;
          console.warn(`Notice:
    ---------------------------------------------------------------------------------------
    The \`diff\` language and plugin are not available in the provided setup.
    To enable it, add the following imports your \`main.ts\`:
      import 'prismjs/components/prism-diff';
      import 'prismjs/plugins/diff-highlight/prism-diff-highlight';
    ---------------------------------------------------------------------------------------
            `);
        }
        if (!Prism.languages[lang]) {
          if (lang !== "mermaid") {
            console.warn(`Notice:
    ---------------------------------------------------------------------------------------
    The requested language '${lang}' is not available in the provided setup.
    To enable it, add the following import your \`main.ts\`:
      import 'prismjs/components/prism-${lang}';
    ---------------------------------------------------------------------------------------
              `);
          }
          return code;
        }
        return Prism.highlight(code, diff ? Prism.languages["diff"] : Prism.languages[lang], lang);
      }
    }), {
      renderer,
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartypants: false,
      xhtml: false,
      mangle: false
    });
    this.marked = marked;
  }
  getMarkedInstance() {
    return this.marked;
  }
}, _MarkedSetupService2.ɵfac = function _MarkedSetupService2_Factory(t) {
  return new (t || _MarkedSetupService2)();
}, _MarkedSetupService2.ɵprov = /* @__PURE__ */ __defineInjectable({
  token: _MarkedSetupService2,
  factory: _MarkedSetupService2.ɵfac
}), _MarkedSetupService2);
var MarkdownContentRendererService = (_marked = /* @__PURE__ */ new WeakMap(), _MarkdownContentRendererService2 = class _MarkdownContentRendererService {
  constructor() {
    _classPrivateFieldInitSpec(this, _marked, inject(MarkedSetupService, {
      self: true
    }));
  }
  render(content) {
    return __async(this, null, function* () {
      return _classPrivateFieldGet2(_marked, this).getMarkedInstance().parse(content);
    });
  }
  /**
   * The method is meant to be called after `render()`
   */
  getContentHeadings() {
    return getHeadingList();
  }
  // eslint-disable-next-line
  enhance() {
  }
}, _MarkdownContentRendererService2.ɵfac = function _MarkdownContentRendererService2_Factory(t) {
  return new (t || _MarkdownContentRendererService2)();
}, _MarkdownContentRendererService2.ɵprov = /* @__PURE__ */ __defineInjectable({
  token: _MarkdownContentRendererService2,
  factory: _MarkdownContentRendererService2.ɵfac
}), _MarkdownContentRendererService2);
function withMarkdownRenderer(options) {
  return [MarkedSetupService, RenderTaskService, {
    provide: ContentRenderer,
    useFactory: () => new MarkdownContentRendererService(),
    deps: [MarkedSetupService]
  }, options?.loadMermaid ? [{
    provide: MERMAID_IMPORT_TOKEN,
    useFactory: options.loadMermaid
  }] : []];
}
function provideContent(...features) {
  return [...features];
}
var MERMAID_IMPORT_TOKEN = new InjectionToken("mermaid_import");
var AnalogMarkdownRouteComponent = (_AnalogMarkdownRouteComponent2 = class _AnalogMarkdownRouteComponent {
  constructor() {
    this.sanitizer = inject(DomSanitizer);
    this.route = inject(ActivatedRoute);
    this.contentRenderer = inject(ContentRenderer);
    this.content = this.sanitizer.bypassSecurityTrustHtml(this.route.snapshot.data["renderedAnalogContent"]);
    this.classes = "analog-markdown-route";
  }
  ngAfterViewChecked() {
    this.contentRenderer.enhance();
  }
}, _AnalogMarkdownRouteComponent2.ɵfac = function _AnalogMarkdownRouteComponent2_Factory(t) {
  return new (t || _AnalogMarkdownRouteComponent2)();
}, _AnalogMarkdownRouteComponent2.ɵcmp = /* @__PURE__ */ __defineComponent({
  type: _AnalogMarkdownRouteComponent2,
  selectors: [["analog-markdown-route"]],
  inputs: {
    classes: "classes"
  },
  standalone: true,
  features: [__HostDirectivesFeature([AnchorNavigationDirective]), __StandaloneFeature],
  decls: 1,
  vars: 3,
  consts: [[3, "innerHTML"]],
  template: function _AnalogMarkdownRouteComponent2_Template(rf, ctx) {
    if (rf & 1) {
      __element(0, "div", 0);
    }
    if (rf & 2) {
      __classMap(ctx.classes);
      __property("innerHTML", ctx.content, __sanitizeHtml);
    }
  },
  encapsulation: 2
}), _AnalogMarkdownRouteComponent2);
const _c0 = ["container"];
var AnalogMarkdownComponent = (_AnalogMarkdownComponent2 = class _AnalogMarkdownComponent {
  constructor() {
    this.sanitizer = inject(DomSanitizer);
    this.route = inject(ActivatedRoute);
    this.zone = inject(NgZone);
    this.platformId = inject(PLATFORM_ID);
    this.mermaidImport = inject(MERMAID_IMPORT_TOKEN, {
      optional: true
    });
    this.content$ = this.getContentSource();
    this.classes = "analog-markdown";
    this.contentRenderer = inject(ContentRenderer);
    if (isPlatformBrowser(this.platformId) && this.mermaidImport) {
      this.loadMermaid(this.mermaidImport);
    }
  }
  ngOnInit() {
    this.updateContent();
  }
  ngOnChanges() {
    this.updateContent();
  }
  updateContent() {
    if (this.content && typeof this.content !== "string") {
      this.container.clear();
      const componentRef = this.container.createComponent(this.content);
      componentRef.changeDetectorRef.detectChanges();
    } else {
      this.content$ = this.getContentSource();
    }
  }
  getContentSource() {
    return this.route.data.pipe(map((data) => this.content ?? data["_analogContent"]), mergeMap((contentString) => this.renderContent(contentString)), map((content) => this.sanitizer.bypassSecurityTrustHtml(content)), catchError((e) => of(`There was an error ${e}`)));
  }
  renderContent(content) {
    return __async(this, null, function* () {
      return this.contentRenderer.render(content);
    });
  }
  ngAfterViewChecked() {
    this.contentRenderer.enhance();
    this.zone.runOutsideAngular(() => this.mermaid?.default.run());
  }
  loadMermaid(mermaidImport) {
    this.zone.runOutsideAngular(() => (
      // Wrap into an observable to avoid redundant initialization once
      // the markdown component is destroyed before the promise is resolved.
      from(mermaidImport).pipe(takeUntilDestroyed()).subscribe((mermaid) => {
        this.mermaid = mermaid;
        this.mermaid.default.initialize({
          startOnLoad: false
        });
        this.mermaid?.default.run();
      })
    ));
  }
}, _AnalogMarkdownComponent2.ɵfac = function _AnalogMarkdownComponent2_Factory(t) {
  return new (t || _AnalogMarkdownComponent2)();
}, _AnalogMarkdownComponent2.ɵcmp = /* @__PURE__ */ __defineComponent({
  type: _AnalogMarkdownComponent2,
  selectors: [["analog-markdown"]],
  viewQuery: function _AnalogMarkdownComponent2_Query(rf, ctx) {
    if (rf & 1) {
      __viewQuery(_c0, 7, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      __queryRefresh(_t = __loadQuery()) && (ctx.container = _t.first);
    }
  },
  inputs: {
    content: "content",
    classes: "classes"
  },
  standalone: true,
  features: [__HostDirectivesFeature([AnchorNavigationDirective]), __NgOnChangesFeature, __StandaloneFeature],
  decls: 3,
  vars: 5,
  consts: [["container", ""], [3, "innerHTML"]],
  template: function _AnalogMarkdownComponent2_Template(rf, ctx) {
    if (rf & 1) {
      __element(0, "div", 1, 0);
      __pipe(2, "async");
    }
    if (rf & 2) {
      __classMap(ctx.classes);
      __property("innerHTML", __pipeBind1(2, 3, ctx.content$), __sanitizeHtml);
    }
  },
  dependencies: [AsyncPipe],
  encapsulation: 2
}), _AnalogMarkdownComponent2);
export {
  AnchorNavigationDirective,
  ContentRenderer,
  AnalogMarkdownComponent as MarkdownComponent,
  MarkdownContentRendererService,
  AnalogMarkdownRouteComponent as MarkdownRouteComponent,
  MarkedSetupService,
  injectContent,
  injectContentFiles,
  parseRawContentFile,
  provideContent,
  withMarkdownRenderer
};
