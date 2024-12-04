'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9bcf3c8f.js');
const utils = require('./utils-e34bc855.js');

const fleButtonCss = "*{font-family:inherit}:host{display:block}button{padding:0 16px;cursor:pointer}.small-size{height:24px;border-radius:12px;font-size:16px}.medium-size{height:48px;border-radius:24px;font-size:16px}.primary-style{background-color:#227dc6;color:#fff;border-color:#227dc6}.secondary-style{color:#fff;border-color:#227dc6}.solid-appearance{border:none}.solid-appearance:hover{background-color:#6095d3}.outline-appearance{background-color:transparent;color:#227dc6;border:2px solid #227dc6}.outline-appearance:hover{background-color:#227dc6;color:#fff}";
const FleButtonStyle0 = fleButtonCss;

const FleButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.buttonClicked = index.createEvent(this, "buttonClicked", 7);
        this.styleType = 'primary';
        this.appearance = 'solid';
        this.size = 'medium';
    }
    handleClick() {
        this.buttonClicked.emit();
    }
    render() {
        const classListFromProps = this.generateClassList();
        return (index.h(index.Host, { key: '286e458ef246123b37689f20f01cb0508ce50493' }, index.h("button", { key: '2915f547cf29ff57aa58d80d8235750c04ab6597', class: classListFromProps, onClick: () => this.handleClick() }, index.h("slot", { key: 'd5aacf9bf9ad4cf203e0979401f999ed77b87c94' }))));
    }
    generateClassList() {
        const styleClass = this.styleType === 'primary' ? 'primary-style' : 'secondary-style';
        const appearanceClass = this.appearance === 'solid' ? 'solid-appearance' : 'outline-appearance';
        const sizeClass = this.size === 'small' ? 'small-size' : 'medium-size';
        return `${styleClass} ${appearanceClass} ${sizeClass}`;
    }
};
FleButton.style = FleButtonStyle0;

const fleCategoryCss = "*{font-family:inherit}:host{display:block;min-width:12rem;padding:0.5rem;color:white;text-transform:uppercase;background-color:#227dc6}";
const FleCategoryStyle0 = fleCategoryCss;

const FleCategory = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'a15a3e673e508915f1aded0c6da32b2a32b26e17' }, index.h("slot", { key: 'ed66ecf1da073b9ffb312671409b857cfb630b65' })));
    }
};
FleCategory.style = FleCategoryStyle0;

const fleHeroBannerCss = "*{font-family:inherit}.fle-hero-banner{display:block;position:relative;width:100%;min-height:30rem}.fle-hero-banner .media{position:absolute;width:100%;height:100%}.fle-hero-banner .info{position:absolute;top:50%;transform:translateY(-50%)}@media (min-width: 992px){.fle-hero-banner .info{width:30%;max-width:550px}.fle-hero-banner .info.left{right:unset;left:10%}.fle-hero-banner .info.right{right:10%;left:unset}}";
const FleHeroBannerStyle0 = fleHeroBannerCss;

const FleHeroBanner = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '42e04f894822fcaab772965d52071c47ac1d601f', class: "fle-hero-banner" }, index.h("fle-media", { key: '55c269ab49c6c5b3446641b60dcdb11448724119', class: "media", "media-url": this.mediaUrl, "media-alt-text": this.mediaAltText }), index.h("fle-info", { key: 'd22373fc18f3a786d13c9940613f826bf150d6d5', class: `info ${infoAlignmentClass}`, headline: this.headline, category: this.category, description: this.description })));
    }
};
FleHeroBanner.style = FleHeroBannerStyle0;

const fleImageInfoTileCss = "*{font-family:inherit}.fle-image-info-tile{display:flex;flex-flow:column nowrap;justify-content:space-around;align-items:center}@media (min-width: 992px){.fle-image-info-tile{max-width:100%;flex-flow:row nowrap;padding-left:32px;padding-right:32px;gap:32px}.fle-image-info-tile.reverse{flex-direction:row-reverse}}@media (min-width: 992px){.fle-image-info-tile .media{flex:1 1 0}}.fle-image-info-tile .info{background-color:unset;color:black}@media (min-width: 992px){.fle-image-info-tile .info{flex:1 1 0}}";
const FleImageInfoTileStyle0 = fleImageInfoTileCss;

const FleImageInfoTile = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.headline = undefined;
        this.category = undefined;
        this.description = undefined;
        this.mediaUrl = undefined;
        this.mediaAltText = undefined;
        this.imagePosition = 'left';
    }
    render() {
        const reverseClass = this.imagePosition === 'right' ? 'reverse' : '';
        return (index.h(index.Host, { key: '8672fe42445bd6228e4d2e8b9ff8d309d3f189da', class: `fle-image-info-tile ${reverseClass}` }, index.h("fle-media", { key: '7576c221bcb14298aef06c112d9b371c4e6515ac', class: "media", "media-url": this.mediaUrl, "media-alt-text": this.mediaAltText }), index.h("fle-info", { key: '6bde543c6acf21ee38249f84eef334536daa9fd6', class: "info", headline: this.headline, category: this.category, description: this.description })));
    }
};
FleImageInfoTile.style = FleImageInfoTileStyle0;

