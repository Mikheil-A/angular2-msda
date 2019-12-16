/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Input, Output, Component, ViewEncapsulation, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
export class MSDABannerButton {
    constructor() {
        /**
         * Read more text
         */
        this.readMoreText = 'ვრცლად ...';
        /**
         * Button click event emitter
         */
        this.buttonClick = new EventEmitter();
    }
}
MSDABannerButton.decorators = [
    { type: Component, args: [{
                selector: 'msda-banner-button',
                exportAs: 'MSDABannerButton',
                template: "<img class=\"msda-banner-button-image\" [src]=\"image\" alt=\"\">\r\n<msda-plate-icon class=\"msda-banner-button-icon\" [name]=\"icon\" type=\"square\" width=\"48\" height=\"48\" color=\"#FFFFFF\" [background]=\"color\"></msda-plate-icon>\r\n<div class=\"msda-banner-button-header\">\r\n  <span class=\"msda-banner-button-title msda-display-2\">{{ title }}</span>\r\n  <span class=\"msda-banner-button-date\">{{ date }}</span>\r\n</div>\r\n<p class=\"msda-banner-button-text msda-body-1\">{{ text }}</p>\r\n<a class=\"msda-banner-button-read-more\" href=\"javascript:;\" (click)=\"buttonClick.emit($event)\">\r\n  <svg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 4.25437C7.58172 4.25437 4 7.81069 4 12.1976C4 16.5846 7.58172 20.1409 12 20.1409C16.4183 20.1409 20 16.5846 20 12.1976C20 7.81069 16.4183 4.25437 12 4.25437ZM2 12.1976C2 6.71395 6.47715 2.26855 12 2.26855C17.5228 2.26855 22 6.71395 22 12.1976C22 17.6813 17.5228 22.1267 12 22.1267C6.47715 22.1267 2 17.6813 2 12.1976Z\" [attr.fill]=\"color\" />\r\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.2929 7.92168C11.6834 7.53392 12.3166 7.53392 12.7071 7.92168L16.3071 11.4961C16.6976 11.8839 16.6976 12.5126 16.3071 12.9003L12.7071 16.4748C12.3166 16.8625 11.6834 16.8625 11.2929 16.4748C10.9024 16.087 10.9024 15.4584 11.2929 15.0706L14.1858 12.1982L11.2929 9.32586C10.9024 8.9381 10.9024 8.30943 11.2929 7.92168Z\" [attr.fill]=\"color\" />\r\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.40039 12.198C7.40039 11.6496 7.84811 11.2051 8.40039 11.2051H15.6004C16.1527 11.2051 16.6004 11.6496 16.6004 12.198C16.6004 12.7464 16.1527 13.1909 15.6004 13.1909H8.40039C7.84811 13.1909 7.40039 12.7464 7.40039 12.198Z\" [attr.fill]=\"color\" />\r\n  </svg>\r\n  <span>{{ readMoreText }}</span>\r\n</a>\r\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: { 'class': 'msda-banner-button msda-body-2' },
                styles: [".msda-banner-button{display:block;position:relative;background-color:#fff;border-radius:0 0 8px 8px;box-shadow:0 2px 2px rgba(0,0,0,.2)}.msda-banner-button-image{width:100%;margin-bottom:20px}.msda-banner-button-icon{position:absolute;top:24px;left:24px}.msda-banner-button-date{color:#777}.msda-banner-button-header,.msda-banner-button-read-more,.msda-banner-button-text{margin-left:24px;margin-right:24px}.msda-banner-button-header{display:flex;justify-content:space-between}.msda-banner-button-read-more{margin-bottom:24px;text-decoration:none;display:inline-flex;align-items:center}.msda-banner-button-read-more span{margin-left:10px}"]
            }] }
];
MSDABannerButton.propDecorators = {
    icon: [{ type: Input }],
    image: [{ type: Input }],
    title: [{ type: Input }],
    text: [{ type: Input }],
    date: [{ type: Input }],
    color: [{ type: Input }],
    readMoreText: [{ type: Input }],
    buttonClick: [{ type: Output }]
};
if (false) {
    /**
     * Icon name
     * @type {?}
     */
    MSDABannerButton.prototype.icon;
    /**
     * Image URL
     * @type {?}
     */
    MSDABannerButton.prototype.image;
    /**
     * Banner title
     * @type {?}
     */
    MSDABannerButton.prototype.title;
    /**
     * Image text
     * @type {?}
     */
    MSDABannerButton.prototype.text;
    /**
     * Date string
     * @type {?}
     */
    MSDABannerButton.prototype.date;
    /**
     * Icon and "read more" text color
     * @type {?}
     */
    MSDABannerButton.prototype.color;
    /**
     * Read more text
     * @type {?}
     */
    MSDABannerButton.prototype.readMoreText;
    /**
     * Button click event emitter
     * @type {?}
     */
    MSDABannerButton.prototype.buttonClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLWJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItbXNkYS8iLCJzb3VyY2VzIjpbImxpYi9iYW5uZXItYnV0dG9uL2Jhbm5lci1idXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLFlBQVksRUFDZixNQUFNLGVBQWUsQ0FBQztBQVd2QixNQUFNLE9BQU8sZ0JBQWdCO0lBVDdCOzs7O1FBNENhLGlCQUFZLEdBQVcsWUFBWSxDQUFDOzs7O1FBS25DLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFbEUsQ0FBQzs7O1lBbkRBLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixpNERBQW1DO2dCQUVuQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRTs7YUFDdEQ7OzttQkFNSSxLQUFLO29CQUtMLEtBQUs7b0JBS0wsS0FBSzttQkFLTCxLQUFLO21CQUtMLEtBQUs7b0JBS0wsS0FBSzsyQkFLTCxLQUFLOzBCQUtMLE1BQU07Ozs7Ozs7SUFuQ1AsZ0NBQXNCOzs7OztJQUt0QixpQ0FBdUI7Ozs7O0lBS3ZCLGlDQUF1Qjs7Ozs7SUFLdkIsZ0NBQXNCOzs7OztJQUt0QixnQ0FBc0I7Ozs7O0lBS3RCLGlDQUF1Qjs7Ozs7SUFLdkIsd0NBQTZDOzs7OztJQUs3Qyx1Q0FBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gICAgRXZlbnRFbWl0dGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXNkYS1iYW5uZXItYnV0dG9uJyxcclxuICAgIGV4cG9ydEFzOiAnTVNEQUJhbm5lckJ1dHRvbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYmFubmVyLWJ1dHRvbi5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2Jhbm5lci1idXR0b24uc2NzcyddLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgaG9zdDogeyAnY2xhc3MnOiAnbXNkYS1iYW5uZXItYnV0dG9uIG1zZGEtYm9keS0yJyB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNU0RBQmFubmVyQnV0dG9uIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEljb24gbmFtZVxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbWFnZSBVUkxcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgaW1hZ2U6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJhbm5lciB0aXRsZVxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW1hZ2UgdGV4dFxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXRlIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSBkYXRlOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJY29uIGFuZCBcInJlYWQgbW9yZVwiIHRleHQgY29sb3JcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgY29sb3I6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlYWQgbW9yZSB0ZXh0XHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIHJlYWRNb3JlVGV4dDogc3RyaW5nID0gJ+GDleGDoOGDquGDmuGDkOGDkyAuLi4nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnV0dG9uIGNsaWNrIGV2ZW50IGVtaXR0ZXJcclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbn1cclxuIl19