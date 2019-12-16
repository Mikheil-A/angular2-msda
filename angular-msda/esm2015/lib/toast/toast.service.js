/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, Injector, ComponentFactoryResolver, ApplicationRef } from '@angular/core';
import { MSDAToast } from './toast';
export class MSDAToastConfig {
    constructor() {
        this.onClose = () => { };
        this.linkClick = (e) => { };
        this.closeAfter = 3000;
    }
}
if (false) {
    /** @type {?} */
    MSDAToastConfig.prototype.onClose;
    /** @type {?} */
    MSDAToastConfig.prototype.linkClick;
    /** @type {?} */
    MSDAToastConfig.prototype.closeAfter;
}
;
export class MSDAToastService {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} appRef
     * @param {?} injector
     */
    constructor(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    /**
     * @param {?} html
     * @param {?=} userConfig
     * @return {?}
     */
    showHtml(html, userConfig) {
        /** @type {?} */
        const config = Object.assign({}, new MSDAToastConfig(), userConfig);
        // 1. Create a component reference from the component
        this._componentRef = this.componentFactoryResolver
            .resolveComponentFactory(MSDAToast)
            .create(this.injector);
        this._componentRef.instance.html = html;
        this._componentRef.instance.linkClick.subscribe((e) => config.linkClick(e));
        this._componentRef.instance.dismiss = () => {
            this._componentRef.instance.linkClick.unsubscribe();
            this.appRef.detachView(this._componentRef.hostView);
            this._componentRef.destroy();
            config.onClose();
        };
        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(this._componentRef.hostView);
        // 3. Get DOM element from component
        /** @type {?} */
        const domElem = (/** @type {?} */ (((/** @type {?} */ (this._componentRef.hostView)))
            .rootNodes[0]));
        // 4. Append DOM element to the body
        document.body.appendChild(domElem);
        // 5. Wait some time and remove it from the component tree and from the DOM
        setTimeout(() => this._componentRef.instance.dismiss(), config.closeAfter);
    }
}
MSDAToastService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MSDAToastService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector }
];
if (false) {
    /** @type {?} */
    MSDAToastService.prototype._componentRef;
    /** @type {?} */
    MSDAToastService.prototype.componentFactoryResolver;
    /** @type {?} */
    MSDAToastService.prototype.appRef;
    /** @type {?} */
    MSDAToastService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItbXNkYS8iLCJzb3VyY2VzIjpbImxpYi90b2FzdC90b2FzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsVUFBVSxFQUNWLFFBQVEsRUFDUix3QkFBd0IsRUFFeEIsY0FBYyxFQUVqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRXBDLE1BQU0sT0FBTyxlQUFlO0lBQTVCO1FBQ0ksWUFBTyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwQixjQUFTLEdBQUcsQ0FBQyxDQUFRLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QixlQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Q0FBQTs7O0lBSEcsa0NBQW9COztJQUNwQixvQ0FBOEI7O0lBQzlCLHFDQUFrQjs7QUFDckIsQ0FBQztBQUdGLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7OztJQUl6QixZQUNZLHdCQUFrRCxFQUNsRCxNQUFzQixFQUN0QixRQUFrQjtRQUZsQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDMUIsQ0FBQzs7Ozs7O0lBRUwsUUFBUSxDQUFDLElBQVksRUFBRSxVQUE0Qjs7Y0FDekMsTUFBTSxxQkFBUSxJQUFJLGVBQWUsRUFBRSxFQUFLLFVBQVUsQ0FBRTtRQUUxRCxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsd0JBQXdCO2FBQzdDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQzthQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQVEsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM3QixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDO1FBRUYsOEVBQThFO1FBQzlFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7OztjQUc5QyxPQUFPLEdBQUcsbUJBQUEsQ0FBQyxtQkFBQSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBd0IsQ0FBQzthQUNoRSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQWU7UUFFaEMsb0NBQW9DO1FBQ3BDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRW5DLDJFQUEyRTtRQUMzRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9FLENBQUM7OztZQXhDSixVQUFVOzs7O1lBZFAsd0JBQXdCO1lBRXhCLGNBQWM7WUFIZCxRQUFROzs7O0lBa0JSLHlDQUErQzs7SUFHM0Msb0RBQTBEOztJQUMxRCxrQ0FBOEI7O0lBQzlCLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBJbmplY3RhYmxlLFxyXG4gICAgSW5qZWN0b3IsXHJcbiAgICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgICBBcHBsaWNhdGlvblJlZixcclxuICAgIENvbXBvbmVudFJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTVNEQVRvYXN0IH0gZnJvbSAnLi90b2FzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTVNEQVRvYXN0Q29uZmlnIHtcclxuICAgIG9uQ2xvc2U/PSAoKSA9PiB7IH07XHJcbiAgICBsaW5rQ2xpY2s/PSAoZTogRXZlbnQpID0+IHsgfTtcclxuICAgIGNsb3NlQWZ0ZXI/PSAzMDAwO1xyXG59O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTVNEQVRvYXN0U2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8TVNEQVRvYXN0PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcclxuICAgICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBzaG93SHRtbChodG1sOiBzdHJpbmcsIHVzZXJDb25maWc/OiBNU0RBVG9hc3RDb25maWcpIHtcclxuICAgICAgICBjb25zdCBjb25maWcgPSB7IC4uLm5ldyBNU0RBVG9hc3RDb25maWcoKSwgLi4udXNlckNvbmZpZyB9O1xyXG5cclxuICAgICAgICAvLyAxLiBDcmVhdGUgYSBjb21wb25lbnQgcmVmZXJlbmNlIGZyb20gdGhlIGNvbXBvbmVudFxyXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXHJcbiAgICAgICAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShNU0RBVG9hc3QpXHJcbiAgICAgICAgICAgIC5jcmVhdGUodGhpcy5pbmplY3Rvcik7XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZS5odG1sID0gaHRtbDtcclxuICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UubGlua0NsaWNrLnN1YnNjcmliZSgoZTogRXZlbnQpID0+IGNvbmZpZy5saW5rQ2xpY2soZSkpO1xyXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZS5kaXNtaXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UubGlua0NsaWNrLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgY29uZmlnLm9uQ2xvc2UoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyAyLiBBdHRhY2ggY29tcG9uZW50IHRvIHRoZSBhcHBSZWYgc28gdGhhdCBpdCdzIGluc2lkZSB0aGUgbmcgY29tcG9uZW50IHRyZWVcclxuICAgICAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KHRoaXMuX2NvbXBvbmVudFJlZi5ob3N0Vmlldyk7XHJcblxyXG4gICAgICAgIC8vIDMuIEdldCBET00gZWxlbWVudCBmcm9tIGNvbXBvbmVudFxyXG4gICAgICAgIGNvbnN0IGRvbUVsZW0gPSAodGhpcy5fY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxyXG4gICAgICAgICAgICAucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgICAvLyA0LiBBcHBlbmQgRE9NIGVsZW1lbnQgdG8gdGhlIGJvZHlcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbUVsZW0pO1xyXG5cclxuICAgICAgICAvLyA1LiBXYWl0IHNvbWUgdGltZSBhbmQgcmVtb3ZlIGl0IGZyb20gdGhlIGNvbXBvbmVudCB0cmVlIGFuZCBmcm9tIHRoZSBET01cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZS5kaXNtaXNzKCksIGNvbmZpZy5jbG9zZUFmdGVyKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19