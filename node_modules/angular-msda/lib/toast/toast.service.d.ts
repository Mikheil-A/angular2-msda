import { Injector, ComponentFactoryResolver, ApplicationRef } from '@angular/core';
export declare class MSDAToastConfig {
    onClose?: () => void;
    linkClick?: (e: Event) => void;
    closeAfter?: number;
}
export declare class MSDAToastService {
    private componentFactoryResolver;
    private appRef;
    private injector;
    private _componentRef;
    constructor(componentFactoryResolver: ComponentFactoryResolver, appRef: ApplicationRef, injector: Injector);
    showHtml(html: string, userConfig?: MSDAToastConfig): void;
}
