import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AngularMsdaModule } from 'angular-msda';

import { AngularMsdaModule } from '../../projects/angular-msda/src/lib/angular-msda.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MsdaIconComponent } from './components/msda-icon/msda-icon.component';
import { MsdaPlateIconComponent } from './components/msda-plate-icon/msda-plate-icon.component';
import { MsdaCardButtonsContainerComponent } from './components/msda-card-buttons-container/msda-card-buttons-container.component';
import { MsdaPaginatorComponent } from './components/msda-paginator/msda-paginator.component';
import { MsdaMenuButtonComponent } from './components/msda-menu-button/msda-menu-button.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { GlobalScssComponent } from './components/global-scss/global-scss.component';
import { MsdaDialogComponent } from './components/msda-dialog/msda-dialog.component';
import { DialogComponent } from './components/msda-dialog/dialog/dialog.component';
import { MsdaButtonComponent } from './components/msda-button/msda-button.component';
import { MsdaBannerButtonComponent } from './components/msda-banner-button/msda-banner-button.component';
import { MsdaToastComponent } from './components/msda-toast/msda-toast.component';
import { MsdaModuleCardComponent } from './components/msda-module-card/msda-module-card.component';
import { MsdaIconLabelComponent } from './components/msda-icon-label/msda-icon-label.component';

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
        MsdaIconLabelComponent
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
        MarkdownModule.forRoot({ loader: HttpClient }),
        BrowserAnimationsModule,
        FormsModule
    ],
    entryComponents: [
        DialogComponent
    ],
    providers: [
        { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
