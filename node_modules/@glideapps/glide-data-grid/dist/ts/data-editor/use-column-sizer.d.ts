import type { Theme } from "../common/styles";
import type { DataGridSearchProps } from "../data-grid-search/data-grid-search";
import type { GetCellRendererCallback } from "../data-grid/cells/cell-types";
import { CellArray, GridColumn, InnerGridColumn, SizedGridColumn } from "../data-grid/data-grid-types";
export declare function measureColumn(ctx: CanvasRenderingContext2D, theme: Theme, c: GridColumn, colIndex: number, selectedData: CellArray, minColumnWidth: number, maxColumnWidth: number, removeOutliers: boolean, getCellRenderer: GetCellRendererCallback): SizedGridColumn;
/** @category Hooks */
export declare function useColumnSizer(columns: readonly GridColumn[], rows: number, getCellsForSelection: DataGridSearchProps["getCellsForSelection"], clientWidth: number, minColumnWidth: number, maxColumnWidth: number, theme: Theme, getCellRenderer: GetCellRendererCallback, abortController: AbortController): readonly InnerGridColumn[];
//# sourceMappingURL=use-column-sizer.d.ts.map