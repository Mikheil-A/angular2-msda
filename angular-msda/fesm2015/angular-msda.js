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
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class MatModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class MSDAIcon {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class MSDAPlateIcon {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this._width = 24;
        this._height = 24;
        this._color = '#FFFFFF';
        this._background = '#EA854D';
        this._shadow = null;
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
    set background(value) {
        this._background = value;
        this._updateBackground();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set shadow(value) {
        this._shadow = value;
        this._updateShadow();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        this._type = value;
        this._updateType();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._updateName();
        this._updateWidth();
        this._updateHeight();
        this._updateColor();
        this._updateBackground();
        this._updateShadow();
        this._updateType();
    }
    /**
     * @return {?}
     */
    _updateName() {
        if (this._name) {
            this._iconRef.name = this._name;
        }
    }
    /**
     * @return {?}
     */
    _updateWidth() {
        if (this._width) {
            this._wrapperRef.nativeElement.style.width = this._width + 'px';
            this._backgroundRef.width = this._width;
            this._iconRef.width = this._width - (this._width / 3);
        }
    }
    /**
     * @return {?}
     */
    _updateHeight() {
        if (this._height) {
            this._wrapperRef.nativeElement.style.height = this._height + 'px';
            this._backgroundRef.height = this._height;
            this._iconRef.height = this._height - (this._height / 3);
        }
    }
    /**
     * @return {?}
     */
    _updateColor() {
        if (this._color) {
            this._iconRef.color = this._color;
        }
    }
    /**
     * @return {?}
     */
    _updateBackground() {
        if (this._background) {
            this._backgroundRef.color = this._background;
        }
    }
    /**
     * @return {?}
     */
    _updateShadow() {
        if (this._shadow) {
            this._backgroundRef.shadow = this._shadow;
        }
    }
    /**
     * @return {?}
     */
    _updateType() {
        if (this._type) {
            this._backgroundRef.name = this._type;
        }
    }
}
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
MSDAPlateIcon.ctorParameters = () => [
    { type: ElementRef }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class MSDACardButton {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class MSDACardButtonsContainer {
    /**
     * @param {?} _el
     */
    constructor(_el) {
        this._el = _el;
        this.row = 3;
        this.column = 3;
        this.dragEnabled = false;
        this.dataSource = [];
        this.sortupdate = new EventEmitter();
        this.buttonClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get gridTemplateColumns() {
        return '1fr '.repeat(this.column).trim();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.dragEnabled) {
            jQuery('.msda-card-buttons-container-inner', this._el.nativeElement).sortable({
                handle: '.msda-card-button-move-handler'
            }).bind('sortupdate', (event, ui) => {
                this.sortupdate.emit({ event, ui });
            });
        }
    }
}
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
MSDACardButtonsContainer.ctorParameters = () => [
    { type: ElementRef }
];
MSDACardButtonsContainer.propDecorators = {
    row: [{ type: Input }],
    column: [{ type: Input }],
    dragEnabled: [{ type: Input }],
    dataSource: [{ type: Input }],
    sortupdate: [{ type: Output }],
    buttonClick: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class MSDABannerButton {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class MSDAPaginator {
    constructor() {
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
    ngOnChanges() {
        this.numberOfTotalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this._pageEventData['pageSize'] = this.itemsPerPageConfig[0];
    }
    /**
     * @return {?}
     */
    nextPage() {
        if (this.currentPageIndex < this.numberOfTotalPages) {
            this._pageEventData['pageIndex'] = ++this.currentPageIndex;
            this.page.emit(this._pageEventData);
        }
    }
    /**
     * @return {?}
     */
    previousPage() {
        if (this.currentPageIndex > 1) {
            this._pageEventData['pageIndex'] = --this.currentPageIndex;
            this.page.emit(this._pageEventData);
        }
    }
    /**
     * @return {?}
     */
    moveToTheRequestedPage() {
        if (this.currentPageIndex >= 1 && this.currentPageIndex <= this.numberOfTotalPages) {
            this._pageEventData['pageIndex'] = this.currentPageIndex;
            this.page.emit(this._pageEventData);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onSelectionChange(e) {
        this.itemsPerPage = parseInt(e.srcElement['value'], 10);
        this._pageEventData['pageSize'] = this.itemsPerPage;
        this.numberOfTotalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.page.emit(this._pageEventData);
        this.pageConfigChange.emit(this.itemsPerPage);
    }
}
MSDAPaginator.decorators = [
    { type: Component, args: [{
                selector: 'msda-paginator',
                exportAs: 'MSDAPaginator',
                template: "<div id=\"container\" class=\"msda-body-2\">\r\n    <span>\u10E1\u10E3\u10DA \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D4\u10D1\u10D8: {{totalItems}}</span>\r\n\r\n    <div id=\"right-end\">\r\n        <div id=\"select-number-of-records\">\r\n            <span>\u10D2\u10D5\u10D4\u10E0\u10D3\u10D6\u10D4 \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D4\u10D1\u10D8\u10E1 \u10E0\u10D0\u10DD\u10D3\u10D4\u10DC\u10DD\u10D1\u10D0: </span>\r\n\r\n            <select (change)=\"onSelectionChange($event)\" class=\"msda-body-2\">\r\n                <option *ngFor=\"let item of itemsPerPageConfig\" [value]=\"item\">\r\n                    {{item}}\r\n                </option>\r\n            </select>\r\n        </div>\r\n\r\n        <div id=\"paging-navigation\">\r\n            <msda-icon name=\"chevron_left\"\r\n                       [color]=\"currentPageIndex <= 1? '#CCCEE0' : '#000000'\"\r\n                       [ngStyle]=\"{'cursor': currentPageIndex === 1? 'not-allowed' : 'pointer'}\"\r\n                       (click)=\"previousPage()\">\r\n            </msda-icon>\r\n\r\n            <div id=\"current-page-index-indicator\">\r\n                <input class=\"msda-body-2\" *ngIf=\"numberOfTotalPages > 2; else withoutInputField\"\r\n                       type=\"number\"\r\n                       [(ngModel)]=\"currentPageIndex\"\r\n                       (input)=\"moveToTheRequestedPage()\">\r\n                <ng-template #withoutInputField>\r\n                    <span>{{currentPageIndex}}</span>\r\n                </ng-template>\r\n            </div>\r\n            \r\n            <div id=\"total-number-of-pages\" class=\"msda-body-2\"> - {{numberOfTotalPages}}</div>\r\n\r\n            <msda-icon name=\"chevron_right\"\r\n                       [color]=\"currentPageIndex >= numberOfTotalPages? '#CCCEE0' : '#000000'\"\r\n                       [ngStyle]=\"{'cursor': currentPageIndex === numberOfTotalPages? 'not-allowed' : 'pointer'}\"\r\n                       (click)=\"nextPage()\">\r\n            </msda-icon>\r\n        </div>\r\n    </div>\r\n</div>\r\n",
                styles: [".msda-elevation-z2{box-shadow:0 2px 2px rgba(0,0,0,.2)}.msda-elevation-z4{box-shadow:0 4px 4px rgba(0,0,0,.1)}.msda-elevation-z4-underline{box-shadow:0 1px #e0e0e0,0 4px 4px rgba(0,0,0,.1)}.msda-border-top{box-shadow:0 -1px #e0e0e0}.msda-border-bottom{box-shadow:0 1px #e0e0e0}.msda-sidebar-element-hover{box-shadow:0 1px 1px rgba(0,0,0,.1)}.msda-body-1,.msda-body-1-bold,.msda-body-2,.msda-body-2-bold{color:#333;font-family:'BPG DejaVu Sans';letter-spacing:.1em}.msda-body-1 a,.msda-body-1-bold a,.msda-body-2 a,.msda-body-2-bold a{color:#3966a3}.msda-body-1 a:focus,.msda-body-1 a:hover,.msda-body-1-bold a:focus,.msda-body-1-bold a:hover,.msda-body-2 a:focus,.msda-body-2 a:hover,.msda-body-2-bold a:focus,.msda-body-2-bold a:hover{color:#777}.msda-body-1,.msda-body-1-bold{font-size:13px;line-height:21px}.msda-body-2,.msda-body-2-bold{font-size:11px;line-height:20px}.msda-body-1-bold,.msda-body-2-bold{font-weight:700}.msda-display-1,.msda-display-2,.msda-display-3{color:#333}.msda-display-1{font-size:15px;font-family:'BPG DejaVu Sans';font-weight:700;line-height:26px}.msda-display-1 a{color:#3966a3}.msda-display-1 a:focus,.msda-display-1 a:hover{color:#777}.msda-display-2,.msda-display-3{font-family:'BPG DejaVu Sans Caps Web';text-transform:uppercase}.msda-display-2{font-size:13px}.msda-display-3{font-size:11px;letter-spacing:.1em}#container{display:flex;flex-direction:row;align-items:center;justify-content:space-between;background-color:#fff;box-shadow:0 1px 0 #e0e0e0;padding:8px 24px;color:#777}#container #right-end{display:flex;flex-direction:row;align-items:center}#container #right-end #select-number-of-records select{border:none;color:#777}#container #right-end #paging-navigation{display:flex;flex-direction:row;align-items:center;margin-left:70px}#container #right-end #paging-navigation msda-icon{cursor:pointer}#container #right-end #paging-navigation #current-page-index-indicator{margin:0 0 0 30px;font-weight:700}#container #right-end #paging-navigation input[type=number]{background-color:#f7f7fa;border-radius:2px;border:none;padding:10px 12px;box-sizing:border-box;width:64px;font-weight:700}#container #right-end #paging-navigation input[type=number]::-webkit-inner-spin-button,#container #right-end #paging-navigation input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}#container #right-end #paging-navigation #total-number-of-pages{margin:0 30px 0 4px;color:#777}"]
            }] }
];
/** @nocollapse */
MSDAPaginator.ctorParameters = () => [];
MSDAPaginator.propDecorators = {
    itemsPerPage: [{ type: Input }],
    totalItems: [{ type: Input }],
    itemsPerPageConfig: [{ type: Input }],
    page: [{ type: Output }],
    pageConfigChange: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class MSDAMenuButton {
    constructor() {
        this.click = new EventEmitter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        event.stopPropagation();
        this.click.next(e);
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ButtonComponent {
    constructor() {
        this.type = 'button';
        this.disabled = false;
        this.click = new EventEmitter();
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
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'msda-button',
                template: "<button class=\"button\" [type]=\"type\" [style.backgroundColor]=\"color\" [disabled]=\"disabled\" (click)=\"onClick($event)\">\r\n  <span class=\"loader\" *ngIf=\"showLoading\"></span>\r\n  <span class=\"content\">\r\n       <!-- icon -->\r\n    <span class=\"icon\">\r\n            <ng-content select=\"msda-icon\"></ng-content>\r\n        </span>\r\n    <!-- text -->\r\n    <span class=\"text\">\r\n            <ng-content select=\"span\"></ng-content>\r\n        </span>\r\n</span>\r\n</button>\r\n",
                styles: [".button{background-color:#212121;outline:0;border:none;border-radius:4px;color:#fff;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:145px;padding:0 36px;line-height:36px;font-size:14px;cursor:pointer;position:relative}.button .content{display:flex;align-items:center;justify-content:center}.button .content .icon ::ng-deep msda-icon{margin-right:8px;vertical-align:text-bottom}.button .content .text span{font-family:BPG DejaVu Sans Caps Web;font-size:11px;text-align:center;letter-spacing:.01em;color:#fff}::ng-deep .button:disabled{background-color:rgba(0,0,0,.12)!important;color:rgba(0,0,0,.38);cursor:default}.loader{position:absolute;top:0;bottom:0;left:5px;margin:auto;border:3px solid #f3f3f3;border-top:3px solid #3498db;border-radius:50%;width:18px;height:18px;-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    type: [{ type: Input }],
    color: [{ type: Input }],
    disabled: [{ type: Input }],
    showLoading: [{ type: Input }],
    click: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class MSDAToast {
    constructor() {
        this.linkClick = new EventEmitter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    click(e) {
        if (((/** @type {?} */ (e.target))).classList.contains('msda-link'))
            this.linkClick.emit(e);
    }
}
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
MSDAToast.ctorParameters = () => [];
MSDAToast.propDecorators = {
    html: [{ type: Input }],
    dismiss: [{ type: Input }],
    linkClick: [{ type: Output }],
    click: [{ type: HostListener, args: ['click', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class MSDAToastConfig {
    constructor() {
        this.onClose = () => { };
        this.linkClick = (e) => { };
        this.closeAfter = 3000;
    }
}
class MSDAToastService {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} appRef
     * @param {?} injector
     */
    constructor(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    /**
     * @param {?} html
     * @param {?=} userConfig
     * @return {?}
     */
    showHtml(html, userConfig) {
        /** @type {?} */
        const config = Object.assign({}, new MSDAToastConfig(), userConfig);
        // 1. Create a component reference from the component
        this._componentRef = this.componentFactoryResolver
            .resolveComponentFactory(MSDAToast)
            .create(this.injector);
        this._componentRef.instance.html = html;
        this._componentRef.instance.linkClick.subscribe((e) => config.linkClick(e));
        this._componentRef.instance.dismiss = () => {
            this._componentRef.instance.linkClick.unsubscribe();
            this.appRef.detachView(this._componentRef.hostView);
            this._componentRef.destroy();
            config.onClose();
        };
        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(this._componentRef.hostView);
        // 3. Get DOM element from component
        /** @type {?} */
        const domElem = (/** @type {?} */ (((/** @type {?} */ (this._componentRef.hostView)))
            .rootNodes[0]));
        // 4. Append DOM element to the body
        document.body.appendChild(domElem);
        // 5. Wait some time and remove it from the component tree and from the DOM
        setTimeout(() => this._componentRef.instance.dismiss(), config.closeAfter);
    }
}
MSDAToastService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MSDAToastService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ModuleCardComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class IconLabelComponent {
    constructor() {
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
}
IconLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'msda-icon-label',
                template: "<div class=\"icon-label\" (click)=\"onClick($event)\">\r\n    <div class=\"icon-label-content\">\r\n        <div class=\"icon\">\r\n            <msda-icon\r\n                [name]=\"icon\"\r\n                width=\"18\"\r\n                height=\"18\"\r\n                [color]=\"color\">\r\n            </msda-icon>\r\n        </div>\r\n        <div class=\"text\">\r\n            <span [style.color]=\"color\">{{text}}</span>\r\n        </div>\r\n        <div class=\"icon remove\">\r\n            <msda-icon\r\n                name=\"cancel_circle\"\r\n                width=\"18\"\r\n                height=\"18\"\r\n                color=\"gray\"\r\n                (click)=\"onRemove($event)\">\r\n            </msda-icon>\r\n        </div>\r\n    </div>\r\n</div>\r\n",
                styles: [".icon-label{width:100%;min-width:163px;padding:6px 9px;background:#fff;border:1px solid #e0e0e0;box-sizing:border-box;border-radius:16px;cursor:pointer}.icon-label .icon-label-content{display:flex;align-items:center;justify-content:space-between}.icon-label .icon-label-content .icon msda-icon{display:flex;vertical-align:middle}.icon-label .icon-label-content .icon.remove{cursor:pointer}.icon-label .icon-label-content .text{margin:0 9px;font-family:'BPG DejaVu Sans';font-size:11px;letter-spacing:.01em}"]
            }] }
];
/** @nocollapse */
IconLabelComponent.ctorParameters = () => [];
IconLabelComponent.propDecorators = {
    icon: [{ type: Input }],
    color: [{ type: Input }],
    text: [{ type: Input }],
    click: [{ type: Output }],
    remove: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class AngularMsdaModule {
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
                    ModuleCardComponent,
                    IconLabelComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
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
                    ModuleCardComponent,
                    IconLabelComponent
                ],
                entryComponents: [
                    MSDAToast
                ],
                providers: [
                    MSDAToastService
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { AngularMsdaModule, MSDABannerButton as ɵe, ButtonComponent as ɵi, MSDACardButton as ɵc, MSDACardButtonsContainer as ɵd, IconLabelComponent as ɵk, MSDAIcon as ɵa, MatModule as ɵl, MSDAMenuButton as ɵg, ModuleCardComponent as ɵj, MSDAPaginator as ɵf, MSDAPlateIcon as ɵb, MSDAToast as ɵh, MSDAToastService as ɵm };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1tc2RhLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyLW1zZGEvbGliL21hdC5tb2R1bGUudHMiLCJuZzovL2FuZ3VsYXItbXNkYS9saWIvaWNvbi9pY29uLnRzIiwibmc6Ly9hbmd1bGFyLW1zZGEvbGliL3BsYXRlLWljb24vcGxhdGUtaWNvbi50cyIsIm5nOi8vYW5ndWxhci1tc2RhL2xpYi9jYXJkLWJ1dHRvbi9jYXJkLWJ1dHRvbi50cyIsIm5nOi8vYW5ndWxhci1tc2RhL2xpYi9jYXJkLWJ1dHRvbi9jYXJkLWJ1dHRvbnMtY29udGFpbmVyLnRzIiwibmc6Ly9hbmd1bGFyLW1zZGEvbGliL2Jhbm5lci1idXR0b24vYmFubmVyLWJ1dHRvbi50cyIsIm5nOi8vYW5ndWxhci1tc2RhL2xpYi9wYWdpbmF0b3IvcGFnaW5hdG9yLnRzIiwibmc6Ly9hbmd1bGFyLW1zZGEvbGliL21lbnUtYnV0dG9uL21lbnUtYnV0dG9uLnRzIiwibmc6Ly9hbmd1bGFyLW1zZGEvbGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLW1zZGEvbGliL3RvYXN0L3RvYXN0LnRzIiwibmc6Ly9hbmd1bGFyLW1zZGEvbGliL3RvYXN0L3RvYXN0LnNlcnZpY2UudHMiLCJuZzovL2FuZ3VsYXItbXNkYS9saWIvbW9kdWxlLWNhcmQvbW9kdWxlLWNhcmQuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLW1zZGEvbGliL2ljb24tbGFiZWwvaWNvbi1sYWJlbC5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItbXNkYS9saWIvYW5ndWxhci1tc2RhLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3JlIG1vZHVsZXNcclxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuLy8gQW5ndWxhci1tYXRlcmlhbCBjb21wb25lbnRzIG1vZHVsZXNcclxuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuaW1wb3J0IHtNYXRFeHBhbnNpb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2V4cGFuc2lvbic7XHJcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xyXG5pbXBvcnQge01hdFRhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XHJcbmltcG9ydCB7TWF0UGFnaW5hdG9yTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xyXG5pbXBvcnQge01hdFNvcnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xyXG5pbXBvcnQge01hdFNsaWRlVG9nZ2xlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZS10b2dnbGUnO1xyXG5pbXBvcnQge01hdERpYWxvZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHtNYXRTaWRlbmF2TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcclxuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xyXG5pbXBvcnQge01hdFN0ZXBwZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3N0ZXBwZXInO1xyXG5pbXBvcnQge01hdERhdGVwaWNrZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xyXG5pbXBvcnQge01hdE5hdGl2ZURhdGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHtNYXRDaGlwc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xyXG5pbXBvcnQge01hdFRvb2x0aXBNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xyXG5pbXBvcnQge01hdE1lbnVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xyXG5pbXBvcnQge01hdFByb2dyZXNzQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIC8vIGNvcmUgbW9kdWxlc1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuXHJcbiAgICAgICAgLy8gYW5ndWxhci1tYXRlcmlhbCBjb21wb25lbnRzIG1vZHVsZXNcclxuICAgICAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICAgICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcclxuICAgICAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXHJcbiAgICAgICAgTWF0U2VsZWN0TW9kdWxlLFxyXG4gICAgICAgIE1hdFRhYmxlTW9kdWxlLFxyXG4gICAgICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcclxuICAgICAgICBNYXRTb3J0TW9kdWxlLFxyXG4gICAgICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG4gICAgICAgIE1hdERpYWxvZ01vZHVsZSxcclxuICAgICAgICBNYXRTaWRlbmF2TW9kdWxlLFxyXG4gICAgICAgIE1hdENoZWNrYm94TW9kdWxlLFxyXG4gICAgICAgIE1hdFN0ZXBwZXJNb2R1bGUsXHJcbiAgICAgICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuICAgICAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxyXG4gICAgICAgIE1hdENoaXBzTW9kdWxlLFxyXG4gICAgICAgIE1hdFRvb2x0aXBNb2R1bGUsXHJcbiAgICAgICAgTWF0TWVudU1vZHVsZSxcclxuICAgICAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW10sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgLy8gY29yZSBtb2R1bGVzXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG5cclxuICAgICAgICAvLyBhbmd1bGFyLW1hdGVyaWFsIGNvbXBvbmVudHMgbW9kdWxlc1xyXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgICAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgICAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuICAgICAgICBNYXRTZWxlY3RNb2R1bGUsXHJcbiAgICAgICAgTWF0VGFibGVNb2R1bGUsXHJcbiAgICAgICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxyXG4gICAgICAgIE1hdFNvcnRNb2R1bGUsXHJcbiAgICAgICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcbiAgICAgICAgTWF0RGlhbG9nTW9kdWxlLFxyXG4gICAgICAgIE1hdFNpZGVuYXZNb2R1bGUsXHJcbiAgICAgICAgTWF0Q2hlY2tib3hNb2R1bGUsXHJcbiAgICAgICAgTWF0U3RlcHBlck1vZHVsZSxcclxuICAgICAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxyXG4gICAgICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXHJcbiAgICAgICAgTWF0Q2hpcHNNb2R1bGUsXHJcbiAgICAgICAgTWF0VG9vbHRpcE1vZHVsZSxcclxuICAgICAgICBNYXRNZW51TW9kdWxlLFxyXG4gICAgICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRNb2R1bGUge1xyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXNkYS1pY29uJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9pY29uLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vaWNvbi5zY3NzJ10sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ3JvbGUnOiAnaW1nJyxcclxuICAgICAgICAnY2xhc3MnOiAnbXNkYS1pY29uJ1xyXG4gICAgfSxcclxuICAgIGV4cG9ydEFzOiAnTVNEQUljb24nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTVNEQUljb24gaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBJbnB1dCgnbmFtZScpXHJcbiAgICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZU5hbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoJ3dpZHRoJylcclxuICAgIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fd2lkdGggPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl91cGRhdGVXaWR0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgnaGVpZ2h0JylcclxuICAgIHNldCBoZWlnaHQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUhlaWdodCgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgnY29sb3InKVxyXG4gICAgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbG9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCdzaGFkb3cnKVxyXG4gICAgc2V0IHNoYWRvdyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2hhZG93TGV2ZWwgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl91cGRhdGVTaGFkb3coKTtcclxuICAgIH1cclxuXHJcbiAgICBAVmlld0NoaWxkKCdzdmcnKVxyXG4gICAgcHJpdmF0ZSBfc3ZnRWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XHJcblxyXG4gICAgQFZpZXdDaGlsZCgndXNlJylcclxuICAgIHByaXZhdGUgX3VzZUVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3dpZHRoOiBudW1iZXIgPSAyNDtcclxuICAgIHByaXZhdGUgX2hlaWdodDogbnVtYmVyID0gMjQ7XHJcbiAgICBwcml2YXRlIF9jb2xvcjogc3RyaW5nID0gJyMwMDAwMDAnO1xyXG4gICAgcHJpdmF0ZSBfc2hhZG93TGV2ZWw6IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl91cGRhdGVOYW1lKCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlV2lkdGgoKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVIZWlnaHQoKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVDb2xvcigpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVNoYWRvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZU5hbWUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX25hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fdXNlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnaHJlZicsIGAvYXNzZXRzL2ljb25zLnN2ZyMke3RoaXMuX25hbWV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZVdpZHRoKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl93aWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt0aGlzLl93aWR0aH1weGA7XHJcbiAgICAgICAgICAgIHRoaXMuX3N2Z0VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgdGhpcy5fd2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZUhlaWdodCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5faGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLl9oZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICB0aGlzLl9zdmdFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB0aGlzLl9oZWlnaHQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZUNvbG9yKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9jb2xvcikge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5faGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgdGhpcy5fc3ZnRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnZmlsbCcsIHRoaXMuX2NvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlU2hhZG93KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9zaGFkb3dMZXZlbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdmdFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBtc2RhLXNoYWRvdy0ke3RoaXMuX3NoYWRvd0xldmVsfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgU2ltcGxlQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01TREFJY29ufSBmcm9tICcuLi9pY29uL2ljb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21zZGEtcGxhdGUtaWNvbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGxhdGUtaWNvbi5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3BsYXRlLWljb24uc2NzcyddLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ3JvbGUnOiAnaW1nJyxcclxuICAgICAgICAnY2xhc3MnOiAnbXNkYS1wbGF0ZS1pY29uJ1xyXG4gICAgfSxcclxuICAgIGV4cG9ydEFzOiAnTVNEQVBsYXRlSWNvbicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNU0RBUGxhdGVJY29uIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBASW5wdXQoJ25hbWUnKVxyXG4gICAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl91cGRhdGVOYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCd3aWR0aCcpXHJcbiAgICBzZXQgd2lkdGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3dpZHRoID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlV2lkdGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoJ2hlaWdodCcpXHJcbiAgICBzZXQgaGVpZ2h0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9oZWlnaHQgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl91cGRhdGVIZWlnaHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoJ2NvbG9yJylcclxuICAgIHNldCBjb2xvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fY29sb3IgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl91cGRhdGVDb2xvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgnYmFja2dyb3VuZCcpXHJcbiAgICBzZXQgYmFja2dyb3VuZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fYmFja2dyb3VuZCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUJhY2tncm91bmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoJ3NoYWRvdycpXHJcbiAgICBzZXQgc2hhZG93KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zaGFkb3cgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl91cGRhdGVTaGFkb3coKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoJ3R5cGUnKVxyXG4gICAgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl91cGRhdGVUeXBlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnd3JhcHBlcicpXHJcbiAgICBwcml2YXRlIF93cmFwcGVyUmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdiYWNrZ3JvdW5kJylcclxuICAgIHByaXZhdGUgX2JhY2tncm91bmRSZWY6IE1TREFJY29uO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2ljb24nKVxyXG4gICAgcHJpdmF0ZSBfaWNvblJlZjogTVNEQUljb247XHJcblxyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlciA9IDI0O1xyXG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXIgPSAyNDtcclxuICAgIHByaXZhdGUgX2NvbG9yOiBzdHJpbmcgPSAnI0ZGRkZGRic7XHJcbiAgICBwcml2YXRlIF9iYWNrZ3JvdW5kOiBzdHJpbmcgPSAnI0VBODU0RCc7XHJcbiAgICBwcml2YXRlIF9zaGFkb3c6IG51bWJlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIF90eXBlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl91cGRhdGVOYW1lKCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlV2lkdGgoKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVIZWlnaHQoKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVDb2xvcigpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUJhY2tncm91bmQoKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVTaGFkb3coKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVUeXBlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlTmFtZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fbmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pY29uUmVmLm5hbWUgPSB0aGlzLl9uYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVXaWR0aCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fd2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fd3JhcHBlclJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gdGhpcy5fd2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kUmVmLndpZHRoID0gdGhpcy5fd2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuX2ljb25SZWYud2lkdGggPSB0aGlzLl93aWR0aCAtICh0aGlzLl93aWR0aCAvIDMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVIZWlnaHQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2hlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLl93cmFwcGVyUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5faGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgdGhpcy5fYmFja2dyb3VuZFJlZi5oZWlnaHQgPSB0aGlzLl9oZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2ljb25SZWYuaGVpZ2h0ID0gdGhpcy5faGVpZ2h0IC0gKHRoaXMuX2hlaWdodCAvIDMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVDb2xvcigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fY29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5faWNvblJlZi5jb2xvciA9IHRoaXMuX2NvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVCYWNrZ3JvdW5kKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9iYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhY2tncm91bmRSZWYuY29sb3IgPSB0aGlzLl9iYWNrZ3JvdW5kO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVTaGFkb3coKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NoYWRvdykge1xyXG4gICAgICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kUmVmLnNoYWRvdyA9IHRoaXMuX3NoYWRvdztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlVHlwZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fdHlwZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kUmVmLm5hbWUgPSB0aGlzLl90eXBlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICAgIEV2ZW50RW1pdHRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21zZGEtY2FyZC1idXR0b24nLFxyXG4gICAgZXhwb3J0QXM6ICdNU0RBQ2FyZEJ1dHRvbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2FyZC1idXR0b24uaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jYXJkLWJ1dHRvbi5zY3NzJ10sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ2NsYXNzJzogJ21zZGEtY2FyZC1idXR0b24nLFxyXG4gICAgICAgICcoY2xpY2spJzogJ2hvc3RDbGljaygkZXZlbnQpJ1xyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTVNEQUNhcmRCdXR0b24ge1xyXG5cclxuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nID0gJ2ljb24tNCc7XHJcbiAgICBASW5wdXQoKSBpY29uVHlwZTogc3RyaW5nID0gJ3NxdWFyZSc7XHJcbiAgICBASW5wdXQoKSBpY29uQ29sb3I6IHN0cmluZyA9ICcjRkZGRkZGJztcclxuICAgIEBJbnB1dCgpIGljb25CYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9ICcjRUE4NTREJztcclxuXHJcbiAgICBASW5wdXQoKSBkcmFnZ2FibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBPdXRwdXQoKSBidXR0b25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgaG9zdENsaWNrKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5idXR0b25DbGljay5lbWl0KGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVIYW5kbGVyQ2xpY2soZTogRXZlbnQpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEFmdGVyVmlld0luaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmRlY2xhcmUgY29uc3QgalF1ZXJ5OiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXNkYS1jYXJkLWJ1dHRvbnMtY29udGFpbmVyJyxcclxuICAgIGV4cG9ydEFzOiAnTVNEQUNhcmRCdXR0b25zQ29udGFpbmVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jYXJkLWJ1dHRvbnMtY29udGFpbmVyLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2FyZC1idXR0b25zLWNvbnRhaW5lci5zY3NzJ10sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ3JvbGUnOiAnYnV0dG9uJyxcclxuICAgICAgICAnY2xhc3MnOiAnbXNkYS1jYXJkLWJ1dHRvbnMtY29udGFpbmVyJ1xyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTVNEQUNhcmRCdXR0b25zQ29udGFpbmVyIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gICAgQElucHV0KCkgcm93OiBudW1iZXIgPSAzO1xyXG4gICAgQElucHV0KCkgY29sdW1uOiBudW1iZXIgPSAzO1xyXG5cclxuICAgIEBJbnB1dCgpIGRyYWdFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQElucHV0KCkgZGF0YVNvdXJjZTogYW55ID0gW107XHJcblxyXG4gICAgQE91dHB1dCgpIHNvcnR1cGRhdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZikgeyB9XHJcblxyXG4gICAgZ2V0IGdyaWRUZW1wbGF0ZUNvbHVtbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuICcxZnIgJy5yZXBlYXQodGhpcy5jb2x1bW4pLnRyaW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcubXNkYS1jYXJkLWJ1dHRvbnMtY29udGFpbmVyLWlubmVyJywgdGhpcy5fZWwubmF0aXZlRWxlbWVudCkuc29ydGFibGUoe1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlOiAnLm1zZGEtY2FyZC1idXR0b24tbW92ZS1oYW5kbGVyJ1xyXG4gICAgICAgICAgICB9KS5iaW5kKCdzb3J0dXBkYXRlJywgKGV2ZW50LCB1aSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0dXBkYXRlLmVtaXQoeyBldmVudCwgdWkgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICAgIEV2ZW50RW1pdHRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21zZGEtYmFubmVyLWJ1dHRvbicsXHJcbiAgICBleHBvcnRBczogJ01TREFCYW5uZXJCdXR0b24nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Jhbm5lci1idXR0b24uaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9iYW5uZXItYnV0dG9uLnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIGhvc3Q6IHsgJ2NsYXNzJzogJ21zZGEtYmFubmVyLWJ1dHRvbiBtc2RhLWJvZHktMicgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTVNEQUJhbm5lckJ1dHRvbiB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJY29uIG5hbWVcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW1hZ2UgVVJMXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIGltYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCYW5uZXIgdGl0bGVcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEltYWdlIHRleHRcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGF0ZSBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgZGF0ZTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWNvbiBhbmQgXCJyZWFkIG1vcmVcIiB0ZXh0IGNvbG9yXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWFkIG1vcmUgdGV4dFxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSByZWFkTW9yZVRleHQ6IHN0cmluZyA9ICfDocKDwpXDocKDwqDDocKDwqrDocKDwprDocKDwpDDocKDwpMgLi4uJztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJ1dHRvbiBjbGljayBldmVudCBlbWl0dGVyXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBidXR0b25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21zZGEtcGFnaW5hdG9yJyxcclxuICAgIGV4cG9ydEFzOiAnTVNEQVBhZ2luYXRvcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdG9yLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcGFnaW5hdG9yLnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTVNEQVBhZ2luYXRvciBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgICBASW5wdXQoKSBpdGVtc1BlclBhZ2U6IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIHRvdGFsSXRlbXM6IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIGl0ZW1zUGVyUGFnZUNvbmZpZzogbnVtYmVyW107XHJcblxyXG4gICAgQE91dHB1dCgpIHBhZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIHBhZ2VDb25maWdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGN1cnJlbnRQYWdlSW5kZXg6IG51bWJlciA9IDE7XHJcbiAgICBudW1iZXJPZlRvdGFsUGFnZXM6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9wYWdlRXZlbnREYXRhOiBvYmplY3QgPSB7XHJcbiAgICAgICAgcGFnZUluZGV4OiB0aGlzLmN1cnJlbnRQYWdlSW5kZXgsXHJcbiAgICAgICAgcGFnZVNpemU6IG51bGxcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZUb3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRoaXMudG90YWxJdGVtcyAvIHRoaXMuaXRlbXNQZXJQYWdlKTtcclxuICAgICAgICB0aGlzLl9wYWdlRXZlbnREYXRhWydwYWdlU2l6ZSddID0gdGhpcy5pdGVtc1BlclBhZ2VDb25maWdbMF07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5leHRQYWdlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlSW5kZXggPCB0aGlzLm51bWJlck9mVG90YWxQYWdlcykge1xyXG4gICAgICAgICAgICB0aGlzLl9wYWdlRXZlbnREYXRhWydwYWdlSW5kZXgnXSA9ICsrdGhpcy5jdXJyZW50UGFnZUluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2UuZW1pdCh0aGlzLl9wYWdlRXZlbnREYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJldmlvdXNQYWdlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlSW5kZXggPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhZ2VFdmVudERhdGFbJ3BhZ2VJbmRleCddID0gLS10aGlzLmN1cnJlbnRQYWdlSW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZS5lbWl0KHRoaXMuX3BhZ2VFdmVudERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9UaGVSZXF1ZXN0ZWRQYWdlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlSW5kZXggPj0gMSAmJiB0aGlzLmN1cnJlbnRQYWdlSW5kZXggPD0gdGhpcy5udW1iZXJPZlRvdGFsUGFnZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGFnZUV2ZW50RGF0YVsncGFnZUluZGV4J10gPSB0aGlzLmN1cnJlbnRQYWdlSW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZS5lbWl0KHRoaXMuX3BhZ2VFdmVudERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdGlvbkNoYW5nZShlOiBFdmVudCkge1xyXG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gcGFyc2VJbnQoZS5zcmNFbGVtZW50Wyd2YWx1ZSddLCAxMCk7XHJcbiAgICAgICAgdGhpcy5fcGFnZUV2ZW50RGF0YVsncGFnZVNpemUnXSA9IHRoaXMuaXRlbXNQZXJQYWdlO1xyXG5cclxuICAgICAgICB0aGlzLm51bWJlck9mVG90YWxQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnRvdGFsSXRlbXMgLyB0aGlzLml0ZW1zUGVyUGFnZSk7XHJcblxyXG4gICAgICAgIHRoaXMucGFnZS5lbWl0KHRoaXMuX3BhZ2VFdmVudERhdGEpO1xyXG4gICAgICAgIHRoaXMucGFnZUNvbmZpZ0NoYW5nZS5lbWl0KHRoaXMuaXRlbXNQZXJQYWdlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21zZGEtbWVudS1idXR0b24nLFxyXG4gICAgZXhwb3J0QXM6ICdNU0RBTWVudUJ1dHRvbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWVudS1idXR0b24uaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9tZW51LWJ1dHRvbi5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNU0RBTWVudUJ1dHRvbiB7XHJcblxyXG4gICAgQElucHV0KCdhY3RpdmUnKSBhY3RpdmU6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoJ3RleHQnKSB0ZXh0OiBzdHJpbmc7XHJcbiAgICBASW5wdXQoJ25vdGlmQ291bnRlcicpIG5vdGlmQ291bnRlcjogbnVtYmVyO1xyXG5cclxuICAgIEBPdXRwdXQoKSBjbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgb25DbGljayhlOiBFdmVudCkge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuY2xpY2submV4dChlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21zZGEtYnV0dG9uJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSB0eXBlID0gJ2J1dHRvbic7XHJcbiAgICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzaG93TG9hZGluZzogQm9vbGVhbjtcclxuXHJcblxyXG4gICAgQE91dHB1dCgpIGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLmNsaWNrLmVtaXQoZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBIb3N0TGlzdGVuZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtc2RhLXRvYXN0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90b2FzdC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3RvYXN0LnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBleHBvcnRBczogJ01TREFUb2FzJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1TREFUb2FzdCB7XHJcblxyXG4gICAgQElucHV0KCkgaHRtbDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgZGlzbWlzczogKCkgPT4gdm9pZDtcclxuXHJcbiAgICBAT3V0cHV0KCkgbGlua0NsaWNrOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKSBjbGljayhlOiBFdmVudCkge1xyXG4gICAgICAgIGlmICgoPEhUTUxFbGVtZW50PmUudGFyZ2V0KS5jbGFzc0xpc3QuY29udGFpbnMoJ21zZGEtbGluaycpKSB0aGlzLmxpbmtDbGljay5lbWl0KGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgSW5qZWN0YWJsZSxcclxuICAgIEluamVjdG9yLFxyXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gICAgQXBwbGljYXRpb25SZWYsXHJcbiAgICBDb21wb25lbnRSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1TREFUb2FzdCB9IGZyb20gJy4vdG9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1TREFUb2FzdENvbmZpZyB7XHJcbiAgICBvbkNsb3NlPz0gKCkgPT4geyB9O1xyXG4gICAgbGlua0NsaWNrPz0gKGU6IEV2ZW50KSA9PiB7IH07XHJcbiAgICBjbG9zZUFmdGVyPz0gMzAwMDtcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1TREFUb2FzdFNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgX2NvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPE1TREFUb2FzdD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgICAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcclxuICAgICkgeyB9XHJcblxyXG4gICAgc2hvd0h0bWwoaHRtbDogc3RyaW5nLCB1c2VyQ29uZmlnPzogTVNEQVRvYXN0Q29uZmlnKSB7XHJcbiAgICAgICAgY29uc3QgY29uZmlnID0geyAuLi5uZXcgTVNEQVRvYXN0Q29uZmlnKCksIC4uLnVzZXJDb25maWcgfTtcclxuXHJcbiAgICAgICAgLy8gMS4gQ3JlYXRlIGEgY29tcG9uZW50IHJlZmVyZW5jZSBmcm9tIHRoZSBjb21wb25lbnRcclxuICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxyXG4gICAgICAgICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoTVNEQVRvYXN0KVxyXG4gICAgICAgICAgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xyXG5cclxuICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UuaHRtbCA9IGh0bWw7XHJcbiAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlLmxpbmtDbGljay5zdWJzY3JpYmUoKGU6IEV2ZW50KSA9PiBjb25maWcubGlua0NsaWNrKGUpKTtcclxuICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UuZGlzbWlzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlLmxpbmtDbGljay51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmFwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX2NvbXBvbmVudFJlZi5ob3N0Vmlldyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIGNvbmZpZy5vbkNsb3NlKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gMi4gQXR0YWNoIGNvbXBvbmVudCB0byB0aGUgYXBwUmVmIHNvIHRoYXQgaXQncyBpbnNpZGUgdGhlIG5nIGNvbXBvbmVudCB0cmVlXHJcbiAgICAgICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyh0aGlzLl9jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG5cclxuICAgICAgICAvLyAzLiBHZXQgRE9NIGVsZW1lbnQgZnJvbSBjb21wb25lbnRcclxuICAgICAgICBjb25zdCBkb21FbGVtID0gKHRoaXMuX2NvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55PilcclxuICAgICAgICAgICAgLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgICAgLy8gNC4gQXBwZW5kIERPTSBlbGVtZW50IHRvIHRoZSBib2R5XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21FbGVtKTtcclxuXHJcbiAgICAgICAgLy8gNS4gV2FpdCBzb21lIHRpbWUgYW5kIHJlbW92ZSBpdCBmcm9tIHRoZSBjb21wb25lbnQgdHJlZSBhbmQgZnJvbSB0aGUgRE9NXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UuZGlzbWlzcygpLCBjb25maWcuY2xvc2VBZnRlcik7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7YW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtc2RhLW1vZHVsZS1jYXJkJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9tb2R1bGUtY2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9tb2R1bGUtY2FyZC5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgYW5pbWF0aW9uczogW1xyXG4gICAgICAgIHRyaWdnZXIoJ2ZsaXBTdGF0ZScsIFtcclxuICAgICAgICAgICAgc3RhdGUoJ2FjdGl2ZScsIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZVgoMTgwZGVnKSdcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGVYKDApJyxcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBhbmltYXRlKCc1MDBtcyBlYXNlLW91dCcpKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgYW5pbWF0ZSgnNTAwbXMgZWFzZS1pbicpKVxyXG4gICAgICAgIF0pXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2R1bGVDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIC8qKlxyXG4gICAgICogSWNvbiBuYW1lXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEljb24gY29sb3JcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgY29sb3I6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIHRpdGxlXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB3YXJuaW5nXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIHdhcm46IEJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjYXJkIGNsaWNrIGV2ZW50IGVtaXR0ZXJcclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlbW92ZSBpY29uIGNsaWNrIGV2ZW50IGVtaXR0ZXJcclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlbW92ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgZmxpcDogc3RyaW5nID0gJ2luYWN0aXZlJztcclxuICAgIGlzSG92ZXJlZDogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBFdmVudCkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5jbGljay5lbWl0KGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVtb3ZlKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnJlbW92ZS5lbWl0KGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUZsaXAoZTogRXZlbnQpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuZmxpcCA9ICh0aGlzLmZsaXAgPT0gJ2luYWN0aXZlJykgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSc7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZUVudGVyKCRldmVudCkge1xyXG4gICAgICAgIHRoaXMuaXNIb3ZlcmVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZsaXBCYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZUxlYXZlKCRldmVudCkge1xyXG4gICAgICAgIHRoaXMuaXNIb3ZlcmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5mbGlwQmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZsaXBCYWNrKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNIb3ZlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZsaXAgPSAnaW5hY3RpdmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtc2RhLWljb24tbGFiZWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ljb24tbGFiZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vaWNvbi1sYWJlbC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJY29uTGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJY29uIG5hbWVcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29sb3JcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgY29sb3I6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIHRleHRcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2xpY2sgZXZlbnQgZW1pdHRlclxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVtb3ZlIGljb24gY2xpY2sgZXZlbnQgZW1pdHRlclxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgcmVtb3ZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLmNsaWNrLmVtaXQoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZW1vdmUoZTogRXZlbnQpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlLmVtaXQoZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG4vLyBBbmd1bGFyIE1hdGVyaWFsIG1vZHVsZVxyXG5pbXBvcnQge01hdE1vZHVsZX0gZnJvbSAnLi9tYXQubW9kdWxlJztcclxuXHJcbi8vIG1zZGEgY29tcG9uZW50c1xyXG5pbXBvcnQge01TREFJY29ufSBmcm9tICcuL2ljb24vaWNvbic7XHJcbmltcG9ydCB7TVNEQVBsYXRlSWNvbn0gZnJvbSAnLi9wbGF0ZS1pY29uL3BsYXRlLWljb24nO1xyXG5pbXBvcnQge01TREFDYXJkQnV0dG9ufSBmcm9tICcuL2NhcmQtYnV0dG9uL2NhcmQtYnV0dG9uJztcclxuaW1wb3J0IHtNU0RBQ2FyZEJ1dHRvbnNDb250YWluZXJ9IGZyb20gJy4vY2FyZC1idXR0b24vY2FyZC1idXR0b25zLWNvbnRhaW5lcic7XHJcbmltcG9ydCB7TVNEQUJhbm5lckJ1dHRvbn0gZnJvbSAnLi9iYW5uZXItYnV0dG9uL2Jhbm5lci1idXR0b24nO1xyXG5pbXBvcnQge01TREFQYWdpbmF0b3J9IGZyb20gJy4vcGFnaW5hdG9yL3BhZ2luYXRvcic7XHJcbmltcG9ydCB7TVNEQU1lbnVCdXR0b259IGZyb20gJy4vbWVudS1idXR0b24vbWVudS1idXR0b24nO1xyXG5pbXBvcnQge0J1dHRvbkNvbXBvbmVudH0gZnJvbSAnLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TVNEQVRvYXN0fSBmcm9tICcuL3RvYXN0L3RvYXN0JztcclxuaW1wb3J0IHtNU0RBVG9hc3RTZXJ2aWNlfSBmcm9tICcuL3RvYXN0L3RvYXN0LnNlcnZpY2UnO1xyXG5pbXBvcnQge01vZHVsZUNhcmRDb21wb25lbnR9IGZyb20gJy4vbW9kdWxlLWNhcmQvbW9kdWxlLWNhcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHtJY29uTGFiZWxDb21wb25lbnR9IGZyb20gJy4vaWNvbi1sYWJlbC9pY29uLWxhYmVsLmNvbXBvbmVudCc7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICAvLyBtc2RhIGNvbXBvbmVudHNcclxuICAgICAgICBNU0RBSWNvbixcclxuICAgICAgICBNU0RBUGxhdGVJY29uLFxyXG4gICAgICAgIE1TREFDYXJkQnV0dG9uLFxyXG4gICAgICAgIE1TREFDYXJkQnV0dG9uc0NvbnRhaW5lcixcclxuICAgICAgICBNU0RBQmFubmVyQnV0dG9uLFxyXG4gICAgICAgIE1TREFQYWdpbmF0b3IsXHJcbiAgICAgICAgTVNEQU1lbnVCdXR0b24sXHJcbiAgICAgICAgTVNEQVRvYXN0LFxyXG4gICAgICAgIEJ1dHRvbkNvbXBvbmVudCxcclxuICAgICAgICBNb2R1bGVDYXJkQ29tcG9uZW50LFxyXG4gICAgICAgIEljb25MYWJlbENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcblxyXG4gICAgICAgIE1hdE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICAvLyBtc2RhIGNvbXBvbmVudHNcclxuICAgICAgICBNU0RBSWNvbixcclxuICAgICAgICBNU0RBUGxhdGVJY29uLFxyXG4gICAgICAgIE1TREFDYXJkQnV0dG9uLFxyXG4gICAgICAgIE1TREFDYXJkQnV0dG9uc0NvbnRhaW5lcixcclxuICAgICAgICBNU0RBQmFubmVyQnV0dG9uLFxyXG4gICAgICAgIE1TREFQYWdpbmF0b3IsXHJcbiAgICAgICAgTVNEQU1lbnVCdXR0b24sXHJcbiAgICAgICAgTVNEQVRvYXN0LFxyXG4gICAgICAgIEJ1dHRvbkNvbXBvbmVudCxcclxuICAgICAgICBNb2R1bGVDYXJkQ29tcG9uZW50LFxyXG4gICAgICAgIEljb25MYWJlbENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgICAgIE1TREFUb2FzdFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIE1TREFUb2FzdFNlcnZpY2VcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJNc2RhTW9kdWxlIHtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQWdGYSxTQUFTOzs7WUFyRHJCLFFBQVEsU0FB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