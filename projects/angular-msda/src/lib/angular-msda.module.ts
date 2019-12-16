import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

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
import {MSDAToast} from './toast/toast';
import {MSDAToastService} from './toast/toast.service';
import {ModuleCardComponent} from './module-card/module-card.component';
import {IconLabelComponent} from './icon-label/icon-label.component';
import {FormFieldComponent} from './form-field/form-field.component';
import {HorizontalDividerComponent} from './horizontal-divider/horizontal-divider.component';



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
    ModuleCardComponent,
    IconLabelComponent,
    FormFieldComponent,
    HorizontalDividerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

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
    ModuleCardComponent,
    IconLabelComponent,
    FormFieldComponent,
    HorizontalDividerComponent
  ],
  entryComponents: [
    MSDAToast
  ],
  providers: [
    MSDAToastService
  ]
})
export class AngularMsdaModule {
}
