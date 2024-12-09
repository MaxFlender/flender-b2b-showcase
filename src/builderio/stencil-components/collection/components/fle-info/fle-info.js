import { h, Host } from "@stencil/core";
export class FleInfo {
    constructor() {
        this.headline = undefined;
        this.category = undefined;
        this.description = undefined;
    }
    // TODO handle button
    render() {
        return (h(Host, { key: '3b642ac0d56efbf3546b93f3e434b3c9a02f3fd1', class: "fle-info" }, this.category && h("fle-category", { key: '205dc76ed53e5f338f2781e9a802bd57310f7dc4' }, this.category), this.headline && h("h2", { key: '7e9dcd941de7926de634a9e8fc087d14f07ccb62' }, this.headline), this.description && h("p", { key: 'aa2a121cf83cdbf7af8ee27460110b6e26ab6c8f' }, this.description), h("fle-button", { key: '7f4aebbda8c14fa7189f363c252548a9ed8f9844' }, "Learn More")));
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
