import { OnInit, ElementRef } from '@angular/core';
export declare class MSDAIcon implements OnInit {
    private _elementRef;
    name: string;
    width: number;
    height: number;
    color: string;
    shadow: number;
    private _svgElementRef;
    private _useElementRef;
    private _name;
    private _width;
    private _height;
    private _color;
    private _shadowLevel;
    constructor(_elementRef: ElementRef<HTMLElement>);
    ngOnInit(): void;
    private _updateName;
    private _updateWidth;
    private _updateHeight;
    private _updateColor;
    private _updateShadow;
}
