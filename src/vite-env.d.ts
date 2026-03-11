/// <reference types="vite/client" />

declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: any, vars?: any);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(vars?: any): ScrollSmoother;
    static refresh(safe?: boolean): void;
    paused(value?: boolean): boolean | ScrollSmoother;
    scrollTop(value?: number): number | ScrollSmoother;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
  }
}
