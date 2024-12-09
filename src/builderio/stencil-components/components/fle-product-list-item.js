import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-d99ec579.js';
import { H as HASHTAG } from './p-3c82445c.js';
import { d as defineCustomElement$4 } from './p-ca63c1ac.js';
import { d as defineCustomElement$3 } from './p-8c303a2b.js';
import { d as defineCustomElement$2 } from './p-666dbadd.js';

const fleProductListItemCss = "*{font-family:FlenderType, Arial, sans-serif}h1,h2,h3,p{font-family:FlenderType, Arial, sans-serif;margin-block-start:0;margin-block-end:0}:host{display:block}.fle-product-list-item{display:flex;flex-flow:column nowrap;justify-content:center;align-items:flex-start;overflow:hidden;padding:3rem;font-weight:100;gap:16px}.fle-product-list-item h3{color:#227dc6;font-size:30px;font-weight:100}.fle-product-list-item p{font-size:18px;font-weight:100}.fle-product-list-item a,.fle-product-list-item a:link,.fle-product-list-item a:visited,.fle-product-list-item a:hover,.fle-product-list-item a:active{color:inherit;text-decoration:inherit;font-weight:inherit}";
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
        return (h(Host, { key: '03039d81d688906a62bb21388765a741485eaa04', class: "fle-product-list-item" }, this.category && h("fle-category", { key: '5d08f5740db4e875b4d66042424fa99a4d240b17' }, this.category), this.headline && h("h3", { key: '604d2c76e226cf70e84344633873797bedf4d801' }, this.headline), this.mediaUrl && h("fle-media", { key: '2688b2bb6b5eda55315fe853815aa8c047eb30cc', "media-url": this.mediaUrl, "media-alt-text": this.mediaAltText }), this.description && h("p", { key: '8d026648336a9530eb0daac9671e2a72b349145b' }, this.description), h("fle-button", { key: '7fe058e5ecbb58943b4ce711340403cf59d5d6ac', onButtonClicked: () => this.onClicked() }, this.ctaText)));
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