import { EventEmitter } from '../../stencil-public-runtime';
export declare class FleProductListItem {
    headline: string;
    category: string;
    description: string;
    ctaText: string;
    ctaUrl: string;
    mediaUrl: string;
    mediaAltText: string;
    productClicked: EventEmitter<void>;
    render(): any;
    private onClicked;
}
