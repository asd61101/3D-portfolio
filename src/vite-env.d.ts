/// <reference types="vite/client" />

declare module 'gsap-trial/SplitText' {
  class SplitText {
    constructor(target: any, vars?: any);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }
  export default SplitText;
  export { SplitText };
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
