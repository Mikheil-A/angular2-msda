import { NgModule, Component, Input, ViewEncapsulation, ElementRef, ViewChild, ChangeDetectionStrategy, Output, EventEmitter, HostListener, Injectable, Injector, ComponentFactoryResolver, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { __assign } from 'tslib';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var MatModule = /** @class */ (function () {
    function MatModule() {
    }
    MatModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        // core modules
                        CommonModule,
                        // angular-material components modules
                        MatButtonModule,
                        MatInputModule,
                        MatIconModule,
                        MatExpansionModule,
                        MatSelectModule,
                        MatTableModule,
                        MatPaginatorModule,
                        MatSortModule,
                        MatSlideToggleModule,
                        MatDialogModule,
                        MatSidenavModule,
                        MatCheckboxModule,
                        MatStepperModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        MatChipsModule,
                        MatTooltipModule,
                        MatMenuModule,
                        MatProgressBarModule
                    ],
                    declarations: [],
                    exports: [
                        // core modules
                        CommonModule,
                        // angular-material components modules
                        MatButtonModule,
                        MatInputModule,
                        MatIconModule,
                        MatExpansionModule,
                        MatSelectModule,
                        MatTableModule,
                        MatPaginatorModule,
                        MatSortModule,
                        MatSlideToggleModule,
                        MatDialogModule,
                        MatSidenavModule,
                        MatCheckboxModule,
                        MatStepperModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        MatChipsModule,
                        MatTooltipModule,
                        MatMenuModule,
                        MatProgressBarModule
                    ]
                },] }
    ];
    return MatModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var MSDAIcon = /** @class */ (function () {
    function MSDAIcon(_elementRef) {
        this._elementRef = _elementRef;
        this._width = 24;
        this._height = 24;
        this._color = '#000000';
        this._shadowLevel = null;
    }
    Object.defineProperty(MSDAIcon.prototype, "name", {
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
    Object.defineProperty(MSDAIcon.prototype, "width", {
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
    Object.defineProperty(MSDAIcon.prototype, "height", {
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
    Object.defineProperty(MSDAIcon.prototype, "color", {
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
    Object.defineProperty(MSDAIcon.prototype, "shadow", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._shadowLevel = value;
            this._updateShadow();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MSDAIcon.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._updateName();
        this._updateWidth();
        this._updateHeight();
        this._updateColor();
        this._updateShadow();
    };
    /**
     * @return {?}
     */
    MSDAIcon.prototype._updateName = /**
     * @return {?}
     */
    function () {
        if (this._name) {
            this._useElementRef.nativeElement.setAttribute('href', "/assets/icons.svg#" + this._name);
        }
    };
    /**
     * @return {?}
     */
    MSDAIcon.prototype._updateWidth = /**
     * @return {?}
     */
    function () {
        if (this._width) {
            this._elementRef.nativeElement.style.width = this._width + "px";
            this._svgElementRef.nativeElement.setAttribute('width', this._width.toString());
        }
    };
    /**
     * @return {?}
     */
    MSDAIcon.prototype._updateHeight = /**
     * @return {?}
     */
    function () {
        if (this._height) {
            this._elementRef.nativeElement.style.height = this._height + "px";
            this._svgElementRef.nativeElement.setAttribute('height', this._height.toString());
        }
    };
    /**
     * @return {?}
     */
    MSDAIcon.prototype._updateColor = /**
     * @return {?}
     */
    function () {
        if (this._color) {
            this._elementRef.nativeElement.style.height = this._height + "px";
            this._svgElementRef.nativeElement.setAttribute('fill', this._color);
        }
    };
    /**
     * @return {?}
     */
    MSDAIcon.prototype._updateShadow = /**
     * @return {?}
     */
    function () {
        if (this._shadowLevel) {
            this._svgElementRef.nativeElement.setAttribute('class', "msda-shadow-" + this._shadowLevel);
        }
    };
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
    MSDAIcon.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MSDAIcon.propDecorators = {
        name: [{ type: Input, args: ['name',] }],
        width: [{ type: Input, args: ['width',] }],
        height: [{ type: Input, args: ['height',] }],
        color: [{ type: Input, args: ['color',] }],
        shadow: [{ type: Input, args: ['shadow',] }],
        _svgElementRef: [{ type: ViewChild, args: ['svg',] }],
        _useElementRef: [{ type: ViewChild, args: ['use',] }]
    };
    return MSDAIcon;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var MSDACardButton = /** @class */ (function () {
    function MSDACardButton() {
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
    MSDACardButton.prototype.hostClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.buttonClick.emit(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MSDACardButton.prototype.moveHandlerClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
    };
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
    return MSDACardButton;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var MSDACardButtonsContainer = /** @class */ (function () {
    function MSDACardButtonsContainer(_el) {
        this._el = _el;
        this.row = 3;
        this.column = 3;
        this.dragEnabled = false;
        this.dataSource = [];
        this.sortupdate = new EventEmitter();
        this.buttonClick = new EventEmitter();
    }
    Object.defineProperty(MSDACardButtonsContainer.prototype, "gridTemplateColumns", {
        get: /**
         * @return {?}
         */
        function () {
            return '1fr '.repeat(this.column).trim();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MSDACardButtonsContainer.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.dragEnabled) {
            jQuery('.msda-card-buttons-container-inner', this._el.nativeElement).sortable({
                handle: '.msda-card-button-move-handler'
            }).bind('sortupdate', function (event, ui) {
                _this.sortupdate.emit({ event: event, ui: ui });
            });
        }
    };
    MSDACardButtonsContainer.decorators = [
        { type: Component, args: [{
                    selector: 'msda-card-buttons-container',
                    exportAs: 'MSDACardButtonsContainer',
                    template: "<div class=\"msda-card-buttons-container-inner\" [style.grid-template-columns]=\"gridTemplateColumns\">\r\n  <ng-template ngFor let-item [ngForOf]=\"dataSource\">\r\n    <msda-card-button [title]=\"item.title\" [text]=\"item.text\" [icon]=\"item.icon\" [iconType]=\"item.iconType\" [iconBackgroundColor]=\"item.iconBackgroundColor\" (buttonClick)=\"buttonClick.emit($event)\"></msda-card-button>\r\n  </ng-template>\r\n</div>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        'role': 'button',
                        'class': 'msda-card-buttons-container'
                    },
                    styles: [".msda-card-buttons-container{overflow:hidden}.msda-card-buttons-container-inner{display:-ms-grid;display:grid;margin-top:10px;margin-bottom:10px;gap:10px 24px}"]
                }] }
    ];
    /** @nocollapse */
    MSDACardButtonsContainer.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MSDACardButtonsContainer.propDecorators = {
        row: [{ type: Input }],
        column: [{ type: Input }],
        dragEnabled: [{ type: Input }],
        dataSource: [{ type: Input }],
        sortupdate: [{ type: Output }],
        buttonClick: [{ type: Output }]
    };
    return MSDACardButtonsContainer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var MSDABannerButton = /** @class */ (function () {
    function MSDABannerButton() {
        /**
         * Read more text
         */
        this.readMoreText = 'ვრცლად ...';
        /**
         * Button click event emitter
         */
        this.buttonClick = new EventEmitter();
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
    return MSDABannerButton;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var MSDAPaginator = /** @class */ (function () {
    function MSDAPaginator() {
        this.page = new EventEmitter();
        this.pageConfigChange = new EventEmitter();
        this.currentPageIndex = 1;
        this._pageEventData = {
            pageIndex: this.currentPageIndex,
            pageSize: null
        };
    }
    /**
     * @return {?}
     */
    MSDAPaginator.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.numberOfTotalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this._pageEventData['pageSize'] = this.itemsPerPageConfig[0];
    };
    /**
     * @return {?}
     */
    MSDAPaginator.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        if (this.currentPageIndex < this.numberOfTotalPages) {
            this._pageEventData['pageIndex'] = ++this.currentPageIndex;
            this.page.emit(this._pageEventData);
        }
    };
    /**
     * @return {?}
     */
    MSDAPaginator.prototype.previousPage = /**
     * @return {?}
     */
    function () {
        if (this.currentPageIndex > 1) {
            this._pageEventData['pageIndex'] = --this.currentPageIndex;
            this.page.emit(this._pageEventData);
        }
    };
    /**
     * @return {?}
     */
    MSDAPaginator.prototype.moveToTheRequestedPage = /**
     * @return {?}
     */
    function () {
        if (this.currentPageIndex >= 1 && this.currentPageIndex <= this.numberOfTotalPages) {
            this._pageEventData['pageIndex'] = this.currentPageIndex;
            this.page.emit(this._pageEventData);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MSDAPaginator.prototype.onSelectionChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.itemsPerPage = parseInt(e.srcElement['value'], 10);
        this._pageEventData['pageSize'] = this.itemsPerPage;
        this.numberOfTotalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.page.emit(this._pageEventData);
        this.pageConfigChange.emit(this.itemsPerPage);
    };
    MSDAPaginator.decorators = [
        { type: Component, args: [{
                    selector: 'msda-paginator',
                    exportAs: 'MSDAPaginator',
                    template: "<div id=\"container\" class=\"msda-body-2\">\r\n    <span>\u10E1\u10E3\u10DA \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D4\u10D1\u10D8: {{totalItems}}</span>\r\n\r\n    <div id=\"right-end\">\r\n        <div id=\"select-number-of-records\">\r\n            <span>\u10D2\u10D5\u10D4\u10E0\u10D3\u10D6\u10D4 \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D4\u10D1\u10D8\u10E1 \u10E0\u10D0\u10DD\u10D3\u10D4\u10DC\u10DD\u10D1\u10D0: </span>\r\n\r\n            <select (change)=\"onSelectionChange($event)\" class=\"msda-body-2\">\r\n                <option *ngFor=\"let item of itemsPerPageConfig\" [value]=\"item\">\r\n                    {{item}}\r\n                </option>\r\n            </select>\r\n        </div>\r\n\r\n        <div id=\"paging-navigation\">\r\n            <msda-icon name=\"chevron_left\"\r\n                       [color]=\"currentPageIndex <= 1? '#CCCEE0' : '#000000'\"\r\n                       [ngStyle]=\"{'cursor': currentPageIndex === 1? 'not-allowed' : 'pointer'}\"\r\n                       (click)=\"previousPage()\">\r\n            </msda-icon>\r\n\r\n            <div id=\"current-page-index-indicator\">\r\n                <input class=\"msda-body-2\" *ngIf=\"numberOfTotalPages > 2; else withoutInputField\"\r\n                       type=\"number\"\r\n                       [(ngModel)]=\"currentPageIndex\"\r\n                       (input)=\"moveToTheRequestedPage()\">\r\n                <ng-template #withoutInputField>\r\n                    <span>{{currentPageIndex}}</span>\r\n                </ng-template>\r\n            </div>\r\n            \r\n            <div id=\"total-number-of-pages\" class=\"msda-body-2\"> - {{numberOfTotalPages}}</div>\r\n\r\n            <msda-icon name=\"chevron_right\"\r\n                       [color]=\"currentPageIndex >= numberOfTotalPages? '#CCCEE0' : '#000000'\"\r\n                       [ngStyle]=\"{'cursor': currentPageIndex === numberOfTotalPages? 'not-allowed' : 'pointer'}\"\r\n                       (click)=\"nextPage()\">\r\n            </msda-icon>\r\n        </div>\r\n    </div>\r\n</div>\r\n",
                    styles: [".msda-elevation-z2{box-shadow:0 2px 2px rgba(0,0,0,.2)}.msda-elevation-z4{box-shadow:0 4px 4px rgba(0,0,0,.1)}.msda-elevation-z4-underline{box-shadow:0 1px #e0e0e0,0 4px 4px rgba(0,0,0,.1)}.msda-border-top{box-shadow:0 -1px #e0e0e0}.msda-border-bottom{box-shadow:0 1px #e0e0e0}.msda-sidebar-element-hover{box-shadow:0 1px 1px rgba(0,0,0,.1)}.msda-body-1,.msda-body-1-bold,.msda-body-2,.msda-body-2-bold{color:#333;font-family:'BPG DejaVu Sans';letter-spacing:.1em}.msda-body-1 a,.msda-body-1-bold a,.msda-body-2 a,.msda-body-2-bold a{color:#3966a3}.msda-body-1 a:focus,.msda-body-1 a:hover,.msda-body-1-bold a:focus,.msda-body-1-bold a:hover,.msda-body-2 a:focus,.msda-body-2 a:hover,.msda-body-2-bold a:focus,.msda-body-2-bold a:hover{color:#777}.msda-body-1,.msda-body-1-bold{font-size:13px;line-height:21px}.msda-body-2,.msda-body-2-bold{font-size:11px;line-height:20px}.msda-body-1-bold,.msda-body-2-bold{font-weight:700}.msda-display-1,.msda-display-2,.msda-display-3{color:#333}.msda-display-1{font-size:15px;font-family:'BPG DejaVu Sans';font-weight:700;line-height:26px}.msda-display-1 a{color:#3966a3}.msda-display-1 a:focus,.msda-display-1 a:hover{color:#777}.msda-display-2,.msda-display-3{font-family:'BPG DejaVu Sans Caps Web';text-transform:uppercase}.msda-display-2{font-size:13px}.msda-display-3{font-size:11px;letter-spacing:.1em}#container{display:flex;flex-direction:row;align-items:center;justify-content:space-between;background-color:#fff;box-shadow:0 1px 0 #e0e0e0;padding:8px 24px;color:#777}#container #right-end{display:flex;flex-direction:row;align-items:center}#container #right-end #select-number-of-records select{border:none;color:#777}#container #right-end #paging-navigation{display:flex;flex-direction:row;align-items:center;margin-left:70px}#container #right-end #paging-navigation msda-icon{cursor:pointer}#container #right-end #paging-navigation #current-page-index-indicator{margin:0 0 0 30px;font-weight:700}#container #right-end #paging-navigation input[type=number]{background-color:#f7f7fa;border-radius:2px;border:none;padding:10px 12px;box-sizing:border-box;width:64px;font-weight:700}#container #right-end #paging-navigation input[type=number]::-webkit-inner-spin-button,#container #right-end #paging-navigation input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}#container #right-end #paging-navigation #total-number-of-pages{margin:0 30px 0 4px;color:#777}"]
                }] }
    ];
    /** @nocollapse */
    MSDAPaginator.ctorParameters = function () { return []; };
    MSDAPaginator.propDecorators = {
        itemsPerPage: [{ type: Input }],
        totalItems: [{ type: Input }],
        itemsPerPageConfig: [{ type: Input }],
        page: [{ type: Output }],
        pageConfigChange: [{ type: Output }]
    };
    return MSDAPaginator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var MSDAMenuButton = /** @class */ (function () {
    function MSDAMenuButton() {
        this.click = new EventEmitter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    MSDAMenuButton.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        event.stopPropagation();
        this.click.next(e);
    };
    MSDAMenuButton.decorators = [
        { type: Component, args: [{
                    selector: 'msda-menu-button',
                    exportAs: 'MSDAMenuButton',
                    template: "<div class=\"msda-menu-button-body\">\r\n    <button class=\"button\" (click)=\"onClick($event)\">\r\n        <span class=\"block\"></span>\r\n        <span *ngIf=\"active\" class=\"block-active\"></span>\r\n        <span *ngIf=\"notifCounter\" class=\"badge msda-body-2-bold\">{{notifCounter < 100 ? notifCounter : '!'}}</span>\r\n        <span class=\"content msda-display-2\">\r\n            <ng-content></ng-content>\r\n        </span>\r\n    </button>\r\n</div>\r\n",
                    styles: [".button{position:relative;height:50px;padding-left:40px;padding-right:30px;border:none;cursor:pointer;background-color:#f6f6f6;font-size:20px;outline:0}.button:hover .block{display:block}.content{font-family:BPG DejaVu Sans Caps Web}.badge{position:absolute;height:18px;width:24px;color:#fff;background:#e3515a;border:1px solid #fff;box-sizing:border-box;border-radius:4px;line-height:18px;text-align:center;letter-spacing:.01em;top:5px;right:12px}.block{display:none;position:absolute;height:8px;width:8px;color:#fff;background-color:#000;padding-top:1px;top:20px;left:25px}.block-active{position:absolute;height:8px;width:8px;color:#fff;background-color:#000;padding-top:1px;top:20px;left:25px}"]
                }] }
    ];
    MSDAMenuButton.propDecorators = {
        active: [{ type: Input, args: ['active',] }],
        text: [{ type: Input, args: ['text',] }],
        notifCounter: [{ type: Input, args: ['notifCounter',] }],
        click: [{ type: Output }]
    };
    return MSDAMenuButton;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.type = 'button';
        this.color = 'white';
        this.disabled = false;
        this.click = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} e
     * @return {?}
     */
    ButtonComponent.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.click.emit(e);
    };
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'msda-button',
                    template: "<button class=\"msda-button\"\r\n        [type]=\"type\"\r\n        [style.backgroundColor]=\"bgColor\"\r\n        [disabled]=\"disabled\"\r\n        (click)=\"onClick($event)\"\r\n        mat-button>\r\n  <!--  <span class=\"loader\" *ngIf=\"showLoading\"></span>-->\r\n\r\n  <span class=\"icon\">\r\n      <ng-content select=\"msda-icon\"></ng-content>\r\n    </span>\r\n\r\n  <span class=\"text\" [style.color]=\"color\">\r\n      <ng-content select=\"span\"></ng-content>\r\n    </span>\r\n\r\n</button>\r\n",
                    styles: [".msda-button{box-shadow:0 1px 3px rgba(84,110,122,.2),0 2px 1px rgba(84,110,122,.12),0 1px 1px rgba(84,110,122,.14);border-radius:4px;padding:5px 12px}.msda-button:hover{opacity:.84}.msda-button .icon ::ng-deep msda-icon{vertical-align:sub}.msda-button .text ::ng-deep span{padding-left:8px!important;font-size:14px;line-height:19px;letter-spacing:.16px}.msda-button:disabled{background-color:rgba(33,33,33,.32)!important;box-shadow:none}.msda-button:disabled:hover{opacity:1}"]
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        type: [{ type: Input }],
        bgColor: [{ type: Input }],
        color: [{ type: Input }],
        disabled: [{ type: Input }],
        showLoading: [{ type: Input }],
        click: [{ type: Output }]
    };
    return ButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var MSDAToast = /** @class */ (function () {
    function MSDAToast() {
        this.linkClick = new EventEmitter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    MSDAToast.prototype.click = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (((/** @type {?} */ (e.target))).classList.contains('msda-link'))
            this.linkClick.emit(e);
    };
    MSDAToast.decorators = [
        { type: Component, args: [{
                    selector: 'msda-toast',
                    template: "<div class=\"msda-toast\">\r\n  <div class=\"msda-toast-html msda-body-1-bold\" [innerHTML]=\"html\"></div>\r\n  <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" (click)=\"dismiss()\">\r\n    <g opacity=\"0.54\">\r\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z\" fill=\"white\" />\r\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z\" fill=\"white\" />\r\n    </g>\r\n  </svg>\r\n</div>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    exportAs: 'MSDAToas',
                    styles: [".msda-toast{color:#fff;padding:20px 24px;background-color:#212121;border-radius:4px;position:fixed;left:32px;bottom:64px;z-index:9999;display:flex;align-items:center}.msda-toast .msda-link,.msda-toast svg{cursor:pointer}.msda-toast svg{margin-left:20px}.msda-toast .msda-link{color:#a3bfe5}.msda-toast .msda-toast-html.msda-body-1-bold{color:#fff;letter-spacing:.01em}"]
                }] }
    ];
    /** @nocollapse */
    MSDAToast.ctorParameters = function () { return []; };
    MSDAToast.propDecorators = {
        html: [{ type: Input }],
        dismiss: [{ type: Input }],
        linkClick: [{ type: Output }],
        click: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return MSDAToast;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var MSDAToastConfig = /** @class */ (function () {
    function MSDAToastConfig() {
        this.onClose = function () { };
        this.linkClick = function (e) { };
        this.closeAfter = 3000;
    }
    return MSDAToastConfig;
}());
var MSDAToastService = /** @class */ (function () {
    function MSDAToastService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    /**
     * @param {?} html
     * @param {?=} userConfig
     * @return {?}
     */
    MSDAToastService.prototype.showHtml = /**
     * @param {?} html
     * @param {?=} userConfig
     * @return {?}
     */
    function (html, userConfig) {
        var _this = this;
        /** @type {?} */
        var config = __assign({}, new MSDAToastConfig(), userConfig);
        // 1. Create a component reference from the component
        this._componentRef = this.componentFactoryResolver
            .resolveComponentFactory(MSDAToast)
            .create(this.injector);
        this._componentRef.instance.html = html;
        this._componentRef.instance.linkClick.subscribe(function (e) { return config.linkClick(e); });
        this._componentRef.instance.dismiss = function () {
            _this._componentRef.instance.linkClick.unsubscribe();
            _this.appRef.detachView(_this._componentRef.hostView);
            _this._componentRef.destroy();
            config.onClose();
        };
        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(this._componentRef.hostView);
        // 3. Get DOM element from component
        /** @type {?} */
        var domElem = (/** @type {?} */ (((/** @type {?} */ (this._componentRef.hostView)))
            .rootNodes[0]));
        // 4. Append DOM element to the body
        document.body.appendChild(domElem);
        // 5. Wait some time and remove it from the component tree and from the DOM
        setTimeout(function () { return _this._componentRef.instance.dismiss(); }, config.closeAfter);
    };
    MSDAToastService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MSDAToastService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector }
    ]; };
    return MSDAToastService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var IconLabelComponent = /** @class */ (function () {
    function IconLabelComponent() {
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
    IconLabelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} e
     * @return {?}
     */
    IconLabelComponent.prototype.onClick = /**
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
    IconLabelComponent.prototype.onRemove = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.remove.emit(e);
    };
    IconLabelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'msda-icon-label',
                    template: "<div class=\"icon-label\" (click)=\"onClick($event)\">\r\n    <div class=\"icon-label-content\">\r\n        <div class=\"icon\">\r\n            <msda-icon\r\n                [name]=\"icon\"\r\n                width=\"18\"\r\n                height=\"18\"\r\n                [color]=\"color\">\r\n            </msda-icon>\r\n        </div>\r\n        <div class=\"text\">\r\n            <span [style.color]=\"color\">{{text}}</span>\r\n        </div>\r\n        <div class=\"icon remove\">\r\n            <msda-icon\r\n                name=\"cancel_circle\"\r\n                width=\"18\"\r\n                height=\"18\"\r\n                color=\"gray\"\r\n                (click)=\"onRemove($event)\">\r\n            </msda-icon>\r\n        </div>\r\n    </div>\r\n</div>\r\n",
                    styles: [".icon-label{width:100%;min-width:163px;padding:6px 9px;background:#fff;border:1px solid #e0e0e0;box-sizing:border-box;border-radius:16px;cursor:pointer}.icon-label .icon-label-content{display:flex;align-items:center;justify-content:space-between}.icon-label .icon-label-content .icon msda-icon{display:flex;vertical-align:middle}.icon-label .icon-label-content .icon.remove{cursor:pointer}.icon-label .icon-label-content .text{margin:0 9px;font-family:'BPG DejaVu Sans';font-size:11px;letter-spacing:.01em}"]
                }] }
    ];
    /** @nocollapse */
    IconLabelComponent.ctorParameters = function () { return []; };
    IconLabelComponent.propDecorators = {
        icon: [{ type: Input }],
        color: [{ type: Input }],
        text: [{ type: Input }],
        click: [{ type: Output }],
        remove: [{ type: Output }]
    };
    return IconLabelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var HorizontalDividerComponent = /** @class */ (function () {
    function HorizontalDividerComponent() {
    }
    HorizontalDividerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'msda-horizontal-divider',
                    template: "<div class=\"msda-horizontal-divider\"></div>\r\n",
                    styles: [".msda-horizontal-divider{background-color:#e0e0e0;margin:16px 0;height:1px;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    HorizontalDividerComponent.ctorParameters = function () { return []; };
    return HorizontalDividerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var AngularMsdaModule = /** @class */ (function () {
    function AngularMsdaModule() {
    }
    AngularMsdaModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        // msda components
                        MSDAIcon,
                        MSDAPlateIcon,
                        MSDACardButton,
                        MSDACardButtonsContainer,
                        MSDABannerButton,
                        MSDAPaginator,
                        MSDAMenuButton,
                        MSDAToast,
                        ButtonComponent,
                        ButtonRoundComponent,
                        ModuleCardComponent,
                        IconLabelComponent,
                        FormFieldComponent,
                        HorizontalDividerComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatModule
                    ],
                    exports: [
                        // msda components
                        MSDAIcon,
                        MSDAPlateIcon,
                        MSDACardButton,
                        MSDACardButtonsContainer,
                        MSDABannerButton,
                        MSDAPaginator,
                        MSDAMenuButton,
                        MSDAToast,
                        ButtonComponent,
                        ButtonRoundComponent,
                        ModuleCardComponent,
                        IconLabelComponent,
                        FormFieldComponent,
                        HorizontalDividerComponent
                    ],
                    entryComponents: [
                        MSDAToast
                    ],
                    providers: [
                        MSDAToastService
                    ]
                },] }
    ];
    return AngularMsdaModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { AngularMsdaModule, MSDABannerButton as ɵe, ButtonRoundComponent as ɵj, ButtonComponent as ɵi, MSDACardButton as ɵc, MSDACardButtonsContainer as ɵd, FormFieldComponent as ɵm, HorizontalDividerComponent as ɵn, IconLabelComponent as ɵl, MSDAIcon as ɵa, MatModule as ɵo, MSDAMenuButton as ɵg, ModuleCardComponent as ɵk, MSDAPaginator as ɵf, MSDAPlateIcon as ɵb, MSDAToast as ɵh, MSDAToastService as ɵp };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1tc2RhLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyLW1zZGEvbGliL21hdC5tb2R1bGUudHMiLCJuZzovL2FuZ3VsYXItbXNkYS9saWIvaWNvbi9pY29uLnRzIiwibmc6Ly9hbmd1bGFyLW1zZGEvbGliL3BsYXRlLWljb24vcGxhdGUtaWNvbi50cyIsIm5nOi8vYW5ndWxhci1tc2RhL2xpYi9jYXJkLWJ1dHRvbi9jYXJkLWJ1dHRvbi50cyIsIm5nOi8vYW5ndWxhci1tc2RhL2xpYi9jYXJkLWJ1dHRvbi9jYXJkLWJ1dHRvbnMtY29udGFpbmVyLnRzIiwibmc6Ly9hbmd1bGFyLW1zZGEvbGliL2Jhbm5lci1idXR0b24vYmFubmVyLWJ1dHRvbi50cyIsIm5nOi8vYW5ndWxhci1tc2RhL2xpYi9wYWdpbmF0b3IvcGFnaW5hdG9yLnRzIiwibmc6Ly9hbmd1bGFyLW1zZGEvbGliL21lbnUtYnV0dG9uL21lbnUtYnV0dG9uLnRzIiwibmc6Ly9hbmd1bGFyLW1zZGEvbGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLW1zZGEvbGliL2J1dHRvbi1yb3VuZC9idXR0b24tcm91bmQuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLW1zZGEvbGliL3RvYXN0L3RvYXN0LnRzIiwibmc6Ly9hbmd1bGFyLW1zZGEvbGliL3RvYXN0L3RvYXN0LnNlcnZpY2UudHMiLCJuZzovL2FuZ3VsYXItbXNkYS9saWIvbW9kdWxlLWNhcmQvbW9kdWxlLWNhcmQuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLW1zZGEvbGliL2ljb24tbGFiZWwvaWNvbi1sYWJlbC5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItbXNkYS9saWIvZm9ybS1maWVsZC9mb3JtLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1tc2RhL2xpYi9ob3Jpem9udGFsLWRpdmlkZXIvaG9yaXpvbnRhbC1kaXZpZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1tc2RhL2xpYi9hbmd1bGFyLW1zZGEubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcmUgbW9kdWxlc1xyXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG4vLyBBbmd1bGFyLW1hdGVyaWFsIGNvbXBvbmVudHMgbW9kdWxlc1xyXG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQge01hdEV4cGFuc2lvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZXhwYW5zaW9uJztcclxuaW1wb3J0IHtNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XHJcbmltcG9ydCB7TWF0VGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcclxuaW1wb3J0IHtNYXRQYWdpbmF0b3JNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XHJcbmltcG9ydCB7TWF0U29ydE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XHJcbmltcG9ydCB7TWF0U2xpZGVUb2dnbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlLXRvZ2dsZSc7XHJcbmltcG9ydCB7TWF0RGlhbG9nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQge01hdFNpZGVuYXZNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xyXG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XHJcbmltcG9ydCB7TWF0U3RlcHBlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc3RlcHBlcic7XHJcbmltcG9ydCB7TWF0RGF0ZXBpY2tlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7TWF0TmF0aXZlRGF0ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQge01hdENoaXBzTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XHJcbmltcG9ydCB7TWF0VG9vbHRpcE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XHJcbmltcG9ydCB7TWF0TWVudU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XHJcbmltcG9ydCB7TWF0UHJvZ3Jlc3NCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgLy8gY29yZSBtb2R1bGVzXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG5cclxuICAgICAgICAvLyBhbmd1bGFyLW1hdGVyaWFsIGNvbXBvbmVudHMgbW9kdWxlc1xyXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgICAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgICAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuICAgICAgICBNYXRTZWxlY3RNb2R1bGUsXHJcbiAgICAgICAgTWF0VGFibGVNb2R1bGUsXHJcbiAgICAgICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxyXG4gICAgICAgIE1hdFNvcnRNb2R1bGUsXHJcbiAgICAgICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcbiAgICAgICAgTWF0RGlhbG9nTW9kdWxlLFxyXG4gICAgICAgIE1hdFNpZGVuYXZNb2R1bGUsXHJcbiAgICAgICAgTWF0Q2hlY2tib3hNb2R1bGUsXHJcbiAgICAgICAgTWF0U3RlcHBlck1vZHVsZSxcclxuICAgICAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxyXG4gICAgICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXHJcbiAgICAgICAgTWF0Q2hpcHNNb2R1bGUsXHJcbiAgICAgICAgTWF0VG9vbHRpcE1vZHVsZSxcclxuICAgICAgICBNYXRNZW51TW9kdWxlLFxyXG4gICAgICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICAvLyBjb3JlIG1vZHVsZXNcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcblxyXG4gICAgICAgIC8vIGFuZ3VsYXItbWF0ZXJpYWwgY29tcG9uZW50cyBtb2R1bGVzXHJcbiAgICAgICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICAgICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxyXG4gICAgICAgIE1hdFNlbGVjdE1vZHVsZSxcclxuICAgICAgICBNYXRUYWJsZU1vZHVsZSxcclxuICAgICAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXHJcbiAgICAgICAgTWF0U29ydE1vZHVsZSxcclxuICAgICAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuICAgICAgICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgICAgICAgTWF0U2lkZW5hdk1vZHVsZSxcclxuICAgICAgICBNYXRDaGVja2JveE1vZHVsZSxcclxuICAgICAgICBNYXRTdGVwcGVyTW9kdWxlLFxyXG4gICAgICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcbiAgICAgICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcclxuICAgICAgICBNYXRDaGlwc01vZHVsZSxcclxuICAgICAgICBNYXRUb29sdGlwTW9kdWxlLFxyXG4gICAgICAgIE1hdE1lbnVNb2R1bGUsXHJcbiAgICAgICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGVcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdE1vZHVsZSB7XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtc2RhLWljb24nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ljb24uaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9pY29uLnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAncm9sZSc6ICdpbWcnLFxyXG4gICAgICAgICdjbGFzcyc6ICdtc2RhLWljb24nXHJcbiAgICB9LFxyXG4gICAgZXhwb3J0QXM6ICdNU0RBSWNvbicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNU0RBSWNvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgQElucHV0KCduYW1lJylcclxuICAgIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlTmFtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgnd2lkdGgnKVxyXG4gICAgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl93aWR0aCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVdpZHRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCdoZWlnaHQnKVxyXG4gICAgc2V0IGhlaWdodCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlSGVpZ2h0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCdjb2xvcicpXHJcbiAgICBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlQ29sb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoJ3NoYWRvdycpXHJcbiAgICBzZXQgc2hhZG93KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zaGFkb3dMZXZlbCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVNoYWRvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ3N2ZycpXHJcbiAgICBwcml2YXRlIF9zdmdFbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcclxuXHJcbiAgICBAVmlld0NoaWxkKCd1c2UnKVxyXG4gICAgcHJpdmF0ZSBfdXNlRWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XHJcblxyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlciA9IDI0O1xyXG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXIgPSAyNDtcclxuICAgIHByaXZhdGUgX2NvbG9yOiBzdHJpbmcgPSAnIzAwMDAwMCc7XHJcbiAgICBwcml2YXRlIF9zaGFkb3dMZXZlbDogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZU5hbWUoKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVXaWR0aCgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUhlaWdodCgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbG9yKCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlU2hhZG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlTmFtZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fbmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLl91c2VFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgYC9hc3NldHMvaWNvbnMuc3ZnIyR7dGhpcy5fbmFtZX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlV2lkdGgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3dpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3RoaXMuX3dpZHRofXB4YDtcclxuICAgICAgICAgICAgdGhpcy5fc3ZnRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB0aGlzLl93aWR0aC50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlSGVpZ2h0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke3RoaXMuX2hlaWdodH1weGA7XHJcbiAgICAgICAgICAgIHRoaXMuX3N2Z0VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHRoaXMuX2hlaWdodC50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlQ29sb3IoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLl9oZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICB0aGlzLl9zdmdFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5fY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVTaGFkb3coKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NoYWRvd0xldmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N2Z0VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYG1zZGEtc2hhZG93LSR7dGhpcy5fc2hhZG93TGV2ZWx9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TVNEQUljb259IGZyb20gJy4uL2ljb24vaWNvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXNkYS1wbGF0ZS1pY29uJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9wbGF0ZS1pY29uLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcGxhdGUtaWNvbi5zY3NzJ10sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAncm9sZSc6ICdpbWcnLFxyXG4gICAgICAgICdjbGFzcyc6ICdtc2RhLXBsYXRlLWljb24nXHJcbiAgICB9LFxyXG4gICAgZXhwb3J0QXM6ICdNU0RBUGxhdGVJY29uJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1TREFQbGF0ZUljb24gaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBJbnB1dCgnbmFtZScpXHJcbiAgICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZU5hbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoJ3dpZHRoJylcclxuICAgIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fd2lkdGggPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl91cGRhdGVXaWR0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgnaGVpZ2h0JylcclxuICAgIHNldCBoZWlnaHQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUhlaWdodCgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgnY29sb3InKVxyXG4gICAgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbG9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCdiYWNrZ3JvdW5kJylcclxuICAgIHNldCBiYWNrZ3JvdW5kKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlQmFja2dyb3VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgnc2hhZG93JylcclxuICAgIHNldCBzaGFkb3codmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NoYWRvdyA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVNoYWRvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgndHlwZScpXHJcbiAgICBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVR5cGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBAVmlld0NoaWxkKCd3cmFwcGVyJylcclxuICAgIHByaXZhdGUgX3dyYXBwZXJSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2JhY2tncm91bmQnKVxyXG4gICAgcHJpdmF0ZSBfYmFja2dyb3VuZFJlZjogTVNEQUljb247XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnaWNvbicpXHJcbiAgICBwcml2YXRlIF9pY29uUmVmOiBNU0RBSWNvbjtcclxuXHJcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyID0gMjQ7XHJcbiAgICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlciA9IDI0O1xyXG4gICAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZyA9ICcjRkZGRkZGJztcclxuICAgIHByaXZhdGUgX2JhY2tncm91bmQ6IHN0cmluZyA9ICcjRUE4NTREJztcclxuICAgIHByaXZhdGUgX3NoYWRvdzogbnVtYmVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3R5cGU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZU5hbWUoKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVXaWR0aCgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUhlaWdodCgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbG9yKCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlQmFja2dyb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVNoYWRvdygpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVR5cGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVOYW1lKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9uYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ljb25SZWYubmFtZSA9IHRoaXMuX25hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZVdpZHRoKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl93aWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl93cmFwcGVyUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSB0aGlzLl93aWR0aCArICdweCc7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhY2tncm91bmRSZWYud2lkdGggPSB0aGlzLl93aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5faWNvblJlZi53aWR0aCA9IHRoaXMuX3dpZHRoIC0gKHRoaXMuX3dpZHRoIC8gMyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZUhlaWdodCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5faGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dyYXBwZXJSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLl9oZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kUmVmLmhlaWdodCA9IHRoaXMuX2hlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5faWNvblJlZi5oZWlnaHQgPSB0aGlzLl9oZWlnaHQgLSAodGhpcy5faGVpZ2h0IC8gMyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZUNvbG9yKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9jb2xvcikge1xyXG4gICAgICAgICAgICB0aGlzLl9pY29uUmVmLmNvbG9yID0gdGhpcy5fY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZUJhY2tncm91bmQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2JhY2tncm91bmQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmFja2dyb3VuZFJlZi5jb2xvciA9IHRoaXMuX2JhY2tncm91bmQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZVNoYWRvdygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fc2hhZG93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhY2tncm91bmRSZWYuc2hhZG93ID0gdGhpcy5fc2hhZG93O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVUeXBlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl90eXBlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhY2tncm91bmRSZWYubmFtZSA9IHRoaXMuX3R5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gICAgRXZlbnRFbWl0dGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXNkYS1jYXJkLWJ1dHRvbicsXHJcbiAgICBleHBvcnRBczogJ01TREFDYXJkQnV0dG9uJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jYXJkLWJ1dHRvbi5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NhcmQtYnV0dG9uLnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnY2xhc3MnOiAnbXNkYS1jYXJkLWJ1dHRvbicsXHJcbiAgICAgICAgJyhjbGljayknOiAnaG9zdENsaWNrKCRldmVudCknXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNU0RBQ2FyZEJ1dHRvbiB7XHJcblxyXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcclxuXHJcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmcgPSAnaWNvbi00JztcclxuICAgIEBJbnB1dCgpIGljb25UeXBlOiBzdHJpbmcgPSAnc3F1YXJlJztcclxuICAgIEBJbnB1dCgpIGljb25Db2xvcjogc3RyaW5nID0gJyNGRkZGRkYnO1xyXG4gICAgQElucHV0KCkgaWNvbkJhY2tncm91bmRDb2xvcjogc3RyaW5nID0gJyNFQTg1NEQnO1xyXG5cclxuICAgIEBJbnB1dCgpIGRyYWdnYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBob3N0Q2xpY2soZTogRXZlbnQpIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbkNsaWNrLmVtaXQoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUhhbmRsZXJDbGljayhlOiBFdmVudCkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIENvbXBvbmVudCxcclxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgQWZ0ZXJWaWV3SW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBqUXVlcnk6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtc2RhLWNhcmQtYnV0dG9ucy1jb250YWluZXInLFxyXG4gICAgZXhwb3J0QXM6ICdNU0RBQ2FyZEJ1dHRvbnNDb250YWluZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtYnV0dG9ucy1jb250YWluZXIuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jYXJkLWJ1dHRvbnMtY29udGFpbmVyLnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAncm9sZSc6ICdidXR0b24nLFxyXG4gICAgICAgICdjbGFzcyc6ICdtc2RhLWNhcmQtYnV0dG9ucy1jb250YWluZXInXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNU0RBQ2FyZEJ1dHRvbnNDb250YWluZXIgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgICBASW5wdXQoKSByb3c6IG51bWJlciA9IDM7XHJcbiAgICBASW5wdXQoKSBjb2x1bW46IG51bWJlciA9IDM7XHJcblxyXG4gICAgQElucHV0KCkgZHJhZ0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBASW5wdXQoKSBkYXRhU291cmNlOiBhbnkgPSBbXTtcclxuXHJcbiAgICBAT3V0cHV0KCkgc29ydHVwZGF0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgYnV0dG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgICBnZXQgZ3JpZFRlbXBsYXRlQ29sdW1ucygpIHtcclxuICAgICAgICByZXR1cm4gJzFmciAnLnJlcGVhdCh0aGlzLmNvbHVtbikudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5kcmFnRW5hYmxlZCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5tc2RhLWNhcmQtYnV0dG9ucy1jb250YWluZXItaW5uZXInLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50KS5zb3J0YWJsZSh7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGU6ICcubXNkYS1jYXJkLWJ1dHRvbi1tb3ZlLWhhbmRsZXInXHJcbiAgICAgICAgICAgIH0pLmJpbmQoJ3NvcnR1cGRhdGUnLCAoZXZlbnQsIHVpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnR1cGRhdGUuZW1pdCh7IGV2ZW50LCB1aSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gICAgRXZlbnRFbWl0dGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXNkYS1iYW5uZXItYnV0dG9uJyxcclxuICAgIGV4cG9ydEFzOiAnTVNEQUJhbm5lckJ1dHRvbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYmFubmVyLWJ1dHRvbi5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2Jhbm5lci1idXR0b24uc2NzcyddLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgaG9zdDogeyAnY2xhc3MnOiAnbXNkYS1iYW5uZXItYnV0dG9uIG1zZGEtYm9keS0yJyB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNU0RBQmFubmVyQnV0dG9uIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEljb24gbmFtZVxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbWFnZSBVUkxcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgaW1hZ2U6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJhbm5lciB0aXRsZVxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW1hZ2UgdGV4dFxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXRlIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSBkYXRlOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJY29uIGFuZCBcInJlYWQgbW9yZVwiIHRleHQgY29sb3JcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgY29sb3I6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlYWQgbW9yZSB0ZXh0XHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIHJlYWRNb3JlVGV4dDogc3RyaW5nID0gJ8OhwoPClcOhwoPCoMOhwoPCqsOhwoPCmsOhwoPCkMOhwoPCkyAuLi4nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnV0dG9uIGNsaWNrIGV2ZW50IGVtaXR0ZXJcclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXNkYS1wYWdpbmF0b3InLFxyXG4gICAgZXhwb3J0QXM6ICdNU0RBUGFnaW5hdG9yJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmF0b3IuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9wYWdpbmF0b3Iuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNU0RBUGFnaW5hdG9yIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgpIGl0ZW1zUGVyUGFnZTogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgdG90YWxJdGVtczogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgaXRlbXNQZXJQYWdlQ29uZmlnOiBudW1iZXJbXTtcclxuXHJcbiAgICBAT3V0cHV0KCkgcGFnZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgcGFnZUNvbmZpZ0NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY3VycmVudFBhZ2VJbmRleDogbnVtYmVyID0gMTtcclxuICAgIG51bWJlck9mVG90YWxQYWdlczogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX3BhZ2VFdmVudERhdGE6IG9iamVjdCA9IHtcclxuICAgICAgICBwYWdlSW5kZXg6IHRoaXMuY3VycmVudFBhZ2VJbmRleCxcclxuICAgICAgICBwYWdlU2l6ZTogbnVsbFxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZlRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodGhpcy50b3RhbEl0ZW1zIC8gdGhpcy5pdGVtc1BlclBhZ2UpO1xyXG4gICAgICAgIHRoaXMuX3BhZ2VFdmVudERhdGFbJ3BhZ2VTaXplJ10gPSB0aGlzLml0ZW1zUGVyUGFnZUNvbmZpZ1swXTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmV4dFBhZ2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2VJbmRleCA8IHRoaXMubnVtYmVyT2ZUb3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhZ2VFdmVudERhdGFbJ3BhZ2VJbmRleCddID0gKyt0aGlzLmN1cnJlbnRQYWdlSW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZS5lbWl0KHRoaXMuX3BhZ2VFdmVudERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91c1BhZ2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2VJbmRleCA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGFnZUV2ZW50RGF0YVsncGFnZUluZGV4J10gPSAtLXRoaXMuY3VycmVudFBhZ2VJbmRleDtcclxuICAgICAgICAgICAgdGhpcy5wYWdlLmVtaXQodGhpcy5fcGFnZUV2ZW50RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUb1RoZVJlcXVlc3RlZFBhZ2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2VJbmRleCA+PSAxICYmIHRoaXMuY3VycmVudFBhZ2VJbmRleCA8PSB0aGlzLm51bWJlck9mVG90YWxQYWdlcykge1xyXG4gICAgICAgICAgICB0aGlzLl9wYWdlRXZlbnREYXRhWydwYWdlSW5kZXgnXSA9IHRoaXMuY3VycmVudFBhZ2VJbmRleDtcclxuICAgICAgICAgICAgdGhpcy5wYWdlLmVtaXQodGhpcy5fcGFnZUV2ZW50RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0aW9uQ2hhbmdlKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBwYXJzZUludChlLnNyY0VsZW1lbnRbJ3ZhbHVlJ10sIDEwKTtcclxuICAgICAgICB0aGlzLl9wYWdlRXZlbnREYXRhWydwYWdlU2l6ZSddID0gdGhpcy5pdGVtc1BlclBhZ2U7XHJcblxyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZUb3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRoaXMudG90YWxJdGVtcyAvIHRoaXMuaXRlbXNQZXJQYWdlKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYWdlLmVtaXQodGhpcy5fcGFnZUV2ZW50RGF0YSk7XHJcbiAgICAgICAgdGhpcy5wYWdlQ29uZmlnQ2hhbmdlLmVtaXQodGhpcy5pdGVtc1BlclBhZ2UpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXNkYS1tZW51LWJ1dHRvbicsXHJcbiAgICBleHBvcnRBczogJ01TREFNZW51QnV0dG9uJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9tZW51LWJ1dHRvbi5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL21lbnUtYnV0dG9uLnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1TREFNZW51QnV0dG9uIHtcclxuXHJcbiAgICBASW5wdXQoJ2FjdGl2ZScpIGFjdGl2ZTogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgndGV4dCcpIHRleHQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgnbm90aWZDb3VudGVyJykgbm90aWZDb3VudGVyOiBudW1iZXI7XHJcblxyXG4gICAgQE91dHB1dCgpIGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBvbkNsaWNrKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5jbGljay5uZXh0KGUpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXNkYS1idXR0b24nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIHR5cGUgPSAnYnV0dG9uJztcclxuICAgIEBJbnB1dCgpIGJnQ29sb3I6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnd2hpdGUnO1xyXG4gICAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzaG93TG9hZGluZzogQm9vbGVhbjtcclxuXHJcblxyXG4gICAgQE91dHB1dCgpIGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLmNsaWNrLmVtaXQoZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXNkYS1idXR0b24tcm91bmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24tcm91bmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi1yb3VuZC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25Sb3VuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdHlwZSA9ICdidXR0b24nO1xyXG4gIEBJbnB1dCgpIGJnQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgb25DbGljayhlOiBFdmVudCkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuY2xpY2suZW1pdChlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBIb3N0TGlzdGVuZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtc2RhLXRvYXN0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90b2FzdC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3RvYXN0LnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBleHBvcnRBczogJ01TREFUb2FzJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1TREFUb2FzdCB7XHJcblxyXG4gICAgQElucHV0KCkgaHRtbDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgZGlzbWlzczogKCkgPT4gdm9pZDtcclxuXHJcbiAgICBAT3V0cHV0KCkgbGlua0NsaWNrOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKSBjbGljayhlOiBFdmVudCkge1xyXG4gICAgICAgIGlmICgoPEhUTUxFbGVtZW50PmUudGFyZ2V0KS5jbGFzc0xpc3QuY29udGFpbnMoJ21zZGEtbGluaycpKSB0aGlzLmxpbmtDbGljay5lbWl0KGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgSW5qZWN0YWJsZSxcclxuICAgIEluamVjdG9yLFxyXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gICAgQXBwbGljYXRpb25SZWYsXHJcbiAgICBDb21wb25lbnRSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1TREFUb2FzdCB9IGZyb20gJy4vdG9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1TREFUb2FzdENvbmZpZyB7XHJcbiAgICBvbkNsb3NlPz0gKCkgPT4geyB9O1xyXG4gICAgbGlua0NsaWNrPz0gKGU6IEV2ZW50KSA9PiB7IH07XHJcbiAgICBjbG9zZUFmdGVyPz0gMzAwMDtcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1TREFUb2FzdFNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgX2NvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPE1TREFUb2FzdD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgICAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcclxuICAgICkgeyB9XHJcblxyXG4gICAgc2hvd0h0bWwoaHRtbDogc3RyaW5nLCB1c2VyQ29uZmlnPzogTVNEQVRvYXN0Q29uZmlnKSB7XHJcbiAgICAgICAgY29uc3QgY29uZmlnID0geyAuLi5uZXcgTVNEQVRvYXN0Q29uZmlnKCksIC4uLnVzZXJDb25maWcgfTtcclxuXHJcbiAgICAgICAgLy8gMS4gQ3JlYXRlIGEgY29tcG9uZW50IHJlZmVyZW5jZSBmcm9tIHRoZSBjb21wb25lbnRcclxuICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxyXG4gICAgICAgICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoTVNEQVRvYXN0KVxyXG4gICAgICAgICAgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xyXG5cclxuICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UuaHRtbCA9IGh0bWw7XHJcbiAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlLmxpbmtDbGljay5zdWJzY3JpYmUoKGU6IEV2ZW50KSA9PiBjb25maWcubGlua0NsaWNrKGUpKTtcclxuICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UuZGlzbWlzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlLmxpbmtDbGljay51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmFwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX2NvbXBvbmVudFJlZi5ob3N0Vmlldyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIGNvbmZpZy5vbkNsb3NlKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gMi4gQXR0YWNoIGNvbXBvbmVudCB0byB0aGUgYXBwUmVmIHNvIHRoYXQgaXQncyBpbnNpZGUgdGhlIG5nIGNvbXBvbmVudCB0cmVlXHJcbiAgICAgICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyh0aGlzLl9jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG5cclxuICAgICAgICAvLyAzLiBHZXQgRE9NIGVsZW1lbnQgZnJvbSBjb21wb25lbnRcclxuICAgICAgICBjb25zdCBkb21FbGVtID0gKHRoaXMuX2NvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55PilcclxuICAgICAgICAgICAgLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgICAgLy8gNC4gQXBwZW5kIERPTSBlbGVtZW50IHRvIHRoZSBib2R5XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21FbGVtKTtcclxuXHJcbiAgICAgICAgLy8gNS4gV2FpdCBzb21lIHRpbWUgYW5kIHJlbW92ZSBpdCBmcm9tIHRoZSBjb21wb25lbnQgdHJlZSBhbmQgZnJvbSB0aGUgRE9NXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UuZGlzbWlzcygpLCBjb25maWcuY2xvc2VBZnRlcik7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7YW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtc2RhLW1vZHVsZS1jYXJkJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9tb2R1bGUtY2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9tb2R1bGUtY2FyZC5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgYW5pbWF0aW9uczogW1xyXG4gICAgICAgIHRyaWdnZXIoJ2ZsaXBTdGF0ZScsIFtcclxuICAgICAgICAgICAgc3RhdGUoJ2FjdGl2ZScsIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZVgoMTgwZGVnKSdcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGVYKDApJyxcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBhbmltYXRlKCc1MDBtcyBlYXNlLW91dCcpKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgYW5pbWF0ZSgnNTAwbXMgZWFzZS1pbicpKVxyXG4gICAgICAgIF0pXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2R1bGVDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIC8qKlxyXG4gICAgICogSWNvbiBuYW1lXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEljb24gY29sb3JcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgY29sb3I6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIHRpdGxlXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB3YXJuaW5nXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIHdhcm46IEJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjYXJkIGNsaWNrIGV2ZW50IGVtaXR0ZXJcclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlbW92ZSBpY29uIGNsaWNrIGV2ZW50IGVtaXR0ZXJcclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlbW92ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgZmxpcDogc3RyaW5nID0gJ2luYWN0aXZlJztcclxuICAgIGlzSG92ZXJlZDogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBFdmVudCkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5jbGljay5lbWl0KGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVtb3ZlKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnJlbW92ZS5lbWl0KGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUZsaXAoZTogRXZlbnQpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuZmxpcCA9ICh0aGlzLmZsaXAgPT0gJ2luYWN0aXZlJykgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSc7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZUVudGVyKCRldmVudCkge1xyXG4gICAgICAgIHRoaXMuaXNIb3ZlcmVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZsaXBCYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZUxlYXZlKCRldmVudCkge1xyXG4gICAgICAgIHRoaXMuaXNIb3ZlcmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5mbGlwQmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZsaXBCYWNrKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNIb3ZlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZsaXAgPSAnaW5hY3RpdmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtc2RhLWljb24tbGFiZWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ljb24tbGFiZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vaWNvbi1sYWJlbC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJY29uTGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJY29uIG5hbWVcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29sb3JcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgY29sb3I6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIHRleHRcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2xpY2sgZXZlbnQgZW1pdHRlclxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVtb3ZlIGljb24gY2xpY2sgZXZlbnQgZW1pdHRlclxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcmVtb3ZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLmNsaWNrLmVtaXQoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZW1vdmUoZTogRXZlbnQpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlLmVtaXQoZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21zZGEtZm9ybS1maWVsZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm0tZmllbGQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Zvcm0tZmllbGQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcclxuICBASW5wdXQoKSBpc1JlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaGludDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZjTmFtZTogc3RyaW5nID0gbnVsbDtcclxuICBASW5wdXQoKSBmR3JvdXA6IEZvcm1Hcm91cCA9IG51bGw7XHJcblxyXG4gIC8vIEBJbnB1dCgpIHR5cGUgPSAnYnV0dG9uJztcclxuICAvLyBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xyXG4gIC8vIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIHByZWZpeEljb246IHN0cmluZztcclxuICBASW5wdXQoKSBzdWZmaXhJY29uOiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKSBpbnB1dDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuXHJcbiAgb25JbnB1dChlOiBFdmVudCkge1xyXG4gICAgdGhpcy5pbnB1dC5lbWl0KGUpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXNkYS1ob3Jpem9udGFsLWRpdmlkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ob3Jpem9udGFsLWRpdmlkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2hvcml6b250YWwtZGl2aWRlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb3Jpem9udGFsRGl2aWRlckNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuLy8gQW5ndWxhciBNYXRlcmlhbCBtb2R1bGVcclxuaW1wb3J0IHtNYXRNb2R1bGV9IGZyb20gJy4vbWF0Lm1vZHVsZSc7XHJcblxyXG4vLyBtc2RhIGNvbXBvbmVudHNcclxuaW1wb3J0IHtNU0RBSWNvbn0gZnJvbSAnLi9pY29uL2ljb24nO1xyXG5pbXBvcnQge01TREFQbGF0ZUljb259IGZyb20gJy4vcGxhdGUtaWNvbi9wbGF0ZS1pY29uJztcclxuaW1wb3J0IHtNU0RBQ2FyZEJ1dHRvbn0gZnJvbSAnLi9jYXJkLWJ1dHRvbi9jYXJkLWJ1dHRvbic7XHJcbmltcG9ydCB7TVNEQUNhcmRCdXR0b25zQ29udGFpbmVyfSBmcm9tICcuL2NhcmQtYnV0dG9uL2NhcmQtYnV0dG9ucy1jb250YWluZXInO1xyXG5pbXBvcnQge01TREFCYW5uZXJCdXR0b259IGZyb20gJy4vYmFubmVyLWJ1dHRvbi9iYW5uZXItYnV0dG9uJztcclxuaW1wb3J0IHtNU0RBUGFnaW5hdG9yfSBmcm9tICcuL3BhZ2luYXRvci9wYWdpbmF0b3InO1xyXG5pbXBvcnQge01TREFNZW51QnV0dG9ufSBmcm9tICcuL21lbnUtYnV0dG9uL21lbnUtYnV0dG9uJztcclxuaW1wb3J0IHtCdXR0b25Db21wb25lbnR9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge0J1dHRvblJvdW5kQ29tcG9uZW50fSBmcm9tICcuL2J1dHRvbi1yb3VuZC9idXR0b24tcm91bmQuY29tcG9uZW50JztcclxuaW1wb3J0IHtNU0RBVG9hc3R9IGZyb20gJy4vdG9hc3QvdG9hc3QnO1xyXG5pbXBvcnQge01TREFUb2FzdFNlcnZpY2V9IGZyb20gJy4vdG9hc3QvdG9hc3Quc2VydmljZSc7XHJcbmltcG9ydCB7TW9kdWxlQ2FyZENvbXBvbmVudH0gZnJvbSAnLi9tb2R1bGUtY2FyZC9tb2R1bGUtY2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0ljb25MYWJlbENvbXBvbmVudH0gZnJvbSAnLi9pY29uLWxhYmVsL2ljb24tbGFiZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtGb3JtRmllbGRDb21wb25lbnR9IGZyb20gJy4vZm9ybS1maWVsZC9mb3JtLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SG9yaXpvbnRhbERpdmlkZXJDb21wb25lbnR9IGZyb20gJy4vaG9yaXpvbnRhbC1kaXZpZGVyL2hvcml6b250YWwtZGl2aWRlci5jb21wb25lbnQnO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgLy8gbXNkYSBjb21wb25lbnRzXHJcbiAgICBNU0RBSWNvbixcclxuICAgIE1TREFQbGF0ZUljb24sXHJcbiAgICBNU0RBQ2FyZEJ1dHRvbixcclxuICAgIE1TREFDYXJkQnV0dG9uc0NvbnRhaW5lcixcclxuICAgIE1TREFCYW5uZXJCdXR0b24sXHJcbiAgICBNU0RBUGFnaW5hdG9yLFxyXG4gICAgTVNEQU1lbnVCdXR0b24sXHJcbiAgICBNU0RBVG9hc3QsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICBCdXR0b25Sb3VuZENvbXBvbmVudCxcclxuICAgIE1vZHVsZUNhcmRDb21wb25lbnQsXHJcbiAgICBJY29uTGFiZWxDb21wb25lbnQsXHJcbiAgICBGb3JtRmllbGRDb21wb25lbnQsXHJcbiAgICBIb3Jpem9udGFsRGl2aWRlckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cclxuICAgIE1hdE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgLy8gbXNkYSBjb21wb25lbnRzXHJcbiAgICBNU0RBSWNvbixcclxuICAgIE1TREFQbGF0ZUljb24sXHJcbiAgICBNU0RBQ2FyZEJ1dHRvbixcclxuICAgIE1TREFDYXJkQnV0dG9uc0NvbnRhaW5lcixcclxuICAgIE1TREFCYW5uZXJCdXR0b24sXHJcbiAgICBNU0RBUGFnaW5hdG9yLFxyXG4gICAgTVNEQU1lbnVCdXR0b24sXHJcbiAgICBNU0RBVG9hc3QsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICBCdXR0b25Sb3VuZENvbXBvbmVudCxcclxuICAgIE1vZHVsZUNhcmRDb21wb25lbnQsXHJcbiAgICBJY29uTGFiZWxDb21wb25lbnQsXHJcbiAgICBGb3JtRmllbGRDb21wb25lbnQsXHJcbiAgICBIb3Jpem9udGFsRGl2aWRlckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBNU0RBVG9hc3RcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgTVNEQVRvYXN0U2VydmljZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJNc2RhTW9kdWxlIHtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMkJBO0tBc0RDOztnQkF0REEsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRTs7d0JBRUwsWUFBWTs7d0JBR1osZUFBZTt3QkFDZixjQUFjO3dCQUNkLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLGNBQWM7d0JBQ2Qsa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFD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