import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-d99ec579.js';
import { H as HASHTAG } from './p-3c82445c.js';
import { d as defineCustomElement$4 } from './p-a5eca8f3.js';
import { d as defineCustomElement$3 } from './p-76a96db3.js';
import { d as defineCustomElement$2 } from './p-71fef340.js';

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
        return (h(Host, { key: '03039d81d688906a62bb21388765a741485eaa04', class: "fle-product-list-item" }, h("fle-category", { key: '283817236895b2dd0a301198ebfc4478015979f4' }, this.category), h("h3", { key: 'fa51a311b190bba914366ae905cecfc9e26c0862' }, this.headline), h("fle-media", { key: '1ca7c0dcb366048cecf5943e22a6223a5fac0f1f', "media-url": this.mediaUrl, "media-alt-text": this.mediaAltText }), h("p", { key: 'a293d42d1703966854f79ffc30d376aaaa2bf4d1' }, this.description), h("fle-button", { key: 'bce08bcb190db0e59c43728a87dcd56386bd8d1c', onButtonClicked: () => this.onClicked() }, this.ctaText)));
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