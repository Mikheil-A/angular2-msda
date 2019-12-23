/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
export class ModuleCardComponent {
    constructor() {
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
    /**
     * @param {?} e
     * @return {?}
     */
    toggleFlip(e) {
        e.stopPropagation();
        this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onMouseEnter($event) {
        this.isHovered = true;
        this.flipBack();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onMouseLeave($event) {
        this.isHovered = false;
        this.flipBack();
    }
    /**
     * @return {?}
     */
    flipBack() {
        setTimeout(() => {
            if (!this.isHovered) {
                this.flip = 'inactive';
            }
        }, 1000);
    }
}
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
ModuleCardComponent.ctorParameters = () => [];
ModuleCardComponent.propDecorators = {
    icon: [{ type: Input }],
    color: [{ type: Input }],
    title: [{ type: Input }],
    warn: [{ type: Input }],
    click: [{ type: Output }],
    remove: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1tc2RhLyIsInNvdXJjZXMiOlsibGliL21vZHVsZS1jYXJkL21vZHVsZS1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBbUIvRSxNQUFNLE9BQU8sbUJBQW1CO0lBa0M1Qjs7OztRQVZVLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7OztRQUs5QyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekQsU0FBSSxHQUFXLFVBQVUsQ0FBQztJQUkxQixDQUFDOzs7O0lBR0QsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLENBQVE7UUFDWixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsQ0FBUTtRQUNiLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxDQUFRO1FBQ2YsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUNsRSxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxNQUFNO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLE1BQU07UUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELFFBQVE7UUFDSixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO2FBQzFCO1FBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQzs7O1lBekZKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QiwyL0NBQTJDO2dCQUUzQyxVQUFVLEVBQUU7b0JBQ1IsT0FBTyxDQUFDLFdBQVcsRUFBRTt3QkFDakIsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7NEJBQ2xCLFNBQVMsRUFBRSxpQkFBaUI7eUJBQy9CLENBQUMsQ0FBQzt3QkFDSCxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQzs0QkFDcEIsU0FBUyxFQUFFLFlBQVk7eUJBQzFCLENBQUMsQ0FBQzt3QkFDSCxVQUFVLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7d0JBQzNELFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7cUJBQzdELENBQUM7aUJBQ0w7O2FBQ0o7Ozs7O21CQUtJLEtBQUs7b0JBS0wsS0FBSztvQkFLTCxLQUFLO21CQUtMLEtBQUs7b0JBS0wsTUFBTTtxQkFLTixNQUFNOzs7Ozs7O0lBekJQLG1DQUFzQjs7Ozs7SUFLdEIsb0NBQXVCOzs7OztJQUt2QixvQ0FBdUI7Ozs7O0lBS3ZCLG1DQUF1Qjs7Ozs7SUFLdkIsb0NBQXdEOzs7OztJQUt4RCxxQ0FBeUQ7O0lBRXpELG1DQUEwQjs7SUFDMUIsd0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHthbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21zZGEtbW9kdWxlLWNhcmQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL21vZHVsZS1jYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL21vZHVsZS1jYXJkLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBhbmltYXRpb25zOiBbXHJcbiAgICAgICAgdHJpZ2dlcignZmxpcFN0YXRlJywgW1xyXG4gICAgICAgICAgICBzdGF0ZSgnYWN0aXZlJywgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlWCgxODBkZWcpJ1xyXG4gICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZVgoMCknLFxyXG4gICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIGFuaW1hdGUoJzUwMG1zIGVhc2Utb3V0JykpLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBhbmltYXRlKCc1MDBtcyBlYXNlLWluJykpXHJcbiAgICAgICAgXSlcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZHVsZUNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJY29uIG5hbWVcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWNvbiBjb2xvclxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogdGl0bGVcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIHdhcm5pbmdcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgd2FybjogQm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIGNhcmQgY2xpY2sgZXZlbnQgZW1pdHRlclxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVtb3ZlIGljb24gY2xpY2sgZXZlbnQgZW1pdHRlclxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcmVtb3ZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBmbGlwOiBzdHJpbmcgPSAnaW5hY3RpdmUnO1xyXG4gICAgaXNIb3ZlcmVkOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLmNsaWNrLmVtaXQoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZW1vdmUoZTogRXZlbnQpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlLmVtaXQoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRmxpcChlOiBFdmVudCkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5mbGlwID0gKHRoaXMuZmxpcCA9PSAnaW5hY3RpdmUnKSA/ICdhY3RpdmUnIDogJ2luYWN0aXZlJztcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlRW50ZXIoJGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5pc0hvdmVyZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZmxpcEJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlTGVhdmUoJGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5pc0hvdmVyZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZsaXBCYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmxpcEJhY2soKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0hvdmVyZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmxpcCA9ICdpbmFjdGl2ZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxufVxyXG4iXX0=