import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
// import { AngularMsdaModule } from 'angular-msda';

import {AngularMsdaModule} from '../../projects/angular-msda/src/lib/angular-msda.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MsdaIconComponent} from './components/msda-icon/msda-icon.component';
import {MsdaPlateIconComponent} from './components/msda-plate-icon/msda-plate-icon.component';
import {MsdaCardButtonsContainerComponent} from './components/msda-card-buttons-container/msda-card-buttons-container.component';
import {MsdaPaginatorComponent} from './components/msda-paginator/msda-paginator.component';
import {MsdaMenuButtonComponent} from './components/msda-menu-button/msda-menu-button.component';
import {MarkdownModule} from 'ngx-markdown';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FilterPipe} from './pipes/filter.pipe';
import {GlobalScssComponent} from './components/global-scss/global-scss.component';
import {MsdaDialogComponent} from './components/msda-dialog/msda-dialog.component';
import {DialogComponent} from './components/msda-dialog/dialog/dialog.component';
import {MsdaButtonComponent} from './components/msda-button/msda-button.component';
import {MsdaSwitchButtonComponent} from './components/msda-switch-button/msda-switch-button.component';
import {MsdaBannerButtonComponent} from './components/msda-banner-button/msda-banner-button.component';
import {MsdaToastComponent} from './components/msda-toast/msda-toast.component';
import {MsdaModuleCardComponent} from './components/msda-module-card/msda-module-card.component';
import {MsdaIconLabelComponent} from './components/msda-icon-label/msda-icon-label.component';
import {MsdaFormFieldComponent} from './components/msda-form-field/msda-form-field.component';
import {MsdaHorizontalDividerComponent} from './components/msda-horizontal-divider/msda-horizontal-divider.component';
import {MsdaButtonRoundComponent} from './components/msda-button-round/msda-button-round.component';
import {MsdaSnackbarComponent} from './components/msda-snackbar/msda-snackbar.component';
import {MsdaSelectComponent} from './components/msda-select/msda-select.component';
import {MsdaChipsComponent} from './components/msda-chips/msda-chips.component';
import {MsdaStepperComponent} from './components/msda-stepper/msda-stepper.component';
import {MsdaCheckboxComponent} from './components/msda-checkbox/msda-checkbox.component';
import {MsdaTextfieldComponent} from './components/msda-textfield/msda-textfield.component';
import {MsdaGridComponent} from './components/msda-grid/msda-grid.component';


import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    FilterPipe,
    AppComponent,
    GlobalScssComponent,
    MsdaIconComponent,
    MsdaPlateIconComponent,
    MsdaCardButtonsContainerComponent,
    MsdaPaginatorComponent,
    MsdaMenuButtonComponent,
    MsdaDialogComponent,
    DialogComponent,
    FilterPipe,
    MsdaButtonComponent,
    FilterPipe,
    MsdaBannerButtonComponent,
    MsdaButtonComponent,
    MsdaBannerButtonComponent,
    MsdaToastComponent,
    MsdaModuleCardComponent,
    MsdaIconLabelComponent,
    MsdaFormFieldComponent,
    MsdaHorizontalDividerComponent,
    MsdaButtonRoundComponent,
    MsdaSnackbarComponent,
    MsdaSelectComponent,
    MsdaSwitchButtonComponent,
    MsdaChipsComponent,
    MsdaStepperComponent,
    MsdaCheckboxComponent,
    MsdaTextfieldComponent,
    MsdaGridComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    AngularMsdaModule,
    MatSidenavModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    HttpClientModule,
    MatDialogModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    MatProgressBarModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
