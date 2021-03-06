import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {GlobalScssComponent} from './components/global-scss/global-scss.component';
import {MsdaIconComponent} from './components/msda-icon/msda-icon.component';
import {MsdaPlateIconComponent} from './components/msda-plate-icon/msda-plate-icon.component';
import {MsdaBannerButtonComponent} from './components/msda-banner-button/msda-banner-button.component';
import {MsdaCardButtonsContainerComponent} from './components/msda-card-buttons-container/msda-card-buttons-container.component';
import {MsdaPaginatorComponent} from './components/msda-paginator/msda-paginator.component';
import {MsdaMenuButtonComponent} from './components/msda-menu-button/msda-menu-button.component';
import {MsdaDialogComponent} from './components/msda-dialog/msda-dialog.component';
import {MsdaButtonComponent} from './components/msda-button/msda-button.component';
import {MsdaToastComponent} from './components/msda-toast/msda-toast.component';
import {MsdaSnackbarComponent} from './components/msda-snackbar/msda-snackbar.component';
import {MsdaModuleCardComponent} from './components/msda-module-card/msda-module-card.component';
import {MsdaIconLabelComponent} from './components/msda-icon-label/msda-icon-label.component';
import {MsdaFormFieldComponent} from './components/msda-form-field/msda-form-field.component';
import {MsdaHorizontalDividerComponent} from './components/msda-horizontal-divider/msda-horizontal-divider.component';
import {MsdaButtonRoundComponent} from './components/msda-button-round/msda-button-round.component';
import {MsdaSelectComponent} from './components/msda-select/msda-select.component';
import {MsdaSwitchButtonComponent} from './components/msda-switch-button/msda-switch-button.component';
import {MsdaChipsComponent} from './components/msda-chips/msda-chips.component';
import {MsdaStepperComponent} from './components/msda-stepper/msda-stepper.component';
import {MsdaCheckboxComponent} from './components/msda-checkbox/msda-checkbox.component';
import {MsdaTextfieldComponent} from './components/msda-textfield/msda-textfield.component';
import {MsdaGridComponent} from './components/msda-grid/msda-grid.component';


const routes: Routes = [
  {
    path: 'component/global/scss',
    component: GlobalScssComponent
  },
  {
    path: 'component/icons/msda-icon',
    component: MsdaIconComponent
  },
  {
    path: 'component/icons/msda-plate-icon',
    component: MsdaPlateIconComponent
  },
  {
    path: 'component/icons/msda-icon-label',
    component: MsdaIconLabelComponent
  },
  {
    path: 'component/form-controls/msda-form-field',
    component: MsdaFormFieldComponent
  },
  {
    path: 'component/form-controls/msda-select',
    component: MsdaSelectComponent
  },
  {
    path: 'component/form-controls/msda-checkbox',
    component: MsdaCheckboxComponent
  },
  {
    path: 'component/form-controls/msda-textfield',
    component: MsdaTextfieldComponent
  },
  {
    path: 'component/navigation/msda-banner-button',
    component: MsdaBannerButtonComponent
  },
  {
    path: 'component/navigation/msda-card-buttons-container',
    component: MsdaCardButtonsContainerComponent
  },
  {
    path: 'component/data-table/msda-paginator',
    component: MsdaPaginatorComponent
  },
  {
    path: 'component/data-table/msda-grid',
    component: MsdaGridComponent
  },
  {
    path: 'component/dialog/msda-dialog',
    component: MsdaDialogComponent
  },
  {
    path: 'component/buttons/msda-menu-button',
    component: MsdaMenuButtonComponent
  },
  {
    path: 'component/buttons/msda-button',
    component: MsdaButtonComponent
  },
  {
    path: 'component/buttons/msda-button-round',
    component: MsdaButtonRoundComponent
  },
  {
    path: 'component/buttons/msda-switch-button',
    component: MsdaSwitchButtonComponent
  },
  {
    path: 'component/buttons/msda-chips',
    component: MsdaChipsComponent
  },
  {
    path: 'component/popups-and-modals/msda-toast',
    component: MsdaToastComponent
  },
  {
    path: 'component/popups-and-modals/msda-snackbar',
    component: MsdaSnackbarComponent
  },
  {
    path: 'component/cards/msda-module-card',
    component: MsdaModuleCardComponent
  },
  {
    path: 'component/layout/msda-horizontal-divider',
    component: MsdaHorizontalDividerComponent
  },
  {
    path: 'component/layout/stepper',
    component: MsdaStepperComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