const fleInfoCss = "*{font-family:inherit}.fle-info{display:flex;flex-flow:column nowrap;justify-content:center;align-items:flex-start;overflow:hidden;padding:3rem;background-color:rgba(0, 62, 98, 0.4392156863);color:white;font-weight:100}.fle-info h1{color:#227dc6}";
const FleInfoStyle0 = fleInfoCss;

const FleInfo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.headline = undefined;
        this.category = undefined;
        this.description = undefined;
    }
    // TODO handle button
    render() {
        return (index.h(index.Host, { key: '9f99cf25c02738c8bc2b1382f261c72bdf1c41a1', class: "fle-info" }, index.h("fle-category", { key: 'f5ff16e6cc8cb9d0a562bcc507390a3fe87d2603' }, this.category), index.h("h1", { key: '1c9562129672eb50d2d9d79088dda1832697de3d' }, this.headline), index.h("p", { key: 'bca8bad3e07942f1cb41ee819cd5c7aa04952513' }, this.description), index.h("fle-button", { key: '336d6332a3ca72b643a9f618982981910fa0d84c' }, "Learn More")));
    }
};
FleInfo.style = FleInfoStyle0;

const fleMediaCss = "*{font-family:inherit}:host{display:block;width:100%;height:100%;z-index:-10}:host img,:host video{object-fit:cover;width:100%;height:100%}";
const FleMediaStyle0 = fleMediaCss;

const FleMedia = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.mediaUrl = undefined;
        this.mediaAltText = undefined;
    }
    render() {
        if (this.mediaUrl === undefined || this.mediaUrl === utils.EMPTY_STRING) {
            return;
        }
        const isImage = this.mediaUrl.match(/\.(jpeg|jpg|gif|png)/) != null;
        const isVideo = this.mediaUrl.match(/\.(mp4|webm|ogg)/) != null;
        console.log(this.mediaUrl, isImage);
        return (index.h(index.Host, null, isImage && this.renderImg(this.mediaUrl, this.mediaAltText), isVideo && this.renderVideo(this.mediaUrl, this.mediaAltText)));
    }
    renderImg(url, alt = utils.EMPTY_STRING) {
        return index.h("img", { src: url, alt: alt });
    }
    renderVideo(url, alt = utils.EMPTY_STRING) {
        return index.h("video", { autoPlay: true, muted: true, loop: true, playsInline: true }, index.h("source", { src: url, type: "video/mp4", title: alt }), index.h("source", { src: url, type: "video/webm", title: alt }), index.h("source", { src: url, type: "video/ogg", title: alt }));
    }
};
FleMedia.style = FleMediaStyle0;

const fleProductListItemCss = "*{font-family:inherit}:host{display:block}.fle-product-list-item{display:flex;flex-flow:column nowrap;justify-content:center;align-items:flex-start;overflow:hidden;padding:3rem;font-weight:100;gap:10px}.fle-product-list-item h3{color:#227dc6}.fle-product-list-item a,.fle-product-list-item a:link,.fle-product-list-item a:visited,.fle-product-list-item a:hover,.fle-product-list-item a:active{color:inherit;text-decoration:inherit;font-weight:inherit}";
const FleProductListItemStyle0 = fleProductListItemCss;

const FleProductListItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.productClicked = index.createEvent(this, "productClicked", 7);
        this.headline = undefined;
        this.category = undefined;
        this.description = undefined;
        this.ctaText = undefined;
        this.ctaUrl = utils.HASHTAG;
        this.mediaUrl = undefined;
        this.mediaAltText = undefined;
    }
    render() {
        return (index.h(index.Host, { key: '9cb36d580d2cc4cf18bffb9e89146e2781f1d5c2', class: "fle-product-list-item" }, index.h("fle-category", { key: '366e4101072de4378f3f14506d372b3dcf6ec061' }, this.category), index.h("h3", { key: '92aa1a2b7be9abe59ec0ed478a2163f4ab56cca1' }, this.headline), index.h("fle-media", { key: '01f114632a5a3744db6ade5fb1881e21b8892622', "media-url": this.mediaUrl, "media-alt-text": this.mediaAltText }), index.h("p", { key: 'af82e3471d67634483da68cf3325ec795560ae09' }, this.description), index.h("fle-button", { key: 'f284ffd381fec189e5250ca6847226aeb1804438', onButtonClicked: () => this.onClicked() }, this.ctaText)));
    }
    onClicked() {
        this.productClicked.emit();
    }
};
FleProductListItem.style = FleProductListItemStyle0;

exports.fle_button = FleButton;
exports.fle_category = FleCategory;
exports.fle_hero_banner = FleHeroBanner;
exports.fle_image_info_tile = FleImageInfoTile;
exports.fle_info = FleInfo;
exports.fle_media = FleMedia;
exports.fle_product_list_item = FleProductListItem;

//# sourceMappingURL=fle-button_7.cjs.entry.js.map