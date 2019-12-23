/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class IconLabelComponent {
    constructor() {
        /**
         * click event emitter
         */
        this.click = new EventEmitter();
        /**
         * remove icon click event emitter
         */
        this.remove = new EventEmitter();
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
    /**
     * @param {?} e
     * @return {?}
     */
    onRemove(e) {
        e.stopPropagation();
        this.remove.emit(e);
    }
}
IconLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'msda-icon-label',
                template: "<div class=\"icon-label\" (click)=\"onClick($event)\">\r\n    <div class=\"icon-label-content\">\r\n        <div class=\"icon\">\r\n            <msda-icon\r\n                [name]=\"icon\"\r\n                width=\"18\"\r\n                height=\"18\"\r\n                [color]=\"color\">\r\n            </msda-icon>\r\n        </div>\r\n        <div class=\"text\">\r\n            <span [style.color]=\"color\">{{text}}</span>\r\n        </div>\r\n        <div class=\"icon remove\">\r\n            <msda-icon\r\n                name=\"cancel_circle\"\r\n                width=\"18\"\r\n                height=\"18\"\r\n                color=\"gray\"\r\n                (click)=\"onRemove($event)\">\r\n            </msda-icon>\r\n        </div>\r\n    </div>\r\n</div>\r\n",
                styles: [".icon-label{width:100%;min-width:163px;padding:6px 9px;background:#fff;border:1px solid #e0e0e0;box-sizing:border-box;border-radius:16px;cursor:pointer}.icon-label .icon-label-content{display:flex;align-items:center;justify-content:space-between}.icon-label .icon-label-content .icon msda-icon{display:flex;vertical-align:middle}.icon-label .icon-label-content .icon.remove{cursor:pointer}.icon-label .icon-label-content .text{margin:0 9px;font-family:'BPG DejaVu Sans';font-size:11px;letter-spacing:.01em}"]
            }] }
];
/** @nocollapse */
IconLabelComponent.ctorParameters = () => [];
IconLabelComponent.propDecorators = {
    icon: [{ type: Input }],
    color: [{ type: Input }],
    text: [{ type: Input }],
    click: [{ type: Output }],
    remove: [{ type: Output }]
};
if (false) {
    /**
     * Icon name
     * @type {?}
     */
    IconLabelComponent.prototype.icon;
    /**
     * Color
     * @type {?}
     */
    IconLabelComponent.prototype.color;
    /**
     * text
     * @type {?}
     */
    IconLabelComponent.prototype.text;
    /**
     * click event emitter
     * @type {?}
     */
    IconLabelComponent.prototype.click;
    /**
     * remove icon click event emitter
     * @type {?}
     */
    IconLabelComponent.prototype.remove;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1sYWJlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLW1zZGEvIiwic291cmNlcyI6WyJsaWIvaWNvbi1sYWJlbC9pY29uLWxhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU83RSxNQUFNLE9BQU8sa0JBQWtCO0lBMEIzQjs7OztRQVBVLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7OztRQUs5QyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFHekQsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxDQUFRO1FBQ1osQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLENBQVE7UUFDYixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7O1lBN0NKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixzeEJBQTBDOzthQUU3Qzs7Ozs7bUJBS0ksS0FBSztvQkFLTCxLQUFLO21CQUtMLEtBQUs7b0JBS0wsTUFBTTtxQkFLTixNQUFNOzs7Ozs7O0lBcEJQLGtDQUFzQjs7Ozs7SUFLdEIsbUNBQXVCOzs7OztJQUt2QixrQ0FBc0I7Ozs7O0lBS3RCLG1DQUF3RDs7Ozs7SUFLeEQsb0NBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtc2RhLWljb24tbGFiZWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ljb24tbGFiZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vaWNvbi1sYWJlbC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJY29uTGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJY29uIG5hbWVcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29sb3JcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgY29sb3I6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIHRleHRcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2xpY2sgZXZlbnQgZW1pdHRlclxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVtb3ZlIGljb24gY2xpY2sgZXZlbnQgZW1pdHRlclxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcmVtb3ZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLmNsaWNrLmVtaXQoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZW1vdmUoZTogRXZlbnQpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlLmVtaXQoZSk7XHJcbiAgICB9XHJcbn1cclxuIl19