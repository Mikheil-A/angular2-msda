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
                    template: "<div #wrapper class=\"wrapper\">\r\n    <msda-icon #background style=\"position: absolute; top: 0; left: 0; z-index: -1;\"></msda-icon>\r\n    <msda-icon #icon style=\"z-index: 1;\"></msda-icon>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGUtaWNvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItbXNkYS8iLCJzb3VyY2VzIjpbImxpYi9wbGF0ZS1pY29uL3BsYXRlLWljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsS0FBSyxFQUFxQixVQUFVLEVBQUUsU0FBUyxFQUFpQix1QkFBdUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6SSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRXRDO0lBd0VJLHVCQUFvQixXQUFvQztRQUFwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFQaEQsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFDM0IsZ0JBQVcsR0FBVyxTQUFTLENBQUM7UUFDaEMsWUFBTyxHQUFXLElBQUksQ0FBQztJQUkvQixDQUFDO0lBNURELHNCQUNJLCtCQUFJOzs7OztRQURSLFVBQ1MsS0FBYTtZQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSxnQ0FBSzs7Ozs7UUFEVCxVQUNVLEtBQWE7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksaUNBQU07Ozs7O1FBRFYsVUFDVyxLQUFhO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUNJLGdDQUFLOzs7OztRQURULFVBQ1UsS0FBYTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNw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SSxDQUFDLEtBQUssRUFBRTtZQUNaLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDekM7SUFDTCxDQUFDOztnQkFqSUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDROQUFnQztvQkFFaEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLElBQUksRUFBRTt3QkFDRixNQUFNLEVBQUUsS0FBSzt3QkFDYixPQUFPLEVBQUUsaUJBQWlCO3FCQUM3QjtvQkFDRCxRQUFRLEVBQUUsZUFBZTs7aUJBQzVCOzs7O2dCQWJvRCxVQUFVOzs7dUJBZ0IxRCxLQUFLLFNBQUMsTUFBTTt3QkFNWixLQUFLLFNBQUMsT0FBTzt5QkFNYixLQUFLLFNBQUMsUUFBUTt3QkFNZCxLQUFLLFNBQUMsT0FBTzs2QkFNYixLQUFLLFNBQUMsWUFBWTt5QkFNbEIsS0FBSyxTQUFDLFFBQVE7dUJBTWQsS0FBSyxTQUFDLE1BQU07OEJBTVosU0FBUyxTQUFDLFNBQVM7aUNBR25CLFNBQVMsU0FBQyxZQUFZOzJCQUd0QixTQUFTLFNBQUMsTUFBTTs7SUFzRXJCLG9CQUFDO0NBQUEsQUFuSUQsSUFtSUM7U0F4SFksYUFBYTs7O0lBNEN0QixvQ0FDNkM7O0lBRTdDLHVDQUNpQzs7SUFFakMsaUNBQzJCOztJQUUzQiw4QkFBc0I7O0lBQ3RCLCtCQUE0Qjs7SUFDNUIsZ0NBQTZCOztJQUM3QiwrQkFBbUM7O0lBQ25DLG9DQUF3Qzs7SUFDeEMsZ0NBQStCOztJQUMvQiw4QkFBc0I7O0lBRVYsb0NBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNU0RBSWNvbn0gZnJvbSAnLi4vaWNvbi9pY29uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtc2RhLXBsYXRlLWljb24nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BsYXRlLWljb24uaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9wbGF0ZS1pY29uLnNjc3MnXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdyb2xlJzogJ2ltZycsXHJcbiAgICAgICAgJ2NsYXNzJzogJ21zZGEtcGxhdGUtaWNvbidcclxuICAgIH0sXHJcbiAgICBleHBvcnRBczogJ01TREFQbGF0ZUljb24nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTVNEQVBsYXRlSWNvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgQElucHV0KCduYW1lJylcclxuICAgIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlTmFtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgnd2lkdGgnKVxyXG4gICAgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl93aWR0aCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVdpZHRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCdoZWlnaHQnKVxyXG4gICAgc2V0IGhlaWdodCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlSGVpZ2h0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCdjb2xvcicpXHJcbiAgICBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlQ29sb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoJ2JhY2tncm91bmQnKVxyXG4gICAgc2V0IGJhY2tncm91bmQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2JhY2tncm91bmQgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl91cGRhdGVCYWNrZ3JvdW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCdzaGFkb3cnKVxyXG4gICAgc2V0IHNoYWRvdyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2hhZG93ID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlU2hhZG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCd0eXBlJylcclxuICAgIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl90eXBlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlVHlwZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ3dyYXBwZXInKVxyXG4gICAgcHJpdmF0ZSBfd3JhcHBlclJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnYmFja2dyb3VuZCcpXHJcbiAgICBwcml2YXRlIF9iYWNrZ3JvdW5kUmVmOiBNU0RBSWNvbjtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdpY29uJylcclxuICAgIHByaXZhdGUgX2ljb25SZWY6IE1TREFJY29uO1xyXG5cclxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3dpZHRoOiBudW1iZXIgPSAyNDtcclxuICAgIHByaXZhdGUgX2hlaWdodDogbnVtYmVyID0gMjQ7XHJcbiAgICBwcml2YXRlIF9jb2xvcjogc3RyaW5nID0gJyNGRkZGRkYnO1xyXG4gICAgcHJpdmF0ZSBfYmFja2dyb3VuZDogc3RyaW5nID0gJyNFQTg1NEQnO1xyXG4gICAgcHJpdmF0ZSBfc2hhZG93OiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfdHlwZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlTmFtZSgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVdpZHRoKCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlSGVpZ2h0KCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlQ29sb3IoKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVCYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlU2hhZG93KCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlVHlwZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZU5hbWUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX25hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5faWNvblJlZi5uYW1lID0gdGhpcy5fbmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlV2lkdGgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3dpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dyYXBwZXJSZWYubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IHRoaXMuX3dpZHRoICsgJ3B4JztcclxuICAgICAgICAgICAgdGhpcy5fYmFja2dyb3VuZFJlZi53aWR0aCA9IHRoaXMuX3dpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLl9pY29uUmVmLndpZHRoID0gdGhpcy5fd2lkdGggLSAodGhpcy5fd2lkdGggLyAzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlSGVpZ2h0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5fd3JhcHBlclJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuX2hlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhY2tncm91bmRSZWYuaGVpZ2h0ID0gdGhpcy5faGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLl9pY29uUmVmLmhlaWdodCA9IHRoaXMuX2hlaWdodCAtICh0aGlzLl9oZWlnaHQgLyAzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlQ29sb3IoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ljb25SZWYuY29sb3IgPSB0aGlzLl9jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlQmFja2dyb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fYmFja2dyb3VuZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kUmVmLmNvbG9yID0gdGhpcy5fYmFja2dyb3VuZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlU2hhZG93KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9zaGFkb3cpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmFja2dyb3VuZFJlZi5zaGFkb3cgPSB0aGlzLl9zaGFkb3c7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZVR5cGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3R5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmFja2dyb3VuZFJlZi5uYW1lID0gdGhpcy5fdHlwZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==