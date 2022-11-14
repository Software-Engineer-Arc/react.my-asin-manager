import type { DataGridSearchProps } from "../data-grid-search/data-grid-search";
import { GridCell, GridSelection } from "../data-grid/data-grid-types";
export declare function expandSelection(newVal: GridSelection, getCellsForSelection: DataGridSearchProps["getCellsForSelection"], rowMarkerOffset: number, spanRangeBehavior: "allowPartial" | "default", abortController: AbortController): GridSelection;
export declare function unquote(str: string): string[][];
export declare function decodeHTML(tableEl: HTMLTableElement): string[][] | undefined;
export declare function copyToClipboard(cells: readonly (readonly GridCell[])[], columnIndexes: readonly number[], e?: ClipboardEvent): void;
//# sourceMappingURL=data-editor-fns.d.ts.map