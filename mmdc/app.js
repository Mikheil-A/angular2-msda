import { MDCSelect } from '@material/select'
import { MDCTextField } from '@material/textfield'
import { MDCTextFieldCharacterCounter } from '@material/textfield/character-counter'

const textField = new MDCTextField(document.querySelector('.mdc-text-field'))
const characterCounter = new MDCTextFieldCharacterCounter(document.querySelector('.mdc-text-field-character-counter'))

const select = new MDCSelect(document.querySelector('.mdc-select'))

select.listen('MDCSelect:change', () => {
  console.log(`Selected option at index ${select.selectedIndex} with value "${select.value}"`)
})
