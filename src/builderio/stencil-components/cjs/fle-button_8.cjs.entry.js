'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c90ee123.js');
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

const fleGridViewCss = "*{font-family:inherit}:host{display:block}.fle-grid-view{display:grid;gap:8px;grid-template-columns:repeat(3, minmax(0, 1fr))}";
const FleGridViewStyle0 = fleGridViewCss;

const FleGridView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '6895dbef294f5b8206f10d82ca1b3f29a02edbac', class: "fle-grid-view" }, index.h("slot", { key: 'fe3dbfe9cf2a2dd0082865a0eed6bc4073b5985c' })));
    }
};
FleGridView.style = FleGridViewStyle0;

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
        return (index.h(index.Host, { key: 'f0ebd615ea6fead84f1c58c0c4f39a0455d84595', class: "fle-hero-banner" }, index.h("fle-media", { key: '308e042196b4789c5b8eb81137ad011d6abcfc09', class: "media", "media-url": this.mediaUrl, "media-alt-text": this.mediaAltText }), index.h("fle-info", { key: '9cfcff81d568a8d8e65d366f90a62ab50bff4fc0', class: `info ${infoAlignmentClass}`, headline: this.headline, category: this.category, description: this.description })));
    }
};
FleHeroBanner.style = FleHeroBannerStyle0;

const fleImageInfoTileCss = "*{font-family:inherit}.fle-image-info-tile{display:flex;flex-flow:column nowrap;justify-content:space-around;align-items:center}@media (min-width: 992px){.fle-image-info-tile{max-width:100%;flex-flow:row nowrap;padding-left:15%;padding-right:15%;gap:32px}.fle-image-info-tile.reverse{flex-direction:row-reverse}}@media (min-width: 992px){.fle-image-info-tile .media{flex:1 1 0}}.fle-image-info-tile .info{background-color:unset;color:black}@media (min-width: 992px){.fle-image-info-tile .info{flex:1 1 0}}";
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
        return (index.h(index.Host, { key: 'dd6649e84b12dc774a30c2b2cb21c38ac22b394a', class: `fle-image-info-tile ${reverseClass}` }, index.h("fle-media", { key: 'd2a6a14c912bac790ca424f4b6daf900227f312c', class: "media", "media-url": this.mediaUrl, "media-alt-text": this.mediaAltText }), index.h("fle-info", { key: '38555b6a997dfc671959e253c7cecffd5db0e5cc', class: "info", headline: this.headline, category: this.category, description: this.description })));
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
        return (index.h(index.Host, { key: '3b642ac0d56efbf3546b93f3e434b3c9a02f3fd1', class: "fle-info" }, index.h("fle-category", { key: '9c154bc59c61f5d07d0cdd0af8aca69255da9404' }, this.category), index.h("h1", { key: 'e99dcc298b65950f4257f2c2b70bbd047839d7b9' }, this.headline), index.h("p", { key: 'c727e3b824e46b701ea5b53a27db6e687d807f23' }, this.description), index.h("fle-button", { key: '254a2d8470765ec269b0a4e77d19d3661b973f8e' }, "Learn More")));
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
        return (index.h(index.Host, { key: '03039d81d688906a62bb21388765a741485eaa04', class: "fle-product-list-item" }, index.h("fle-category", { key: '283817236895b2dd0a301198ebfc4478015979f4' }, this.category), index.h("h3", { key: 'fa51a311b190bba914366ae905cecfc9e26c0862' }, this.headline), index.h("fle-media", { key: '1ca7c0dcb366048cecf5943e22a6223a5fac0f1f', "media-url": this.mediaUrl, "media-alt-text": this.mediaAltText }), index.h("p", { key: 'a293d42d1703966854f79ffc30d376aaaa2bf4d1' }, this.description), index.h("fle-button", { key: 'bce08bcb190db0e59c43728a87dcd56386bd8d1c', onButtonClicked: () => this.onClicked() }, this.ctaText)));
    }
    onClicked() {
        this.productClicked.emit();
    }
};
FleProductListItem.style = FleProductListItemStyle0;

exports.fle_button = FleButton;
exports.fle_category = FleCategory;
exports.fle_grid_view = FleGridView;
exports.fle_hero_banner = FleHeroBanner;
exports.fle_image_info_tile = FleImageInfoTile;
exports.fle_info = FleInfo;
exports.fle_media = FleMedia;
exports.fle_product_list_item = FleProductListItem;

//# sourceMappingURL=fle-button_8.cjs.entry.js.map