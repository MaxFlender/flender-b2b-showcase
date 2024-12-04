import type { Components, JSX } from "../types/components";

interface FleProductListItem extends Components.FleProductListItem, HTMLElement {}
export const FleProductListItem: {
    prototype: FleProductListItem;
    new (): FleProductListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
