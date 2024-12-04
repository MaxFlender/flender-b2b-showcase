import { p as proxyCustomElement, H, h, d as Host } from './p-59bfa9e0.js';
import { d as defineCustomElement$2 } from './p-b9e794f5.js';
import { d as defineCustomElement$1 } from './p-3f7a6235.js';

const fleInfoCss = "*{font-family:inherit}.fle-info{display:flex;flex-flow:column nowrap;justify-content:center;align-items:flex-start;overflow:hidden;padding:3rem;background-color:rgba(0, 62, 98, 0.4392156863);color:white;font-weight:100}.fle-info h1{color:#227dc6}";
const FleInfoStyle0 = fleInfoCss;

const FleInfo = /*@__PURE__*/ proxyCustomElement(class FleInfo extends H {
    constructor() {
        super();
        this.__registerHost();
        this.headline = undefined;
        this.category = undefined;
        this.description = undefined;
    }
    // TODO handle button
    render() {
        return (h(Host, { key: '9f99cf25c02738c8bc2b1382f261c72bdf1c41a1', class: "fle-info" }, h("fle-category", { key: 'f5ff16e6cc8cb9d0a562bcc507390a3fe87d2603' }, this.category), h("h1", { key: '1c9562129672eb50d2d9d79088dda1832697de3d' }, this.headline), h("p", { key: 'bca8bad3e07942f1cb41ee819cd5c7aa04952513' }, this.description), h("fle-button", { key: '336d6332a3ca72b643a9f618982981910fa0d84c' }, "Learn More")));
    }
    static get style() { return FleInfoStyle0; }
}, [0, "fle-info", {
        "headline": [1],
        "category": [1],
        "description": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["fle-info", "fle-button", "fle-category"];
    components.forEach(tagName => { switch (tagName) {
        case "fle-info":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FleInfo);
            }
            break;
        case "fle-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "fle-category":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { FleInfo as F, defineCustomElement as d };

//# sourceMappingURL=p-214876f0.js.map