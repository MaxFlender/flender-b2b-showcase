import { p as proxyCustomElement, H, h, d as Host } from './p-d99ec579.js';

const fleGridViewCss = "*{font-family:inherit}:host{display:block}.fle-grid-view{display:grid;gap:8px;grid-template-columns:repeat(3, minmax(0, 1fr))}";
const FleGridViewStyle0 = fleGridViewCss;

const FleGridView$1 = /*@__PURE__*/ proxyCustomElement(class FleGridView extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '6895dbef294f5b8206f10d82ca1b3f29a02edbac', class: "fle-grid-view" }, h("slot", { key: 'fe3dbfe9cf2a2dd0082865a0eed6bc4073b5985c' })));
    }
    static get style() { return FleGridViewStyle0; }
}, [4, "fle-grid-view"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["fle-grid-view"];
    components.forEach(tagName => { switch (tagName) {
        case "fle-grid-view":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FleGridView$1);
            }
            break;
    } });
}
defineCustomElement$1();

const FleGridView = FleGridView$1;
const defineCustomElement = defineCustomElement$1;

export { FleGridView, defineCustomElement };

//# sourceMappingURL=fle-grid-view.js.map