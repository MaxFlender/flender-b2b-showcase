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
        return (h(Host, { key: '03039d81d688906a62bb21388765a741485eaa04', class: "fle-product-list-item" }, this.category && h("fle-category", { key: '5d08f5740db4e875b4d66042424fa99a4d240b17' }, this.category), this.headline && h("h3", { key: '604d2c76e226cf70e84344633873797bedf4d801' }, this.headline), this.mediaUrl && h("fle-media", { key: '2688b2bb6b5eda55315fe853815aa8c047eb30cc', "media-url": this.mediaUrl, "media-alt-text": this.mediaAltText }), this.description && h("p", { key: '8d026648336a9530eb0daac9671e2a72b349145b' }, this.description), h("fle-button", { key: '7fe058e5ecbb58943b4ce711340403cf59d5d6ac', onButtonClicked: () => this.onClicked() }, this.ctaText)));
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
