### Properties

#### `icon` option
Icon name.

---
#### `image` option
Image URL.


---
#### `title` option
Banner title.


---
#### `text` option
Image text.


---
#### `date` option
Date string.


---
#### `color` option
Icon and "read more" text color.


---
#### `buttonClick(event)` option
Called on banner button click.


---
### Usage

```html
<msda-banner-button icon="culture" image="https://via.placeholder.com/350x150" title="კულტურა" text="„თბილისობა 2018“ 6 -7 ოქტომბერს გაიმართება და დღესასწაულის აღნიშვნის ტრადიცია, ოქტომბრის ..." date="19 მაისი, 2015" color="#A95482" (buttonClick)="onButtonClick($event)"></msda-banner-button>
```

```typescript
@Component({...})
class TestComponent {
    onButtonClick(e) {
        console.log(e);
    }
}
```
