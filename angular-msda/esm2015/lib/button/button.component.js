/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class ButtonComponent {
    constructor() {
        this.type = 'button';
        this.color = 'white';
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
                template: "<button class=\"msda-button\"\r\n        [type]=\"type\"\r\n        [style.backgroundColor]=\"bgColor\"\r\n        [disabled]=\"disabled\"\r\n        (click)=\"onClick($event)\"\r\n        mat-button>\r\n  <!--  <span class=\"loader\" *ngIf=\"showLoading\"></span>-->\r\n\r\n  <span class=\"icon\">\r\n      <ng-content select=\"msda-icon\"></ng-content>\r\n    </span>\r\n\r\n  <span class=\"text\" [style.color]=\"color\">\r\n      <ng-content select=\"span\"></ng-content>\r\n    </span>\r\n\r\n</button>\r\n",
                styles: [".msda-button{box-shadow:0 1px 3px rgba(84,110,122,.2),0 2px 1px rgba(84,110,122,.12),0 1px 1px rgba(84,110,122,.14);border-radius:4px;padding:5px 12px}.msda-button:hover{opacity:.84}.msda-button .icon ::ng-deep msda-icon{vertical-align:sub}.msda-button .text ::ng-deep span{padding-left:8px!important;font-size:14px;line-height:19px;letter-spacing:.16px}.msda-button:disabled{background-color:rgba(33,33,33,.32)!important;box-shadow:none}.msda-button:disabled:hover{opacity:1}"]
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    type: [{ type: Input }],
    bgColor: [{ type: Input }],
    color: [{ type: Input }],
    disabled: [{ type: Input }],
    showLoading: [{ type: Input }],
    click: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.type;
    /** @type {?} */
    ButtonComponent.prototype.bgColor;
    /** @type {?} */
    ButtonComponent.prototype.color;
    /** @type {?} */
    ButtonComponent.prototype.disabled;
    /** @type {?} */
    ButtonComponent.prototype.showLoading;
    /** @type {?} */
    ButtonComponent.prototype.click;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItbXNkYS8iLCJzb3VyY2VzIjpbImxpYi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU83RSxNQUFNLE9BQU8sZUFBZTtJQVV4QjtRQVRTLFNBQUksR0FBRyxRQUFRLENBQUM7UUFFaEIsVUFBSyxHQUFXLE9BQU8sQ0FBQztRQUN4QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBSWhCLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUd4RCxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLENBQVE7UUFDWixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7O1lBeEJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsMmdCQUFzQzs7YUFFekM7Ozs7O21CQUVJLEtBQUs7c0JBQ0wsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSztvQkFHTCxNQUFNOzs7O0lBUFAsK0JBQXlCOztJQUN6QixrQ0FBeUI7O0lBQ3pCLGdDQUFpQzs7SUFDakMsbUNBQTBCOztJQUMxQixzQ0FBcUM7O0lBR3JDLGdDQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXNkYS1idXR0b24nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIHR5cGUgPSAnYnV0dG9uJztcclxuICAgIEBJbnB1dCgpIGJnQ29sb3I6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnd2hpdGUnO1xyXG4gICAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzaG93TG9hZGluZzogQm9vbGVhbjtcclxuXHJcblxyXG4gICAgQE91dHB1dCgpIGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLmNsaWNrLmVtaXQoZSk7XHJcbiAgICB9XHJcbn1cclxuIl19