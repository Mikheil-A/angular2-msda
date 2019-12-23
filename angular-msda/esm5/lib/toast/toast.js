/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input, Output, EventEmitter, HostListener } from '@angular/core';
var MSDAToast = /** @class */ (function () {
    function MSDAToast() {
        this.linkClick = new EventEmitter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    MSDAToast.prototype.click = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (((/** @type {?} */ (e.target))).classList.contains('msda-link'))
            this.linkClick.emit(e);
    };
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
    MSDAToast.ctorParameters = function () { return []; };
    MSDAToast.propDecorators = {
        html: [{ type: Input }],
        dismiss: [{ type: Input }],
        linkClick: [{ type: Output }],
        click: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return MSDAToast;
}());
export { MSDAToast };
if (false) {
    /** @type {?} */
    MSDAToast.prototype.html;
    /** @type {?} */
    MSDAToast.prototype.dismiss;
    /** @type {?} */
    MSDAToast.prototype.linkClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLW1zZGEvIiwic291cmNlcyI6WyJsaWIvdG9hc3QvdG9hc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFlBQVksRUFDZixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQWNJO1FBRlUsY0FBUyxHQUF3QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTlDLENBQUM7Ozs7O0lBRWtCLHlCQUFLOzs7O0lBQXhDLFVBQXlDLENBQVE7UUFDN0MsSUFBSSxDQUFDLG1CQUFhLENBQUMsQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1lBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7Z0JBbEJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsdzhCQUEyQjtvQkFFM0IsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSxVQUFVOztpQkFDdkI7Ozs7O3VCQUdJLEtBQUs7MEJBQ0wsS0FBSzs0QkFFTCxNQUFNO3dCQUlOLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBSXJDLGdCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FiWSxTQUFTOzs7SUFFbEIseUJBQXNCOztJQUN0Qiw0QkFBNkI7O0lBRTdCLDhCQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgSG9zdExpc3RlbmVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXNkYS10b2FzdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90b2FzdC5zY3NzJ10sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gICAgZXhwb3J0QXM6ICdNU0RBVG9hcycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNU0RBVG9hc3Qge1xyXG5cclxuICAgIEBJbnB1dCgpIGh0bWw6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGRpc21pc3M6ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgQE91dHB1dCgpIGxpbmtDbGljazogRXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgY2xpY2soZTogRXZlbnQpIHtcclxuICAgICAgICBpZiAoKDxIVE1MRWxlbWVudD5lLnRhcmdldCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtc2RhLWxpbmsnKSkgdGhpcy5saW5rQ2xpY2suZW1pdChlKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19