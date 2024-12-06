import { p as proxyCustomElement, H, h, d as Host } from './p-d99ec579.js';
import { d as defineCustomElement$5 } from './p-a5eca8f3.js';
import { d as defineCustomElement$4 } from './p-76a96db3.js';
import { d as defineCustomElement$3 } from './p-dd3fbdc0.js';
import { d as defineCustomElement$2 } from './p-71fef340.js';

const fleImageInfoTileCss = "*{font-family:inherit}.fle-image-info-tile{display:flex;flex-flow:column nowrap;justify-content:space-around;align-items:center}@media (min-width: 992px){.fle-image-info-tile{max-width:100%;flex-flow:row nowrap;padding-left:15%;padding-right:15%;gap:32px}.fle-image-info-tile.reverse{flex-direction:row-reverse}}@media (min-width: 992px){.fle-image-info-tile .media{flex:1 1 0}}.fle-image-info-tile .info{background-color:unset;color:black}@media (min-width: 992px){.fle-image-info-tile .info{flex:1 1 0}}";
const FleImageInfoTileStyle0 = fleImageInfoTileCss;

const FleImageInfoTile$1 = /*@__PURE__*/ proxyCustomElement(class FleImageInfoTile extends H {
    constructor() {
        super();
        this.__registerHost();
        this.headline = undefined;
        this.category = undefined;
        this.description = undefined;
        this.mediaUrl = undefined;
        this.mediaAltText = undefined;
        this.imagePosition = 'left';
    }
    render() {
        const reverseClass = this.imagePosition === 'right' ? 'reverse' : '';
        return (h(Host, { key: 'dd6649e84b12dc774a30c2b2cb21c38ac22b394a', class: `fle-image-info-tile ${reverseClass}` }, h("fle-media", { key: 'd2a6a14c912bac790ca424f4b6daf900227f312c', class: "media", "media-url": this.mediaUrl, "media-alt-text": this.mediaAltText }), h("fle-info", { key: '38555b6a997dfc671959e253c7cecffd5db0e5cc', class: "info", headline: this.headline, category: this.category, description: this.description })));
    }
    static get style() { return FleImageInfoTileStyle0; }
}, [0, "fle-image-info-tile", {
        "headline": [1],
        "category": [1],
        "description": [1],
        "mediaUrl": [1, "media-url"],
        "mediaAltText": [1, "media-alt-text"],
        "imagePosition": [1, "image-position"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["fle-image-info-tile", "fle-button", "fle-category", "fle-info", "fle-media"];
    components.forEach(tagName => { switch (tagName) {
        case "fle-image-info-tile":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FleImageInfoTile$1);
            }
            break;
        case "fle-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "fle-category":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "fle-info":
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

const FleImageInfoTile = FleImageInfoTile$1;
const defineCustomElement = defineCustomElement$1;

export { FleImageInfoTile, defineCustomElement };

//# sourceMappingURL=fle-image-info-tile.js.map