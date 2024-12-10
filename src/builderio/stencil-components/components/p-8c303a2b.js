import { p as proxyCustomElement, H, h, d as Host } from './p-d99ec579.js';

const fleCategoryCss = "*{font-family:FlenderType, Arial, sans-serif}h1,h2,h3,p{font-family:FlenderType, Arial, sans-serif;margin-block-start:0;margin-block-end:0}:host{display:block;min-width:12rem;padding:0.5rem;color:white;font-size:18px;text-transform:uppercase;background-color:#227dc6}";
const FleCategoryStyle0 = fleCategoryCss;

const FleCategory = /*@__PURE__*/ proxyCustomElement(class FleCategory extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'a15a3e673e508915f1aded0c6da32b2a32b26e17' }, h("slot", { key: 'ed66ecf1da073b9ffb312671409b857cfb630b65' })));
    }
    static get style() { return FleCategoryStyle0; }
}, [1, "fle-category"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["fle-category"];
    components.forEach(tagName => { switch (tagName) {
        case "fle-category":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FleCategory);
            }
            break;
    } });
}
defineCustomElement();

export { FleCategory as F, defineCustomElement as d };

//# sourceMappingURL=p-8c303a2b.js.map