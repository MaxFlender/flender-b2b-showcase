import type { Components, JSX } from "../types/components";

interface FleMedia extends Components.FleMedia, HTMLElement {}
export const FleMedia: {
    prototype: FleMedia;
    new (): FleMedia;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
