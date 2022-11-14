import type { Theme } from "../common/styles";
import type React from "react";
import type { CSSProperties } from "react";
import type { SpriteManager } from "./data-grid-sprites";
import type { OverlayImageEditorProps } from "../data-grid-overlay-editor/private/image-overlay-editor";
/** @category Selection */
export interface GridSelection {
    readonly current?: {
        readonly cell: Item;
        readonly range: Readonly<Rectangle>;
        readonly rangeStack: readonly Readonly<Rectangle>[];
    };
    readonly columns: CompactSelection;
    readonly rows: CompactSelection;
}
/** @category Types */
export declare type ImageEditorType = React.ComponentType<OverlayImageEditorProps>;
/** @category Types */
export declare type GridMouseEventArgs = GridMouseCellEventArgs | GridMouseHeaderEventArgs | GridMouseOutOfBoundsEventArgs | GridMouseGroupHeaderEventArgs;
interface PreventableEvent {
    preventDefault: () => void;
}
/** @category Types */
export interface CellClickedEventArgs extends GridMouseCellEventArgs, PreventableEvent {
}
/** @category Types */
export interface HeaderClickedEventArgs extends GridMouseHeaderEventArgs, PreventableEvent {
}
/** @category Types */
export interface GroupHeaderClickedEventArgs extends GridMouseGroupHeaderEventArgs, PreventableEvent {
}
/** @category Types */
export interface ImageWindowLoader {
    setWindow(newWindow: Rectangle, freezeCols: number): void;
    loadOrGetImage(url: string, col: number, row: number): HTMLImageElement | ImageBitmap | undefined;
    setCallback(imageLoaded: (locations: readonly Item[]) => void): void;
}
/** @category Types */
export declare const BooleanEmpty: null;
/** @category Types */
export declare const BooleanIndeterminate: undefined;
/** @category Types */
export declare type BooleanEmpty = null;
/** @category Types */
export declare type BooleanIndeterminate = undefined;
interface PositionableMouseEventArgs {
    readonly localEventX: number;
    readonly localEventY: number;
}
/** @category Types */
export interface BaseGridMouseEventArgs {
    readonly shiftKey: boolean;
    readonly ctrlKey: boolean;
    readonly metaKey: boolean;
    readonly isTouch: boolean;
    readonly isLongTouch?: boolean;
    readonly isEdge: boolean;
    readonly button: number;
    readonly scrollEdge: readonly [xDir: -1 | 0 | 1, yDir: -1 | 0 | 1];
}
/** @category Types */
export interface GridMouseCellEventArgs extends BaseGridMouseEventArgs, PositionableMouseEventArgs {
    readonly kind: "cell";
    readonly location: Item;
    readonly bounds: Rectangle;
    readonly isFillHandle: boolean;
}
/** @category Types */
export declare const headerKind: "header";
/** @category Types */
export interface GridMouseHeaderEventArgs extends BaseGridMouseEventArgs, PositionableMouseEventArgs {
    readonly kind: typeof headerKind;
    readonly location: readonly [number, -1];
    readonly bounds: Rectangle;
    readonly group: string;
}
/** @category Types */
export declare const groupHeaderKind: "group-header";
/** @category Types */
export interface GridMouseGroupHeaderEventArgs extends BaseGridMouseEventArgs, PositionableMouseEventArgs {
    readonly kind: typeof groupHeaderKind;
    readonly location: readonly [number, -2];
    readonly bounds: Rectangle;
    readonly group: string;
}
/** @category Types */
export declare const outOfBoundsKind: "out-of-bounds";
/** @category Types */
export interface GridMouseOutOfBoundsEventArgs extends BaseGridMouseEventArgs {
    readonly kind: typeof outOfBoundsKind;
    readonly location: Item;
    readonly direction: readonly [-1 | 0 | 1, -1 | 0 | 1];
}
/** @category Types */
export interface GridKeyEventArgs {
    readonly bounds: Rectangle | undefined;
    readonly key: string;
    readonly keyCode: number;
    readonly altKey: boolean;
    readonly shiftKey: boolean;
    readonly ctrlKey: boolean;
    readonly metaKey: boolean;
    readonly cancel: () => void;
    readonly stopPropagation: () => void;
    readonly preventDefault: () => void;
    readonly rawEvent: React.KeyboardEvent<HTMLElement> | undefined;
}
interface DragHandler {
    readonly setData: (mime: string, payload: string) => void;
    readonly setDragImage: (image: Element, x: number, y: number) => void;
    readonly preventDefault: () => void;
    readonly defaultPrevented: () => boolean;
}
/** @category Types */
export declare type GridDragEventArgs = GridMouseEventArgs & DragHandler;
/** @category Types */
export declare type TrailingRowType = "sticky" | "appended" | "none";
/** @category Types */
export declare type DrawCustomCellCallback = (args: {
    ctx: CanvasRenderingContext2D;
    cell: GridCell;
    theme: Theme;
    rect: Rectangle;
    col: number;
    row: number;
    hoverAmount: number;
    hoverX: number | undefined;
    hoverY: number | undefined;
    highlighted: boolean;
    imageLoader: ImageWindowLoader;
    requestAnimationFrame: () => void;
}) => boolean;
/** @category Types */
export declare type DrawHeaderCallback = (args: {
    ctx: CanvasRenderingContext2D;
    column: GridColumn;
    columnIndex: number;
    theme: Theme;
    rect: Rectangle;
    hoverAmount: number;
    isSelected: boolean;
    isHovered: boolean;
    hasSelectedCell: boolean;
    spriteManager: SpriteManager;
    menuBounds: Rectangle;
}) => boolean;
/** @category Cells */
export declare enum GridCellKind {
    Uri = "uri",
    Text = "text",
    Image = "image",
    RowID = "row-id",
    Number = "number",
    Bubble = "bubble",
    Boolean = "boolean",
    Loading = "loading",
    Markdown = "markdown",
    Drilldown = "drilldown",
    Protected = "protected",
    Custom = "custom"
}
/** @category Columns */
export declare enum GridColumnIcon {
    HeaderRowID = "headerRowID",
    HeaderCode = "headerCode",
    HeaderNumber = "headerNumber",
    HeaderString = "headerString",
    HeaderBoolean = "headerBoolean",
    HeaderAudioUri = "headerAudioUri",
    HeaderVideoUri = "headerVideoUri",
    HeaderEmoji = "headerEmoji",
    HeaderImage = "headerImage",
    HeaderUri = "headerUri",
    HeaderPhone = "headerPhone",
    HeaderMarkdown = "headerMarkdown",
    HeaderDate = "headerDate",
    HeaderTime = "headerTime",
    HeaderEmail = "headerEmail",
    HeaderReference = "headerReference",
    HeaderIfThenElse = "headerIfThenElse",
    HeaderSingleValue = "headerSingleValue",
    HeaderLookup = "headerLookup",
    HeaderTextTemplate = "headerTextTemplate",
    HeaderMath = "headerMath",
    HeaderRollup = "headerRollup",
    HeaderJoinStrings = "headerJoinStrings",
    HeaderSplitString = "headerSplitString",
    HeaderGeoDistance = "headerGeoDistance",
    HeaderArray = "headerArray",
    RowOwnerOverlay = "rowOwnerOverlay",
    ProtectedColumnOverlay = "protectedColumnOverlay"
}
/** @category Types */
export declare type CellArray = readonly (readonly GridCell[])[];
/** @category Types */
export declare type Item = readonly [col: number, row: number];
/** @category Types */
export declare const headerCellCheckboxPrefix = "___gdg_header_cell_";
/** @category Types */
export declare const headerCellCheckedMarker: string;
/** @category Types */
export declare const headerCellUnheckedMarker: string;
/** @category Types */
export declare const headerCellIndeterminateMarker: string;
interface BaseGridColumn {
    readonly title: string;
    readonly group?: string;
    readonly icon?: GridColumnIcon | string;
    readonly overlayIcon?: GridColumnIcon | string;
    readonly hasMenu?: boolean;
    readonly grow?: number;
    readonly style?: "normal" | "highlight";
    readonly themeOverride?: Partial<Theme>;
    readonly trailingRowOptions?: {
        readonly hint?: string;
        readonly addIcon?: string;
        readonly targetColumn?: number | GridColumn;
        readonly themeOverride?: Partial<Theme>;
        readonly disabled?: boolean;
    };
}
/** @category Columns */
export declare function isSizedGridColumn(c: GridColumn): c is SizedGridColumn;
/** @category Columns */
export interface SizedGridColumn extends BaseGridColumn {
    readonly width: number;
    readonly id?: string;
}
/** @category Columns */
export interface AutoGridColumn extends BaseGridColumn {
    readonly id: string;
}
/** @category Types */
export declare function resolveCellsThunk(thunk: GetCellsThunk | CellArray): Promise<CellArray>;
/** @category Types */
export declare type GetCellsThunk = () => Promise<CellArray>;
/** @category Columns */
export declare type GridColumn = SizedGridColumn | AutoGridColumn;
/** @category Columns */
export declare type InnerGridColumn = SizedGridColumn & {
    growOffset?: number;
};
/** @category Cells */
export declare type ReadWriteGridCell = TextCell | NumberCell | MarkdownCell | UriCell | CustomCell | BooleanCell;
/** @category Cells */
export declare type EditableGridCell = TextCell | ImageCell | BooleanCell | MarkdownCell | UriCell | NumberCell | CustomCell;
/** @category Cells */
export declare type EditableGridCellKind = EditableGridCell["kind"];
/** @category Cells */
export declare function isEditableGridCell(cell: GridCell): cell is ValidatedGridCell;
/** @category Cells */
export declare function isTextEditableGridCell(cell: GridCell): cell is ReadWriteGridCell;
/** @category Cells */
export declare function isInnerOnlyCell(cell: InnerGridCell): cell is InnerOnlyGridCell;
/** @category Cells */
export declare function isReadWriteCell(cell: GridCell): cell is ReadWriteGridCell;
/** @category Cells */
export declare type GridCell = EditableGridCell | BubbleCell | RowIDCell | LoadingCell | ProtectedCell | DrilldownCell | CustomCell;
declare type InnerOnlyGridCell = NewRowCell | MarkerCell;
/** @category Cells */
export declare type InnerGridCell = GridCell | InnerOnlyGridCell;
/** @category Cells */
export declare type CellList = readonly Item[];
/** @category Types */
export interface Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
}
/** @category Cells */
export interface BaseGridCell {
    readonly allowOverlay: boolean;
    readonly lastUpdated?: number;
    readonly style?: "normal" | "faded";
    readonly themeOverride?: Partial<Theme>;
    readonly span?: readonly [start: number, end: number];
    readonly contentAlign?: "left" | "right" | "center";
    readonly cursor?: CSSProperties["cursor"];
}
/** @category Cells */
export interface LoadingCell extends BaseGridCell {
    readonly kind: GridCellKind.Loading;
}
/** @category Cells */
export interface ProtectedCell extends BaseGridCell {
    readonly kind: GridCellKind.Protected;
}
/** @category Cells */
export interface TextCell extends BaseGridCell {
    readonly kind: GridCellKind.Text;
    readonly displayData: string;
    readonly data: string;
    readonly readonly?: boolean;
    readonly allowWrapping?: boolean;
}
/** @category Cells */
export interface NumberCell extends BaseGridCell {
    readonly kind: GridCellKind.Number;
    readonly displayData: string;
    readonly data: number | undefined;
    readonly readonly?: boolean;
}
/** @category Cells */
export interface ImageCell extends BaseGridCell {
    readonly kind: GridCellKind.Image;
    readonly data: string[];
    readonly rounding?: number;
    readonly displayData?: string[];
    readonly allowAdd: boolean;
}
/** @category Cells */
export interface BubbleCell extends BaseGridCell {
    readonly kind: GridCellKind.Bubble;
    readonly data: string[];
}
/** @category Renderers */
export declare type SelectionRange = number | readonly [number, number];
/** @category Renderers */
export declare type ProvideEditorComponent<T extends InnerGridCell> = React.FunctionComponent<{
    readonly onChange: (newValue: T) => void;
    readonly onFinishedEditing: (newValue?: T) => void;
    readonly isHighlighted: boolean;
    readonly value: T;
    readonly initialValue?: string;
    readonly validatedSelection?: SelectionRange;
    readonly imageEditorOverride?: ImageEditorType;
    readonly markdownDivCreateNode?: (content: string) => DocumentFragment;
    readonly target: Rectangle;
    readonly forceEditMode: boolean;
    readonly isValid?: boolean;
}>;
declare type ObjectEditorCallbackResult<T extends InnerGridCell> = {
    editor: ProvideEditorComponent<T>;
    deletedValue?: (toDelete: T) => T;
    styleOverride?: CSSProperties;
    disablePadding?: boolean;
    disableStyling?: boolean;
};
/** @category Renderers */
export declare type ProvideEditorCallbackResult<T extends InnerGridCell> = (ProvideEditorComponent<T> & {
    disablePadding?: boolean;
    disableStyling?: boolean;
}) | ObjectEditorCallbackResult<T> | undefined;
/** @category Renderers */
export declare function isObjectEditorCallbackResult<T extends InnerGridCell>(obj: ProvideEditorCallbackResult<T>): obj is ObjectEditorCallbackResult<T>;
/** @category Renderers */
export declare type ProvideEditorCallback<T extends InnerGridCell> = (cell: T) => ProvideEditorCallbackResult<T>;
/** @category Cells */
export declare type ValidatedGridCell = EditableGridCell & {
    selectionRange?: SelectionRange;
};
/** @category Cells */
export interface CustomCell<T extends {} = {}> extends BaseGridCell {
    readonly kind: GridCellKind.Custom;
    readonly data: T;
    readonly copyData: string;
    readonly readonly?: boolean;
}
/** @category Cells */
export interface DrilldownCellData {
    readonly text: string;
    readonly img?: string;
}
/** @category Cells */
export interface DrilldownCell extends BaseGridCell {
    readonly kind: GridCellKind.Drilldown;
    readonly data: readonly DrilldownCellData[];
}
/** @category Cells */
export interface BooleanCell extends BaseGridCell {
    readonly kind: GridCellKind.Boolean;
    readonly data: boolean | BooleanEmpty | BooleanIndeterminate;
    readonly readonly?: boolean;
    readonly allowOverlay: false;
}
/** @category Cells */
export declare function booleanCellIsEditable(cell: BooleanCell): boolean;
/** @category Cells */
export interface RowIDCell extends BaseGridCell {
    readonly kind: GridCellKind.RowID;
    readonly data: string;
    readonly readonly?: boolean;
}
/** @category Cells */
export interface MarkdownCell extends BaseGridCell {
    readonly kind: GridCellKind.Markdown;
    readonly data: string;
    readonly readonly?: boolean;
}
/** @category Cells */
export interface UriCell extends BaseGridCell {
    readonly kind: GridCellKind.Uri;
    readonly data: string;
    readonly readonly?: boolean;
}
/** @category Cells */
export declare enum InnerGridCellKind {
    NewRow = "new-row",
    Marker = "marker"
}
/** @category Cells */
export interface NewRowCell extends BaseGridCell {
    readonly kind: InnerGridCellKind.NewRow;
    readonly hint: string;
    readonly allowOverlay: false;
    readonly icon?: string;
}
/** @category Cells */
export interface MarkerCell extends BaseGridCell {
    readonly kind: InnerGridCellKind.Marker;
    readonly allowOverlay: false;
    readonly row: number;
    readonly drawHandle: boolean;
    readonly checked: boolean;
    readonly markerKind: "checkbox" | "number" | "both";
}
/** @category Selection */
export declare type Slice = [start: number, end: number];
/** @category Selection */
export declare type CompactSelectionRanges = readonly Slice[];
/** @category Selection */
export declare class CompactSelection {
    private readonly items;
    private constructor();
    static empty: () => CompactSelection;
    static fromSingleSelection: (selection: number | Slice) => CompactSelection;
    offset: (amount: number) => CompactSelection;
    add: (selection: number | Slice) => CompactSelection;
    remove: (selection: number | Slice) => CompactSelection;
    first: () => number | undefined;
    last: () => number | undefined;
    hasIndex: (index: number) => boolean;
    hasAll: (index: Slice) => boolean;
    some: (predicate: (index: number) => boolean) => boolean;
    equals: (other: CompactSelection) => boolean;
    toArray: () => number[];
    get length(): number;
    [Symbol.iterator](): Generator<number, void, unknown>;
}
export {};
//# sourceMappingURL=data-grid-types.d.ts.map