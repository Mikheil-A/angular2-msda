import {
    Injectable,
    Injector,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    ApplicationRef,
    ComponentRef
} from '@angular/core';

import { MSDAToast } from './toast';

export class MSDAToastConfig {
    onClose?= () => { };
    linkClick?= (e: Event) => { };
    closeAfter?= 3000;
};

@Injectable()
export class MSDAToastService {

    private _componentRef: ComponentRef<MSDAToast>;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) { }

    showHtml(html: string, userConfig?: MSDAToastConfig) {
        const config = { ...new MSDAToastConfig(), ...userConfig };

        // 1. Create a component reference from the component
        this._componentRef = this.componentFactoryResolver
            .resolveComponentFactory(MSDAToast)
            .create(this.injector);

        this._componentRef.instance.html = html;
        this._componentRef.instance.linkClick.subscribe((e: Event) => config.linkClick(e));
        this._componentRef.instance.dismiss = () => {
            this._componentRef.instance.linkClick.unsubscribe();
            this.appRef.detachView(this._componentRef.hostView);
            this._componentRef.destroy();
            config.onClose();
        };

        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(this._componentRef.hostView);

        // 3. Get DOM element from component
        const domElem = (this._componentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;

        // 4. Append DOM element to the body
        document.body.appendChild(domElem);

        // 5. Wait some time and remove it from the component tree and from the DOM
        setTimeout(() => this._componentRef.instance.dismiss(), config.closeAfter);
    }

}
