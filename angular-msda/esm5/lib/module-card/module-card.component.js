/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
var ModuleCardComponent = /** @class */ (function () {
    function ModuleCardComponent() {
        /**
         * card click event emitter
         */
        this.click = new EventEmitter();
        /**
         * remove icon click event emitter
         */
        this.remove = new EventEmitter();
        this.flip = 'inactive';
    }
    /**
     * @return {?}
     */
    ModuleCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} e
     * @return {?}
     */
    ModuleCardComponent.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.click.emit(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    ModuleCardComponent.prototype.onRemove = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.remove.emit(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    ModuleCardComponent.prototype.toggleFlip = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ModuleCardComponent.prototype.onMouseEnter = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.isHovered = true;
        this.flipBack();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ModuleCardComponent.prototype.onMouseLeave = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.isHovered = false;
        this.flipBack();
    };
    /**
     * @return {?}
     */
    ModuleCardComponent.prototype.flipBack = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.isHovered) {
                _this.flip = 'inactive';
            }
        }, 1000);
    };
    ModuleCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'msda-module-card',
                    template: "<div class=\"card\" (click)=\"onClick($event)\">\r\n    <div class=\"content\">\r\n        <div class=\"flip-wrapper\">\r\n            <div class=\"icon flip-box\" [@flipState]=\"flip\">\r\n                <msda-plate-icon\r\n                    class=\"msda-module-card-icon side front\"\r\n                    [name]=\"icon\"\r\n                    type=\"circle\"\r\n                    width=\"56\"\r\n                    height=\"56\"\r\n                    color=\"#FFFFFF\"\r\n                    [background]=\"color\"\r\n                    (click)=\"toggleFlip($event)\">\r\n                </msda-plate-icon>\r\n\r\n                <msda-plate-icon\r\n                    class=\"msda-module-card-icon side back\"\r\n                    name=\"remove\"\r\n                    type=\"circle\"\r\n                    width=\"56\"\r\n                    height=\"56\"\r\n                    color=\"black\"\r\n                    background=\"#FFFFFF\"\r\n                    (click)=\"onRemove($event)\"\r\n                    (mouseenter)=\"onMouseEnter($event)\"\r\n                    (mouseleave)=\"onMouseLeave($event)\">\r\n                </msda-plate-icon>\r\n            </div>\r\n        </div>\r\n        <div class=\"title\">{{title}}</div>\r\n    </div>\r\n    <div class=\"warn\" *ngIf=\"warn\">\r\n        <msda-icon\r\n            name=\"warning\"\r\n            width=\"22\"\r\n            height=\"22\"\r\n            color=\"#E3515A\">\r\n        </msda-icon>\r\n    </div>\r\n</div>\r\n\r\n",
                    animations: [
                        trigger('flipState', [
                            state('active', style({
                                transform: 'rotateX(180deg)'
                            })),
                            state('inactive', style({
                                transform: 'rotateX(0)',
                            })),
                            transition('active => inactive', animate('500ms ease-out')),
                            transition('inactive => active', animate('500ms ease-in'))
                        ])
                    ],
                    styles: [".card{position:relative;cursor:pointer}.card .content{overflow:hidden;border-radius:30px 8px 8px 30px;position:relative;display:inline-block;box-shadow:0 2px 2px rgba(0,0,0,.2)}.card .content:after{content:'';width:100px;border-radius:50%;position:absolute;left:-38px;top:-6px;height:70px;box-shadow:0 -1px 0 rgba(0,0,0,.2),-4px -2px 0 rgba(0,0,0,.2),1px 0 0 0 #fff,110px 0 0 68px #fff;background:0 0;z-index:-1}.card .content .icon{width:160px;height:56px}.card .content .icon msda-plate-icon{cursor:pointer}.card .content .title{position:absolute;left:50%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-family:'BPG DejaVu Sans';line-height:20px;font-size:11px;letter-spacing:.01em}.card .warn{position:absolute;right:-10px;top:-10px}.flip-wrapper{-webkit-perspective:800px;perspective:800px}.flip-box{position:relative;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;transition:transform 1s;transition:transform 1s,-webkit-transform 1s}.side{position:absolute;-webkit-backface-visibility:hidden;backface-visibility:hidden;color:#fff;text-align:center;font-size:24px;font-weight:700;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.front{-webkit-transform:rotateX(0);transform:rotateX(0)}.back{-webkit-transform:rotateX(180deg);transform:rotateX(180deg)}"]
                }] }
    ];
    /** @nocollapse */
    ModuleCardComponent.ctorParameters = function () { return []; };
    ModuleCardComponent.propDecorators = {
        icon: [{ type: Input }],
        color: [{ type: Input }],
        title: [{ type: Input }],
        warn: [{ type: Input }],
        click: [{ type: Output }],
        remove: [{ type: Output }]
    };
    return ModuleCardComponent;
}());
export { ModuleCardComponent };
if (false) {
    /**
     * Icon name
     * @type {?}
     */
    ModuleCardComponent.prototype.icon;
    /**
     * Icon color
     * @type {?}
     */
    ModuleCardComponent.prototype.color;
    /**
     * title
     * @type {?}
     */
    ModuleCardComponent.prototype.title;
    /**
     * warning
     * @type {?}
     */
    ModuleCardComponent.prototype.warn;
    /**
     * card click event emitter
     * @type {?}
     */
    ModuleCardComponent.prototype.click;
    /**
     * remove icon click event emitter
     * @type {?}
     */
    ModuleCardComponent.prototype.remove;
    /** @type {?} */
    ModuleCardComponent.prototype.flip;
    /** @type {?} */
    ModuleCardComponent.prototype.isHovered;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1tc2RhLyIsInNvdXJjZXMiOlsibGliL21vZHVsZS1jYXJkL21vZHVsZS1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRS9FO0lBbURJOzs7O1FBVlUsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDOzs7O1FBSzlDLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV6RCxTQUFJLEdBQVcsVUFBVSxDQUFDO0lBSTFCLENBQUM7Ozs7SUFHRCxzQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUVELHFDQUFPOzs7O0lBQVAsVUFBUSxDQUFRO1FBQ1osQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsc0NBQVE7Ozs7SUFBUixVQUFTLENBQVE7UUFDYixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCx3Q0FBVTs7OztJQUFWLFVBQVcsQ0FBUTtRQUNmLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFRCwwQ0FBWTs7OztJQUFaLFVBQWEsTUFBTTtRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELDBDQUFZOzs7O0lBQVosVUFBYSxNQUFNO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFBQSxpQkFNQztRQUxHLFVBQVUsQ0FBQztZQUNQLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixLQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQzthQUMxQjtRQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7O2dCQXpGSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsMi9DQUEyQztvQkFFM0MsVUFBVSxFQUFFO3dCQUNSLE9BQU8sQ0FBQyxXQUFXLEVBQUU7NEJBQ2pCLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO2dDQUNsQixTQUFTLEVBQUUsaUJBQWlCOzZCQUMvQixDQUFDLENBQUM7NEJBQ0gsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7Z0NBQ3BCLFNBQVMsRUFBRSxZQUFZOzZCQUMxQixDQUFDLENBQUM7NEJBQ0gsVUFBVSxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOzRCQUMzRCxVQUFVLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO3lCQUM3RCxDQUFDO3FCQUNMOztpQkFDSjs7Ozs7dUJBS0ksS0FBSzt3QkFLTCxLQUFLO3dCQUtMLEtBQUs7dUJBS0wsS0FBSzt3QkFLTCxNQUFNO3lCQUtOLE1BQU07O0lBNENYLDBCQUFDO0NBQUEsQUExRkQsSUEwRkM7U0F6RVksbUJBQW1COzs7Ozs7SUFJNUIsbUNBQXNCOzs7OztJQUt0QixvQ0FBdUI7Ozs7O0lBS3ZCLG9DQUF1Qjs7Ozs7SUFLdkIsbUNBQXVCOzs7OztJQUt2QixvQ0FBd0Q7Ozs7O0lBS3hELHFDQUF5RDs7SUFFekQsbUNBQTBCOztJQUMxQix3Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2FuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXNkYS1tb2R1bGUtY2FyZCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbW9kdWxlLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbW9kdWxlLWNhcmQuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGFuaW1hdGlvbnM6IFtcclxuICAgICAgICB0cmlnZ2VyKCdmbGlwU3RhdGUnLCBbXHJcbiAgICAgICAgICAgIHN0YXRlKCdhY3RpdmUnLCBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGVYKDE4MGRlZyknXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlWCgwKScsXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgYW5pbWF0ZSgnNTAwbXMgZWFzZS1vdXQnKSksXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIGFuaW1hdGUoJzUwMG1zIGVhc2UtaW4nKSlcclxuICAgICAgICBdKVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kdWxlQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICAvKipcclxuICAgICAqIEljb24gbmFtZVxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJY29uIGNvbG9yXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB0aXRsZVxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogd2FybmluZ1xyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSB3YXJuOiBCb29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2FyZCBjbGljayBldmVudCBlbWl0dGVyXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZW1vdmUgaWNvbiBjbGljayBldmVudCBlbWl0dGVyXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByZW1vdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGZsaXA6IHN0cmluZyA9ICdpbmFjdGl2ZSc7XHJcbiAgICBpc0hvdmVyZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogRXZlbnQpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuY2xpY2suZW1pdChlKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlbW92ZShlOiBFdmVudCkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUuZW1pdChlKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVGbGlwKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLmZsaXAgPSAodGhpcy5mbGlwID09ICdpbmFjdGl2ZScpID8gJ2FjdGl2ZScgOiAnaW5hY3RpdmUnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VFbnRlcigkZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmlzSG92ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mbGlwQmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VMZWF2ZSgkZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmlzSG92ZXJlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZmxpcEJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBmbGlwQmFjaygpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSG92ZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbGlwID0gJ2luYWN0aXZlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==