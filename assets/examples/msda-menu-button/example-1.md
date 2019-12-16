### Properties

#### `active` option
Button activation indicator

---
#### `notifCounter` option
Number of notifications.

---
#### `click(event)` option
Called on card button click.


---
### Usage

```html
<msda-menu-button [active]=false  [notifCounter]=0 (click)="onClick($event)"></msda-menu-button>
```

```typescript
@Component({...})
class TestComponent {

    click(e) {
        console.log(e);
    }
}
```
