import * as React from "react";
import type { SelectionRange } from "../../data-grid/data-grid-types";
import type { NumberFormatValues } from "react-number-format/types/types";
interface Props {
    value: number | undefined;
    disabled?: boolean;
    onChange: (values: NumberFormatValues) => void;
    highlight: boolean;
    validatedSelection?: SelectionRange;
}
declare const NumberOverlayEditor: React.FunctionComponent<Props>;
export default NumberOverlayEditor;
//# sourceMappingURL=number-overlay-editor.d.ts.map