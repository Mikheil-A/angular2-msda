/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class ButtonComponent {
    constructor() {
        this.type = 'button';
        this.disabled = false;
        this.click = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        e.stopPropagation();
        this.click.emit(e);
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'msda-button',
                template: "<button class=\"button\" [type]=\"type\" [style.backgroundColor]=\"color\" [disabled]=\"disabled\" (click)=\"onClick($event)\">\r\n  <span class=\"loader\" *ngIf=\"showLoading\"></span>\r\n  <span class=\"content\">\r\n       <!-- icon -->\r\n    <span class=\"icon\">\r\n            <ng-content select=\"msda-icon\"></ng-content>\r\n        </span>\r\n    <!-- text -->\r\n    <span class=\"text\">\r\n            <ng-content select=\"span\"></ng-content>\r\n        </span>\r\n</span>\r\n</button>\r\n",
                styles: [".button{background-color:#212121;outline:0;border:none;border-radius:4px;color:#fff;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:145px;padding:0 36px;line-height:36px;font-size:14px;cursor:pointer;position:relative}.button .content{display:flex;align-items:center;justify-content:center}.button .content .icon ::ng-deep msda-icon{margin-right:8px;vertical-align:text-bottom}.button .content .text span{font-family:BPG DejaVu Sans Caps Web;font-size:11px;text-align:center;letter-spacing:.01em;color:#fff}::ng-deep .button:disabled{background-color:rgba(0,0,0,.12)!important;color:rgba(0,0,0,.38);cursor:default}.loader{position:absolute;top:0;bottom:0;left:5px;margin:auto;border:3px solid #f3f3f3;border-top:3px solid #3498db;border-radius:50%;width:18px;height:18px;-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    type: [{ type: Input }],
    color: [{ type: Input }],
    disabled: [{ type: Input }],
    showLoading: [{ type: Input }],
    click: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.type;
    /** @type {?} */
    ButtonComponent.prototype.color;
    /** @type {?} */
    ButtonComponent.prototype.disabled;
    /** @type {?} */
    ButtonComponent.prototype.showLoading;
    /** @type {?} */
    ButtonComponent.prototype.click;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItbXNkYS8iLCJzb3VyY2VzIjpbImxpYi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU83RSxNQUFNLE9BQU8sZUFBZTtJQVN4QjtRQVJTLFNBQUksR0FBRyxRQUFRLENBQUM7UUFFaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUloQixVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFHeEQsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxDQUFRO1FBQ1osQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7OztZQXZCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLG1nQkFBc0M7O2FBRXpDOzs7OzttQkFFSSxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLO29CQUdMLE1BQU07Ozs7SUFOUCwrQkFBeUI7O0lBQ3pCLGdDQUF1Qjs7SUFDdkIsbUNBQTBCOztJQUMxQixzQ0FBcUM7O0lBR3JDLGdDQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXNkYS1idXR0b24nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIHR5cGUgPSAnYnV0dG9uJztcclxuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcHVibGljIHNob3dMb2FkaW5nOiBCb29sZWFuO1xyXG5cclxuXHJcbiAgICBAT3V0cHV0KCkgY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogRXZlbnQpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuY2xpY2suZW1pdChlKTtcclxuICAgIH1cclxufVxyXG4iXX0=