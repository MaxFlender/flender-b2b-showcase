import { h, Host } from "@stencil/core";
export class FleInfo {
    constructor() {
        this.headline = undefined;
        this.category = undefined;
        this.description = undefined;
    }
    // TODO handle button
    render() {
        return (h(Host, { key: '3b642ac0d56efbf3546b93f3e434b3c9a02f3fd1', class: "fle-info" }, h("fle-category", { key: '9c154bc59c61f5d07d0cdd0af8aca69255da9404' }, this.category), h("h1", { key: 'e99dcc298b65950f4257f2c2b70bbd047839d7b9' }, this.headline), h("p", { key: 'c727e3b824e46b701ea5b53a27db6e687d807f23' }, this.description), h("fle-button", { key: '254a2d8470765ec269b0a4e77d19d3661b973f8e' }, "Learn More")));
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
