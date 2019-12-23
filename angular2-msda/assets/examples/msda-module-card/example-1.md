### Properties

#### `icon` option
Name under which the icon should be registered

#### `color` option
Color of the icon

---
#### `title` option
Title of the card

---
#### `warn` option
Show or hide 'warning' icon

---
#### `click` option
Called on card click

---
#### `remove` option
Called on remove icon click

---
### Usage

```html
<msda-module-card icon="parking" color="blue" title="ზონალური პარკირება" 
warn="true" (click)="onClick($event)" (remove)="onRemove($event)"></msda-module-card>```
```typescript
@Component({...})
class TestComponent {
    
    ngOnInit() {
    }

   onClick(event) {
          console.log('click', event);
      }
  
      onRemove(event) {
          console.log('remove', event);
      }
}
```
