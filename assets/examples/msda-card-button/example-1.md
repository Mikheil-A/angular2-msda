### Properties

#### `row` option
Maximum number of buttons on each page (not available for now, need to complete paginator).

---
#### `column` option
Number of columns on each row.


---
#### `dragEnabled` option
Enables drag and drop.


---
#### `dataSource` option
Array of buttons config.


---
#### `sortupdate(event)` option
Called on sort update.


---
#### `buttonClick(event)` option
Called on card button click.


---
### Usage

```html
<msda-card-buttons-container [row]="3" [column]="3" [dragEnabled]="true" [dataSource]="itemsList" (sortupdate)="onSortUpdate($event)" (buttonClick)="onButtonClick($event)"></msda-card-buttons-container>
```

```typescript
@Component({...})
class TestComponent {
    itemsList = [
        {
            title: 'ჯანდაცვა, სოციალური მხარდაჭერა',
            text: 'ჯანდაცვა (პროგრამები, მიზნობრივი დაფინანსება, ტრანსპლანტაცია), სოციალური საკითხები, დახმარებები ...',
            icon: 'icon-4',
            iconType: 'square',
            iconBackgroundColor: '#10A0A2'
        },
        {
            title: 'შეკრებები და ღონისძიებები',
            text: 'ღონისძიებებისა (გამოფენა, ფესტივალი კონფერენცია და სხვ.) და მანიფესტაციების შეთანხმება - მხარდაჭერა ...',
            icon: 'icon-1',
            iconType: 'square',
            iconBackgroundColor: '#248CC4'
        },
        {
            title: 'სამართლებრივი საკითხები',
            text: 'ადმინისტრაციული და სამართლებრივი აქტების გადახედვა - ცვლილების ინიცირება ...',
            icon: 'icon-3',
            iconType: 'square',
            iconBackgroundColor: '#10A0A2'
        },
        {
            title: 'კულტურა',
            text: 'სახელოვნებო - მემორიალური ობიექტების განთავსება, აღდგენა. კულტურული პროექტების მხადრაჭერა ...',
            icon: 'icon-2',
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
}
```
