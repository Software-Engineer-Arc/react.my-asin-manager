import * as React from "react";
import { CellArray, GetCellsThunk, Item, Rectangle } from "../data-grid/data-grid-types";
import { ScrollingDataGridProps } from "../scrolling-data-grid/scrolling-data-grid";
export interface DataGridSearchProps extends Omit<ScrollingDataGridProps, "prelightCells"> {
    readonly getCellsForSelection?: (selection: Rectangle, abortSignal: AbortSignal) => GetCellsThunk | CellArray;
    readonly onSearchResultsChanged?: (results: readonly Item[], navIndex: number) => void;
    /**
     * Controls the visibility of the search overlay.
     * @group Search
     */
    readonly showSearch?: boolean;
    /**
     * Emitted when the search window close event is triggered.
     * @group Search
     */
    readonly onSearchClose?: () => void;
    readonly searchInputRef: React.MutableRefObject<HTMLInputElement | null>;
}
declare const DataGridSearch: React.FunctionComponent<DataGridSearchProps>;
export default DataGridSearch;
//# sourceMappingURL=data-grid-search.d.ts.map