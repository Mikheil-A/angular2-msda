### Properties

#### `type` option
Specifies the type of button.

#### `color` option
Color of the button

---
#### `disabled` option
Disable state of the button

---
#### `clck` option
Called on button click

---
#### `showLoading` option
Show load mask

---
#### `<span>...</span>` element
A `<span>` element is used to add text inside button

---
#### `<msda-icon></msda-icon>` element
A `<msda-icon>` element is used to add icon inside button

---
### Usage

```html
<msda-button type="submit" color="#3f51b5" [disabled]="false" (click)=submit($event) [showLoading]="isLoading">
    <msda-icon name="save" width="24" height="24" color="#FFFFFF"></msda-icon>
    <span>Save</span>
</msda-button>```
```typescript
@Component({...})
class TestComponent {
    isLoading = false;
    
    ngOnInit() {
        this.isLoading = true;
        setTimeout(() => {
            this.isLoading = false;
        }, 3000);
    }

    submit(event) {
        console.log('clicked', event);
    }
}
```
