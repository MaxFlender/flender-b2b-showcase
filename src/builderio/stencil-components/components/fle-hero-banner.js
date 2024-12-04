import { p as proxyCustomElement, H, h, d as Host } from './p-59bfa9e0.js';
import { d as defineCustomElement$5 } from './p-b9e794f5.js';
import { d as defineCustomElement$4 } from './p-3f7a6235.js';
import { d as defineCustomElement$3 } from './p-214876f0.js';
import { d as defineCustomElement$2 } from './p-b68cbabb.js';

const fleHeroBannerCss = "*{font-family:inherit}.fle-hero-banner{display:block;position:relative;width:100%;min-height:30rem}.fle-hero-banner .media{position:absolute;width:100%;height:100%}.fle-hero-banner .info{position:absolute;top:50%;transform:translateY(-50%)}@media (min-width: 992px){.fle-hero-banner .info{width:30%;max-width:550px}.fle-hero-banner .info.left{right:unset;left:10%}.fle-hero-banner .info.right{right:10%;left:unset}}";
const FleHeroBannerStyle0 = fleHeroBannerCss;

const FleHeroBanner$1 = /*@__PURE__*/ proxyCustomElement(class FleHeroBanner extends H {
    constructor() {
        super();
        this.__registerHost();
        this.headline = undefined;
        this.category = undefined;
        this.description = undefined;
        this.mediaUrl = undefined;
        this.mediaAltText = undefined;
        this.infoPosition = 'left';
        this.buttonUrls = undefined;
    }
    render() {
        const infoAlignmentClass = this.infoPosition === 'left' ? 'left' : 'right';
        return (h(Host, { key: '42e04f894822fcaab772965d52071c47ac1d601f', class: "fle-hero-banner" }, h("fle-media", { key: '55c269ab49c6c5b3446641b60dcdb11448724119', class: "media", "media-url": this.mediaUrl, "media-alt-text": this.mediaAltText }), h("fle-info", { key: 'd22373fc18f3a786d13c9940613f826bf150d6d5', class: `info ${infoAlignmentClass}`, headline: this.headline, category: this.category, description: this.description })));
    }
    static get style() { return FleHeroBannerStyle0; }
}, [0, "fle-hero-banner", {
        "headline": [1],
        "category": [1],
        "description": [1],
        "mediaUrl": [1, "media-url"],
        "mediaAltText": [1, "media-alt-text"],
        "infoPosition": [1, "info-position"],
        "buttonUrls": [16]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["fle-hero-banner", "fle-button", "fle-category", "fle-info", "fle-media"];
    components.forEach(tagName => { switch (tagName) {
        case "fle-hero-banner":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FleHeroBanner$1);
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

const FleHeroBanner = FleHeroBanner$1;
const defineCustomElement = defineCustomElement$1;

export { FleHeroBanner, defineCustomElement };

//# sourceMappingURL=fle-hero-banner.js.map