/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var MSDAMenuButton = /** @class */ (function () {
    function MSDAMenuButton() {
        this.click = new EventEmitter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    MSDAMenuButton.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        event.stopPropagation();
        this.click.next(e);
    };
    MSDAMenuButton.decorators = [
        { type: Component, args: [{
                    selector: 'msda-menu-button',
                    exportAs: 'MSDAMenuButton',
                    template: "<div class=\"msda-menu-button-body\">\r\n    <button class=\"button\" (click)=\"onClick($event)\">\r\n        <span class=\"block\"></span>\r\n        <span *ngIf=\"active\" class=\"block-active\"></span>\r\n        <span *ngIf=\"notifCounter\" class=\"badge msda-body-2-bold\">{{notifCounter < 100 ? notifCounter : '!'}}</span>\r\n        <span class=\"content msda-display-2\">\r\n            <ng-content></ng-content>\r\n        </span>\r\n    </button>\r\n</div>\r\n",
                    styles: [".button{position:relative;height:50px;padding-left:40px;padding-right:30px;border:none;cursor:pointer;background-color:#f6f6f6;font-size:20px;outline:0}.button:hover .block{display:block}.content{font-family:BPG DejaVu Sans Caps Web}.badge{position:absolute;height:18px;width:24px;color:#fff;background:#e3515a;border:1px solid #fff;box-sizing:border-box;border-radius:4px;line-height:18px;text-align:center;letter-spacing:.01em;top:5px;right:12px}.block{display:none;position:absolute;height:8px;width:8px;color:#fff;background-color:#000;padding-top:1px;top:20px;left:25px}.block-active{position:absolute;height:8px;width:8px;color:#fff;background-color:#000;padding-top:1px;top:20px;left:25px}"]
                }] }
    ];
    MSDAMenuButton.propDecorators = {
        active: [{ type: Input, args: ['active',] }],
        text: [{ type: Input, args: ['text',] }],
        notifCounter: [{ type: Input, args: ['notifCounter',] }],
        click: [{ type: Output }]
    };
    return MSDAMenuButton;
}());
export { MSDAMenuButton };
if (false) {
    /** @type {?} */
    MSDAMenuButton.prototype.active;
    /** @type {?} */
    MSDAMenuButton.prototype.text;
    /** @type {?} */
    MSDAMenuButton.prototype.notifCounter;
    /** @type {?} */
    MSDAMenuButton.prototype.click;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1idXR0b24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLW1zZGEvIiwic291cmNlcyI6WyJsaWIvbWVudS1idXR0b24vbWVudS1idXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkY7SUFBQTtRQWFjLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU01RCxDQUFDOzs7OztJQUpHLGdDQUFPOzs7O0lBQVAsVUFBUSxDQUFRO1FBQ1osS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7O2dCQWxCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsa2VBQWlDOztpQkFFcEM7Ozt5QkFJSSxLQUFLLFNBQUMsUUFBUTt1QkFDZCxLQUFLLFNBQUMsTUFBTTsrQkFDWixLQUFLLFNBQUMsY0FBYzt3QkFFcEIsTUFBTTs7SUFNWCxxQkFBQztDQUFBLEFBbkJELElBbUJDO1NBWlksY0FBYzs7O0lBRXZCLGdDQUFpQzs7SUFDakMsOEJBQTRCOztJQUM1QixzQ0FBNEM7O0lBRTVDLCtCQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXNkYS1tZW51LWJ1dHRvbicsXHJcbiAgICBleHBvcnRBczogJ01TREFNZW51QnV0dG9uJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9tZW51LWJ1dHRvbi5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL21lbnUtYnV0dG9uLnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1TREFNZW51QnV0dG9uIHtcclxuXHJcbiAgICBASW5wdXQoJ2FjdGl2ZScpIGFjdGl2ZTogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgndGV4dCcpIHRleHQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgnbm90aWZDb3VudGVyJykgbm90aWZDb3VudGVyOiBudW1iZXI7XHJcblxyXG4gICAgQE91dHB1dCgpIGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBvbkNsaWNrKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5jbGljay5uZXh0KGUpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==