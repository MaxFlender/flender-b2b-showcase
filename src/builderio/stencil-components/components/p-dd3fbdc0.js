import { p as proxyCustomElement, H, h, d as Host } from './p-d99ec579.js';
import { d as defineCustomElement$2 } from './p-a5eca8f3.js';
import { d as defineCustomElement$1 } from './p-76a96db3.js';

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
        return (h(Host, { key: '3b642ac0d56efbf3546b93f3e434b3c9a02f3fd1', class: "fle-info" }, h("fle-category", { key: '9c154bc59c61f5d07d0cdd0af8aca69255da9404' }, this.category), h("h1", { key: 'e99dcc298b65950f4257f2c2b70bbd047839d7b9' }, this.headline), h("p", { key: 'c727e3b824e46b701ea5b53a27db6e687d807f23' }, this.description), h("fle-button", { key: '254a2d8470765ec269b0a4e77d19d3661b973f8e' }, "Learn More")));
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

//# sourceMappingURL=p-dd3fbdc0.js.map