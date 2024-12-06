import { Host, h } from "@stencil/core";
export class FleImageInfoTile {
    constructor() {
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
    static get is() { return "fle-image-info-tile"; }
    static get originalStyleUrls() {
        return {
            "$": ["fle-image-info-tile.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["fle-image-info-tile.css"]
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
            },
            "imagePosition": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "HorizontalAlignment",
                    "resolved": "\"left\" | \"right\"",
                    "references": {
                        "HorizontalAlignment": {
                            "location": "import",
                            "path": "../../utils/components.model",
                            "id": "src/utils/components.model.ts::HorizontalAlignment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "image-position",
                "reflect": false,
                "defaultValue": "'left'"
            }
        };
    }
}
//# sourceMappingURL=fle-image-info-tile.js.map
