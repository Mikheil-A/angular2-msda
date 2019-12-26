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
import {MSDAPaginator} from './paginator/paginator';
import {MSDAMenuButton} from './menu-button/menu-button';
import {ButtonComponent} from './button/button.component';
import {SelectComponent} from './select/select.component';
import {SnackbarComponent} from './snackbar/snackbar.component';
import {ButtonRoundComponent} from './button-round/button-round.component';
import {MSDAToast} from './toast/toast';
import {ModuleCardComponent} from './module-card/module-card.component';
import {IconLabelComponent} from './icon-label/icon-label.component';
import {FormFieldComponent} from './form-field/form-field.component';
import {HorizontalDividerComponent} from './horizontal-divider/horizontal-divider.component';

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
    SnackbarComponent,
    ButtonRoundComponent,
    ModuleCardComponent,
    IconLabelComponent,
    FormFieldComponent,
    HorizontalDividerComponent
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
    SnackbarComponent,
    ButtonRoundComponent,
    ModuleCardComponent,
    IconLabelComponent,
    FormFieldComponent,
    HorizontalDividerComponent
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
