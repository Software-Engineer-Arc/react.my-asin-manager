import * as React from "react";
export declare function useEventListener<K extends keyof HTMLElementEventMap>(eventName: K, handler: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, element: HTMLElement | Window | null, passive: boolean, capture?: boolean): void;
export declare function whenDefined<T>(obj: any, result: T): T | undefined;
export declare function degreesToRadians(degrees: number): number;
export interface SpriteProps {
    fgColor: string;
    bgColor: string;
}
export declare const EditPencil: React.FunctionComponent<Partial<SpriteProps>>;
export declare const Checkmark: React.FunctionComponent<Partial<SpriteProps>>;
export declare function useDebouncedMemo<T>(factory: () => T, deps: React.DependencyList | undefined, time: number): T;
export declare function direction(value: string): "rtl" | "ltr" | "neutral";
export declare function getScrollBarWidth(): number;
export declare function useStateWithReactiveInput<T>(inputState: T): [T, React.Dispatch<React.SetStateAction<T>>, () => void];
//# sourceMappingURL=utils.d.ts.map