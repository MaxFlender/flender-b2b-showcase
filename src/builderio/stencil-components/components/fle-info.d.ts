import type { Components, JSX } from "../types/components";

interface FleInfo extends Components.FleInfo, HTMLElement {}
export const FleInfo: {
    prototype: FleInfo;
    new (): FleInfo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
