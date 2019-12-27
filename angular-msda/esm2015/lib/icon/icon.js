/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
export class MSDAIcon {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this._width = 24;
        this._height = 24;
        this._color = '#000000';
        this._shadowLevel = null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set name(value) {
        this._name = value;
        this._updateName();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set width(value) {
        this._width = value;
        this._updateWidth();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set height(value) {
        this._height = value;
        this._updateHeight();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set color(value) {
        this._color = value;
        this._updateColor();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set shadow(value) {
        this._shadowLevel = value;
        this._updateShadow();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._updateName();
        this._updateWidth();
        this._updateHeight();
        this._updateColor();
        this._updateShadow();
    }
    /**
     * @return {?}
     */
    _updateName() {
        if (this._name) {
            this._useElementRef.nativeElement.setAttribute('href', `/assets/icons.svg#${this._name}`);
        }
    }
    /**
     * @return {?}
     */
    _updateWidth() {
        if (this._width) {
            this._elementRef.nativeElement.style.width = `${this._width}px`;
            this._svgElementRef.nativeElement.setAttribute('width', this._width.toString());
        }
    }
    /**
     * @return {?}
     */
    _updateHeight() {
        if (this._height) {
            this._elementRef.nativeElement.style.height = `${this._height}px`;
            this._svgElementRef.nativeElement.setAttribute('height', this._height.toString());
        }
    }
    /**
     * @return {?}
     */
    _updateColor() {
        if (this._color) {
            this._elementRef.nativeElement.style.height = `${this._height}px`;
            this._svgElementRef.nativeElement.setAttribute('fill', this._color);
        }
    }
    /**
     * @return {?}
     */
    _updateShadow() {
        if (this._shadowLevel) {
            this._svgElementRef.nativeElement.setAttribute('class', `msda-shadow-${this._shadowLevel}`);
        }
    }
}
MSDAIcon.decorators = [
    { type: Component, args: [{
                selector: 'msda-icon',
                template: "<svg #svg>\r\n    <use #use></use>\r\n</svg>\r\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    'role': 'img',
                    'class': 'msda-icon'
                },
                exportAs: 'MSDAIcon',
                styles: [".msda-elevation-z2{box-shadow:0 2px 2px rgba(0,0,0,.2)}.msda-elevation-z4{box-shadow:0 4px 4px rgba(0,0,0,.1)}.msda-elevation-z4-underline{box-shadow:0 1px #e0e0e0,0 4px 4px rgba(0,0,0,.1)}.msda-border-top{box-shadow:0 -1px #e0e0e0}.msda-border-bottom{box-shadow:0 1px #e0e0e0}.msda-sidebar-element-hover{box-shadow:0 1px 1px rgba(0,0,0,.1)}.msda-body-1,.msda-body-1-bold,.msda-body-2,.msda-body-2-bold{color:#333;font-family:'BPG DejaVu Sans';letter-spacing:.1em}.msda-body-1 a,.msda-body-1-bold a,.msda-body-2 a,.msda-body-2-bold a{color:#3966a3}.msda-body-1 a:focus,.msda-body-1 a:hover,.msda-body-1-bold a:focus,.msda-body-1-bold a:hover,.msda-body-2 a:focus,.msda-body-2 a:hover,.msda-body-2-bold a:focus,.msda-body-2-bold a:hover{color:#777}.msda-body-1,.msda-body-1-bold{font-size:13px;line-height:21px}.msda-body-2,.msda-body-2-bold{font-size:11px;line-height:20px}.msda-body-1-bold,.msda-body-2-bold{font-weight:700}.msda-display-1,.msda-display-2,.msda-display-3{color:#333}.msda-display-1{font-size:15px;font-family:'BPG DejaVu Sans';font-weight:700;line-height:26px}.msda-display-1 a{color:#3966a3}.msda-display-1 a:focus,.msda-display-1 a:hover{color:#777}.msda-display-2,.msda-display-3{font-family:'BPG DejaVu Sans Caps Web';text-transform:uppercase}.msda-display-2{font-size:13px}.msda-display-3{font-size:11px;letter-spacing:.1em}.msda-shadow-1{-webkit-filter:drop-shadow(1px 1px 2px rgba(0, 0, 0, .5));filter:drop-shadow(1px 1px 2px rgba(0, 0, 0, .5))}.msda-shadow-2{-webkit-filter:drop-shadow(1px 1px 4px rgba(0, 0, 0, .5));filter:drop-shadow(1px 1px 4px rgba(0, 0, 0, .5))}.msda-shadow-3{-webkit-filter:drop-shadow(1px 1px 6px rgba(0, 0, 0, .5));filter:drop-shadow(1px 1px 6px rgba(0, 0, 0, .5))}.msda-icon{background-repeat:no-repeat;display:inline-block;fill:#000;height:24px;width:24px}"]
            }] }
];
/** @nocollapse */
MSDAIcon.ctorParameters = () => [
    { type: ElementRef }
];
MSDAIcon.propDecorators = {
    name: [{ type: Input, args: ['name',] }],
    width: [{ type: Input, args: ['width',] }],
    height: [{ type: Input, args: ['height',] }],
    color: [{ type: Input, args: ['color',] }],
    shadow: [{ type: Input, args: ['shadow',] }],
    _svgElementRef: [{ type: ViewChild, args: ['svg',] }],
    _useElementRef: [{ type: ViewChild, args: ['use',] }]
};
if (false) {
    /** @type {?} */
    MSDAIcon.prototype._svgElementRef;
    /** @type {?} */
    MSDAIcon.prototype._useElementRef;
    /** @type {?} */
    MSDAIcon.prototype._name;
    /** @type {?} */
    MSDAIcon.prototype._width;
    /** @type {?} */
    MSDAIcon.prototype._height;
    /** @type {?} */
    MSDAIcon.prototype._color;
    /** @type {?} */
    MSDAIcon.prototype._shadowLevel;
    /** @type {?} */
    MSDAIcon.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItbXNkYS8iLCJzb3VyY2VzIjpbImxpYi9pY29uL2ljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQWlCLHVCQUF1QixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBY3pJLE1BQU0sT0FBTyxRQUFROzs7O0lBNENqQixZQUFvQixXQUFvQztRQUFwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFMaEQsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFDM0IsaUJBQVksR0FBVyxJQUFJLENBQUM7SUFHcEMsQ0FBQzs7Ozs7SUEzQ0QsSUFDSSxJQUFJLENBQUMsS0FBYTtRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxJQUNJLEtBQUssQ0FBQyxLQUFhO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELElBQ0ksTUFBTSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsSUFDSSxLQUFLLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxJQUNJLE1BQU0sQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBaUJELFFBQVE7UUFDSixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFTyxXQUFXO1FBQ2YsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxxQkFBcUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDN0Y7SUFDTCxDQUFDOzs7O0lBRU8sWUFBWTtRQUNoQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQ2hFLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ25GO0lBQ0wsQ0FBQzs7OztJQUVPLGFBQWE7UUFDakIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQztZQUNsRSxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNyRjtJQUNMLENBQUM7Ozs7SUFFTyxZQUFZO1FBQ2hCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUM7WUFDbEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdkU7SUFDTCxDQUFDOzs7O0lBRU8sYUFBYTtRQUNqQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxlQUFlLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1NBQy9GO0lBQ0wsQ0FBQzs7O1lBbEdKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsV0FBVztnQkFDckIsNERBQTBCO2dCQUUxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLElBQUksRUFBRTtvQkFDRixNQUFNLEVBQUUsS0FBSztvQkFDYixPQUFPLEVBQUUsV0FBVztpQkFDdkI7Z0JBQ0QsUUFBUSxFQUFFLFVBQVU7O2FBQ3ZCOzs7O1lBYm9ELFVBQVU7OzttQkFnQjFELEtBQUssU0FBQyxNQUFNO29CQU1aLEtBQUssU0FBQyxPQUFPO3FCQU1iLEtBQUssU0FBQyxRQUFRO29CQU1kLEtBQUssU0FBQyxPQUFPO3FCQU1iLEtBQUssU0FBQyxRQUFROzZCQU1kLFNBQVMsU0FBQyxLQUFLOzZCQUdmLFNBQVMsU0FBQyxLQUFLOzs7O0lBSGhCLGtDQUNnRDs7SUFFaEQsa0NBQ2dEOztJQUVoRCx5QkFBc0I7O0lBQ3RCLDBCQUE0Qjs7SUFDNUIsMkJBQTZCOztJQUM3QiwwQkFBbUM7O0lBQ25DLGdDQUFvQzs7SUFFeEIsK0JBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtc2RhLWljb24nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ljb24uaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9pY29uLnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAncm9sZSc6ICdpbWcnLFxyXG4gICAgICAgICdjbGFzcyc6ICdtc2RhLWljb24nXHJcbiAgICB9LFxyXG4gICAgZXhwb3J0QXM6ICdNU0RBSWNvbicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNU0RBSWNvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgQElucHV0KCduYW1lJylcclxuICAgIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlTmFtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgnd2lkdGgnKVxyXG4gICAgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl93aWR0aCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVdpZHRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCdoZWlnaHQnKVxyXG4gICAgc2V0IGhlaWdodCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlSGVpZ2h0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCdjb2xvcicpXHJcbiAgICBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlQ29sb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoJ3NoYWRvdycpXHJcbiAgICBzZXQgc2hhZG93KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zaGFkb3dMZXZlbCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVNoYWRvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ3N2ZycpXHJcbiAgICBwcml2YXRlIF9zdmdFbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcclxuXHJcbiAgICBAVmlld0NoaWxkKCd1c2UnKVxyXG4gICAgcHJpdmF0ZSBfdXNlRWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XHJcblxyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlciA9IDI0O1xyXG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXIgPSAyNDtcclxuICAgIHByaXZhdGUgX2NvbG9yOiBzdHJpbmcgPSAnIzAwMDAwMCc7XHJcbiAgICBwcml2YXRlIF9zaGFkb3dMZXZlbDogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZU5hbWUoKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVXaWR0aCgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUhlaWdodCgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbG9yKCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlU2hhZG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlTmFtZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fbmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLl91c2VFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgYC9hc3NldHMvaWNvbnMuc3ZnIyR7dGhpcy5fbmFtZX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlV2lkdGgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3dpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3RoaXMuX3dpZHRofXB4YDtcclxuICAgICAgICAgICAgdGhpcy5fc3ZnRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB0aGlzLl93aWR0aC50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlSGVpZ2h0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke3RoaXMuX2hlaWdodH1weGA7XHJcbiAgICAgICAgICAgIHRoaXMuX3N2Z0VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHRoaXMuX2hlaWdodC50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlQ29sb3IoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLl9oZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICB0aGlzLl9zdmdFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5fY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVTaGFkb3coKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NoYWRvd0xldmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N2Z0VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYG1zZGEtc2hhZG93LSR7dGhpcy5fc2hhZG93TGV2ZWx9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==