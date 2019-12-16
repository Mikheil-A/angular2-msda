/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MSDAIcon } from '../icon/icon';
var MSDAPlateIcon = /** @class */ (function () {
    function MSDAPlateIcon(_elementRef) {
        this._elementRef = _elementRef;
        this._width = 24;
        this._height = 24;
        this._color = '#FFFFFF';
        this._background = '#EA854D';
        this._shadow = null;
    }
    Object.defineProperty(MSDAPlateIcon.prototype, "name", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._name = value;
            this._updateName();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MSDAPlateIcon.prototype, "width", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._width = value;
            this._updateWidth();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MSDAPlateIcon.prototype, "height", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._height = value;
            this._updateHeight();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MSDAPlateIcon.prototype, "color", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._color = value;
            this._updateColor();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MSDAPlateIcon.prototype, "background", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._background = value;
            this._updateBackground();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MSDAPlateIcon.prototype, "shadow", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._shadow = value;
            this._updateShadow();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MSDAPlateIcon.prototype, "type", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            this._updateType();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MSDAPlateIcon.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._updateName();
        this._updateWidth();
        this._updateHeight();
        this._updateColor();
        this._updateBackground();
        this._updateShadow();
        this._updateType();
    };
    /**
     * @return {?}
     */
    MSDAPlateIcon.prototype._updateName = /**
     * @return {?}
     */
    function () {
        if (this._name) {
            this._iconRef.name = this._name;
        }
    };
    /**
     * @return {?}
     */
    MSDAPlateIcon.prototype._updateWidth = /**
     * @return {?}
     */
    function () {
        if (this._width) {
            this._wrapperRef.nativeElement.style.width = this._width + 'px';
            this._backgroundRef.width = this._width;
            this._iconRef.width = this._width - (this._width / 3);
        }
    };
    /**
     * @return {?}
     */
    MSDAPlateIcon.prototype._updateHeight = /**
     * @return {?}
     */
    function () {
        if (this._height) {
            this._wrapperRef.nativeElement.style.height = this._height + 'px';
            this._backgroundRef.height = this._height;
            this._iconRef.height = this._height - (this._height / 3);
        }
    };
    /**
     * @return {?}
     */
    MSDAPlateIcon.prototype._updateColor = /**
     * @return {?}
     */
    function () {
        if (this._color) {
            this._iconRef.color = this._color;
        }
    };
    /**
     * @return {?}
     */
    MSDAPlateIcon.prototype._updateBackground = /**
     * @return {?}
     */
    function () {
        if (this._background) {
            this._backgroundRef.color = this._background;
        }
    };
    /**
     * @return {?}
     */
    MSDAPlateIcon.prototype._updateShadow = /**
     * @return {?}
     */
    function () {
        if (this._shadow) {
            this._backgroundRef.shadow = this._shadow;
        }
    };
    /**
     * @return {?}
     */
    MSDAPlateIcon.prototype._updateType = /**
     * @return {?}
     */
    function () {
        if (this._type) {
            this._backgroundRef.name = this._type;
        }
    };
    MSDAPlateIcon.decorators = [
        { type: Component, args: [{
                    selector: 'msda-plate-icon',
                    template: "<mat-chip-list aria-label=\"Fish selection\">\r\n    <mat-chip>One fish</mat-chip>\r\n    <mat-chip color=\"warn\" selected>Two fish</mat-chip>\r\n    <mat-chip color=\"primary\" selected>Primary fish</mat-chip>\r\n    <mat-chip color=\"accent\" selected>Accent fish</mat-chip>\r\n</mat-chip-list>\r\n\r\n\r\n\r\n<div #wrapper class=\"wrapper\">\r\n    <msda-icon #background style=\"position: absolute; top: 0; left: 0; z-index: -1;\"></msda-icon>\r\n    <msda-icon #icon style=\"z-index: 1;\"></msda-icon>\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        'role': 'img',
                        'class': 'msda-plate-icon'
                    },
                    exportAs: 'MSDAPlateIcon',
                    styles: [".wrapper{position:relative;width:48px;height:48px;display:flex;align-items:center;justify-content:center}"]
                }] }
    ];
    /** @nocollapse */
    MSDAPlateIcon.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MSDAPlateIcon.propDecorators = {
        name: [{ type: Input, args: ['name',] }],
        width: [{ type: Input, args: ['width',] }],
        height: [{ type: Input, args: ['height',] }],
        color: [{ type: Input, args: ['color',] }],
        background: [{ type: Input, args: ['background',] }],
        shadow: [{ type: Input, args: ['shadow',] }],
        type: [{ type: Input, args: ['type',] }],
        _wrapperRef: [{ type: ViewChild, args: ['wrapper',] }],
        _backgroundRef: [{ type: ViewChild, args: ['background',] }],
        _iconRef: [{ type: ViewChild, args: ['icon',] }]
    };
    return MSDAPlateIcon;
}());
export { MSDAPlateIcon };
if (false) {
    /** @type {?} */
    MSDAPlateIcon.prototype._wrapperRef;
    /** @type {?} */
    MSDAPlateIcon.prototype._backgroundRef;
    /** @type {?} */
    MSDAPlateIcon.prototype._iconRef;
    /** @type {?} */
    MSDAPlateIcon.prototype._name;
    /** @type {?} */
    MSDAPlateIcon.prototype._width;
    /** @type {?} */
    MSDAPlateIcon.prototype._height;
    /** @type {?} */
    MSDAPlateIcon.prototype._color;
    /** @type {?} */
    MSDAPlateIcon.prototype._background;
    /** @type {?} */
    MSDAPlateIcon.prototype._shadow;
    /** @type {?} */
    MSDAPlateIcon.prototype._type;
    /** @type {?} */
    MSDAPlateIcon.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGUtaWNvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItbXNkYS8iLCJzb3VyY2VzIjpbImxpYi9wbGF0ZS1pY29uL3BsYXRlLWljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsS0FBSyxFQUFxQixVQUFVLEVBQUUsU0FBUyxFQUFpQix1QkFBdUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6SSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRXRDO0lBd0VJLHVCQUFvQixXQUFvQztRQUFwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFQaEQsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFDM0IsZ0JBQVcsR0FBVyxTQUFTLENBQUM7UUFDaEMsWUFBTyxHQUFXLElBQUksQ0FBQztJQUkvQixDQUFDO0lBNURELHNCQUNJLCtCQUFJOzs7OztRQURSLFVBQ1MsS0FBYTtZQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSxnQ0FBSzs7Ozs7UUFEVCxVQUNVLEtBQWE7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksaUNBQU07Ozs7O1FBRFYsVUFDVyxLQUFhO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUNJLGdDQUFLOzs7OztRQURULFVBQ1UsS0FBYTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNw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SSxDQUFDLEtBQUssRUFBRTtZQUNaLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDekM7SUFDTCxDQUFDOztnQkFqSUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHFoQkFBZ0M7b0JBRWhDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxJQUFJLEVBQUU7d0JBQ0YsTUFBTSxFQUFFLEtBQUs7d0JBQ2IsT0FBTyxFQUFFLGlCQUFpQjtxQkFDN0I7b0JBQ0QsUUFBUSxFQUFFLGVBQWU7O2lCQUM1Qjs7OztnQkFib0QsVUFBVTs7O3VCQWdCMUQsS0FBSyxTQUFDLE1BQU07d0JBTVosS0FBSyxTQUFDLE9BQU87eUJBTWIsS0FBSyxTQUFDLFFBQVE7d0JBTWQsS0FBSyxTQUFDLE9BQU87NkJBTWIsS0FBSyxTQUFDLFlBQVk7eUJBTWxCLEtBQUssU0FBQyxRQUFRO3VCQU1kLEtBQUssU0FBQyxNQUFNOzhCQU1aLFNBQVMsU0FBQyxTQUFTO2lDQUduQixTQUFTLFNBQUMsWUFBWTsyQkFHdEIsU0FBUyxTQUFDLE1BQU07O0lBc0VyQixvQkFBQztDQUFBLEFBbklELElBbUlDO1NBeEhZLGFBQWE7OztJQTRDdEIsb0NBQzZDOztJQUU3Qyx1Q0FDaUM7O0lBRWpDLGlDQUMyQjs7SUFFM0IsOEJBQXNCOztJQUN0QiwrQkFBNEI7O0lBQzVCLGdDQUE2Qjs7SUFDN0IsK0JBQW1DOztJQUNuQyxvQ0FBd0M7O0lBQ3hDLGdDQUErQjs7SUFDL0IsOEJBQXNCOztJQUVWLG9DQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TVNEQUljb259IGZyb20gJy4uL2ljb24vaWNvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXNkYS1wbGF0ZS1pY29uJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9wbGF0ZS1pY29uLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcGxhdGUtaWNvbi5zY3NzJ10sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAncm9sZSc6ICdpbWcnLFxyXG4gICAgICAgICdjbGFzcyc6ICdtc2RhLXBsYXRlLWljb24nXHJcbiAgICB9LFxyXG4gICAgZXhwb3J0QXM6ICdNU0RBUGxhdGVJY29uJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1TREFQbGF0ZUljb24gaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBJbnB1dCgnbmFtZScpXHJcbiAgICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZU5hbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoJ3dpZHRoJylcclxuICAgIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fd2lkdGggPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl91cGRhdGVXaWR0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgnaGVpZ2h0JylcclxuICAgIHNldCBoZWlnaHQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUhlaWdodCgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgnY29sb3InKVxyXG4gICAgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbG9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCdiYWNrZ3JvdW5kJylcclxuICAgIHNldCBiYWNrZ3JvdW5kKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlQmFja2dyb3VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgnc2hhZG93JylcclxuICAgIHNldCBzaGFkb3codmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NoYWRvdyA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVNoYWRvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgndHlwZScpXHJcbiAgICBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVR5cGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBAVmlld0NoaWxkKCd3cmFwcGVyJylcclxuICAgIHByaXZhdGUgX3dyYXBwZXJSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2JhY2tncm91bmQnKVxyXG4gICAgcHJpdmF0ZSBfYmFja2dyb3VuZFJlZjogTVNEQUljb247XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnaWNvbicpXHJcbiAgICBwcml2YXRlIF9pY29uUmVmOiBNU0RBSWNvbjtcclxuXHJcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyID0gMjQ7XHJcbiAgICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlciA9IDI0O1xyXG4gICAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZyA9ICcjRkZGRkZGJztcclxuICAgIHByaXZhdGUgX2JhY2tncm91bmQ6IHN0cmluZyA9ICcjRUE4NTREJztcclxuICAgIHByaXZhdGUgX3NoYWRvdzogbnVtYmVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3R5cGU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZU5hbWUoKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVXaWR0aCgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUhlaWdodCgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbG9yKCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlQmFja2dyb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVNoYWRvdygpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVR5cGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVOYW1lKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9uYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ljb25SZWYubmFtZSA9IHRoaXMuX25hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZVdpZHRoKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl93aWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl93cmFwcGVyUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSB0aGlzLl93aWR0aCArICdweCc7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhY2tncm91bmRSZWYud2lkdGggPSB0aGlzLl93aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5faWNvblJlZi53aWR0aCA9IHRoaXMuX3dpZHRoIC0gKHRoaXMuX3dpZHRoIC8gMyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZUhlaWdodCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5faGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dyYXBwZXJSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLl9oZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kUmVmLmhlaWdodCA9IHRoaXMuX2hlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5faWNvblJlZi5oZWlnaHQgPSB0aGlzLl9oZWlnaHQgLSAodGhpcy5faGVpZ2h0IC8gMyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZUNvbG9yKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9jb2xvcikge1xyXG4gICAgICAgICAgICB0aGlzLl9pY29uUmVmLmNvbG9yID0gdGhpcy5fY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZUJhY2tncm91bmQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2JhY2tncm91bmQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmFja2dyb3VuZFJlZi5jb2xvciA9IHRoaXMuX2JhY2tncm91bmQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZVNoYWRvdygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fc2hhZG93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhY2tncm91bmRSZWYuc2hhZG93ID0gdGhpcy5fc2hhZG93O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVUeXBlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl90eXBlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhY2tncm91bmRSZWYubmFtZSA9IHRoaXMuX3R5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=