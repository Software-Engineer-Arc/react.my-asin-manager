import React from "react";
/** @category Theme */
export declare function makeCSSStyle(theme: Theme): Record<string, string>;
/** @category Theme */
export interface Theme {
    accentColor: string;
    accentFg: string;
    accentLight: string;
    textDark: string;
    textMedium: string;
    textLight: string;
    textBubble: string;
    bgIconHeader: string;
    fgIconHeader: string;
    textHeader: string;
    textGroupHeader?: string;
    textHeaderSelected: string;
    bgCell: string;
    bgCellMedium: string;
    bgHeader: string;
    bgHeaderHasFocus: string;
    bgHeaderHovered: string;
    bgBubble: string;
    bgBubbleSelected: string;
    bgSearchResult: string;
    borderColor: string;
    horizontalBorderColor?: string;
    headerBottomBorderColor?: string;
    drilldownBorder: string;
    linkColor: string;
    cellHorizontalPadding: number;
    cellVerticalPadding: number;
    headerFontStyle: string;
    baseFontStyle: string;
    fontFamily: string;
    editorFontSize: string;
    lineHeight: number;
}
/** @category Theme */
export declare function getDataEditorTheme(): Theme;
/** @category Theme */
export declare const ThemeContext: React.Context<Theme>;
/** @category Hooks */
export declare function useTheme(): Theme;
//# sourceMappingURL=styles.d.ts.map