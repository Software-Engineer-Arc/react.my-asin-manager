import type { Theme } from "../common/styles";
import { DrilldownCellData, Item, GridSelection, InnerGridCell, SizedGridColumn, Rectangle, BaseGridCell, BooleanEmpty, BooleanIndeterminate } from "./data-grid-types";
import type { BaseDrawArgs, PrepResult } from "./cells/cell-types";
export interface MappedGridColumn extends SizedGridColumn {
    sourceIndex: number;
    sticky: boolean;
}
export declare function useMappedColumns(columns: readonly SizedGridColumn[], freezeColumns: number): readonly MappedGridColumn[];
export declare function isGroupEqual(left: string | undefined, right: string | undefined): boolean;
export declare function cellIsSelected(location: Item, cell: InnerGridCell, selection: GridSelection): boolean;
export declare function cellIsInRange(location: Item, cell: InnerGridCell, selection: GridSelection): number;
export declare function getStickyWidth(columns: readonly MappedGridColumn[], dndState?: {
    src: number;
    dest: number;
}): number;
export declare function getEffectiveColumns(columns: readonly MappedGridColumn[], cellXOffset: number, width: number, dndState?: {
    src: number;
    dest: number;
}, tx?: number): readonly MappedGridColumn[];
export declare function getColumnIndexForX(targetX: number, effectiveColumns: readonly MappedGridColumn[], translateX?: number): number;
export declare function getRowIndexForY(targetY: number, height: number, hasGroups: boolean, headerHeight: number, groupHeaderHeight: number, rows: number, rowHeight: number | ((index: number) => number), cellYOffset: number, translateY: number, lastRowSticky: boolean): number | undefined;
/** @category Drawing */
export declare function measureTextCached(s: string, ctx: CanvasRenderingContext2D, font?: string): TextMetrics;
/** @category Drawing */
export declare function getMiddleCenterBias(ctx: CanvasRenderingContext2D, font: string | Theme): number;
/** @category Drawing */
export declare function drawWithLastUpdate(args: BaseDrawArgs, lastUpdate: number | undefined, frameTime: number, lastPrep: PrepResult | undefined, draw: () => void): boolean;
export declare function prepTextCell(args: BaseDrawArgs, lastPrep: PrepResult | undefined, overrideColor?: string): Partial<PrepResult>;
/** @category Drawing */
export declare function drawTextCellExternal(args: BaseDrawArgs, data: string, contentAlign?: BaseGridCell["contentAlign"]): void;
/** @category Drawing */
export declare function drawTextCell(args: Pick<BaseDrawArgs, "rect" | "ctx" | "theme">, data: string, contentAlign?: BaseGridCell["contentAlign"], allowWrapping?: boolean, hyperWrapping?: boolean): void;
export declare function drawNewRowCell(args: BaseDrawArgs, data: string, icon?: string): void;
export declare function drawCheckbox(ctx: CanvasRenderingContext2D, theme: Theme, checked: boolean | BooleanEmpty | BooleanIndeterminate, x: number, y: number, width: number, height: number, highlighted: boolean, hoverX?: number, hoverY?: number): void;
export declare function prepMarkerRowCell(args: BaseDrawArgs, lastPrep: PrepResult | undefined): Partial<PrepResult>;
export declare function deprepMarkerRowCell(args: Pick<BaseDrawArgs, "ctx">): void;
export declare function drawMarkerRowCell(args: BaseDrawArgs, index: number, checked: boolean, markerKind: "checkbox" | "both" | "number", drawHandle: boolean): void;
export declare function drawProtectedCell(args: BaseDrawArgs): void;
export declare function drawBoolean(args: BaseDrawArgs, data: boolean | BooleanEmpty | BooleanIndeterminate, canEdit: boolean): void;
export declare function drawBubbles(args: BaseDrawArgs, data: readonly string[]): void;
export declare function drawDrilldownCell(args: BaseDrawArgs, data: readonly DrilldownCellData[]): void;
export declare function drawImage(args: BaseDrawArgs, data: readonly string[], rounding?: number): void;
interface Point {
    x: number;
    y: number;
    radius?: number;
}
export declare function roundedPoly(ctx: CanvasRenderingContext2D, points: Point[], radiusAll: number): void;
export declare function computeBounds(col: number, row: number, width: number, height: number, groupHeaderHeight: number, totalHeaderHeight: number, cellXOffset: number, cellYOffset: number, translateX: number, translateY: number, rows: number, freezeColumns: number, lastRowSticky: boolean, mappedColumns: readonly MappedGridColumn[], rowHeight: number | ((index: number) => number)): Rectangle;
export {};
//# sourceMappingURL=data-grid-lib.d.ts.map