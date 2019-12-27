/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
var FormFieldComponent = /** @class */ (function () {
    function FormFieldComponent() {
        this.isRequired = false;
        this.fcName = null;
        this.fGroup = null;
        this.input = new EventEmitter();
    }
    /**
     * @return {?}
     */
    FormFieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FormFieldComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} e
     * @return {?}
     */
    FormFieldComponent.prototype.onInput = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.input.emit(e);
        e.stopPropagation();
    };
    FormFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'msda-form-field',
                    template: "<div [formGroup]=\"fGroup\" class=\"msda-form-field\">\r\n\r\n  <mat-form-field appearance=\"outline\">\r\n    <mat-label>{{placeholder}}</mat-label>\r\n\r\n    <msda-icon *ngIf=\"prefixIcon\" matPrefix\r\n               [name]=\"prefixIcon\"\r\n               width=\"22\"\r\n               height=\"22\"\r\n               color=\"#E3515A\">\r\n    </msda-icon>\r\n\r\n    <input matInput [placeholder]=\"placeholder\" [formControlName]=\"fcName\" [value]=\"value ? value: ''\"\r\n           (input)=\"onInput($event)\" [required]=\"isRequired\">\r\n\r\n    <msda-icon *ngIf=\"suffixIcon\" matSuffix\r\n               [name]=\"suffixIcon\"\r\n               width=\"22\"\r\n               height=\"22\"\r\n               color=\"#E3515A\">\r\n    </msda-icon>\r\n\r\n    <mat-hint *ngIf=\"hint\">{{hint}}</mat-hint>\r\n  </mat-form-field>\r\n\r\n</div>\r\n",
                    styles: [".msda-form-field{display:inline-block}.msda-form-field ::ng-deep .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick,.msda-form-field ::ng-deep .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-hint,.msda-form-field ::ng-deep .mat-form-field.mat-form-field-invalid.mat-focused .mat-form-field-label{color:#ea3d2f}.msda-form-field ::ng-deep .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-input-element{caret-color:#ea3d2f}.msda-form-field ::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.msda-form-field ::ng-deep .mat-form-field-appearance-outline.mat-focused.mat-form-field-invalid .mat-form-field-outline-thick{color:#212121}.msda-form-field ::ng-deep .mat-input-element{caret-color:rgba(33,33,33,.56);color:#333}.msda-form-field ::ng-deep .mat-form-field.mat-focused .mat-form-field-label{color:rgba(33,33,33,.56)}"]
                }] }
    ];
    /** @nocollapse */
    FormFieldComponent.ctorParameters = function () { return []; };
    FormFieldComponent.propDecorators = {
        placeholder: [{ type: Input }],
        value: [{ type: Input }],
        isRequired: [{ type: Input }],
        hint: [{ type: Input }],
        fcName: [{ type: Input }],
        fGroup: [{ type: Input }],
        prefixIcon: [{ type: Input }],
        suffixIcon: [{ type: Input }],
        input: [{ type: Output }]
    };
    return FormFieldComponent;
}());
export { FormFieldComponent };
if (false) {
    /** @type {?} */
    FormFieldComponent.prototype.placeholder;
    /** @type {?} */
    FormFieldComponent.prototype.value;
    /** @type {?} */
    FormFieldComponent.prototype.isRequired;
    /** @type {?} */
    FormFieldComponent.prototype.hint;
    /** @type {?} */
    FormFieldComponent.prototype.fcName;
    /** @type {?} */
    FormFieldComponent.prototype.fGroup;
    /** @type {?} */
    FormFieldComponent.prototype.prefixIcon;
    /** @type {?} */
    FormFieldComponent.prototype.suffixIcon;
    /** @type {?} */
    FormFieldComponent.prototype.input;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLW1zZGEvIiwic291cmNlcyI6WyJsaWIvZm9ybS1maWVsZC9mb3JtLWZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBSXpDO0lBdUJFO1FBZlMsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUU1QixXQUFNLEdBQVcsSUFBSSxDQUFDO1FBQ3RCLFdBQU0sR0FBYyxJQUFJLENBQUM7UUFTeEIsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBSXhELENBQUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsd0NBQVc7OztJQUFYO0lBQ0EsQ0FBQzs7Ozs7SUFHRCxvQ0FBTzs7OztJQUFQLFVBQVEsQ0FBUTtRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN0QixDQUFDOztnQkFwQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHEyQkFBMEM7O2lCQUUzQzs7Ozs7OEJBRUUsS0FBSzt3QkFDTCxLQUFLOzZCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7NkJBTUwsS0FBSzs2QkFDTCxLQUFLO3dCQUVMLE1BQU07O0lBaUJULHlCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FoQ1ksa0JBQWtCOzs7SUFDN0IseUNBQTZCOztJQUM3QixtQ0FBdUI7O0lBQ3ZCLHdDQUFxQzs7SUFDckMsa0NBQXNCOztJQUN0QixvQ0FBK0I7O0lBQy9CLG9DQUFrQzs7SUFNbEMsd0NBQTRCOztJQUM1Qix3Q0FBNEI7O0lBRTVCLG1DQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtc2RhLWZvcm0tZmllbGQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLWZpZWxkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9mb3JtLWZpZWxkLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaXNSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGhpbnQ6IHN0cmluZztcclxuICBASW5wdXQoKSBmY05hbWU6IHN0cmluZyA9IG51bGw7XHJcbiAgQElucHV0KCkgZkdyb3VwOiBGb3JtR3JvdXAgPSBudWxsO1xyXG5cclxuICAvLyBASW5wdXQoKSB0eXBlID0gJ2J1dHRvbic7XHJcbiAgLy8gQElucHV0KCkgY29sb3I6IHN0cmluZztcclxuICAvLyBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBwcmVmaXhJY29uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3VmZml4SWNvbjogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgaW5wdXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gIH1cclxuXHJcblxyXG4gIG9uSW5wdXQoZTogRXZlbnQpIHtcclxuICAgIHRoaXMuaW5wdXQuZW1pdChlKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==