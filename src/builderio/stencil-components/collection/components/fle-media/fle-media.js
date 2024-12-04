import { Host, h } from "@stencil/core";
import { EMPTY_STRING } from "../../utils/utils";
export class FleMedia {
    constructor() {
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
    static get is() { return "fle-media"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["fle-media.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["fle-media.css"]
        };
    }
    static get properties() {
        return {
            "mediaUrl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "media-url",
                "reflect": false
            },
            "mediaAltText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "media-alt-text",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=fle-media.js.map
