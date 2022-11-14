import type { Theme } from "../common/styles";
import { HeaderIconMap } from "./sprites";
declare type HeaderIcon = keyof HeaderIconMap;
declare type Sprite = HeaderIconMap["headerArray"];
/** @category Columns */
export declare type SpriteMap = Record<string | HeaderIcon, Sprite>;
/** @category Columns */
export declare type SpriteVariant = "normal" | "selected" | "special";
/** @category Columns */
export declare class SpriteManager {
    private onSettled;
    private spriteMap;
    private headerIcons;
    private inFlight;
    constructor(headerIcons: SpriteMap | undefined, onSettled: () => void);
    drawSprite(sprite: HeaderIcon | string, variant: SpriteVariant, ctx: CanvasRenderingContext2D, x: number, y: number, size: number, theme: Theme, alpha?: number): void;
}
export {};
//# sourceMappingURL=data-grid-sprites.d.ts.map