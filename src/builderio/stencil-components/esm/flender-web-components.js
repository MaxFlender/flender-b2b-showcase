import { p as promiseResolve, b as bootstrapLazy } from './index-db326f33.js';
export { s as setNonce } from './index-db326f33.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.22.1 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["fle-button_8",[[0,"fle-hero-banner",{"headline":[1],"category":[1],"description":[1],"mediaUrl":[1,"media-url"],"mediaAltText":[1,"media-alt-text"],"infoPosition":[1,"info-position"],"buttonUrls":[16]}],[0,"fle-image-info-tile",{"headline":[1],"category":[1],"description":[1],"mediaUrl":[1,"media-url"],"mediaAltText":[1,"media-alt-text"],"imagePosition":[1,"image-position"]}],[0,"fle-product-list-item",{"headline":[1],"category":[1],"description":[1],"ctaText":[1,"cta-text"],"ctaUrl":[1,"cta-url"],"mediaUrl":[1,"media-url"],"mediaAltText":[1,"media-alt-text"]}],[4,"fle-grid-view"],[0,"fle-info",{"headline":[1],"category":[1],"description":[1]}],[1,"fle-media",{"mediaUrl":[1,"media-url"],"mediaAltText":[1,"media-alt-text"]}],[1,"fle-button",{"styleType":[1,"style-type"],"appearance":[1],"size":[1]}],[1,"fle-category"]]]], options);
});

//# sourceMappingURL=flender-web-components.js.map