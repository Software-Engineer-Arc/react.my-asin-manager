import type { CustomRenderer } from "../data-grid/cells/cell-types";
import { CustomCell } from "../data-grid/data-grid-types";
import type { DataEditorProps } from "./data-editor";
/**
 * @category Renderers
 * @deprecated use CustomRenderer instead
 */
export declare type CustomCellRenderer<T extends CustomCell> = Omit<CustomRenderer<T>, "kind">;
/**
 * @category Hooks
 * @deprecated use customRenderers instead.
 * @param cells
 * @returns an object intended to be spread on the DataEditor.
 */
export declare function useCustomCells(cells: readonly CustomCellRenderer<any>[]): {
    customRenderers: NonNullable<DataEditorProps["customRenderers"]>;
};
//# sourceMappingURL=use-custom-cells.d.ts.map