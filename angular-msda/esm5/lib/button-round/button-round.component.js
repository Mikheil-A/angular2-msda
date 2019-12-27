/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var ButtonRoundComponent = /** @class */ (function () {
    function ButtonRoundComponent() {
        this.type = 'button';
        this.disabled = false;
        this.click = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ButtonRoundComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} e
     * @return {?}
     */
    ButtonRoundComponent.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.click.emit(e);
    };
    ButtonRoundComponent.decorators = [
        { type: Component, args: [{
                    selector: 'msda-button-round',
                    template: "<button [type]=\"type\"\r\n        [style.backgroundColor]=\"bgColor\"\r\n        [disabled]=\"disabled\"\r\n        (click)=\"onClick($event)\"\r\n        mat-fab\r\n        class=\"msda-button-round\">\r\n\r\n  <span class=\"icon\">\r\n      <ng-content select=\"msda-icon\"></ng-content>\r\n    </span>\r\n\r\n</button>\r\n",
                    styles: [".msda-button-round:hover{opacity:.84}.msda-button-round:disabled{background-color:rgba(33,33,33,.32)!important}.msda-button-round:disabled:hover{opacity:1}"]
                }] }
    ];
    /** @nocollapse */
    ButtonRoundComponent.ctorParameters = function () { return []; };
    ButtonRoundComponent.propDecorators = {
        type: [{ type: Input }],
        bgColor: [{ type: Input }],
        disabled: [{ type: Input }],
        click: [{ type: Output }]
    };
    return ButtonRoundComponent;
}());
export { ButtonRoundComponent };
if (false) {
    /** @type {?} */
    ButtonRoundComponent.prototype.type;
    /** @type {?} */
    ButtonRoundComponent.prototype.bgColor;
    /** @type {?} */
    ButtonRoundComponent.prototype.disabled;
    /** @type {?} */
    ButtonRoundComponent.prototype.click;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXJvdW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItbXNkYS8iLCJzb3VyY2VzIjpbImxpYi9idXR0b24tcm91bmQvYnV0dG9uLXJvdW5kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU3RTtJQVlFO1FBTlMsU0FBSSxHQUFHLFFBQVEsQ0FBQztRQUVoQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWhCLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUd4RCxDQUFDOzs7O0lBRUQsdUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7SUFFRCxzQ0FBTzs7OztJQUFQLFVBQVEsQ0FBUTtRQUNkLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDOztnQkFyQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLGtWQUE0Qzs7aUJBRTdDOzs7Ozt1QkFFRSxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzt3QkFFTCxNQUFNOztJQVlULDJCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FqQlksb0JBQW9COzs7SUFDL0Isb0NBQXlCOztJQUN6Qix1Q0FBeUI7O0lBQ3pCLHdDQUEwQjs7SUFFMUIscUNBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXNkYS1idXR0b24tcm91bmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24tcm91bmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi1yb3VuZC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25Sb3VuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdHlwZSA9ICdidXR0b24nO1xyXG4gIEBJbnB1dCgpIGJnQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgb25DbGljayhlOiBFdmVudCkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuY2xpY2suZW1pdChlKTtcclxuICB9XHJcbn1cclxuIl19