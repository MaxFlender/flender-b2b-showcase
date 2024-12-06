import { h, Host } from "@stencil/core";
export class FleHeroBanner {
    constructor() {
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
        return (h(Host, { key: 'f0ebd615ea6fead84f1c58c0c4f39a0455d84595', class: "fle-hero-banner" }, h("fle-media", { key: '308e042196b4789c5b8eb81137ad011d6abcfc09', class: "media", "media-url": this.mediaUrl, "media-alt-text": this.mediaAltText }), h("fle-info", { key: '9cfcff81d568a8d8e65d366f90a62ab50bff4fc0', class: `info ${infoAlignmentClass}`, headline: this.headline, category: this.category, description: this.description })));
    }
    static get is() { return "fle-hero-banner"; }
    static get originalStyleUrls() {
        return {
            "$": ["fle-hero-banner.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["fle-hero-banner.css"]
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
            "infoPosition": {
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
                "attribute": "info-position",
                "reflect": false,
                "defaultValue": "'left'"
            },
            "buttonUrls": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
}
//# sourceMappingURL=fle-hero-banner.js.map
