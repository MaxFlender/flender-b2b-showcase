import { EventEmitter } from '../../stencil-public-runtime';
import { FleButtonAppearance, FleButtonSize, FleButtonStyle } from './fle-button.model';
export declare class FleButton {
    styleType: FleButtonStyle;
    appearance: FleButtonAppearance;
    size: FleButtonSize;
    buttonClicked: EventEmitter<void>;
    handleClick(): void;
    render(): any;
    private generateClassList;
}
