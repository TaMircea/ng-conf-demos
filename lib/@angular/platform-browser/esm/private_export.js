import * as dom_adapter from './src/dom/dom_adapter';
import * as browser_adapter from './src/browser/browser_adapter';
export var __platform_browser_private__;
(function (__platform_browser_private__) {
    __platform_browser_private__.DomAdapter = dom_adapter.DomAdapter;
    function getDOM() { return dom_adapter.getDOM(); }
    __platform_browser_private__.getDOM = getDOM;
    function setDOM(adapter) { return dom_adapter.setDOM(adapter); }
    __platform_browser_private__.setDOM = setDOM;
    __platform_browser_private__.setRootDomAdapter = dom_adapter.setRootDomAdapter;
    __platform_browser_private__.BrowserDomAdapter = browser_adapter.BrowserDomAdapter;
})(__platform_browser_private__ || (__platform_browser_private__ = {}));
//# sourceMappingURL=private_export.js.map