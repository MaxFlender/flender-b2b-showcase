import type { Components, JSX } from "../types/components";

interface FleCategory extends Components.FleCategory, HTMLElement {}
export const FleCategory: {
    prototype: FleCategory;
    new (): FleCategory;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
