import {Component, OnInit, Input, ViewEncapsulation, ElementRef, ViewChild, SimpleChanges, ChangeDetectionStrategy} from '@angular/core';
import {MSDAIcon} from '../icon/icon';

@Component({
    selector: 'msda-plate-icon',
    templateUrl: './plate-icon.html',
    styleUrls: ['./plate-icon.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'role': 'img',
        'class': 'msda-plate-icon'
    },
    exportAs: 'MSDAPlateIcon',
})
export class MSDAPlateIcon implements OnInit {

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

    @Input('background')
    set background(value: string) {
        this._background = value;
        this._updateBackground();
    }

    @Input('shadow')
    set shadow(value: number) {
        this._shadow = value;
        this._updateShadow();
    }

    @Input('type')
    set type(value: string) {
        this._type = value;
        this._updateType();
    }

    @ViewChild('wrapper')
    private _wrapperRef: ElementRef<HTMLElement>;

    @ViewChild('background')
    private _backgroundRef: MSDAIcon;

    @ViewChild('icon')
    private _iconRef: MSDAIcon;

    private _name: string;
    private _width: number = 24;
    private _height: number = 24;
    private _color: string = '#FFFFFF';
    private _background: string = '#EA854D';
    private _shadow: number = null;
    private _type: string;

    constructor(private _elementRef: ElementRef<HTMLElement>) {
    }

    ngOnInit() {
        this._updateName();
        this._updateWidth();
        this._updateHeight();
        this._updateColor();
        this._updateBackground();
        this._updateShadow();
        this._updateType();
    }

    private _updateName(): void {
        if (this._name) {
            this._iconRef.name = this._name;
        }
    }

    private _updateWidth(): void {
        if (this._width) {
            this._wrapperRef.nativeElement.style.width = this._width + 'px';
            this._backgroundRef.width = this._width;
            this._iconRef.width = this._width - (this._width / 3);
        }
    }

    private _updateHeight(): void {
        if (this._height) {
            this._wrapperRef.nativeElement.style.height = this._height + 'px';
            this._backgroundRef.height = this._height;
            this._iconRef.height = this._height - (this._height / 3);
        }
    }

    private _updateColor(): void {
        if (this._color) {
            this._iconRef.color = this._color;
        }
    }

    private _updateBackground(): void {
        if (this._background) {
            this._backgroundRef.color = this._background;
        }
    }

    private _updateShadow(): void {
        if (this._shadow) {
            this._backgroundRef.shadow = this._shadow;
        }
    }

    private _updateType(): void {
        if (this._type) {
            this._backgroundRef.name = this._type;
        }
    }

}
