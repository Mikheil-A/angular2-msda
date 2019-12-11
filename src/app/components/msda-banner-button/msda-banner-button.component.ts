import { Component } from '@angular/core';

@Component({
    selector: 'app-msda-banner-button',
    templateUrl: './msda-banner-button.component.html',
    styleUrls: ['./msda-banner-button.component.scss']
})
export class MsdaBannerButtonComponent {

    onButtonClick(e) {
        console.log(e);
    }

    onError(event) {
        console.log(event);
    }

    onLoad(event) {
        console.log(event);
    }

}
