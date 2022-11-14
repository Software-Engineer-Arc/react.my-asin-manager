import { CompactSelection, GridSelection, Slice } from "./data-grid-types";
declare type SetCallback = (newVal: GridSelection, expand: boolean) => void;
export declare type SelectionBlending = "exclusive" | "mixed";
declare type SelectionTrigger = "click" | "drag" | "keyboard-nav" | "keyboard-select" | "edit";
export declare function useSelectionBehavior(gridSelection: GridSelection, setGridSelection: SetCallback, rangeBehavior: SelectionBlending, columnBehavior: SelectionBlending, rowBehavior: SelectionBlending, rangeSelect: "none" | "cell" | "rect" | "multi-cell" | "multi-rect"): readonly [(value: Pick<NonNullable<GridSelection["current"]>, "cell" | "range"> | undefined, expand: boolean, append: boolean, trigger: SelectionTrigger) => void, (newRows: CompactSelection | undefined, append: Slice | number | undefined, allowMixed: boolean) => void, (newCols: CompactSelection | undefined, append: number | Slice | undefined, allowMixed: boolean) => void];
export {};
//# sourceMappingURL=use-selection-behavior.d.ts.map