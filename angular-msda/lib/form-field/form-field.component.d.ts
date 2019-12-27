import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class FormFieldComponent implements OnInit, OnChanges {
    placeholder: string;
    value: string;
    isRequired: boolean;
    hint: string;
    fcName: string;
    fGroup: FormGroup;
    prefixIcon: string;
    suffixIcon: string;
    input: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    onInput(e: Event): void;
}
