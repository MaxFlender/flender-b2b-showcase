import type { Components, JSX } from "../types/components";

interface FleGridView extends Components.FleGridView, HTMLElement {}
export const FleGridView: {
    prototype: FleGridView;
    new (): FleGridView;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
