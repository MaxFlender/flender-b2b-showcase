import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-59bfa9e0.js';
import { H as HASHTAG } from './p-3c82445c.js';
import { d as defineCustomElement$4 } from './p-b9e794f5.js';
import { d as defineCustomElement$3 } from './p-3f7a6235.js';
import { d as defineCustomElement$2 } from './p-b68cbabb.js';

const fleProductListItemCss = "*{font-family:inherit}:host{display:block}.fle-product-list-item{display:flex;flex-flow:column nowrap;justify-content:center;align-items:flex-start;overflow:hidden;padding:3rem;font-weight:100;gap:10px}.fle-product-list-item h3{color:#227dc6}.fle-product-list-item a,.fle-product-list-item a:link,.fle-product-list-item a:visited,.fle-product-list-item a:hover,.fle-product-list-item a:active{color:inherit;text-decoration:inherit;font-weight:inherit}";
const FleProductListItemStyle0 = fleProductListItemCss;

const FleProductListItem$1 = /*@__PURE__*/ proxyCustomElement(class FleProductListItem extends H {
    constructor() {
        super();
        this.__registerHost();
        this.productClicked = createEvent(this, "productClicked", 7);
        this.headline = undefined;
        this.category = undefined;
        this.description = undefined;
        this.ctaText = undefined;
        this.ctaUrl = HASHTAG;
        this.mediaUrl = undefined;
        this.mediaAltText = undefined;
    }
    render() {
        return (h(Host, { key: '9cb36d580d2cc4cf18bffb9e89146e2781f1d5c2', class: "fle-product-list-item" }, h("fle-category", { key: '366e4101072de4378f3f14506d372b3dcf6ec061' }, this.category), h("h3", { key: '92aa1a2b7be9abe59ec0ed478a2163f4ab56cca1' }, this.headline), h("fle-media", { key: '01f114632a5a3744db6ade5fb1881e21b8892622', "media-url": this.mediaUrl, "media-alt-text": this.mediaAltText }), h("p", { key: 'af82e3471d67634483da68cf3325ec795560ae09' }, this.description), h("fle-button", { key: 'f284ffd381fec189e5250ca6847226aeb1804438', onButtonClicked: () => this.onClicked() }, this.ctaText)));
    }
    onClicked() {
        this.productClicked.emit();
    }
    static get style() { return FleProductListItemStyle0; }
}, [0, "fle-product-list-item", {
        "headline": [1],
        "category": [1],
        "description": [1],
        "ctaText": [1, "cta-text"],
        "ctaUrl": [1, "cta-url"],
        "mediaUrl": [1, "media-url"],
        "mediaAltText": [1, "media-alt-text"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["fle-product-list-item", "fle-button", "fle-category", "fle-media"];
    components.forEach(tagName => { switch (tagName) {
        case "fle-product-list-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FleProductListItem$1);
            }
            break;
        case "fle-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "fle-category":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "fle-media":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const FleProductListItem = FleProductListItem$1;
const defineCustomElement = defineCustomElement$1;

export { FleProductListItem, defineCustomElement };

//# sourceMappingURL=fle-product-list-item.js.map