import { p as proxyCustomElement, H, h, d as Host } from './p-d99ec579.js';
import { d as defineCustomElement$2 } from './p-ca63c1ac.js';
import { d as defineCustomElement$1 } from './p-8c303a2b.js';

const fleInfoCss = "*{font-family:FlenderType, Arial, sans-serif}h1,h2,h3,p{font-family:FlenderType, Arial, sans-serif;margin-block-start:0;margin-block-end:0}.fle-info{display:flex;flex-flow:column nowrap;justify-content:center;align-items:flex-start;overflow:hidden;padding:3rem;background-color:rgba(0, 62, 98, 0.4392156863);color:white;font-weight:100;gap:16px}.fle-info h2{color:#227dc6;font-size:30px;font-weight:100}.fle-info p{font-size:18px;font-weight:100}";
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
        return (h(Host, { key: '3b642ac0d56efbf3546b93f3e434b3c9a02f3fd1', class: "fle-info" }, this.category && h("fle-category", { key: '205dc76ed53e5f338f2781e9a802bd57310f7dc4' }, this.category), this.headline && h("h2", { key: '7e9dcd941de7926de634a9e8fc087d14f07ccb62' }, this.headline), this.description && h("p", { key: 'aa2a121cf83cdbf7af8ee27460110b6e26ab6c8f' }, this.description), h("fle-button", { key: '7f4aebbda8c14fa7189f363c252548a9ed8f9844' }, "Learn More")));
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

//# sourceMappingURL=p-7e082409.js.map