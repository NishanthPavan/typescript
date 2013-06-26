/**
 * User: rerades
 * Date: 24/05/13
 * Time: 23:21
 */


// Mostrar también la web http://www.tsdpm.com/    --> como instalar las definiciones



// Parte del core de definiciones de TS (mostramos el interfce del objeto window)
// Core --> lib.d.ts

// ..............

interface MSHTMLTableDataCellElementExtensions {
}

interface Window extends ViewCSS, MSEventAttachmentTarget, MSWindowExtensions, WindowPerformance, ScreenView, EventTarget, WindowLocalStorage, WindowSessionStorage, WindowTimers {
    ondragend: (ev: DragEvent) => any;
    onkeydown: (ev: KeyboardEvent) => any;
    ondragover: (ev: DragEvent) => any;
    onkeyup: (ev: KeyboardEvent) => any;
    onreset: (ev: Event) => any;
    onmouseup: (ev: MouseEvent) => any;
    ondragstart: (ev: DragEvent) => any;
    ondrag: (ev: DragEvent) => any;
    onmouseover: (ev: MouseEvent) => any;
    ondragleave: (ev: DragEvent) => any;
    history: History;
    name: string;
    onafterprint: (ev: Event) => any;
    onpause: (ev: Event) => any;
    onbeforeprint: (ev: Event) => any;
    top: Window;
    onmousedown: (ev: MouseEvent) => any;
    onseeked: (ev: Event) => any;
    opener: Window;
    onclick: (ev: MouseEvent) => any;
    onwaiting: (ev: Event) => any;
    ononline: (ev: Event) => any;
    ondurationchange: (ev: Event) => any;
    frames: Window;
    onblur: (ev: FocusEvent) => any;
    onemptied: (ev: Event) => any;
    onseeking: (ev: Event) => any;
    oncanplay: (ev: Event) => any;
    onstalled: (ev: Event) => any;
    onmousemove: (ev: MouseEvent) => any;
    onoffline: (ev: Event) => any;
    length: number;
    onbeforeunload: (ev: BeforeUnloadEvent) => any;
    onratechange: (ev: Event) => any;
    onstorage: (ev: StorageEvent) => any;
    onloadstart: (ev: Event) => any;
    ondragenter: (ev: DragEvent) => any;
    onsubmit: (ev: Event) => any;
    self: Window;
    onprogress: (ev: any) => any;
    ondblclick: (ev: MouseEvent) => any;
    oncontextmenu: (ev: MouseEvent) => any;
    onchange: (ev: Event) => any;
    onloadedmetadata: (ev: Event) => any;
    onplay: (ev: Event) => any;
    onerror: ErrorFunction;
    onplaying: (ev: Event) => any;
    parent: Window;
    location: Location;
    oncanplaythrough: (ev: Event) => any;
    onabort: (ev: UIEvent) => any;
    onreadystatechange: (ev: Event) => any;
    onkeypress: (ev: KeyboardEvent) => any;
    frameElement: Element;
    onloadeddata: (ev: Event) => any;
    onsuspend: (ev: Event) => any;
    window: Window;
    onfocus: (ev: FocusEvent) => any;
    onmessage: (ev: MessageEvent) => any;
    ontimeupdate: (ev: Event) => any;
    onresize: (ev: UIEvent) => any;
    navigator: Navigator;
    onselect: (ev: UIEvent) => any;
    ondrop: (ev: DragEvent) => any;
    onmouseout: (ev: MouseEvent) => any;
    onended: (ev: Event) => any;
    onhashchange: (ev: Event) => any;
    onunload: (ev: Event) => any;
    onscroll: (ev: UIEvent) => any;
    onmousewheel: (ev: MouseWheelEvent) => any;
    onload: (ev: Event) => any;
    onvolumechange: (ev: Event) => any;
    oninput: (ev: Event) => any;
    alert(message?: string): void;
    focus(): void;
    print(): void;
    prompt(message?: string, defaul?: string): string;
    toString(): string;
    open(url?: string, target?: string, features?: string, replace?: bool): Window;
    close(): void;
    confirm(message?: string): bool;
    postMessage(message: any, targetOrigin: string, ports?: any): void;
    showModalDialog(url?: string, argument?: any, options?: any): any;
    blur(): void;
    getSelection(): Selection;
}
declare var Window: {
    prototype: Window;
    new(): Window;
}

interface SVGAnimatedPreserveAspectRatio {
    animVal: SVGPreserveAspectRatio;
    baseVal: SVGPreserveAspectRatio;
}
declare var SVGAnimatedPreserveAspectRatio: {
    prototype: SVGAnimatedPreserveAspectRatio;
    new(): SVGAnimatedPreserveAspectRatio;
}

interface MSSiteModeEvent extends Event {
    buttonID: number;
    actionURL: string;
}
declare var MSSiteModeEvent: {
    prototype: MSSiteModeEvent;
    new(): MSSiteModeEvent;
}

interface MSCSSStyleRuleExtensions {
    readOnly: bool;
}

// ...................