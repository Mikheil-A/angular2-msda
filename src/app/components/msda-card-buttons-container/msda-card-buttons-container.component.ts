import { Component } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
    selector: 'app-msda-card-buttons-container',
    templateUrl: './msda-card-buttons-container.component.html',
    styleUrls: ['./msda-card-buttons-container.component.scss']
})
export class MsdaCardButtonsContainerComponent {

    itemsList = [
        {
            title: 'ჯანდაცვა, სოციალური მხარდაჭერა',
            text: 'ჯანდაცვა (პროგრამები, მიზნობრივი დაფინანსება, ტრანსპლანტაცია), სოციალური საკითხები, დახმარებები ...',
            icon: 'hermes',
            iconType: 'square',
            iconBackgroundColor: '#10A0A2'
        },
        {
            title: 'შეკრებები და ღონისძიებები',
            text: 'ღონისძიებებისა (გამოფენა, ფესტივალი კონფერენცია და სხვ.) და მანიფესტაციების შეთანხმება - მხარდაჭერა ...',
            icon: 'people',
            iconType: 'square',
            iconBackgroundColor: '#248CC4'
        },
        {
            title: 'სამართლებრივი საკითხები',
            text: 'ადმინისტრაციული და სამართლებრივი აქტების გადახედვა - ცვლილების ინიცირება ...',
            icon: 'hammer',
            iconType: 'square',
            iconBackgroundColor: '#10A0A2'
        },
        {
            title: 'კულტურა',
            text: 'სახელოვნებო - მემორიალური ობიექტების განთავსება, აღდგენა. კულტურული პროექტების მხადრაჭერა ...',
            icon: 'culture',
            iconType: 'square',
            iconBackgroundColor: '#A95482'
        }
    ];

    onSortUpdate(e) {
        console.log(e);
    }

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
