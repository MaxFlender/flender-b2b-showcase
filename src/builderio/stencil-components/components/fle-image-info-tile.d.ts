import type { Components, JSX } from "../types/components";

interface FleImageInfoTile extends Components.FleImageInfoTile, HTMLElement {}
export const FleImageInfoTile: {
    prototype: FleImageInfoTile;
    new (): FleImageInfoTile;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
