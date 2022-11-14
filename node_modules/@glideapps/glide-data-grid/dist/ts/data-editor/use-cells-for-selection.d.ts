import type { DataGridSearchProps } from "../data-grid-search/data-grid-search";
import { CellArray } from "../data-grid/data-grid-types";
import type { DataEditorProps } from "./data-editor";
declare type CellsForSelectionCallback = NonNullable<DataGridSearchProps["getCellsForSelection"]>;
export declare function useCellsForSelection(getCellsForSelectionIn: CellsForSelectionCallback | true | undefined, getCellContent: DataEditorProps["getCellContent"], rowMarkerOffset: number, abortController: AbortController): readonly [((selection: import("../data-grid/data-grid-types").Rectangle, abortSignal: AbortSignal) => import("../data-grid/data-grid-types").GetCellsThunk | CellArray) | undefined, ((selection: import("../data-grid/data-grid-types").Rectangle, abortSignal: AbortSignal) => import("../data-grid/data-grid-types").GetCellsThunk | CellArray) | undefined];
export {};
//# sourceMappingURL=use-cells-for-selection.d.ts.map