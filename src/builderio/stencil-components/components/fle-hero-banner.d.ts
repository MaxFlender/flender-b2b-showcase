import type { Components, JSX } from "../types/components";

interface FleHeroBanner extends Components.FleHeroBanner, HTMLElement {}
export const FleHeroBanner: {
    prototype: FleHeroBanner;
    new (): FleHeroBanner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
