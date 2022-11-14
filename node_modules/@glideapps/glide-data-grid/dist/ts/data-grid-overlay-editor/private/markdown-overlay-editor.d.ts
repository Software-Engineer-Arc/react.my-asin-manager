import * as React from "react";
import type { Rectangle, SelectionRange } from "../../data-grid/data-grid-types";
interface Props {
    readonly targetRect: Rectangle;
    readonly markdown: string;
    readonly onChange: (ev: React.ChangeEvent<HTMLTextAreaElement>) => void;
    readonly forceEditMode: boolean;
    readonly onFinish: () => void;
    readonly validatedSelection?: SelectionRange;
    readonly readonly: boolean;
    createNode?: (content: string) => DocumentFragment;
}
export declare const MarkdownOverlayEditor: React.FunctionComponent<Props>;
export {};
//# sourceMappingURL=markdown-overlay-editor.d.ts.map