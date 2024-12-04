import { h, Host } from "@stencil/core";
export class FleInfo {
    constructor() {
        this.headline = undefined;
        this.category = undefined;
        this.description = undefined;
    }
    // TODO handle button
    render() {
        return (h(Host, { key: '9f99cf25c02738c8bc2b1382f261c72bdf1c41a1', class: "fle-info" }, h("fle-category", { key: 'f5ff16e6cc8cb9d0a562bcc507390a3fe87d2603' }, this.category), h("h1", { key: '1c9562129672eb50d2d9d79088dda1832697de3d' }, this.headline), h("p", { key: 'bca8bad3e07942f1cb41ee819cd5c7aa04952513' }, this.description), h("fle-button", { key: '336d6332a3ca72b643a9f618982981910fa0d84c' }, "Learn More")));
    }
    static get is() { return "fle-info"; }
    static get originalStyleUrls() {
        return {
            "$": ["fle-info.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["fle-info.css"]
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
            }
        };
    }
}
//# sourceMappingURL=fle-info.js.map
