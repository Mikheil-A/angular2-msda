import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Angular Material module
import {MatModule} from './mat.module';

// msda components
import {MSDAIcon} from './icon/icon';
import {MSDAPlateIcon} from './plate-icon/plate-icon';
import {MSDACardButton} from './card-button/card-button';
import {MSDACardButtonsContainer} from './card-button/card-buttons-container';
import {MSDABannerButton} from './banner-button/banner-button';
import {MSDAPaginator} from './paginator/paginator.component';
import {MSDAMenuButton} from './menu-button/menu-button';
import {ButtonComponent} from './button/button.component';
import {ButtonSquareComponent} from './button-square/button-square.component';
import {SelectComponent} from './select/select.component';
import {Select2Component} from './select2/select2.component';
import {SnackbarComponent} from './snackbar/snackbar.component';
import {ButtonRoundComponent} from './button-round/button-round.component';
import {MSDAToast} from './toast/toast';
import {ModuleCardComponent} from './module-card/module-card.component';
import {IconLabelComponent} from './icon-label/icon-label.component';
import {FormFieldComponent} from './form-field/form-field.component';
import {HorizontalDividerComponent} from './horizontal-divider/horizontal-divider.component';
import {SwitchButtonComponent} from './switch-button/switch-button.component';
import {ChipsComponent} from './chips/chips.component';
import {StepperComponent} from './stepper/stepper.component';
import {CheckboxComponent} from './checkbox/checkbox.component';


// services
import {MSDAToastService} from './toast/toast.service';
import {MsdaSnackBarService} from './snackbar/snackbar.service';



@NgModule({
  declarations: [
    // msda components
    MSDAIcon,
    MSDAPlateIcon,
    MSDACardButton,
    MSDACardButtonsContainer,
    MSDABannerButton,
    MSDAPaginator,
    MSDAMenuButton,
    MSDAToast,
    ButtonComponent,
    SelectComponent,
    Select2Component,
    SnackbarComponent,
    ButtonRoundComponent,
    ModuleCardComponent,
    IconLabelComponent,
    FormFieldComponent,
    HorizontalDividerComponent,
    SwitchButtonComponent,
    ChipsComponent,
    StepperComponent,
    CheckboxComponent,
    ButtonSquareComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatModule
  ],
  exports: [
    // msda components
    MSDAIcon,
    MSDAPlateIcon,
    MSDACardButton,
    MSDACardButtonsContainer,
    MSDABannerButton,
    MSDAPaginator,
    MSDAMenuButton,
    MSDAToast,
    ButtonComponent,
    SelectComponent,
    Select2Component,
    SnackbarComponent,
    ButtonRoundComponent,
    ModuleCardComponent,
    IconLabelComponent,
    FormFieldComponent,
    HorizontalDividerComponent,
    SwitchButtonComponent,
    ChipsComponent,
    StepperComponent,
    CheckboxComponent,
    ButtonSquareComponent
  ],
  entryComponents: [
    MSDAToast,
    SnackbarComponent
  ],
  providers: [
    MSDAToastService,
    MsdaSnackBarService
  ]
})
export class AngularMsdaModule {
}
