### Usage

```typescript
@Component({...})
class TestComponent {
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

        this.msdaToastService.showHtml('<p>გაცნობებთ რომ მოფრინავს მეტეორი, სადარბაზოებში <span class="msda-link">ჩილიმის მოწევა</span> დაშვებულია</p>', config);
    }
}
```
