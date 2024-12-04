'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9bcf3c8f.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["fle-button_7.cjs",[[0,"fle-hero-banner",{"headline":[1],"category":[1],"description":[1],"mediaUrl":[1,"media-url"],"mediaAltText":[1,"media-alt-text"],"infoPosition":[1,"info-position"],"buttonUrls":[16]}],[0,"fle-image-info-tile",{"headline":[1],"category":[1],"description":[1],"mediaUrl":[1,"media-url"],"mediaAltText":[1,"media-alt-text"],"imagePosition":[1,"image-position"]}],[0,"fle-product-list-item",{"headline":[1],"category":[1],"description":[1],"ctaText":[1,"cta-text"],"ctaUrl":[1,"cta-url"],"mediaUrl":[1,"media-url"],"mediaAltText":[1,"media-alt-text"]}],[0,"fle-info",{"headline":[1],"category":[1],"description":[1]}],[1,"fle-media",{"mediaUrl":[1,"media-url"],"mediaAltText":[1,"media-alt-text"]}],[1,"fle-button",{"styleType":[1,"style-type"],"appearance":[1],"size":[1]}],[1,"fle-category"]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map