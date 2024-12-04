import { Host, h } from "@stencil/core";
export class FleButton {
    constructor() {
        this.styleType = 'primary';
        this.appearance = 'solid';
        this.size = 'medium';
    }
    handleClick() {
        this.buttonClicked.emit();
    }
    render() {
        const classListFromProps = this.generateClassList();
        return (h(Host, { key: '286e458ef246123b37689f20f01cb0508ce50493' }, h("button", { key: '2915f547cf29ff57aa58d80d8235750c04ab6597', class: classListFromProps, onClick: () => this.handleClick() }, h("slot", { key: 'd5aacf9bf9ad4cf203e0979401f999ed77b87c94' }))));
    }
    generateClassList() {
        const styleClass = this.styleType === 'primary' ? 'primary-style' : 'secondary-style';
        const appearanceClass = this.appearance === 'solid' ? 'solid-appearance' : 'outline-appearance';
        const sizeClass = this.size === 'small' ? 'small-size' : 'medium-size';
        return `${styleClass} ${appearanceClass} ${sizeClass}`;
    }
    static get is() { return "fle-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["fle-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["fle-button.css"]
        };
    }
    static get properties() {
        return {
            "styleType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "FleButtonStyle",
                    "resolved": "\"primary\" | \"secondary\"",
                    "references": {
                        "FleButtonStyle": {
                            "location": "import",
                            "path": "./fle-button.model",
                            "id": "src/components/fle-button/fle-button.model.ts::FleButtonStyle"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "style-type",
                "reflect": false,
                "defaultValue": "'primary'"
            },
            "appearance": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "FleButtonAppearance",
                    "resolved": "\"outline\" | \"solid\"",
                    "references": {
                        "FleButtonAppearance": {
                            "location": "import",
                            "path": "./fle-button.model",
                            "id": "src/components/fle-button/fle-button.model.ts::FleButtonAppearance"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "appearance",
                "reflect": false,
                "defaultValue": "'solid'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "FleButtonSize",
                    "resolved": "\"medium\" | \"small\"",
                    "references": {
                        "FleButtonSize": {
                            "location": "import",
                            "path": "./fle-button.model",
                            "id": "src/components/fle-button/fle-button.model.ts::FleButtonSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'medium'"
            }
        };
    }
    static get events() {
        return [{
                "method": "buttonClicked",
                "name": "buttonClicked",
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
//# sourceMappingURL=fle-button.js.map
