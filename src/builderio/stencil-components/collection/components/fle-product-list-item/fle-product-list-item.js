import { Host, h } from "@stencil/core";
import { HASHTAG } from "../../utils/utils";
export class FleProductListItem {
    constructor() {
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
    static get is() { return "fle-product-list-item"; }
    static get originalStyleUrls() {
        return {
            "$": ["fle-product-list-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["fle-product-list-item.css"]
        };
    }
    static get properties() {
        return {
            "headline": {
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
                "attribute": "headline",
                "reflect": false
            },
            "category": {
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
                "attribute": "category",
                "reflect": false
            },
            "description": {
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
                "attribute": "description",
                "reflect": false
            },
            "ctaText": {
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
                "attribute": "cta-text",
                "reflect": false
            },
            "ctaUrl": {
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
                "attribute": "cta-url",
                "reflect": false,
                "defaultValue": "HASHTAG"
            },
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
    static get events() {
        return [{
                "method": "productClicked",
                "name": "productClicked",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=fle-product-list-item.js.map
