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
        return (h(Host, { key: '8672fe42445bd6228e4d2e8b9ff8d309d3f189da', class: `fle-image-info-tile ${reverseClass}` }, h("fle-media", { key: '7576c221bcb14298aef06c112d9b371c4e6515ac', class: "media", "media-url": this.mediaUrl, "media-alt-text": this.mediaAltText }), h("fle-info", { key: '6bde543c6acf21ee38249f84eef334536daa9fd6', class: "info", headline: this.headline, category: this.category, description: this.description })));
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
