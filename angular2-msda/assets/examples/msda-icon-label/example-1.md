### Properties

#### `icon` option
Name under which the icon should be registered

#### `color` option
Color of the icon and text

---
#### `text` option
Text of the label

---
#### `click` option
Called on label click

---
#### `remove` option
Called on remove icon click

---
### Usage

```html
<msda-icon-label icon="image" color="red" text="13:30 10.03.18" 
(click)="onClick($event)" (remove)="onRemove($event)"></msda-icon-label>```
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
