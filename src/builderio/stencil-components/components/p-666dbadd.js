import { p as proxyCustomElement, H, h, d as Host } from './p-d99ec579.js';
import { E as EMPTY_STRING } from './p-3c82445c.js';

const fleMediaCss = "*{font-family:FlenderType, Arial, sans-serif}h1,h2,h3,p{font-family:FlenderType, Arial, sans-serif;margin-block-start:0;margin-block-end:0}:host{display:block;width:100%;height:100%;z-index:-10}:host img,:host video{object-fit:cover;width:100%;height:100%}";
const FleMediaStyle0 = fleMediaCss;

const FleMedia = /*@__PURE__*/ proxyCustomElement(class FleMedia extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.mediaUrl = undefined;
        this.mediaAltText = undefined;
    }
    render() {
        if (this.mediaUrl === undefined || this.mediaUrl === EMPTY_STRING) {
            return;
        }
        const isImage = this.mediaUrl.match(/\.(jpeg|jpg|gif|png)/) != null;
        const isVideo = this.mediaUrl.match(/\.(mp4|webm|ogg)/) != null;
        console.log(this.mediaUrl, isImage);
        return (h(Host, null, isImage && this.renderImg(this.mediaUrl, this.mediaAltText), isVideo && this.renderVideo(this.mediaUrl, this.mediaAltText)));
    }
    renderImg(url, alt = EMPTY_STRING) {
        return h("img", { src: url, alt: alt });
    }
    renderVideo(url, alt = EMPTY_STRING) {
        return h("video", { autoPlay: true, muted: true, loop: true, playsInline: true }, h("source", { src: url, type: "video/mp4", title: alt }), h("source", { src: url, type: "video/webm", title: alt }), h("source", { src: url, type: "video/ogg", title: alt }));
    }
    static get style() { return FleMediaStyle0; }
}, [1, "fle-media", {
        "mediaUrl": [1, "media-url"],
        "mediaAltText": [1, "media-alt-text"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["fle-media"];
    components.forEach(tagName => { switch (tagName) {
        case "fle-media":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FleMedia);
            }
            break;
    } });
}
defineCustomElement();

export { FleMedia as F, defineCustomElement as d };

//# sourceMappingURL=p-666dbadd.js.map