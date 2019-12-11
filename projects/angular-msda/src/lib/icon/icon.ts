import {Component, OnInit, Input, ViewEncapsulation, ElementRef, ViewChild, SimpleChanges, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'msda-icon',
    templateUrl: './icon.html',
    styleUrls: ['./icon.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'role': 'img',
        'class': 'msda-icon'
    },
    exportAs: 'MSDAIcon',
})
export class MSDAIcon implements OnInit {

    @Input('name')
    set name(value: string) {
        this._name = value;
        this._updateName();
    }

    @Input('width')
    set width(value: number) {
        this._width = value;
        this._updateWidth();
    }

    @Input('height')
    set height(value: number) {
        this._height = value;
        this._updateHeight();
    }

    @Input('color')
    set color(value: string) {
        this._color = value;
        this._updateColor();
    }

    @Input('shadow')
    set shadow(value: number) {
        this._shadowLevel = value;
        this._updateShadow();
    }

    @ViewChild('svg')
    private _svgElementRef: ElementRef<HTMLElement>;

    @ViewChild('use')
    private _useElementRef: ElementRef<HTMLElement>;

    private _name: string;
    private _width: number = 24;
    private _height: number = 24;
    private _color: string = '#000000';
    private _shadowLevel: number = null;

    constructor(private _elementRef: ElementRef<HTMLElement>) {
    }

    ngOnInit() {
        this._updateName();
        this._updateWidth();
        this._updateHeight();
        this._updateColor();
        this._updateShadow();
    }

    private _updateName(): void {
        if (this._name) {
            this._useElementRef.nativeElement.setAttribute('href', `/assets/icons.svg#${this._name}`);
        }
    }

    private _updateWidth(): void {
        if (this._width) {
            this._elementRef.nativeElement.style.width = `${this._width}px`;
            this._svgElementRef.nativeElement.setAttribute('width', this._width.toString());
        }
    }

    private _updateHeight(): void {
        if (this._height) {
            this._elementRef.nativeElement.style.height = `${this._height}px`;
            this._svgElementRef.nativeElement.setAttribute('height', this._height.toString());
        }
    }

    private _updateColor(): void {
        if (this._color) {
            this._elementRef.nativeElement.style.height = `${this._height}px`;
            this._svgElementRef.nativeElement.setAttribute('fill', this._color);
        }
    }

    private _updateShadow(): void {
        if (this._shadowLevel) {
            this._svgElementRef.nativeElement.setAttribute('class', `msda-shadow-${this._shadowLevel}`);
        }
    }
}
