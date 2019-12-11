import { Component, OnInit } from '@angular/core';
import { MSDAToastConfig, MSDAToastService } from '../../../../projects/angular-msda/src/lib/toast/toast.service';

@Component({
    selector: 'app-msda-toast',
    templateUrl: './msda-toast.component.html',
    styleUrls: ['./msda-toast.component.scss']
})
export class MsdaToastComponent implements OnInit {

    constructor(private msdaToastService: MSDAToastService) {
        const config: MSDAToastConfig = {
            onClose: () => {
                console.log('Toast Closed');
            },
            linkClick: (e: Event) => {
                console.log(e);
            },
            closeAfter: 5000
        };

        setTimeout(() => {
            this.msdaToastService.showHtml('<p>გაცნობებთ რომ მოფრინავს მეტეორი, სადარბაზოებში <span class="msda-link">ჩილიმის მოწევა</span> დაშვებულია</p>', config);
        }, 2000);
    }

    ngOnInit() {
    }

    onError(event) {
        console.log(event);
    }

    onLoad(event) {
        console.log(event);
    }

}
