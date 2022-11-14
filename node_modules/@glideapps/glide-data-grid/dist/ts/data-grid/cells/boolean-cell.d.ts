import { BooleanCell } from "../data-grid-types";
import type { InternalCellRenderer } from "./cell-types";
/**
 * Checkbox behavior:
 *
 * true + click -> unchecked
 * false + click -> checked
 * indeterminate + click -> checked
 * empty + click -> checked
 */
export declare function toggleBoolean(data: boolean | null | undefined): boolean | null | undefined;
export declare const booleanCellRenderer: InternalCellRenderer<BooleanCell>;
//# sourceMappingURL=boolean-cell.d.ts.map