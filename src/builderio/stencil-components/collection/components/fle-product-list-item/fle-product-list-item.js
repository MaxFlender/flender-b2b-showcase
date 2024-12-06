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
        return (h(Host, { key: '03039d81d688906a62bb21388765a741485eaa04', class: "fle-product-list-item" }, h("fle-category", { key: '283817236895b2dd0a301198ebfc4478015979f4' }, this.category), h("h3", { key: 'fa51a311b190bba914366ae905cecfc9e26c0862' }, this.headline), h("fle-media", { key: '1ca7c0dcb366048cecf5943e22a6223a5fac0f1f', "media-url": this.mediaUrl, "media-alt-text": this.mediaAltText }), h("p", { key: 'a293d42d1703966854f79ffc30d376aaaa2bf4d1' }, this.description), h("fle-button", { key: 'bce08bcb190db0e59c43728a87dcd56386bd8d1c', onButtonClicked: () => this.onClicked() }, this.ctaText)));
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
