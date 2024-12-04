import type { Components, JSX } from "../types/components";

interface FleButton extends Components.FleButton, HTMLElement {}
export const FleButton: {
    prototype: FleButton;
    new (): FleButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
