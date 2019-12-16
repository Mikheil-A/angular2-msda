(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/button'), require('@angular/material/input'), require('@angular/material/icon'), require('@angular/material/expansion'), require('@angular/material/select'), require('@angular/material/table'), require('@angular/material/paginator'), require('@angular/material/sort'), require('@angular/material/slide-toggle'), require('@angular/material/dialog'), require('@angular/material/sidenav'), require('@angular/material/checkbox'), require('@angular/material/stepper'), require('@angular/material/datepicker'), require('@angular/material'), require('@angular/material/chips'), require('@angular/material/tooltip'), require('@angular/material/menu'), require('@angular/material/progress-bar'), require('@angular/animations'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('angular-msda', ['exports', '@angular/core', '@angular/common', '@angular/material/button', '@angular/material/input', '@angular/material/icon', '@angular/material/expansion', '@angular/material/select', '@angular/material/table', '@angular/material/paginator', '@angular/material/sort', '@angular/material/slide-toggle', '@angular/material/dialog', '@angular/material/sidenav', '@angular/material/checkbox', '@angular/material/stepper', '@angular/material/datepicker', '@angular/material', '@angular/material/chips', '@angular/material/tooltip', '@angular/material/menu', '@angular/material/progress-bar', '@angular/animations', '@angular/forms'], factory) :
    (factory((global['angular-msda'] = {}),global.ng.core,global.ng.common,global.ng.material.button,global.ng.material.input,global.ng.material.icon,global.ng.material.expansion,global.ng.material.select,global.ng.material.table,global.ng.material.paginator,global.ng.material.sort,global.ng.material['slide-toggle'],global.ng.material.dialog,global.ng.material.sidenav,global.ng.material.checkbox,global.ng.material.stepper,global.ng.material.datepicker,global.ng.material,global.ng.material.chips,global.ng.material.tooltip,global.ng.material.menu,global.ng.material['progress-bar'],global.ng.animations,global.ng.forms));
}(this, (function (exports,core,common,button,input,icon,expansion,select,table,paginator,sort,slideToggle,dialog,sidenav,checkbox,stepper,datepicker,material,chips,tooltip,menu,progressBar,animations,forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var MatModule = /** @class */ (function () {
        function MatModule() {
        }
        MatModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            // core modules
                            common.CommonModule,
                            // angular-material components modules
                            button.MatButtonModule,
                            input.MatInputModule,
                            icon.MatIconModule,
                            expansion.MatExpansionModule,
                            select.MatSelectModule,
                            table.MatTableModule,
                            paginator.MatPaginatorModule,
                            sort.MatSortModule,
                            slideToggle.MatSlideToggleModule,
                            dialog.MatDialogModule,
                            sidenav.MatSidenavModule,
                            checkbox.MatCheckboxModule,
                            stepper.MatStepperModule,
                            datepicker.MatDatepickerModule,
                            material.MatNativeDateModule,
                            chips.MatChipsModule,
                            tooltip.MatTooltipModule,
                            menu.MatMenuModule,
                            progressBar.MatProgressBarModule
                        ],
                        declarations: [],
                        exports: [
                            // core modules
                            common.CommonModule,
                            // angular-material components modules
                            button.MatButtonModule,
                            input.MatInputModule,
                            icon.MatIconModule,
                            expansion.MatExpansionModule,
                            select.MatSelectModule,
                            table.MatTableModule,
                            paginator.MatPaginatorModule,
                            sort.MatSortModule,
                            slideToggle.MatSlideToggleModule,
                            dialog.MatDialogModule,
                            sidenav.MatSidenavModule,
                            checkbox.MatCheckboxModule,
                            stepper.MatStepperModule,
                            datepicker.MatDatepickerModule,
                            material.MatNativeDateModule,
                            chips.MatChipsModule,
                            tooltip.MatTooltipModule,
                            menu.MatMenuModule,
                            progressBar.MatProgressBarModule
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
             */ function (value) {
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
             */ function (value) {
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
             */ function (value) {
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
             */ function (value) {
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
             */ function (value) {
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
            { type: core.Component, args: [{
                        selector: 'msda-icon',
                        template: "<svg #svg>\r\n    <use #use></use>\r\n</svg>\r\n",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        host: {
                            'role': 'img',
                            'class': 'msda-icon'
                        },
                        exportAs: 'MSDAIcon',
                        styles: [".msda-elevation-z2{box-shadow:0 2px 2px rgba(0,0,0,.2)}.msda-elevation-z4{box-shadow:0 4px 4px rgba(0,0,0,.1)}.msda-elevation-z4-underline{box-shadow:0 1px #e0e0e0,0 4px 4px rgba(0,0,0,.1)}.msda-border-top{box-shadow:0 -1px #e0e0e0}.msda-border-bottom{box-shadow:0 1px #e0e0e0}.msda-sidebar-element-hover{box-shadow:0 1px 1px rgba(0,0,0,.1)}.msda-body-1,.msda-body-1-bold,.msda-body-2,.msda-body-2-bold{color:#333;font-family:'BPG DejaVu Sans';letter-spacing:.1em}.msda-body-1 a,.msda-body-1-bold a,.msda-body-2 a,.msda-body-2-bold a{color:#3966a3}.msda-body-1 a:focus,.msda-body-1 a:hover,.msda-body-1-bold a:focus,.msda-body-1-bold a:hover,.msda-body-2 a:focus,.msda-body-2 a:hover,.msda-body-2-bold a:focus,.msda-body-2-bold a:hover{color:#777}.msda-body-1,.msda-body-1-bold{font-size:13px;line-height:21px}.msda-body-2,.msda-body-2-bold{font-size:11px;line-height:20px}.msda-body-1-bold,.msda-body-2-bold{font-weight:700}.msda-display-1,.msda-display-2,.msda-display-3{color:#333}.msda-display-1{font-size:15px;font-family:'BPG DejaVu Sans';font-weight:700;line-height:26px}.msda-display-1 a{color:#3966a3}.msda-display-1 a:focus,.msda-display-1 a:hover{color:#777}.msda-display-2,.msda-display-3{font-family:'BPG DejaVu Sans Caps Web';text-transform:uppercase}.msda-display-2{font-size:13px}.msda-display-3{font-size:11px;letter-spacing:.1em}.msda-shadow-1{-webkit-filter:drop-shadow(1px 1px 2px rgba(0, 0, 0, .5));filter:drop-shadow(1px 1px 2px rgba(0, 0, 0, .5))}.msda-shadow-2{-webkit-filter:drop-shadow(1px 1px 4px rgba(0, 0, 0, .5));filter:drop-shadow(1px 1px 4px rgba(0, 0, 0, .5))}.msda-shadow-3{-webkit-filter:drop-shadow(1px 1px 6px rgba(0, 0, 0, .5));filter:drop-shadow(1px 1px 6px rgba(0, 0, 0, .5))}.msda-icon{background-repeat:no-repeat;display:inline-block;fill:#000;height:24px;width:24px}"]
                    }] }
        ];
        /** @nocollapse */
        MSDAIcon.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        MSDAIcon.propDecorators = {
            name: [{ type: core.Input, args: ['name',] }],
            width: [{ type: core.Input, args: ['width',] }],
            height: [{ type: core.Input, args: ['height',] }],
            color: [{ type: core.Input, args: ['color',] }],
            shadow: [{ type: core.Input, args: ['shadow',] }],
            _svgElementRef: [{ type: core.ViewChild, args: ['svg',] }],
            _useElementRef: [{ type: core.ViewChild, args: ['use',] }]
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
             */ function (value) {
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
             */ function (value) {
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
             */ function (value) {
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
             */ function (value) {
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
             */ function (value) {
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
             */ function (value) {
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
             */ function (value) {
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
            { type: core.Component, args: [{
                        selector: 'msda-plate-icon',
                        template: "<mat-chip-list aria-label=\"Fish selection\">\r\n    <mat-chip>One fish</mat-chip>\r\n    <mat-chip color=\"warn\" selected>Two fish</mat-chip>\r\n    <mat-chip color=\"primary\" selected>Primary fish</mat-chip>\r\n    <mat-chip color=\"accent\" selected>Accent fish</mat-chip>\r\n</mat-chip-list>\r\n\r\n\r\n\r\n<div #wrapper class=\"wrapper\">\r\n    <msda-icon #background style=\"position: absolute; top: 0; left: 0; z-index: -1;\"></msda-icon>\r\n    <msda-icon #icon style=\"z-index: 1;\"></msda-icon>\r\n</div>\r\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        host: {
                            'role': 'img',
                            'class': 'msda-plate-icon'
                        },
                        exportAs: 'MSDAPlateIcon',
                        styles: [".wrapper{position:relative;width:48px;height:48px;display:flex;align-items:center;justify-content:center}"]
                    }] }
        ];
        /** @nocollapse */
        MSDAPlateIcon.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        MSDAPlateIcon.propDecorators = {
            name: [{ type: core.Input, args: ['name',] }],
            width: [{ type: core.Input, args: ['width',] }],
            height: [{ type: core.Input, args: ['height',] }],
            color: [{ type: core.Input, args: ['color',] }],
            background: [{ type: core.Input, args: ['background',] }],
            shadow: [{ type: core.Input, args: ['shadow',] }],
            type: [{ type: core.Input, args: ['type',] }],
            _wrapperRef: [{ type: core.ViewChild, args: ['wrapper',] }],
            _backgroundRef: [{ type: core.ViewChild, args: ['background',] }],
            _iconRef: [{ type: core.ViewChild, args: ['icon',] }]
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
            this.buttonClick = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'msda-card-button',
                        exportAs: 'MSDACardButton',
                        template: "<div class=\"msda-card-button-header\">\r\n  <div class=\"msda-card-button-title\">{{ title }}</div>\r\n  <div class=\"msda-card-button-move-handler\" (click)=\"moveHandlerClick($event)\" *ngIf=\"draggable\">\r\n    <svg width=\"16\" height=\"10\" viewBox=\"0 0 16 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <path d=\"M14 6C15.1 6 16 6.9 16 8C16 9.1 15.1 10 14 10C12.9 10 12 9.1 12 8C12 6.9 12.9 6 14 6ZM6 8C6 9.1 6.9 10 8 10C9.1 10 10 9.1 10 8C10 6.9 9.1 6 8 6C6.9 6 6 6.9 6 8ZM0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6C0.9 6 0 6.9 0 8ZM4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2ZM6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0C6.9 0 6 0.9 6 2ZM12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0C12.9 0 12 0.9 12 2Z\" fill=\"black\" />\r\n    </svg>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"msda-card-button-body\">\r\n  <msda-plate-icon [name]=\"icon\" [type]=\"iconType\" width=\"48\" height=\"48\" [color]=\"iconColor\" [background]=\"iconBackgroundColor\"></msda-plate-icon>\r\n  <div class=\"msda-card-button-text\">{{ text }}</div>\r\n</div>\r\n",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        host: {
                            'class': 'msda-card-button',
                            '(click)': 'hostClick($event)'
                        },
                        styles: [".msda-card-button,.msda-card-button-body{border-radius:0 0 8px 8px}.msda-card-button{display:flex;flex-direction:column;background:#f7f7fa;box-shadow:0 2px 2px rgba(0,0,0,.2);cursor:pointer}.msda-card-button:hover .msda-card-button-header .msda-card-button-move-handler{opacity:1;visibility:visible}.msda-card-button .msda-card-button-body,.msda-card-button .msda-card-button-header{padding:12px 24px}.msda-card-button .msda-card-button-body .msda-card-button-text,.msda-card-button .msda-card-button-header .msda-card-button-title{font-size:11px;line-height:20px;letter-spacing:.01em;color:#333}.msda-card-button .msda-card-button-header{display:flex;align-items:center;position:relative;background:#f0f0f7;box-shadow:0 1px 0 #e0e0e0;z-index:1}.msda-card-button .msda-card-button-header .msda-card-button-title{flex:1 1 auto;font-family:BPG DejaVu Sans Caps Web}.msda-card-button .msda-card-button-header .msda-card-button-move-handler{cursor:move;opacity:0;visibility:hidden;transition-property:opacity,visibility;transition-duration:.2s}.msda-card-button .msda-card-button-body{flex:1 1 auto;display:flex;flex-direction:row;align-items:center}.msda-card-button .msda-card-button-body .msda-card-button-text{margin-left:16px;font-family:BPG DejaVu Sans}.msda-card-button-placeholder,.sortable-placeholder{min-height:112px;border:2px dashed #333;border-radius:0 0 8px 8px}"]
                    }] }
        ];
        MSDACardButton.propDecorators = {
            title: [{ type: core.Input }],
            text: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            iconType: [{ type: core.Input }],
            iconColor: [{ type: core.Input }],
            iconBackgroundColor: [{ type: core.Input }],
            draggable: [{ type: core.Input }],
            buttonClick: [{ type: core.Output }]
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
            this.sortupdate = new core.EventEmitter();
            this.buttonClick = new core.EventEmitter();
        }
        Object.defineProperty(MSDACardButtonsContainer.prototype, "gridTemplateColumns", {
            get: /**
             * @return {?}
             */ function () {
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
            { type: core.Component, args: [{
                        selector: 'msda-card-buttons-container',
                        exportAs: 'MSDACardButtonsContainer',
                        template: "<div class=\"msda-card-buttons-container-inner\" [style.grid-template-columns]=\"gridTemplateColumns\">\r\n  <ng-template ngFor let-item [ngForOf]=\"dataSource\">\r\n    <msda-card-button [title]=\"item.title\" [text]=\"item.text\" [icon]=\"item.icon\" [iconType]=\"item.iconType\" [iconBackgroundColor]=\"item.iconBackgroundColor\" (buttonClick)=\"buttonClick.emit($event)\"></msda-card-button>\r\n  </ng-template>\r\n</div>\r\n",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        host: {
                            'role': 'button',
                            'class': 'msda-card-buttons-container'
                        },
                        styles: [".msda-card-buttons-container{overflow:hidden}.msda-card-buttons-container-inner{display:-ms-grid;display:grid;margin-top:10px;margin-bottom:10px;gap:10px 24px}"]
                    }] }
        ];
        /** @nocollapse */
        MSDACardButtonsContainer.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        MSDACardButtonsContainer.propDecorators = {
            row: [{ type: core.Input }],
            column: [{ type: core.Input }],
            dragEnabled: [{ type: core.Input }],
            dataSource: [{ type: core.Input }],
            sortupdate: [{ type: core.Output }],
            buttonClick: [{ type: core.Output }]
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
            this.buttonClick = new core.EventEmitter();
        }
        MSDABannerButton.decorators = [
            { type: core.Component, args: [{
                        selector: 'msda-banner-button',
                        exportAs: 'MSDABannerButton',
                        template: "<img class=\"msda-banner-button-image\" [src]=\"image\" alt=\"\">\r\n<msda-plate-icon class=\"msda-banner-button-icon\" [name]=\"icon\" type=\"square\" width=\"48\" height=\"48\" color=\"#FFFFFF\" [background]=\"color\"></msda-plate-icon>\r\n<div class=\"msda-banner-button-header\">\r\n  <span class=\"msda-banner-button-title msda-display-2\">{{ title }}</span>\r\n  <span class=\"msda-banner-button-date\">{{ date }}</span>\r\n</div>\r\n<p class=\"msda-banner-button-text msda-body-1\">{{ text }}</p>\r\n<a class=\"msda-banner-button-read-more\" href=\"javascript:;\" (click)=\"buttonClick.emit($event)\">\r\n  <svg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 4.25437C7.58172 4.25437 4 7.81069 4 12.1976C4 16.5846 7.58172 20.1409 12 20.1409C16.4183 20.1409 20 16.5846 20 12.1976C20 7.81069 16.4183 4.25437 12 4.25437ZM2 12.1976C2 6.71395 6.47715 2.26855 12 2.26855C17.5228 2.26855 22 6.71395 22 12.1976C22 17.6813 17.5228 22.1267 12 22.1267C6.47715 22.1267 2 17.6813 2 12.1976Z\" [attr.fill]=\"color\" />\r\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.2929 7.92168C11.6834 7.53392 12.3166 7.53392 12.7071 7.92168L16.3071 11.4961C16.6976 11.8839 16.6976 12.5126 16.3071 12.9003L12.7071 16.4748C12.3166 16.8625 11.6834 16.8625 11.2929 16.4748C10.9024 16.087 10.9024 15.4584 11.2929 15.0706L14.1858 12.1982L11.2929 9.32586C10.9024 8.9381 10.9024 8.30943 11.2929 7.92168Z\" [attr.fill]=\"color\" />\r\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.40039 12.198C7.40039 11.6496 7.84811 11.2051 8.40039 11.2051H15.6004C16.1527 11.2051 16.6004 11.6496 16.6004 12.198C16.6004 12.7464 16.1527 13.1909 15.6004 13.1909H8.40039C7.84811 13.1909 7.40039 12.7464 7.40039 12.198Z\" [attr.fill]=\"color\" />\r\n  </svg>\r\n  <span>{{ readMoreText }}</span>\r\n</a>\r\n",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        host: { 'class': 'msda-banner-button msda-body-2' },
                        styles: [".msda-banner-button{display:block;position:relative;background-color:#fff;border-radius:0 0 8px 8px;box-shadow:0 2px 2px rgba(0,0,0,.2)}.msda-banner-button-image{width:100%;margin-bottom:20px}.msda-banner-button-icon{position:absolute;top:24px;left:24px}.msda-banner-button-date{color:#777}.msda-banner-button-header,.msda-banner-button-read-more,.msda-banner-button-text{margin-left:24px;margin-right:24px}.msda-banner-button-header{display:flex;justify-content:space-between}.msda-banner-button-read-more{margin-bottom:24px;text-decoration:none;display:inline-flex;align-items:center}.msda-banner-button-read-more span{margin-left:10px}"]
                    }] }
        ];
        MSDABannerButton.propDecorators = {
            icon: [{ type: core.Input }],
            image: [{ type: core.Input }],
            title: [{ type: core.Input }],
            text: [{ type: core.Input }],
            date: [{ type: core.Input }],
            color: [{ type: core.Input }],
            readMoreText: [{ type: core.Input }],
            buttonClick: [{ type: core.Output }]
        };
        return MSDABannerButton;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var MSDAPaginator = /** @class */ (function () {
        function MSDAPaginator() {
            this.page = new core.EventEmitter();
            this.pageConfigChange = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'msda-paginator',
                        exportAs: 'MSDAPaginator',
                        template: "<div id=\"container\" class=\"msda-body-2\">\r\n    <span>\u10E1\u10E3\u10DA \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D4\u10D1\u10D8: {{totalItems}}</span>\r\n\r\n    <div id=\"right-end\">\r\n        <div id=\"select-number-of-records\">\r\n            <span>\u10D2\u10D5\u10D4\u10E0\u10D3\u10D6\u10D4 \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D4\u10D1\u10D8\u10E1 \u10E0\u10D0\u10DD\u10D3\u10D4\u10DC\u10DD\u10D1\u10D0: </span>\r\n\r\n            <select (change)=\"onSelectionChange($event)\" class=\"msda-body-2\">\r\n                <option *ngFor=\"let item of itemsPerPageConfig\" [value]=\"item\">\r\n                    {{item}}\r\n                </option>\r\n            </select>\r\n        </div>\r\n\r\n        <div id=\"paging-navigation\">\r\n            <msda-icon name=\"chevron_left\"\r\n                       [color]=\"currentPageIndex <= 1? '#CCCEE0' : '#000000'\"\r\n                       [ngStyle]=\"{'cursor': currentPageIndex === 1? 'not-allowed' : 'pointer'}\"\r\n                       (click)=\"previousPage()\">\r\n            </msda-icon>\r\n\r\n            <div id=\"current-page-index-indicator\">\r\n                <input class=\"msda-body-2\" *ngIf=\"numberOfTotalPages > 2; else withoutInputField\"\r\n                       type=\"number\"\r\n                       [(ngModel)]=\"currentPageIndex\"\r\n                       (input)=\"moveToTheRequestedPage()\">\r\n                <ng-template #withoutInputField>\r\n                    <span>{{currentPageIndex}}</span>\r\n                </ng-template>\r\n            </div>\r\n            \r\n            <div id=\"total-number-of-pages\" class=\"msda-body-2\"> - {{numberOfTotalPages}}</div>\r\n\r\n            <msda-icon name=\"chevron_right\"\r\n                       [color]=\"currentPageIndex >= numberOfTotalPages? '#CCCEE0' : '#000000'\"\r\n                       [ngStyle]=\"{'cursor': currentPageIndex === numberOfTotalPages? 'not-allowed' : 'pointer'}\"\r\n                       (click)=\"nextPage()\">\r\n            </msda-icon>\r\n        </div>\r\n    </div>\r\n</div>\r\n",
                        styles: [".msda-elevation-z2{box-shadow:0 2px 2px rgba(0,0,0,.2)}.msda-elevation-z4{box-shadow:0 4px 4px rgba(0,0,0,.1)}.msda-elevation-z4-underline{box-shadow:0 1px #e0e0e0,0 4px 4px rgba(0,0,0,.1)}.msda-border-top{box-shadow:0 -1px #e0e0e0}.msda-border-bottom{box-shadow:0 1px #e0e0e0}.msda-sidebar-element-hover{box-shadow:0 1px 1px rgba(0,0,0,.1)}.msda-body-1,.msda-body-1-bold,.msda-body-2,.msda-body-2-bold{color:#333;font-family:'BPG DejaVu Sans';letter-spacing:.1em}.msda-body-1 a,.msda-body-1-bold a,.msda-body-2 a,.msda-body-2-bold a{color:#3966a3}.msda-body-1 a:focus,.msda-body-1 a:hover,.msda-body-1-bold a:focus,.msda-body-1-bold a:hover,.msda-body-2 a:focus,.msda-body-2 a:hover,.msda-body-2-bold a:focus,.msda-body-2-bold a:hover{color:#777}.msda-body-1,.msda-body-1-bold{font-size:13px;line-height:21px}.msda-body-2,.msda-body-2-bold{font-size:11px;line-height:20px}.msda-body-1-bold,.msda-body-2-bold{font-weight:700}.msda-display-1,.msda-display-2,.msda-display-3{color:#333}.msda-display-1{font-size:15px;font-family:'BPG DejaVu Sans';font-weight:700;line-height:26px}.msda-display-1 a{color:#3966a3}.msda-display-1 a:focus,.msda-display-1 a:hover{color:#777}.msda-display-2,.msda-display-3{font-family:'BPG DejaVu Sans Caps Web';text-transform:uppercase}.msda-display-2{font-size:13px}.msda-display-3{font-size:11px;letter-spacing:.1em}#container{display:flex;flex-direction:row;align-items:center;justify-content:space-between;background-color:#fff;box-shadow:0 1px 0 #e0e0e0;padding:8px 24px;color:#777}#container #right-end{display:flex;flex-direction:row;align-items:center}#container #right-end #select-number-of-records select{border:none;color:#777}#container #right-end #paging-navigation{display:flex;flex-direction:row;align-items:center;margin-left:70px}#container #right-end #paging-navigation msda-icon{cursor:pointer}#container #right-end #paging-navigation #current-page-index-indicator{margin:0 0 0 30px;font-weight:700}#container #right-end #paging-navigation input[type=number]{background-color:#f7f7fa;border-radius:2px;border:none;padding:10px 12px;box-sizing:border-box;width:64px;font-weight:700}#container #right-end #paging-navigation input[type=number]::-webkit-inner-spin-button,#container #right-end #paging-navigation input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}#container #right-end #paging-navigation #total-number-of-pages{margin:0 30px 0 4px;color:#777}"]
                    }] }
        ];
        /** @nocollapse */
        MSDAPaginator.ctorParameters = function () { return []; };
        MSDAPaginator.propDecorators = {
            itemsPerPage: [{ type: core.Input }],
            totalItems: [{ type: core.Input }],
            itemsPerPageConfig: [{ type: core.Input }],
            page: [{ type: core.Output }],
            pageConfigChange: [{ type: core.Output }]
        };
        return MSDAPaginator;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var MSDAMenuButton = /** @class */ (function () {
        function MSDAMenuButton() {
            this.click = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'msda-menu-button',
                        exportAs: 'MSDAMenuButton',
                        template: "<div class=\"msda-menu-button-body\">\r\n    <button class=\"button\" (click)=\"onClick($event)\">\r\n        <span class=\"block\"></span>\r\n        <span *ngIf=\"active\" class=\"block-active\"></span>\r\n        <span *ngIf=\"notifCounter\" class=\"badge msda-body-2-bold\">{{notifCounter < 100 ? notifCounter : '!'}}</span>\r\n        <span class=\"content msda-display-2\">\r\n            <ng-content></ng-content>\r\n        </span>\r\n    </button>\r\n</div>\r\n",
                        styles: [".button{position:relative;height:50px;padding-left:40px;padding-right:30px;border:none;cursor:pointer;background-color:#f6f6f6;font-size:20px;outline:0}.button:hover .block{display:block}.content{font-family:BPG DejaVu Sans Caps Web}.badge{position:absolute;height:18px;width:24px;color:#fff;background:#e3515a;border:1px solid #fff;box-sizing:border-box;border-radius:4px;line-height:18px;text-align:center;letter-spacing:.01em;top:5px;right:12px}.block{display:none;position:absolute;height:8px;width:8px;color:#fff;background-color:#000;padding-top:1px;top:20px;left:25px}.block-active{position:absolute;height:8px;width:8px;color:#fff;background-color:#000;padding-top:1px;top:20px;left:25px}"]
                    }] }
        ];
        MSDAMenuButton.propDecorators = {
            active: [{ type: core.Input, args: ['active',] }],
            text: [{ type: core.Input, args: ['text',] }],
            notifCounter: [{ type: core.Input, args: ['notifCounter',] }],
            click: [{ type: core.Output }]
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
            this.disabled = false;
            this.click = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'msda-button',
                        template: "<button class=\"button\" [type]=\"type\" [style.backgroundColor]=\"color\" [disabled]=\"disabled\" (click)=\"onClick($event)\">\r\n  <span class=\"loader\" *ngIf=\"showLoading\"></span>\r\n  <span class=\"content\">\r\n       <!-- icon -->\r\n    <span class=\"icon\">\r\n            <ng-content select=\"msda-icon\"></ng-content>\r\n        </span>\r\n    <!-- text -->\r\n    <span class=\"text\">\r\n            <ng-content select=\"span\"></ng-content>\r\n        </span>\r\n</span>\r\n</button>\r\n",
                        styles: [".button{background-color:#212121;outline:0;border:none;border-radius:4px;color:#fff;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:145px;padding:0 36px;line-height:36px;font-size:14px;cursor:pointer;position:relative}.button .content{display:flex;align-items:center;justify-content:center}.button .content .icon ::ng-deep msda-icon{margin-right:8px;vertical-align:text-bottom}.button .content .text span{font-family:BPG DejaVu Sans Caps Web;font-size:11px;text-align:center;letter-spacing:.01em;color:#fff}::ng-deep .button:disabled{background-color:rgba(0,0,0,.12)!important;color:rgba(0,0,0,.38);cursor:default}.loader{position:absolute;top:0;bottom:0;left:5px;margin:auto;border:3px solid #f3f3f3;border-top:3px solid #3498db;border-radius:50%;width:18px;height:18px;-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]
                    }] }
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () { return []; };
        ButtonComponent.propDecorators = {
            type: [{ type: core.Input }],
            color: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            showLoading: [{ type: core.Input }],
            click: [{ type: core.Output }]
        };
        return ButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var MSDAToast = /** @class */ (function () {
        function MSDAToast() {
            this.linkClick = new core.EventEmitter();
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
                if ((( /** @type {?} */(e.target))).classList.contains('msda-link'))
                    this.linkClick.emit(e);
            };
        MSDAToast.decorators = [
            { type: core.Component, args: [{
                        selector: 'msda-toast',
                        template: "<div class=\"msda-toast\">\r\n  <div class=\"msda-toast-html msda-body-1-bold\" [innerHTML]=\"html\"></div>\r\n  <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" (click)=\"dismiss()\">\r\n    <g opacity=\"0.54\">\r\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z\" fill=\"white\" />\r\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z\" fill=\"white\" />\r\n    </g>\r\n  </svg>\r\n</div>\r\n",
                        encapsulation: core.ViewEncapsulation.None,
                        exportAs: 'MSDAToas',
                        styles: [".msda-toast{color:#fff;padding:20px 24px;background-color:#212121;border-radius:4px;position:fixed;left:32px;bottom:64px;z-index:9999;display:flex;align-items:center}.msda-toast .msda-link,.msda-toast svg{cursor:pointer}.msda-toast svg{margin-left:20px}.msda-toast .msda-link{color:#a3bfe5}.msda-toast .msda-toast-html.msda-body-1-bold{color:#fff;letter-spacing:.01em}"]
                    }] }
        ];
        /** @nocollapse */
        MSDAToast.ctorParameters = function () { return []; };
        MSDAToast.propDecorators = {
            html: [{ type: core.Input }],
            dismiss: [{ type: core.Input }],
            linkClick: [{ type: core.Output }],
            click: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return MSDAToast;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

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
                var domElem = ( /** @type {?} */((( /** @type {?} */(this._componentRef.hostView)))
                    .rootNodes[0]));
                // 4. Append DOM element to the body
                document.body.appendChild(domElem);
                // 5. Wait some time and remove it from the component tree and from the DOM
                setTimeout(function () { return _this._componentRef.instance.dismiss(); }, config.closeAfter);
            };
        MSDAToastService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        MSDAToastService.ctorParameters = function () {
            return [
                { type: core.ComponentFactoryResolver },
                { type: core.ApplicationRef },
                { type: core.Injector }
            ];
        };
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
            this.click = new core.EventEmitter();
            /**
             * remove icon click event emitter
             */
            this.remove = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'msda-module-card',
                        template: "<div class=\"card\" (click)=\"onClick($event)\">\r\n    <div class=\"content\">\r\n        <div class=\"flip-wrapper\">\r\n            <div class=\"icon flip-box\" [@flipState]=\"flip\">\r\n                <msda-plate-icon\r\n                    class=\"msda-module-card-icon side front\"\r\n                    [name]=\"icon\"\r\n                    type=\"circle\"\r\n                    width=\"56\"\r\n                    height=\"56\"\r\n                    color=\"#FFFFFF\"\r\n                    [background]=\"color\"\r\n                    (click)=\"toggleFlip($event)\">\r\n                </msda-plate-icon>\r\n\r\n                <msda-plate-icon\r\n                    class=\"msda-module-card-icon side back\"\r\n                    name=\"remove\"\r\n                    type=\"circle\"\r\n                    width=\"56\"\r\n                    height=\"56\"\r\n                    color=\"black\"\r\n                    background=\"#FFFFFF\"\r\n                    (click)=\"onRemove($event)\"\r\n                    (mouseenter)=\"onMouseEnter($event)\"\r\n                    (mouseleave)=\"onMouseLeave($event)\">\r\n                </msda-plate-icon>\r\n            </div>\r\n        </div>\r\n        <div class=\"title\">{{title}}</div>\r\n    </div>\r\n    <div class=\"warn\" *ngIf=\"warn\">\r\n        <msda-icon\r\n            name=\"warning\"\r\n            width=\"22\"\r\n            height=\"22\"\r\n            color=\"#E3515A\">\r\n        </msda-icon>\r\n    </div>\r\n</div>\r\n\r\n",
                        animations: [
                            animations.trigger('flipState', [
                                animations.state('active', animations.style({
                                    transform: 'rotateX(180deg)'
                                })),
                                animations.state('inactive', animations.style({
                                    transform: 'rotateX(0)',
                                })),
                                animations.transition('active => inactive', animations.animate('500ms ease-out')),
                                animations.transition('inactive => active', animations.animate('500ms ease-in'))
                            ])
                        ],
                        styles: [".card{position:relative;cursor:pointer}.card .content{overflow:hidden;border-radius:30px 8px 8px 30px;position:relative;display:inline-block;box-shadow:0 2px 2px rgba(0,0,0,.2)}.card .content:after{content:'';width:100px;border-radius:50%;position:absolute;left:-38px;top:-6px;height:70px;box-shadow:0 -1px 0 rgba(0,0,0,.2),-4px -2px 0 rgba(0,0,0,.2),1px 0 0 0 #fff,110px 0 0 68px #fff;background:0 0;z-index:-1}.card .content .icon{width:160px;height:56px}.card .content .icon msda-plate-icon{cursor:pointer}.card .content .title{position:absolute;left:50%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-family:'BPG DejaVu Sans';line-height:20px;font-size:11px;letter-spacing:.01em}.card .warn{position:absolute;right:-10px;top:-10px}.flip-wrapper{-webkit-perspective:800px;perspective:800px}.flip-box{position:relative;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;transition:transform 1s;transition:transform 1s,-webkit-transform 1s}.side{position:absolute;-webkit-backface-visibility:hidden;backface-visibility:hidden;color:#fff;text-align:center;font-size:24px;font-weight:700;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.front{-webkit-transform:rotateX(0);transform:rotateX(0)}.back{-webkit-transform:rotateX(180deg);transform:rotateX(180deg)}"]
                    }] }
        ];
        /** @nocollapse */
        ModuleCardComponent.ctorParameters = function () { return []; };
        ModuleCardComponent.propDecorators = {
            icon: [{ type: core.Input }],
            color: [{ type: core.Input }],
            title: [{ type: core.Input }],
            warn: [{ type: core.Input }],
            click: [{ type: core.Output }],
            remove: [{ type: core.Output }]
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
            this.click = new core.EventEmitter();
            /**
             * remove icon click event emitter
             */
            this.remove = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'msda-icon-label',
                        template: "<div class=\"icon-label\" (click)=\"onClick($event)\">\r\n    <div class=\"icon-label-content\">\r\n        <div class=\"icon\">\r\n            <msda-icon\r\n                [name]=\"icon\"\r\n                width=\"18\"\r\n                height=\"18\"\r\n                [color]=\"color\">\r\n            </msda-icon>\r\n        </div>\r\n        <div class=\"text\">\r\n            <span [style.color]=\"color\">{{text}}</span>\r\n        </div>\r\n        <div class=\"icon remove\">\r\n            <msda-icon\r\n                name=\"cancel_circle\"\r\n                width=\"18\"\r\n                height=\"18\"\r\n                color=\"gray\"\r\n                (click)=\"onRemove($event)\">\r\n            </msda-icon>\r\n        </div>\r\n    </div>\r\n</div>\r\n",
                        styles: [".icon-label{width:100%;min-width:163px;padding:6px 9px;background:#fff;border:1px solid #e0e0e0;box-sizing:border-box;border-radius:16px;cursor:pointer}.icon-label .icon-label-content{display:flex;align-items:center;justify-content:space-between}.icon-label .icon-label-content .icon msda-icon{display:flex;vertical-align:middle}.icon-label .icon-label-content .icon.remove{cursor:pointer}.icon-label .icon-label-content .text{margin:0 9px;font-family:'BPG DejaVu Sans';font-size:11px;letter-spacing:.01em}"]
                    }] }
        ];
        /** @nocollapse */
        IconLabelComponent.ctorParameters = function () { return []; };
        IconLabelComponent.propDecorators = {
            icon: [{ type: core.Input }],
            color: [{ type: core.Input }],
            text: [{ type: core.Input }],
            click: [{ type: core.Output }],
            remove: [{ type: core.Output }]
        };
        return IconLabelComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var AngularMsdaModule = /** @class */ (function () {
        function AngularMsdaModule() {
        }
        AngularMsdaModule.decorators = [
            { type: core.NgModule, args: [{
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
                            common.CommonModule,
                            forms.FormsModule,
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

    exports.AngularMsdaModule = AngularMsdaModule;
    exports.ɵe = MSDABannerButton;
    exports.ɵi = ButtonComponent;
    exports.ɵc = MSDACardButton;
    exports.ɵd = MSDACardButtonsContainer;
    exports.ɵk = IconLabelComponent;
    exports.ɵa = MSDAIcon;
    exports.ɵl = MatModule;
    exports.ɵg = MSDAMenuButton;
    exports.ɵj = ModuleCardComponent;
    exports.ɵf = MSDAPaginator;
    exports.ɵb = MSDAPlateIcon;
    exports.ɵh = MSDAToast;
    exports.ɵm = MSDAToastService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1tc2RhLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhci1tc2RhL2xpYi9tYXQubW9kdWxlLnRzIiwibmc6Ly9hbmd1bGFyLW1zZGEvbGliL2ljb24vaWNvbi50cyIsIm5nOi8vYW5ndWxhci1tc2RhL2xpYi9wbGF0ZS1pY29uL3BsYXRlLWljb24udHMiLCJuZzovL2FuZ3VsYXItbXNkYS9saWIvY2FyZC1idXR0b24vY2FyZC1idXR0b24udHMiLCJuZzovL2FuZ3VsYXItbXNkYS9saWIvY2FyZC1idXR0b24vY2FyZC1idXR0b25zLWNvbnRhaW5lci50cyIsIm5nOi8vYW5ndWxhci1tc2RhL2xpYi9iYW5uZXItYnV0dG9uL2Jhbm5lci1idXR0b24udHMiLCJuZzovL2FuZ3VsYXItbXNkYS9saWIvcGFnaW5hdG9yL3BhZ2luYXRvci50cyIsIm5nOi8vYW5ndWxhci1tc2RhL2xpYi9tZW51LWJ1dHRvbi9tZW51LWJ1dHRvbi50cyIsIm5nOi8vYW5ndWxhci1tc2RhL2xpYi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1tc2RhL2xpYi90b2FzdC90b2FzdC50cyIsIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL2FuZ3VsYXItbXNkYS9saWIvdG9hc3QvdG9hc3Quc2VydmljZS50cyIsIm5nOi8vYW5ndWxhci1tc2RhL2xpYi9tb2R1bGUtY2FyZC9tb2R1bGUtY2FyZC5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItbXNkYS9saWIvaWNvbi1sYWJlbC9pY29uLWxhYmVsLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1tc2RhL2xpYi9hbmd1bGFyLW1zZGEubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcmUgbW9kdWxlc1xyXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG4vLyBBbmd1bGFyLW1hdGVyaWFsIGNvbXBvbmVudHMgbW9kdWxlc1xyXG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQge01hdEV4cGFuc2lvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZXhwYW5zaW9uJztcclxuaW1wb3J0IHtNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XHJcbmltcG9ydCB7TWF0VGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcclxuaW1wb3J0IHtNYXRQYWdpbmF0b3JNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XHJcbmltcG9ydCB7TWF0U29ydE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XHJcbmltcG9ydCB7TWF0U2xpZGVUb2dnbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlLXRvZ2dsZSc7XHJcbmltcG9ydCB7TWF0RGlhbG9nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQge01hdFNpZGVuYXZNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xyXG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XHJcbmltcG9ydCB7TWF0U3RlcHBlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc3RlcHBlcic7XHJcbmltcG9ydCB7TWF0RGF0ZXBpY2tlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7TWF0TmF0aXZlRGF0ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQge01hdENoaXBzTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XHJcbmltcG9ydCB7TWF0VG9vbHRpcE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XHJcbmltcG9ydCB7TWF0TWVudU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XHJcbmltcG9ydCB7TWF0UHJvZ3Jlc3NCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgLy8gY29yZSBtb2R1bGVzXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG5cclxuICAgICAgICAvLyBhbmd1bGFyLW1hdGVyaWFsIGNvbXBvbmVudHMgbW9kdWxlc1xyXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgICAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgICAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuICAgICAgICBNYXRTZWxlY3RNb2R1bGUsXHJcbiAgICAgICAgTWF0VGFibGVNb2R1bGUsXHJcbiAgICAgICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxyXG4gICAgICAgIE1hdFNvcnRNb2R1bGUsXHJcbiAgICAgICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcbiAgICAgICAgTWF0RGlhbG9nTW9kdWxlLFxyXG4gICAgICAgIE1hdFNpZGVuYXZNb2R1bGUsXHJcbiAgICAgICAgTWF0Q2hlY2tib3hNb2R1bGUsXHJcbiAgICAgICAgTWF0U3RlcHBlck1vZHVsZSxcclxuICAgICAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxyXG4gICAgICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXHJcbiAgICAgICAgTWF0Q2hpcHNNb2R1bGUsXHJcbiAgICAgICAgTWF0VG9vbHRpcE1vZHVsZSxcclxuICAgICAgICBNYXRNZW51TW9kdWxlLFxyXG4gICAgICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICAvLyBjb3JlIG1vZHVsZXNcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcblxyXG4gICAgICAgIC8vIGFuZ3VsYXItbWF0ZXJpYWwgY29tcG9uZW50cyBtb2R1bGVzXHJcbiAgICAgICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICAgICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxyXG4gICAgICAgIE1hdFNlbGVjdE1vZHVsZSxcclxuICAgICAgICBNYXRUYWJsZU1vZHVsZSxcclxuICAgICAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXHJcbiAgICAgICAgTWF0U29ydE1vZHVsZSxcclxuICAgICAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuICAgICAgICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgICAgICAgTWF0U2lkZW5hdk1vZHVsZSxcclxuICAgICAgICBNYXRDaGVja2JveE1vZHVsZSxcclxuICAgICAgICBNYXRTdGVwcGVyTW9kdWxlLFxyXG4gICAgICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcbiAgICAgICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcclxuICAgICAgICBNYXRDaGlwc01vZHVsZSxcclxuICAgICAgICBNYXRUb29sdGlwTW9kdWxlLFxyXG4gICAgICAgIE1hdE1lbnVNb2R1bGUsXHJcbiAgICAgICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGVcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdE1vZHVsZSB7XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtc2RhLWljb24nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ljb24uaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9pY29uLnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAncm9sZSc6ICdpbWcnLFxyXG4gICAgICAgICdjbGFzcyc6ICdtc2RhLWljb24nXHJcbiAgICB9LFxyXG4gICAgZXhwb3J0QXM6ICdNU0RBSWNvbicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNU0RBSWNvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgQElucHV0KCduYW1lJylcclxuICAgIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlTmFtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgnd2lkdGgnKVxyXG4gICAgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl93aWR0aCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVdpZHRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCdoZWlnaHQnKVxyXG4gICAgc2V0IGhlaWdodCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlSGVpZ2h0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCdjb2xvcicpXHJcbiAgICBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlQ29sb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoJ3NoYWRvdycpXHJcbiAgICBzZXQgc2hhZG93KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zaGFkb3dMZXZlbCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVNoYWRvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ3N2ZycpXHJcbiAgICBwcml2YXRlIF9zdmdFbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcclxuXHJcbiAgICBAVmlld0NoaWxkKCd1c2UnKVxyXG4gICAgcHJpdmF0ZSBfdXNlRWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XHJcblxyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlciA9IDI0O1xyXG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXIgPSAyNDtcclxuICAgIHByaXZhdGUgX2NvbG9yOiBzdHJpbmcgPSAnIzAwMDAwMCc7XHJcbiAgICBwcml2YXRlIF9zaGFkb3dMZXZlbDogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZU5hbWUoKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVXaWR0aCgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUhlaWdodCgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbG9yKCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlU2hhZG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlTmFtZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fbmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLl91c2VFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgYC9hc3NldHMvaWNvbnMuc3ZnIyR7dGhpcy5fbmFtZX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlV2lkdGgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3dpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3RoaXMuX3dpZHRofXB4YDtcclxuICAgICAgICAgICAgdGhpcy5fc3ZnRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB0aGlzLl93aWR0aC50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlSGVpZ2h0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke3RoaXMuX2hlaWdodH1weGA7XHJcbiAgICAgICAgICAgIHRoaXMuX3N2Z0VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHRoaXMuX2hlaWdodC50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlQ29sb3IoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLl9oZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICB0aGlzLl9zdmdFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdmaWxsJywgdGhpcy5fY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVTaGFkb3coKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NoYWRvd0xldmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N2Z0VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYG1zZGEtc2hhZG93LSR7dGhpcy5fc2hhZG93TGV2ZWx9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TVNEQUljb259IGZyb20gJy4uL2ljb24vaWNvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXNkYS1wbGF0ZS1pY29uJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9wbGF0ZS1pY29uLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcGxhdGUtaWNvbi5zY3NzJ10sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAncm9sZSc6ICdpbWcnLFxyXG4gICAgICAgICdjbGFzcyc6ICdtc2RhLXBsYXRlLWljb24nXHJcbiAgICB9LFxyXG4gICAgZXhwb3J0QXM6ICdNU0RBUGxhdGVJY29uJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1TREFQbGF0ZUljb24gaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBJbnB1dCgnbmFtZScpXHJcbiAgICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZU5hbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoJ3dpZHRoJylcclxuICAgIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fd2lkdGggPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl91cGRhdGVXaWR0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgnaGVpZ2h0JylcclxuICAgIHNldCBoZWlnaHQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUhlaWdodCgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgnY29sb3InKVxyXG4gICAgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbG9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCdiYWNrZ3JvdW5kJylcclxuICAgIHNldCBiYWNrZ3JvdW5kKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlQmFja2dyb3VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgnc2hhZG93JylcclxuICAgIHNldCBzaGFkb3codmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NoYWRvdyA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVNoYWRvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgndHlwZScpXHJcbiAgICBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVR5cGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBAVmlld0NoaWxkKCd3cmFwcGVyJylcclxuICAgIHByaXZhdGUgX3dyYXBwZXJSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2JhY2tncm91bmQnKVxyXG4gICAgcHJpdmF0ZSBfYmFja2dyb3VuZFJlZjogTVNEQUljb247XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnaWNvbicpXHJcbiAgICBwcml2YXRlIF9pY29uUmVmOiBNU0RBSWNvbjtcclxuXHJcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyID0gMjQ7XHJcbiAgICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlciA9IDI0O1xyXG4gICAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZyA9ICcjRkZGRkZGJztcclxuICAgIHByaXZhdGUgX2JhY2tncm91bmQ6IHN0cmluZyA9ICcjRUE4NTREJztcclxuICAgIHByaXZhdGUgX3NoYWRvdzogbnVtYmVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3R5cGU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZU5hbWUoKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVXaWR0aCgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUhlaWdodCgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbG9yKCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlQmFja2dyb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVNoYWRvdygpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVR5cGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVOYW1lKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9uYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ljb25SZWYubmFtZSA9IHRoaXMuX25hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZVdpZHRoKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl93aWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl93cmFwcGVyUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSB0aGlzLl93aWR0aCArICdweCc7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhY2tncm91bmRSZWYud2lkdGggPSB0aGlzLl93aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5faWNvblJlZi53aWR0aCA9IHRoaXMuX3dpZHRoIC0gKHRoaXMuX3dpZHRoIC8gMyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZUhlaWdodCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5faGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dyYXBwZXJSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLl9oZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kUmVmLmhlaWdodCA9IHRoaXMuX2hlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5faWNvblJlZi5oZWlnaHQgPSB0aGlzLl9oZWlnaHQgLSAodGhpcy5faGVpZ2h0IC8gMyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZUNvbG9yKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9jb2xvcikge1xyXG4gICAgICAgICAgICB0aGlzLl9pY29uUmVmLmNvbG9yID0gdGhpcy5fY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZUJhY2tncm91bmQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2JhY2tncm91bmQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmFja2dyb3VuZFJlZi5jb2xvciA9IHRoaXMuX2JhY2tncm91bmQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZVNoYWRvdygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fc2hhZG93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhY2tncm91bmRSZWYuc2hhZG93ID0gdGhpcy5fc2hhZG93O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVUeXBlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl90eXBlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhY2tncm91bmRSZWYubmFtZSA9IHRoaXMuX3R5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gICAgRXZlbnRFbWl0dGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXNkYS1jYXJkLWJ1dHRvbicsXHJcbiAgICBleHBvcnRBczogJ01TREFDYXJkQnV0dG9uJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jYXJkLWJ1dHRvbi5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NhcmQtYnV0dG9uLnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnY2xhc3MnOiAnbXNkYS1jYXJkLWJ1dHRvbicsXHJcbiAgICAgICAgJyhjbGljayknOiAnaG9zdENsaWNrKCRldmVudCknXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNU0RBQ2FyZEJ1dHRvbiB7XHJcblxyXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcclxuXHJcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmcgPSAnaWNvbi00JztcclxuICAgIEBJbnB1dCgpIGljb25UeXBlOiBzdHJpbmcgPSAnc3F1YXJlJztcclxuICAgIEBJbnB1dCgpIGljb25Db2xvcjogc3RyaW5nID0gJyNGRkZGRkYnO1xyXG4gICAgQElucHV0KCkgaWNvbkJhY2tncm91bmRDb2xvcjogc3RyaW5nID0gJyNFQTg1NEQnO1xyXG5cclxuICAgIEBJbnB1dCgpIGRyYWdnYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBob3N0Q2xpY2soZTogRXZlbnQpIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbkNsaWNrLmVtaXQoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUhhbmRsZXJDbGljayhlOiBFdmVudCkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIENvbXBvbmVudCxcclxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgQWZ0ZXJWaWV3SW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBqUXVlcnk6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtc2RhLWNhcmQtYnV0dG9ucy1jb250YWluZXInLFxyXG4gICAgZXhwb3J0QXM6ICdNU0RBQ2FyZEJ1dHRvbnNDb250YWluZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtYnV0dG9ucy1jb250YWluZXIuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jYXJkLWJ1dHRvbnMtY29udGFpbmVyLnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAncm9sZSc6ICdidXR0b24nLFxyXG4gICAgICAgICdjbGFzcyc6ICdtc2RhLWNhcmQtYnV0dG9ucy1jb250YWluZXInXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNU0RBQ2FyZEJ1dHRvbnNDb250YWluZXIgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgICBASW5wdXQoKSByb3c6IG51bWJlciA9IDM7XHJcbiAgICBASW5wdXQoKSBjb2x1bW46IG51bWJlciA9IDM7XHJcblxyXG4gICAgQElucHV0KCkgZHJhZ0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBASW5wdXQoKSBkYXRhU291cmNlOiBhbnkgPSBbXTtcclxuXHJcbiAgICBAT3V0cHV0KCkgc29ydHVwZGF0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgYnV0dG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgICBnZXQgZ3JpZFRlbXBsYXRlQ29sdW1ucygpIHtcclxuICAgICAgICByZXR1cm4gJzFmciAnLnJlcGVhdCh0aGlzLmNvbHVtbikudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5kcmFnRW5hYmxlZCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5tc2RhLWNhcmQtYnV0dG9ucy1jb250YWluZXItaW5uZXInLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50KS5zb3J0YWJsZSh7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGU6ICcubXNkYS1jYXJkLWJ1dHRvbi1tb3ZlLWhhbmRsZXInXHJcbiAgICAgICAgICAgIH0pLmJpbmQoJ3NvcnR1cGRhdGUnLCAoZXZlbnQsIHVpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnR1cGRhdGUuZW1pdCh7IGV2ZW50LCB1aSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gICAgRXZlbnRFbWl0dGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXNkYS1iYW5uZXItYnV0dG9uJyxcclxuICAgIGV4cG9ydEFzOiAnTVNEQUJhbm5lckJ1dHRvbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYmFubmVyLWJ1dHRvbi5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2Jhbm5lci1idXR0b24uc2NzcyddLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgaG9zdDogeyAnY2xhc3MnOiAnbXNkYS1iYW5uZXItYnV0dG9uIG1zZGEtYm9keS0yJyB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNU0RBQmFubmVyQnV0dG9uIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEljb24gbmFtZVxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbWFnZSBVUkxcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgaW1hZ2U6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJhbm5lciB0aXRsZVxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW1hZ2UgdGV4dFxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXRlIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSBkYXRlOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJY29uIGFuZCBcInJlYWQgbW9yZVwiIHRleHQgY29sb3JcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgY29sb3I6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlYWQgbW9yZSB0ZXh0XHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIHJlYWRNb3JlVGV4dDogc3RyaW5nID0gJ8OhwoPClcOhwoPCoMOhwoPCqsOhwoPCmsOhwoPCkMOhwoPCkyAuLi4nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnV0dG9uIGNsaWNrIGV2ZW50IGVtaXR0ZXJcclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXNkYS1wYWdpbmF0b3InLFxyXG4gICAgZXhwb3J0QXM6ICdNU0RBUGFnaW5hdG9yJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmF0b3IuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9wYWdpbmF0b3Iuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNU0RBUGFnaW5hdG9yIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgpIGl0ZW1zUGVyUGFnZTogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgdG90YWxJdGVtczogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgaXRlbXNQZXJQYWdlQ29uZmlnOiBudW1iZXJbXTtcclxuXHJcbiAgICBAT3V0cHV0KCkgcGFnZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgcGFnZUNvbmZpZ0NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY3VycmVudFBhZ2VJbmRleDogbnVtYmVyID0gMTtcclxuICAgIG51bWJlck9mVG90YWxQYWdlczogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX3BhZ2VFdmVudERhdGE6IG9iamVjdCA9IHtcclxuICAgICAgICBwYWdlSW5kZXg6IHRoaXMuY3VycmVudFBhZ2VJbmRleCxcclxuICAgICAgICBwYWdlU2l6ZTogbnVsbFxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZlRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodGhpcy50b3RhbEl0ZW1zIC8gdGhpcy5pdGVtc1BlclBhZ2UpO1xyXG4gICAgICAgIHRoaXMuX3BhZ2VFdmVudERhdGFbJ3BhZ2VTaXplJ10gPSB0aGlzLml0ZW1zUGVyUGFnZUNvbmZpZ1swXTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmV4dFBhZ2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2VJbmRleCA8IHRoaXMubnVtYmVyT2ZUb3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhZ2VFdmVudERhdGFbJ3BhZ2VJbmRleCddID0gKyt0aGlzLmN1cnJlbnRQYWdlSW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZS5lbWl0KHRoaXMuX3BhZ2VFdmVudERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91c1BhZ2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2VJbmRleCA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGFnZUV2ZW50RGF0YVsncGFnZUluZGV4J10gPSAtLXRoaXMuY3VycmVudFBhZ2VJbmRleDtcclxuICAgICAgICAgICAgdGhpcy5wYWdlLmVtaXQodGhpcy5fcGFnZUV2ZW50RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUb1RoZVJlcXVlc3RlZFBhZ2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2VJbmRleCA+PSAxICYmIHRoaXMuY3VycmVudFBhZ2VJbmRleCA8PSB0aGlzLm51bWJlck9mVG90YWxQYWdlcykge1xyXG4gICAgICAgICAgICB0aGlzLl9wYWdlRXZlbnREYXRhWydwYWdlSW5kZXgnXSA9IHRoaXMuY3VycmVudFBhZ2VJbmRleDtcclxuICAgICAgICAgICAgdGhpcy5wYWdlLmVtaXQodGhpcy5fcGFnZUV2ZW50RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0aW9uQ2hhbmdlKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBwYXJzZUludChlLnNyY0VsZW1lbnRbJ3ZhbHVlJ10sIDEwKTtcclxuICAgICAgICB0aGlzLl9wYWdlRXZlbnREYXRhWydwYWdlU2l6ZSddID0gdGhpcy5pdGVtc1BlclBhZ2U7XHJcblxyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZUb3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRoaXMudG90YWxJdGVtcyAvIHRoaXMuaXRlbXNQZXJQYWdlKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYWdlLmVtaXQodGhpcy5fcGFnZUV2ZW50RGF0YSk7XHJcbiAgICAgICAgdGhpcy5wYWdlQ29uZmlnQ2hhbmdlLmVtaXQodGhpcy5pdGVtc1BlclBhZ2UpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXNkYS1tZW51LWJ1dHRvbicsXHJcbiAgICBleHBvcnRBczogJ01TREFNZW51QnV0dG9uJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9tZW51LWJ1dHRvbi5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL21lbnUtYnV0dG9uLnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1TREFNZW51QnV0dG9uIHtcclxuXHJcbiAgICBASW5wdXQoJ2FjdGl2ZScpIGFjdGl2ZTogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgndGV4dCcpIHRleHQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgnbm90aWZDb3VudGVyJykgbm90aWZDb3VudGVyOiBudW1iZXI7XHJcblxyXG4gICAgQE91dHB1dCgpIGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBvbkNsaWNrKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5jbGljay5uZXh0KGUpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXNkYS1idXR0b24nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIHR5cGUgPSAnYnV0dG9uJztcclxuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcHVibGljIHNob3dMb2FkaW5nOiBCb29sZWFuO1xyXG5cclxuXHJcbiAgICBAT3V0cHV0KCkgY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogRXZlbnQpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuY2xpY2suZW1pdChlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIEhvc3RMaXN0ZW5lclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21zZGEtdG9hc3QnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RvYXN0Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdG9hc3Quc2NzcyddLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAgIGV4cG9ydEFzOiAnTVNEQVRvYXMnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTVNEQVRvYXN0IHtcclxuXHJcbiAgICBASW5wdXQoKSBodG1sOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBkaXNtaXNzOiAoKSA9PiB2b2lkO1xyXG5cclxuICAgIEBPdXRwdXQoKSBsaW5rQ2xpY2s6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIGNsaWNrKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCg8SFRNTEVsZW1lbnQ+ZS50YXJnZXQpLmNsYXNzTGlzdC5jb250YWlucygnbXNkYS1saW5rJykpIHRoaXMubGlua0NsaWNrLmVtaXQoZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIEluamVjdGFibGUsXHJcbiAgICBJbmplY3RvcixcclxuICAgIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIEVtYmVkZGVkVmlld1JlZixcclxuICAgIEFwcGxpY2F0aW9uUmVmLFxyXG4gICAgQ29tcG9uZW50UmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNU0RBVG9hc3QgfSBmcm9tICcuL3RvYXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBNU0RBVG9hc3RDb25maWcge1xyXG4gICAgb25DbG9zZT89ICgpID0+IHsgfTtcclxuICAgIGxpbmtDbGljaz89IChlOiBFdmVudCkgPT4geyB9O1xyXG4gICAgY2xvc2VBZnRlcj89IDMwMDA7XHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNU0RBVG9hc3RTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIF9jb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxNU0RBVG9hc3Q+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxyXG4gICAgICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHNob3dIdG1sKGh0bWw6IHN0cmluZywgdXNlckNvbmZpZz86IE1TREFUb2FzdENvbmZpZykge1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHsgLi4ubmV3IE1TREFUb2FzdENvbmZpZygpLCAuLi51c2VyQ29uZmlnIH07XHJcblxyXG4gICAgICAgIC8vIDEuIENyZWF0ZSBhIGNvbXBvbmVudCByZWZlcmVuY2UgZnJvbSB0aGUgY29tcG9uZW50XHJcbiAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxuICAgICAgICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KE1TREFUb2FzdClcclxuICAgICAgICAgICAgLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlLmh0bWwgPSBodG1sO1xyXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZS5saW5rQ2xpY2suc3Vic2NyaWJlKChlOiBFdmVudCkgPT4gY29uZmlnLmxpbmtDbGljayhlKSk7XHJcbiAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlLmRpc21pc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZS5saW5rQ2xpY2sudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgdGhpcy5hcHBSZWYuZGV0YWNoVmlldyh0aGlzLl9jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBjb25maWcub25DbG9zZSgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIDIuIEF0dGFjaCBjb21wb25lbnQgdG8gdGhlIGFwcFJlZiBzbyB0aGF0IGl0J3MgaW5zaWRlIHRoZSBuZyBjb21wb25lbnQgdHJlZVxyXG4gICAgICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcodGhpcy5fY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuXHJcbiAgICAgICAgLy8gMy4gR2V0IERPTSBlbGVtZW50IGZyb20gY29tcG9uZW50XHJcbiAgICAgICAgY29uc3QgZG9tRWxlbSA9ICh0aGlzLl9jb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXHJcbiAgICAgICAgICAgIC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIC8vIDQuIEFwcGVuZCBET00gZWxlbWVudCB0byB0aGUgYm9keVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRWxlbSk7XHJcblxyXG4gICAgICAgIC8vIDUuIFdhaXQgc29tZSB0aW1lIGFuZCByZW1vdmUgaXQgZnJvbSB0aGUgY29tcG9uZW50IHRyZWUgYW5kIGZyb20gdGhlIERPTVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlLmRpc21pc3MoKSwgY29uZmlnLmNsb3NlQWZ0ZXIpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2FuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXNkYS1tb2R1bGUtY2FyZCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbW9kdWxlLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbW9kdWxlLWNhcmQuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGFuaW1hdGlvbnM6IFtcclxuICAgICAgICB0cmlnZ2VyKCdmbGlwU3RhdGUnLCBbXHJcbiAgICAgICAgICAgIHN0YXRlKCdhY3RpdmUnLCBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGVYKDE4MGRlZyknXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlWCgwKScsXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgYW5pbWF0ZSgnNTAwbXMgZWFzZS1vdXQnKSksXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIGFuaW1hdGUoJzUwMG1zIGVhc2UtaW4nKSlcclxuICAgICAgICBdKVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kdWxlQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICAvKipcclxuICAgICAqIEljb24gbmFtZVxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJY29uIGNvbG9yXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB0aXRsZVxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogd2FybmluZ1xyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSB3YXJuOiBCb29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2FyZCBjbGljayBldmVudCBlbWl0dGVyXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBjbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZW1vdmUgaWNvbiBjbGljayBldmVudCBlbWl0dGVyXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSByZW1vdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGZsaXA6IHN0cmluZyA9ICdpbmFjdGl2ZSc7XHJcbiAgICBpc0hvdmVyZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogRXZlbnQpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuY2xpY2suZW1pdChlKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlbW92ZShlOiBFdmVudCkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUuZW1pdChlKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVGbGlwKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLmZsaXAgPSAodGhpcy5mbGlwID09ICdpbmFjdGl2ZScpID8gJ2FjdGl2ZScgOiAnaW5hY3RpdmUnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VFbnRlcigkZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmlzSG92ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mbGlwQmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VMZWF2ZSgkZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmlzSG92ZXJlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZmxpcEJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBmbGlwQmFjaygpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSG92ZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbGlwID0gJ2luYWN0aXZlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXNkYS1pY29uLWxhYmVsJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9pY29uLWxhYmVsLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2ljb24tbGFiZWwuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSWNvbkxhYmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIC8qKlxyXG4gICAgICogSWNvbiBuYW1lXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbG9yXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB0ZXh0XHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIGNsaWNrIGV2ZW50IGVtaXR0ZXJcclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlbW92ZSBpY29uIGNsaWNrIGV2ZW50IGVtaXR0ZXJcclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlbW92ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBFdmVudCkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5jbGljay5lbWl0KGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVtb3ZlKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnJlbW92ZS5lbWl0KGUpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuLy8gQW5ndWxhciBNYXRlcmlhbCBtb2R1bGVcclxuaW1wb3J0IHtNYXRNb2R1bGV9IGZyb20gJy4vbWF0Lm1vZHVsZSc7XHJcblxyXG4vLyBtc2RhIGNvbXBvbmVudHNcclxuaW1wb3J0IHtNU0RBSWNvbn0gZnJvbSAnLi9pY29uL2ljb24nO1xyXG5pbXBvcnQge01TREFQbGF0ZUljb259IGZyb20gJy4vcGxhdGUtaWNvbi9wbGF0ZS1pY29uJztcclxuaW1wb3J0IHtNU0RBQ2FyZEJ1dHRvbn0gZnJvbSAnLi9jYXJkLWJ1dHRvbi9jYXJkLWJ1dHRvbic7XHJcbmltcG9ydCB7TVNEQUNhcmRCdXR0b25zQ29udGFpbmVyfSBmcm9tICcuL2NhcmQtYnV0dG9uL2NhcmQtYnV0dG9ucy1jb250YWluZXInO1xyXG5pbXBvcnQge01TREFCYW5uZXJCdXR0b259IGZyb20gJy4vYmFubmVyLWJ1dHRvbi9iYW5uZXItYnV0dG9uJztcclxuaW1wb3J0IHtNU0RBUGFnaW5hdG9yfSBmcm9tICcuL3BhZ2luYXRvci9wYWdpbmF0b3InO1xyXG5pbXBvcnQge01TREFNZW51QnV0dG9ufSBmcm9tICcuL21lbnUtYnV0dG9uL21lbnUtYnV0dG9uJztcclxuaW1wb3J0IHtCdXR0b25Db21wb25lbnR9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge01TREFUb2FzdH0gZnJvbSAnLi90b2FzdC90b2FzdCc7XHJcbmltcG9ydCB7TVNEQVRvYXN0U2VydmljZX0gZnJvbSAnLi90b2FzdC90b2FzdC5zZXJ2aWNlJztcclxuaW1wb3J0IHtNb2R1bGVDYXJkQ29tcG9uZW50fSBmcm9tICcuL21vZHVsZS1jYXJkL21vZHVsZS1jYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SWNvbkxhYmVsQ29tcG9uZW50fSBmcm9tICcuL2ljb24tbGFiZWwvaWNvbi1sYWJlbC5jb21wb25lbnQnO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgLy8gbXNkYSBjb21wb25lbnRzXHJcbiAgICAgICAgTVNEQUljb24sXHJcbiAgICAgICAgTVNEQVBsYXRlSWNvbixcclxuICAgICAgICBNU0RBQ2FyZEJ1dHRvbixcclxuICAgICAgICBNU0RBQ2FyZEJ1dHRvbnNDb250YWluZXIsXHJcbiAgICAgICAgTVNEQUJhbm5lckJ1dHRvbixcclxuICAgICAgICBNU0RBUGFnaW5hdG9yLFxyXG4gICAgICAgIE1TREFNZW51QnV0dG9uLFxyXG4gICAgICAgIE1TREFUb2FzdCxcclxuICAgICAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICAgICAgTW9kdWxlQ2FyZENvbXBvbmVudCxcclxuICAgICAgICBJY29uTGFiZWxDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG5cclxuICAgICAgICBNYXRNb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgLy8gbXNkYSBjb21wb25lbnRzXHJcbiAgICAgICAgTVNEQUljb24sXHJcbiAgICAgICAgTVNEQVBsYXRlSWNvbixcclxuICAgICAgICBNU0RBQ2FyZEJ1dHRvbixcclxuICAgICAgICBNU0RBQ2FyZEJ1dHRvbnNDb250YWluZXIsXHJcbiAgICAgICAgTVNEQUJhbm5lckJ1dHRvbixcclxuICAgICAgICBNU0RBUGFnaW5hdG9yLFxyXG4gICAgICAgIE1TREFNZW51QnV0dG9uLFxyXG4gICAgICAgIE1TREFUb2FzdCxcclxuICAgICAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICAgICAgTW9kdWxlQ2FyZENvbXBvbmVudCxcclxuICAgICAgICBJY29uTGFiZWxDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgICAgICBNU0RBVG9hc3RcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBNU0RBVG9hc3RTZXJ2aWNlXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFyTXNkYU1vZHVsZSB7XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0SW5wdXRNb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiTWF0RXhwYW5zaW9uTW9kdWxlIiwiTWF0U2VsZWN0TW9kdWxlIiwiTWF0VGFibGVNb2R1bGUiLCJNYXRQYWdpbmF0b3JNb2R1bGUiLCJNYXRTb3J0TW9kdWxlIiwiTWF0U2xpZGVUb2dnbGVNb2R1bGUiLCJNYXREaWFsb2dNb2R1bGUiLCJNYXRTaWRlbmF2TW9kdWxlIiwiTWF0Q2hlY2tib3hNb2R1bGUiLCJNYXRTdGVwcGVyTW9kdWxlIiwiTWF0RGF0ZXBpY2tlck1vZHVsZSIsIk1hdE5hdGl2ZURhdGVNb2R1bGUiLCJNYXRDaGlwc01vZHVsZSIsIk1hdFRvb2x0aXBNb2R1bGUiLCJNYXRNZW51TW9kdWxlIiwiTWF0UHJvZ3Jlc3NCYXJNb2R1bGUiLCJDb21wb25lbnQiLCJWaWV3RW5jYXBzdWxhdGlvbiIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiRWxlbWVudFJlZiIsIklucHV0IiwiVmlld0NoaWxkIiwiRXZlbnRFbWl0dGVyIiwiT3V0cHV0IiwiSG9zdExpc3RlbmVyIiwiSW5qZWN0YWJsZSIsIkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciIsIkFwcGxpY2F0aW9uUmVmIiwiSW5qZWN0b3IiLCJ0cmlnZ2VyIiwic3RhdGUiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJhbmltYXRlIiwiRm9ybXNNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBMkJBO1NBc0RDOztvQkF0REFBLGFBQVEsU0FBQzt3QkFDTixPQUFPLEVBQUU7OzRCQUVMQyxtQkFBWTs7NEJBR1pDLHNCQUFlOzRCQUNmQyxvQkFBYzs0QkFDZEMsa0JBQWE7NEJBQ2JDLDRCQUFrQjs0QkFDbEJDLHNCQUFlOzRCQUNmQyxvQkFBYzs0QkFDZEMsNEJBQWtCOzRCQUNsQkMsa0JBQWE7NEJBQ2JDLGdDQUFvQjs0QkFDcEJDLHNCQUFlOzRCQUNmQyx3QkFBZ0I7NEJBQ2hCQywwQkFBaUI7NEJBQ2pCQyx3QkFBZ0I7NEJBQ2hCQyw4QkFBbUI7NEJBQ25CQyw0QkFBbUI7NEJBQ25CQyxvQkFBYzs0QkFDZEMsd0JBQWdCOzRCQUNoQkMsa0JBQWE7NEJBQ2JDLGdDQUFvQjt5QkFDdkI7d0JBQ0QsWUFBWSxFQUFFLEVBQUU7d0JBQ2hCLE9BQU8sRUFBRTs7NEJBRUxuQixtQkFBWTs7NEJBR1pDLHNCQUFlOzRCQUNmQyxvQkFBYzs0QkFDZEMsa0JBQWE7NEJBQ2JDLDRCQUFrQjs0QkFDbEJDLHNCQUFlOzRCQUNmQyxvQkFBYzs0QkFDZEMsNEJBQWtCOzRCQUNsQkMsa0JBQWE7NEJBQ2JDLGdDQUFvQjs0QkFDcEJDLHNCQUFlOzRCQUNmQyx3QkFBZ0I7NEJBQ2hCQywwQkFBaUI7NEJBQ2pCQyx3QkFBZ0I7NEJBQ2hCQyw4QkFBbUI7NEJBQ25CQyw0QkFBbUI7NEJBQ25CQyxvQkFBYzs0QkFDZEMsd0JBQWdCOzRCQUNoQkMsa0JBQWE7NEJBQ2JDLGdDQUFvQjt5QkFDdkI7cUJBQ0o7O1FBRUQsZ0JBQUM7S0F0REQ7Ozs7OztBQzNCQTtRQTBESSxrQkFBb0IsV0FBb0M7WUFBcEMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1lBTGhELFdBQU0sR0FBVyxFQUFFLENBQUM7WUFDcEIsWUFBTyxHQUFXLEVBQUUsQ0FBQztZQUNyQixXQUFNLEdBQVcsU0FBUyxDQUFDO1lBQzNCLGlCQUFZLEdBQVcsSUFBSSxDQUFDO1NBR25DO1FBM0NELHNCQUNJLDBCQUFJOzs7O2dCQURSLFVBQ1MsS0FBYTtnQkFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN0Qjs7O1dBQUE7UUFFRCxzQkFDSSwyQkFBSzs7OztnQkFEVCxVQUNVLEtBQWE7Z0JBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDdkI7OztXQUFBO1FBRUQsc0JBQ0ksNEJBQU07Ozs7Z0JBRFYsVUFDVyxLQUFhO2dCQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3hCOzs7V0FBQTtRQUVELHNCQUNJLDJCQUFLOzs7O2dCQURULFVBQ1UsS0FBYTtnQkFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN2Qjs7O1dBQUE7UUFFRCxzQkFDSSw0QkFBTTs7OztnQkFEVixVQUNXLEtBQWE7Z0JBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDeEI7OztXQUFBOzs7O1FBaUJELDJCQUFROzs7WUFBUjtnQkFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN4Qjs7OztRQUVPLDhCQUFXOzs7WUFBbkI7Z0JBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUNaLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsdUJBQXFCLElBQUksQ0FBQyxLQUFPLENBQUMsQ0FBQztpQkFDN0Y7YUFDSjs7OztRQUVPLCtCQUFZOzs7WUFBcEI7Z0JBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQU0sSUFBSSxDQUFDLE1BQU0sT0FBSSxDQUFDO29CQUNoRSxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztpQkFDbkY7YUFDSjs7OztRQUVPLGdDQUFhOzs7WUFBckI7Z0JBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQU0sSUFBSSxDQUFDLE9BQU8sT0FBSSxDQUFDO29CQUNsRSxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztpQkFDckY7YUFDSjs7OztRQUVPLCtCQUFZOzs7WUFBcEI7Z0JBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQU0sSUFBSSxDQUFDLE9BQU8sT0FBSSxDQUFDO29CQUNsRSxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDdkU7YUFDSjs7OztRQUVPLGdDQUFhOzs7WUFBckI7Z0JBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO29CQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGlCQUFlLElBQUksQ0FBQyxZQUFjLENBQUMsQ0FBQztpQkFDL0Y7YUFDSjs7b0JBbEdKQyxjQUFTLFNBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLDREQUEwQjt3QkFFMUIsYUFBYSxFQUFFQyxzQkFBaUIsQ0FBQyxJQUFJO3dCQUNyQyxlQUFlLEVBQUVDLDRCQUF1QixDQUFDLE1BQU07d0JBQy9DLElBQUksRUFBRTs0QkFDRixNQUFNLEVBQUUsS0FBSzs0QkFDYixPQUFPLEVBQUUsV0FBVzt5QkFDdkI7d0JBQ0QsUUFBUSxFQUFFLFVBQVU7O3FCQUN2Qjs7Ozs7d0JBYm9EQyxlQUFVOzs7OzJCQWdCMURDLFVBQUssU0FBQyxNQUFNOzRCQU1aQSxVQUFLLFNBQUMsT0FBTzs2QkFNYkEsVUFBSyxTQUFDLFFBQVE7NEJBTWRBLFVBQUssU0FBQyxPQUFPOzZCQU1iQSxVQUFLLFNBQUMsUUFBUTtxQ0FNZEMsY0FBUyxTQUFDLEtBQUs7cUNBR2ZBLGNBQVMsU0FBQyxLQUFLOztRQW9EcEIsZUFBQztLQW5HRDs7Ozs7O0FDRkE7UUEyRUksdUJBQW9CLFdBQW9DO1lBQXBDLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtZQVBoRCxXQUFNLEdBQVcsRUFBRSxDQUFDO1lBQ3BCLFlBQU8sR0FBVyxFQUFFLENBQUM7WUFDckIsV0FBTSxHQUFXLFNBQVMsQ0FBQztZQUMzQixnQkFBVyxHQUFXLFNBQVMsQ0FBQztZQUNoQyxZQUFPLEdBQVcsSUFBSSxDQUFDO1NBSTlCO1FBNURELHNCQUNJLCtCQUFJOzs7O2dCQURSLFVBQ1MsS0FBYTtnQkFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN0Qjs7O1dBQUE7UUFFRCxzQkFDSSxnQ0FBSzs7OztnQkFEVCxVQUNVLEtBQWE7Z0JBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDdkI7OztXQUFBO1FBRUQsc0JBQ0ksaUNBQU07Ozs7Z0JBRFYsVUFDVyxLQUFhO2dCQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3hCOzs7V0FBQTtRQUVELHNCQUNJLGdDQUFLOzs7O2dCQURULFVBQ1UsS0FBYTtnQkFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN2Qjs7O1dBQUE7UUFFRCxzQkFDSSxxQ0FBVTs7OztnQkFEZCxVQUNlLEtBQWE7Z0JBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUM1Qjs7O1dBQUE7UUFFRCxzQkFDSSxpQ0FBTTs7OztnQkFEVixVQUNXLEtBQWE7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDeEI7OztXQUFBO1FBRUQsc0JBQ0ksK0JBQUk7Ozs7Z0JBRFIsVUFDUyxLQUFhO2dCQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3RCOzs7V0FBQTs7OztRQXNCRCxnQ0FBUTs7O1lBQVI7Z0JBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdEI7Ozs7UUFFTyxtQ0FBVzs7O1lBQW5CO2dCQUNJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUNuQzthQUNKOzs7O1FBRU8sb0NBQVk7OztZQUFwQjtnQkFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDaEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUN6RDthQUNKOzs7O1FBRU8scUNBQWE7OztZQUFyQjtnQkFDSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDbEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUM1RDthQUNKOzs7O1FBRU8sb0NBQVk7OztZQUFwQjtnQkFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztpQkFDckM7YUFDSjs7OztRQUVPLHlDQUFpQjs7O1lBQXpCO2dCQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztpQkFDaEQ7YUFDSjs7OztRQUVPLHFDQUFhOzs7WUFBckI7Z0JBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQzdDO2FBQ0o7Ozs7UUFFTyxtQ0FBVzs7O1lBQW5CO2dCQUNJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDWixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUN6QzthQUNKOztvQkFqSUpMLGNBQVMsU0FBQzt3QkFDUCxRQUFRLEVBQUUsaUJBQWlCO3dCQUMzQixxaEJBQWdDO3dCQUVoQyxlQUFlLEVBQUVFLDRCQUF1QixDQUFDLE1BQU07d0JBQy9DLElBQUksRUFBRTs0QkFDRixNQUFNLEVBQUUsS0FBSzs0QkFDYixPQUFPLEVBQUUsaUJBQWlCO3lCQUM3Qjt3QkFDRCxRQUFRLEVBQUUsZUFBZTs7cUJBQzVCOzs7Ozt3QkFib0RDLGVBQVU7Ozs7MkJBZ0IxREMsVUFBSyxTQUFDLE1BQU07NEJBTVpBLFVBQUssU0FBQyxPQUFPOzZCQU1iQSxVQUFLLFNBQUMsUUFBUTs0QkFNZEEsVUFBSyxTQUFDLE9BQU87aUNBTWJBLFVBQUssU0FBQyxZQUFZOzZCQU1sQkEsVUFBSyxTQUFDLFFBQVE7MkJBTWRBLFVBQUssU0FBQyxNQUFNO2tDQU1aQyxjQUFTLFNBQUMsU0FBUztxQ0FHbkJBLGNBQVMsU0FBQyxZQUFZOytCQUd0QkEsY0FBUyxTQUFDLE1BQU07O1FBc0VyQixvQkFBQztLQW5JRDs7Ozs7O0FDSEE7UUFTQTtZQWlCYSxTQUFJLEdBQVcsUUFBUSxDQUFDO1lBQ3hCLGFBQVEsR0FBVyxRQUFRLENBQUM7WUFDNUIsY0FBUyxHQUFXLFNBQVMsQ0FBQztZQUM5Qix3QkFBbUIsR0FBVyxTQUFTLENBQUM7WUFFeEMsY0FBUyxHQUFZLElBQUksQ0FBQztZQUV6QixnQkFBVyxHQUFzQixJQUFJQyxpQkFBWSxFQUFFLENBQUM7U0FVakU7Ozs7O1FBUkcsa0NBQVM7Ozs7WUFBVCxVQUFVLENBQVE7Z0JBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDNUI7Ozs7O1FBRUQseUNBQWdCOzs7O1lBQWhCLFVBQWlCLENBQVE7Z0JBQ3JCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN2Qjs7b0JBaENKTixjQUFTLFNBQUM7d0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIseW5DQUFpQzt3QkFFakMsYUFBYSxFQUFFQyxzQkFBaUIsQ0FBQyxJQUFJO3dCQUNyQyxlQUFlLEVBQUVDLDRCQUF1QixDQUFDLE1BQU07d0JBQy9DLElBQUksRUFBRTs0QkFDRixPQUFPLEVBQUUsa0JBQWtCOzRCQUMzQixTQUFTLEVBQUUsbUJBQW1CO3lCQUNqQzs7cUJBQ0o7Ozs0QkFHSUUsVUFBSzsyQkFDTEEsVUFBSzsyQkFFTEEsVUFBSzsrQkFDTEEsVUFBSztnQ0FDTEEsVUFBSzswQ0FDTEEsVUFBSztnQ0FFTEEsVUFBSztrQ0FFTEcsV0FBTTs7UUFVWCxxQkFBQztLQWxDRDs7Ozs7O0FDVEE7UUFxQ0ksa0NBQW9CLEdBQWU7WUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1lBVjFCLFFBQUcsR0FBVyxDQUFDLENBQUM7WUFDaEIsV0FBTSxHQUFXLENBQUMsQ0FBQztZQUVuQixnQkFBVyxHQUFZLEtBQUssQ0FBQztZQUU3QixlQUFVLEdBQVEsRUFBRSxDQUFDO1lBRXBCLGVBQVUsR0FBc0IsSUFBSUQsaUJBQVksRUFBRSxDQUFDO1lBQ25ELGdCQUFXLEdBQXNCLElBQUlBLGlCQUFZLEVBQUUsQ0FBQztTQUV0QjtRQUV4QyxzQkFBSSx5REFBbUI7OztnQkFBdkI7Z0JBQ0ksT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUM1Qzs7O1dBQUE7Ozs7UUFFRCxrREFBZTs7O1lBQWY7Z0JBQUEsaUJBUUM7Z0JBUEcsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNsQixNQUFNLENBQUMsb0NBQW9DLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUM7d0JBQzFFLE1BQU0sRUFBRSxnQ0FBZ0M7cUJBQzNDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFVBQUMsS0FBSyxFQUFFLEVBQUU7d0JBQzVCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsRUFBRSxJQUFBLEVBQUUsQ0FBQyxDQUFDO3FCQUN2QyxDQUFDLENBQUM7aUJBQ047YUFDSjs7b0JBdENKTixjQUFTLFNBQUM7d0JBQ1AsUUFBUSxFQUFFLDZCQUE2Qjt3QkFDdkMsUUFBUSxFQUFFLDBCQUEwQjt3QkFDcEMseWJBQTRDO3dCQUU1QyxhQUFhLEVBQUVDLHNCQUFpQixDQUFDLElBQUk7d0JBQ3JDLGVBQWUsRUFBRUMsNEJBQXVCLENBQUMsTUFBTTt3QkFDL0MsSUFBSSxFQUFFOzRCQUNGLE1BQU0sRUFBRSxRQUFROzRCQUNoQixPQUFPLEVBQUUsNkJBQTZCO3lCQUN6Qzs7cUJBQ0o7Ozs7O3dCQWpCR0MsZUFBVTs7OzswQkFvQlRDLFVBQUs7NkJBQ0xBLFVBQUs7a0NBRUxBLFVBQUs7aUNBRUxBLFVBQUs7aUNBRUxHLFdBQU07a0NBQ05BLFdBQU07O1FBa0JYLCtCQUFDO0tBeENEOzs7Ozs7QUNiQTtRQVNBOzs7O1lBNENhLGlCQUFZLEdBQVcsWUFBWSxDQUFDOzs7O1lBS25DLGdCQUFXLEdBQXNCLElBQUlELGlCQUFZLEVBQUUsQ0FBQztTQUVqRTs7b0JBbkRBTixjQUFTLFNBQUM7d0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjt3QkFDOUIsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsaTREQUFtQzt3QkFFbkMsYUFBYSxFQUFFQyxzQkFBaUIsQ0FBQyxJQUFJO3dCQUNyQyxlQUFlLEVBQUVDLDRCQUF1QixDQUFDLE1BQU07d0JBQy9DLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRTs7cUJBQ3REOzs7MkJBTUlFLFVBQUs7NEJBS0xBLFVBQUs7NEJBS0xBLFVBQUs7MkJBS0xBLFVBQUs7MkJBS0xBLFVBQUs7NEJBS0xBLFVBQUs7bUNBS0xBLFVBQUs7a0NBS0xHLFdBQU07O1FBRVgsdUJBQUM7S0FuREQ7Ozs7OztBQ1RBO1FBMEJJO1lBWlUsU0FBSSxHQUFzQixJQUFJRCxpQkFBWSxFQUFFLENBQUM7WUFDN0MscUJBQWdCLEdBQXNCLElBQUlBLGlCQUFZLEVBQUUsQ0FBQztZQUVuRSxxQkFBZ0IsR0FBVyxDQUFDLENBQUM7WUFHckIsbUJBQWMsR0FBVztnQkFDN0IsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2hDLFFBQVEsRUFBRSxJQUFJO2FBQ2pCLENBQUM7U0FJRDs7OztRQUVELG1DQUFXOzs7WUFBWDtnQkFDSSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDekUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEU7Ozs7UUFHRCxnQ0FBUTs7O1lBQVI7Z0JBQ0ksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFO29CQUNqRCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDO29CQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7aUJBQ3ZDO2FBQ0o7Ozs7UUFFRCxvQ0FBWTs7O1lBQVo7Z0JBQ0ksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxFQUFFO29CQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDO29CQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7aUJBQ3ZDO2FBQ0o7Ozs7UUFFRCw4Q0FBc0I7OztZQUF0QjtnQkFDSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtvQkFDaEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7b0JBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztpQkFDdkM7YUFDSjs7Ozs7UUFFRCx5Q0FBaUI7Ozs7WUFBakIsVUFBa0IsQ0FBUTtnQkFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUVwRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFFekUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNqRDs7b0JBN0RKTixjQUFTLFNBQUM7d0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLHNqRUFBK0I7O3FCQUVsQzs7Ozs7bUNBRUlJLFVBQUs7aUNBQ0xBLFVBQUs7eUNBQ0xBLFVBQUs7MkJBRUxHLFdBQU07dUNBQ05BLFdBQU07O1FBa0RYLG9CQUFDO0tBOUREOzs7Ozs7QUNIQTtRQUVBO1lBYWMsVUFBSyxHQUFzQixJQUFJRCxpQkFBWSxFQUFFLENBQUM7U0FNM0Q7Ozs7O1FBSkcsZ0NBQU87Ozs7WUFBUCxVQUFRLENBQVE7Z0JBQ1osS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0Qjs7b0JBbEJKTixjQUFTLFNBQUM7d0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsa2VBQWlDOztxQkFFcEM7Ozs2QkFJSUksVUFBSyxTQUFDLFFBQVE7MkJBQ2RBLFVBQUssU0FBQyxNQUFNO21DQUNaQSxVQUFLLFNBQUMsY0FBYzs0QkFFcEJHLFdBQU07O1FBTVgscUJBQUM7S0FuQkQ7Ozs7OztBQ0ZBO1FBZ0JJO1lBUlMsU0FBSSxHQUFHLFFBQVEsQ0FBQztZQUVoQixhQUFRLEdBQUcsS0FBSyxDQUFDO1lBSWhCLFVBQUssR0FBc0IsSUFBSUQsaUJBQVksRUFBRSxDQUFDO1NBR3ZEOzs7O1FBRUQsa0NBQVE7OztZQUFSO2FBQ0M7Ozs7O1FBRUQsaUNBQU87Ozs7WUFBUCxVQUFRLENBQVE7Z0JBQ1osQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0Qjs7b0JBdkJKTixjQUFTLFNBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLG1nQkFBc0M7O3FCQUV6Qzs7Ozs7MkJBRUlJLFVBQUs7NEJBQ0xBLFVBQUs7K0JBQ0xBLFVBQUs7a0NBQ0xBLFVBQUs7NEJBR0xHLFdBQU07O1FBWVgsc0JBQUM7S0F4QkQ7Ozs7OztBQ0ZBO1FBdUJJO1lBRlUsY0FBUyxHQUF3QixJQUFJRCxpQkFBWSxFQUFFLENBQUM7U0FFN0M7Ozs7O1FBRWtCLHlCQUFLOzs7O1lBQXhDLFVBQXlDLENBQVE7Z0JBQzdDLElBQUksb0JBQWMsQ0FBQyxDQUFDLE1BQU0sSUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztvQkFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2Rjs7b0JBbEJKTixjQUFTLFNBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLHc4QkFBMkI7d0JBRTNCLGFBQWEsRUFBRUMsc0JBQWlCLENBQUMsSUFBSTt3QkFDckMsUUFBUSxFQUFFLFVBQVU7O3FCQUN2Qjs7Ozs7MkJBR0lHLFVBQUs7OEJBQ0xBLFVBQUs7Z0NBRUxHLFdBQU07NEJBSU5DLGlCQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOztRQUlyQyxnQkFBQztLQXBCRDs7SUNUQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxJQWVPLElBQUksUUFBUSxHQUFHO1FBQ2xCLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFNBQVMsUUFBUSxDQUFDLENBQUM7WUFDM0MsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pELENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztvQkFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEY7WUFDRCxPQUFPLENBQUMsQ0FBQztTQUNaLENBQUE7UUFDRCxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQTs7Ozs7O0lDM0JEO1FBQUE7WUFDSSxZQUFPLEdBQUcsZUFBUyxDQUFDO1lBQ3BCLGNBQVMsR0FBRyxVQUFDLENBQVEsS0FBUSxDQUFDO1lBQzlCLGVBQVUsR0FBRyxJQUFJLENBQUM7U0FDckI7UUFBRCxzQkFBQztJQUFELENBQUMsSUFBQTs7UUFPRywwQkFDWSx3QkFBa0QsRUFDbEQsTUFBc0IsRUFDdEIsUUFBa0I7WUFGbEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtZQUNsRCxXQUFNLEdBQU4sTUFBTSxDQUFnQjtZQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFVO1NBQ3pCOzs7Ozs7UUFFTCxtQ0FBUTs7Ozs7WUFBUixVQUFTLElBQVksRUFBRSxVQUE0QjtnQkFBbkQsaUJBNkJDOztvQkE1QlMsTUFBTSxnQkFBUSxJQUFJLGVBQWUsRUFBRSxFQUFLLFVBQVUsQ0FBRTs7Z0JBRzFELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLHdCQUF3QjtxQkFDN0MsdUJBQXVCLENBQUMsU0FBUyxDQUFDO3FCQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUUzQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBUSxJQUFLLE9BQUEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUM7Z0JBQ25GLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRztvQkFDbEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNwRCxLQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNwRCxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUM3QixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ3BCLENBQUM7O2dCQUdGLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7OztvQkFHOUMsT0FBTyxzQkFBRyxvQkFBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVE7cUJBQ3ZDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBZTs7Z0JBR2hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztnQkFHbkMsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBQSxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUM5RTs7b0JBeENKQyxlQUFVOzs7Ozt3QkFkUEMsNkJBQXdCO3dCQUV4QkMsbUJBQWM7d0JBSGRDLGFBQVE7OztRQXlEWix1QkFBQztLQTFDRDs7Ozs7O0FDakJBO1FBc0RJOzs7O1lBVlUsVUFBSyxHQUFzQixJQUFJTixpQkFBWSxFQUFFLENBQUM7Ozs7WUFLOUMsV0FBTSxHQUFzQixJQUFJQSxpQkFBWSxFQUFFLENBQUM7WUFFekQsU0FBSSxHQUFXLFVBQVUsQ0FBQztTQUl6Qjs7OztRQUdELHNDQUFROzs7WUFBUjthQUNDOzs7OztRQUVELHFDQUFPOzs7O1lBQVAsVUFBUSxDQUFRO2dCQUNaLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdEI7Ozs7O1FBRUQsc0NBQVE7Ozs7WUFBUixVQUFTLENBQVE7Z0JBQ2IsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2Qjs7Ozs7UUFFRCx3Q0FBVTs7OztZQUFWLFVBQVcsQ0FBUTtnQkFDZixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFVBQVUsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDO2FBQ2pFOzs7OztRQUVELDBDQUFZOzs7O1lBQVosVUFBYSxNQUFNO2dCQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDbkI7Ozs7O1FBRUQsMENBQVk7Ozs7WUFBWixVQUFhLE1BQU07Z0JBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNuQjs7OztRQUVELHNDQUFROzs7WUFBUjtnQkFBQSxpQkFNQztnQkFMRyxVQUFVLENBQUM7b0JBQ1AsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUU7d0JBQ2pCLEtBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO3FCQUMxQjtpQkFDSixFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ1o7O29CQXpGSk4sY0FBUyxTQUFDO3dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLDIvQ0FBMkM7d0JBRTNDLFVBQVUsRUFBRTs0QkFDUmEsa0JBQU8sQ0FBQyxXQUFXLEVBQUU7Z0NBQ2pCQyxnQkFBSyxDQUFDLFFBQVEsRUFBRUMsZ0JBQUssQ0FBQztvQ0FDbEIsU0FBUyxFQUFFLGlCQUFpQjtpQ0FDL0IsQ0FBQyxDQUFDO2dDQUNIRCxnQkFBSyxDQUFDLFVBQVUsRUFBRUMsZ0JBQUssQ0FBQztvQ0FDcEIsU0FBUyxFQUFFLFlBQVk7aUNBQzFCLENBQUMsQ0FBQztnQ0FDSEMscUJBQVUsQ0FBQyxvQkFBb0IsRUFBRUMsa0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dDQUMzREQscUJBQVUsQ0FBQyxvQkFBb0IsRUFBRUMsa0JBQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzs2QkFDN0QsQ0FBQzt5QkFDTDs7cUJBQ0o7Ozs7OzJCQUtJYixVQUFLOzRCQUtMQSxVQUFLOzRCQUtMQSxVQUFLOzJCQUtMQSxVQUFLOzRCQUtMRyxXQUFNOzZCQUtOQSxXQUFNOztRQTRDWCwwQkFBQztLQTFGRDs7Ozs7O0FDSEE7UUFpQ0k7Ozs7WUFQVSxVQUFLLEdBQXNCLElBQUlELGlCQUFZLEVBQUUsQ0FBQzs7OztZQUs5QyxXQUFNLEdBQXNCLElBQUlBLGlCQUFZLEVBQUUsQ0FBQztTQUd4RDs7OztRQUVELHFDQUFROzs7WUFBUjthQUNDOzs7OztRQUVELG9DQUFPOzs7O1lBQVAsVUFBUSxDQUFRO2dCQUNaLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdEI7Ozs7O1FBRUQscUNBQVE7Ozs7WUFBUixVQUFTLENBQVE7Z0JBQ2IsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2Qjs7b0JBN0NKTixjQUFTLFNBQUM7d0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0Isc3hCQUEwQzs7cUJBRTdDOzs7OzsyQkFLSUksVUFBSzs0QkFLTEEsVUFBSzsyQkFLTEEsVUFBSzs0QkFLTEcsV0FBTTs2QkFLTkEsV0FBTTs7UUFpQlgseUJBQUM7S0E5Q0Q7Ozs7OztBQ0ZBO1FBdUJBO1NBMkNDOztvQkEzQ0E1QixhQUFRLFNBQUM7d0JBQ04sWUFBWSxFQUFFOzs0QkFFVixRQUFROzRCQUNSLGFBQWE7NEJBQ2IsY0FBYzs0QkFDZCx3QkFBd0I7NEJBQ3hCLGdCQUFnQjs0QkFDaEIsYUFBYTs0QkFDYixjQUFjOzRCQUNkLFNBQVM7NEJBQ1QsZUFBZTs0QkFDZixtQkFBbUI7NEJBQ25CLGtCQUFrQjt5QkFDckI7d0JBQ0QsT0FBTyxFQUFFOzRCQUNMQyxtQkFBWTs0QkFDWnNDLGlCQUFXOzRCQUVYLFNBQVM7eUJBQ1o7d0JBQ0QsT0FBTyxFQUFFOzs0QkFFTCxRQUFROzRCQUNSLGFBQWE7NEJBQ2IsY0FBYzs0QkFDZCx3QkFBd0I7NEJBQ3hCLGdCQUFnQjs0QkFDaEIsYUFBYTs0QkFDYixjQUFjOzRCQUNkLFNBQVM7NEJBQ1QsZUFBZTs0QkFDZixtQkFBbUI7NEJBQ25CLGtCQUFrQjt5QkFDckI7d0JBQ0QsZUFBZSxFQUFFOzRCQUNiLFNBQVM7eUJBQ1o7d0JBQ0QsU0FBUyxFQUFFOzRCQUNQLGdCQUFnQjt5QkFDbkI7cUJBQ0o7O1FBRUQsd0JBQUM7S0EzQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9