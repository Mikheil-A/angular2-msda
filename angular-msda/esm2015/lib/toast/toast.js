/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input, Output, EventEmitter, HostListener } from '@angular/core';
export class MSDAToast {
    constructor() {
        this.linkClick = new EventEmitter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    click(e) {
        if (((/** @type {?} */ (e.target))).classList.contains('msda-link'))
            this.linkClick.emit(e);
    }
}
MSDAToast.decorators = [
    { type: Component, args: [{
                selector: 'msda-toast',
                template: "<div class=\"msda-toast\">\r\n  <div class=\"msda-toast-html msda-body-1-bold\" [innerHTML]=\"html\"></div>\r\n  <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" (click)=\"dismiss()\">\r\n    <g opacity=\"0.54\">\r\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z\" fill=\"white\" />\r\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z\" fill=\"white\" />\r\n    </g>\r\n  </svg>\r\n</div>\r\n",
                encapsulation: ViewEncapsulation.None,
                exportAs: 'MSDAToas',
                styles: [".msda-toast{color:#fff;padding:20px 24px;background-color:#212121;border-radius:4px;position:fixed;left:32px;bottom:64px;z-index:9999;display:flex;align-items:center}.msda-toast .msda-link,.msda-toast svg{cursor:pointer}.msda-toast svg{margin-left:20px}.msda-toast .msda-link{color:#a3bfe5}.msda-toast .msda-toast-html.msda-body-1-bold{color:#fff;letter-spacing:.01em}"]
            }] }
];
/** @nocollapse */
MSDAToast.ctorParameters = () => [];
MSDAToast.propDecorators = {
    html: [{ type: Input }],
    dismiss: [{ type: Input }],
    linkClick: [{ type: Output }],
    click: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    MSDAToast.prototype.html;
    /** @type {?} */
    MSDAToast.prototype.dismiss;
    /** @type {?} */
    MSDAToast.prototype.linkClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLW1zZGEvIiwic291cmNlcyI6WyJsaWIvdG9hc3QvdG9hc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFlBQVksRUFDZixNQUFNLGVBQWUsQ0FBQztBQVN2QixNQUFNLE9BQU8sU0FBUztJQU9sQjtRQUZVLGNBQVMsR0FBd0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUU5QyxDQUFDOzs7OztJQUVrQixLQUFLLENBQUMsQ0FBUTtRQUM3QyxJQUFJLENBQUMsbUJBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7WUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RixDQUFDOzs7WUFsQkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxZQUFZO2dCQUN0Qix3OEJBQTJCO2dCQUUzQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLFVBQVU7O2FBQ3ZCOzs7OzttQkFHSSxLQUFLO3NCQUNMLEtBQUs7d0JBRUwsTUFBTTtvQkFJTixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBUGpDLHlCQUFzQjs7SUFDdEIsNEJBQTZCOztJQUU3Qiw4QkFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIEhvc3RMaXN0ZW5lclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21zZGEtdG9hc3QnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RvYXN0Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdG9hc3Quc2NzcyddLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAgIGV4cG9ydEFzOiAnTVNEQVRvYXMnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTVNEQVRvYXN0IHtcclxuXHJcbiAgICBASW5wdXQoKSBodG1sOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBkaXNtaXNzOiAoKSA9PiB2b2lkO1xyXG5cclxuICAgIEBPdXRwdXQoKSBsaW5rQ2xpY2s6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIGNsaWNrKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCg8SFRNTEVsZW1lbnQ+ZS50YXJnZXQpLmNsYXNzTGlzdC5jb250YWlucygnbXNkYS1saW5rJykpIHRoaXMubGlua0NsaWNrLmVtaXQoZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==