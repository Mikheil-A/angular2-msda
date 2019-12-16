/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Input, Output, Component, ViewEncapsulation, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
export class MSDACardButton {
    constructor() {
        this.icon = 'icon-4';
        this.iconType = 'square';
        this.iconColor = '#FFFFFF';
        this.iconBackgroundColor = '#EA854D';
        this.draggable = true;
        this.buttonClick = new EventEmitter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    hostClick(e) {
        this.buttonClick.emit(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    moveHandlerClick(e) {
        e.stopPropagation();
    }
}
MSDACardButton.decorators = [
    { type: Component, args: [{
                selector: 'msda-card-button',
                exportAs: 'MSDACardButton',
                template: "<div class=\"msda-card-button-header\">\r\n  <div class=\"msda-card-button-title\">{{ title }}</div>\r\n  <div class=\"msda-card-button-move-handler\" (click)=\"moveHandlerClick($event)\" *ngIf=\"draggable\">\r\n    <svg width=\"16\" height=\"10\" viewBox=\"0 0 16 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <path d=\"M14 6C15.1 6 16 6.9 16 8C16 9.1 15.1 10 14 10C12.9 10 12 9.1 12 8C12 6.9 12.9 6 14 6ZM6 8C6 9.1 6.9 10 8 10C9.1 10 10 9.1 10 8C10 6.9 9.1 6 8 6C6.9 6 6 6.9 6 8ZM0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6C0.9 6 0 6.9 0 8ZM4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2ZM6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0C6.9 0 6 0.9 6 2ZM12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0C12.9 0 12 0.9 12 2Z\" fill=\"black\" />\r\n    </svg>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"msda-card-button-body\">\r\n  <msda-plate-icon [name]=\"icon\" [type]=\"iconType\" width=\"48\" height=\"48\" [color]=\"iconColor\" [background]=\"iconBackgroundColor\"></msda-plate-icon>\r\n  <div class=\"msda-card-button-text\">{{ text }}</div>\r\n</div>\r\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    'class': 'msda-card-button',
                    '(click)': 'hostClick($event)'
                },
                styles: [".msda-card-button,.msda-card-button-body{border-radius:0 0 8px 8px}.msda-card-button{display:flex;flex-direction:column;background:#f7f7fa;box-shadow:0 2px 2px rgba(0,0,0,.2);cursor:pointer}.msda-card-button:hover .msda-card-button-header .msda-card-button-move-handler{opacity:1;visibility:visible}.msda-card-button .msda-card-button-body,.msda-card-button .msda-card-button-header{padding:12px 24px}.msda-card-button .msda-card-button-body .msda-card-button-text,.msda-card-button .msda-card-button-header .msda-card-button-title{font-size:11px;line-height:20px;letter-spacing:.01em;color:#333}.msda-card-button .msda-card-button-header{display:flex;align-items:center;position:relative;background:#f0f0f7;box-shadow:0 1px 0 #e0e0e0;z-index:1}.msda-card-button .msda-card-button-header .msda-card-button-title{flex:1 1 auto;font-family:BPG DejaVu Sans Caps Web}.msda-card-button .msda-card-button-header .msda-card-button-move-handler{cursor:move;opacity:0;visibility:hidden;transition-property:opacity,visibility;transition-duration:.2s}.msda-card-button .msda-card-button-body{flex:1 1 auto;display:flex;flex-direction:row;align-items:center}.msda-card-button .msda-card-button-body .msda-card-button-text{margin-left:16px;font-family:BPG DejaVu Sans}.msda-card-button-placeholder,.sortable-placeholder{min-height:112px;border:2px dashed #333;border-radius:0 0 8px 8px}"]
            }] }
];
MSDACardButton.propDecorators = {
    title: [{ type: Input }],
    text: [{ type: Input }],
    icon: [{ type: Input }],
    iconType: [{ type: Input }],
    iconColor: [{ type: Input }],
    iconBackgroundColor: [{ type: Input }],
    draggable: [{ type: Input }],
    buttonClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    MSDACardButton.prototype.title;
    /** @type {?} */
    MSDACardButton.prototype.text;
    /** @type {?} */
    MSDACardButton.prototype.icon;
    /** @type {?} */
    MSDACardButton.prototype.iconType;
    /** @type {?} */
    MSDACardButton.prototype.iconColor;
    /** @type {?} */
    MSDACardButton.prototype.iconBackgroundColor;
    /** @type {?} */
    MSDACardButton.prototype.draggable;
    /** @type {?} */
    MSDACardButton.prototype.buttonClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1idXR0b24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLW1zZGEvIiwic291cmNlcyI6WyJsaWIvY2FyZC1idXR0b24vY2FyZC1idXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLFlBQVksRUFDZixNQUFNLGVBQWUsQ0FBQztBQWN2QixNQUFNLE9BQU8sY0FBYztJQVozQjtRQWlCYSxTQUFJLEdBQVcsUUFBUSxDQUFDO1FBQ3hCLGFBQVEsR0FBVyxRQUFRLENBQUM7UUFDNUIsY0FBUyxHQUFXLFNBQVMsQ0FBQztRQUM5Qix3QkFBbUIsR0FBVyxTQUFTLENBQUM7UUFFeEMsY0FBUyxHQUFZLElBQUksQ0FBQztRQUV6QixnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBVWxFLENBQUM7Ozs7O0lBUkcsU0FBUyxDQUFDLENBQVE7UUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLENBQVE7UUFDckIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7OztZQWhDSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIseW5DQUFpQztnQkFFakMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0YsT0FBTyxFQUFFLGtCQUFrQjtvQkFDM0IsU0FBUyxFQUFFLG1CQUFtQjtpQkFDakM7O2FBQ0o7OztvQkFHSSxLQUFLO21CQUNMLEtBQUs7bUJBRUwsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7a0NBQ0wsS0FBSzt3QkFFTCxLQUFLOzBCQUVMLE1BQU07Ozs7SUFWUCwrQkFBdUI7O0lBQ3ZCLDhCQUFzQjs7SUFFdEIsOEJBQWlDOztJQUNqQyxrQ0FBcUM7O0lBQ3JDLG1DQUF1Qzs7SUFDdkMsNkNBQWlEOztJQUVqRCxtQ0FBbUM7O0lBRW5DLHFDQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIENvbXBvbmVudCxcclxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtc2RhLWNhcmQtYnV0dG9uJyxcclxuICAgIGV4cG9ydEFzOiAnTVNEQUNhcmRCdXR0b24nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtYnV0dG9uLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2FyZC1idXR0b24uc2NzcyddLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdjbGFzcyc6ICdtc2RhLWNhcmQtYnV0dG9uJyxcclxuICAgICAgICAnKGNsaWNrKSc6ICdob3N0Q2xpY2soJGV2ZW50KSdcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1TREFDYXJkQnV0dG9uIHtcclxuXHJcbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xyXG5cclxuICAgIEBJbnB1dCgpIGljb246IHN0cmluZyA9ICdpY29uLTQnO1xyXG4gICAgQElucHV0KCkgaWNvblR5cGU6IHN0cmluZyA9ICdzcXVhcmUnO1xyXG4gICAgQElucHV0KCkgaWNvbkNvbG9yOiBzdHJpbmcgPSAnI0ZGRkZGRic7XHJcbiAgICBASW5wdXQoKSBpY29uQmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSAnI0VBODU0RCc7XHJcblxyXG4gICAgQElucHV0KCkgZHJhZ2dhYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBAT3V0cHV0KCkgYnV0dG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGhvc3RDbGljayhlOiBFdmVudCkge1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQ2xpY2suZW1pdChlKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlSGFuZGxlckNsaWNrKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19