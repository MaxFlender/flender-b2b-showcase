import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-d99ec579.js';

const fleButtonCss = "*{font-family:FlenderType, Arial, sans-serif}h1,h2,h3,p{font-family:FlenderType, Arial, sans-serif;margin-block-start:0;margin-block-end:0}:host{display:block}button{padding:0 16px;cursor:pointer}.small-size{height:24px;border-radius:12px;font-size:16px}.medium-size{height:48px;border-radius:24px;font-size:16px}.primary-style{background-color:#227dc6;color:#fff;border-color:#227dc6}.secondary-style{color:#fff;border-color:#227dc6}.solid-appearance{border:none}.solid-appearance:hover{background-color:#6095d3}.outline-appearance{background-color:transparent;color:#227dc6;border:2px solid #227dc6}.outline-appearance:hover{background-color:#227dc6;color:#fff}";
const FleButtonStyle0 = fleButtonCss;

const FleButton = /*@__PURE__*/ proxyCustomElement(class FleButton extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.buttonClicked = createEvent(this, "buttonClicked", 7);
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
    static get style() { return FleButtonStyle0; }
}, [1, "fle-button", {
        "styleType": [1, "style-type"],
        "appearance": [1],
        "size": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["fle-button"];
    components.forEach(tagName => { switch (tagName) {
        case "fle-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FleButton);
            }
            break;
    } });
}
defineCustomElement();

export { FleButton as F, defineCustomElement as d };

//# sourceMappingURL=p-ca63c1ac.js.map