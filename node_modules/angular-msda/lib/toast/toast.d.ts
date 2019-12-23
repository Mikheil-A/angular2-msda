import { EventEmitter } from '@angular/core';
export declare class MSDAToast {
    html: string;
    dismiss: () => void;
    linkClick: EventEmitter<Event>;
    constructor();
    click(e: Event): void;
}
