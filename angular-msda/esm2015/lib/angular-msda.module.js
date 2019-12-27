/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Angular Material module
import { MatModule } from './mat.module';
// msda components
import { MSDAIcon } from './icon/icon';
import { MSDAPlateIcon } from './plate-icon/plate-icon';
import { MSDACardButton } from './card-button/card-button';
import { MSDACardButtonsContainer } from './card-button/card-buttons-container';
import { MSDABannerButton } from './banner-button/banner-button';
import { MSDAPaginator } from './paginator/paginator';
import { MSDAMenuButton } from './menu-button/menu-button';
import { ButtonComponent } from './button/button.component';
import { ButtonRoundComponent } from './button-round/button-round.component';
import { MSDAToast } from './toast/toast';
import { MSDAToastService } from './toast/toast.service';
import { ModuleCardComponent } from './module-card/module-card.component';
import { IconLabelComponent } from './icon-label/icon-label.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { HorizontalDividerComponent } from './horizontal-divider/horizontal-divider.component';
export class AngularMsdaModule {
}
AngularMsdaModule.decorators = [
    { type: NgModule, args: [{
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
                    ButtonRoundComponent,
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1tc2RhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItbXNkYS8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLW1zZGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O0FBR2hFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxjQUFjLENBQUM7O0FBR3ZDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDckMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBcUQ3RixNQUFNLE9BQU8saUJBQWlCOzs7WUFqRDdCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osa0JBQWtCO29CQUNsQixRQUFRO29CQUNSLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCx3QkFBd0I7b0JBQ3hCLGdCQUFnQjtvQkFDaEIsYUFBYTtvQkFDYixjQUFjO29CQUNkLFNBQVM7b0JBQ1QsZUFBZTtvQkFDZixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsa0JBQWtCO29CQUNsQixrQkFBa0I7b0JBQ2xCLDBCQUEwQjtpQkFDM0I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBRW5CLFNBQVM7aUJBQ1Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGtCQUFrQjtvQkFDbEIsUUFBUTtvQkFDUixhQUFhO29CQUNiLGNBQWM7b0JBQ2Qsd0JBQXdCO29CQUN4QixnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxTQUFTO29CQUNULGVBQWU7b0JBQ2Ysb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLGtCQUFrQjtvQkFDbEIsa0JBQWtCO29CQUNsQiwwQkFBMEI7aUJBQzNCO2dCQUNELGVBQWUsRUFBRTtvQkFDZixTQUFTO2lCQUNWO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxnQkFBZ0I7aUJBQ2pCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbi8vIEFuZ3VsYXIgTWF0ZXJpYWwgbW9kdWxlXHJcbmltcG9ydCB7TWF0TW9kdWxlfSBmcm9tICcuL21hdC5tb2R1bGUnO1xyXG5cclxuLy8gbXNkYSBjb21wb25lbnRzXHJcbmltcG9ydCB7TVNEQUljb259IGZyb20gJy4vaWNvbi9pY29uJztcclxuaW1wb3J0IHtNU0RBUGxhdGVJY29ufSBmcm9tICcuL3BsYXRlLWljb24vcGxhdGUtaWNvbic7XHJcbmltcG9ydCB7TVNEQUNhcmRCdXR0b259IGZyb20gJy4vY2FyZC1idXR0b24vY2FyZC1idXR0b24nO1xyXG5pbXBvcnQge01TREFDYXJkQnV0dG9uc0NvbnRhaW5lcn0gZnJvbSAnLi9jYXJkLWJ1dHRvbi9jYXJkLWJ1dHRvbnMtY29udGFpbmVyJztcclxuaW1wb3J0IHtNU0RBQmFubmVyQnV0dG9ufSBmcm9tICcuL2Jhbm5lci1idXR0b24vYmFubmVyLWJ1dHRvbic7XHJcbmltcG9ydCB7TVNEQVBhZ2luYXRvcn0gZnJvbSAnLi9wYWdpbmF0b3IvcGFnaW5hdG9yJztcclxuaW1wb3J0IHtNU0RBTWVudUJ1dHRvbn0gZnJvbSAnLi9tZW51LWJ1dHRvbi9tZW51LWJ1dHRvbic7XHJcbmltcG9ydCB7QnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHtCdXR0b25Sb3VuZENvbXBvbmVudH0gZnJvbSAnLi9idXR0b24tcm91bmQvYnV0dG9uLXJvdW5kLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TVNEQVRvYXN0fSBmcm9tICcuL3RvYXN0L3RvYXN0JztcclxuaW1wb3J0IHtNU0RBVG9hc3RTZXJ2aWNlfSBmcm9tICcuL3RvYXN0L3RvYXN0LnNlcnZpY2UnO1xyXG5pbXBvcnQge01vZHVsZUNhcmRDb21wb25lbnR9IGZyb20gJy4vbW9kdWxlLWNhcmQvbW9kdWxlLWNhcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHtJY29uTGFiZWxDb21wb25lbnR9IGZyb20gJy4vaWNvbi1sYWJlbC9pY29uLWxhYmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Rm9ybUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2Zvcm0tZmllbGQvZm9ybS1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0hvcml6b250YWxEaXZpZGVyQ29tcG9uZW50fSBmcm9tICcuL2hvcml6b250YWwtZGl2aWRlci9ob3Jpem9udGFsLWRpdmlkZXIuY29tcG9uZW50JztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIC8vIG1zZGEgY29tcG9uZW50c1xyXG4gICAgTVNEQUljb24sXHJcbiAgICBNU0RBUGxhdGVJY29uLFxyXG4gICAgTVNEQUNhcmRCdXR0b24sXHJcbiAgICBNU0RBQ2FyZEJ1dHRvbnNDb250YWluZXIsXHJcbiAgICBNU0RBQmFubmVyQnV0dG9uLFxyXG4gICAgTVNEQVBhZ2luYXRvcixcclxuICAgIE1TREFNZW51QnV0dG9uLFxyXG4gICAgTVNEQVRvYXN0LFxyXG4gICAgQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgQnV0dG9uUm91bmRDb21wb25lbnQsXHJcbiAgICBNb2R1bGVDYXJkQ29tcG9uZW50LFxyXG4gICAgSWNvbkxhYmVsQ29tcG9uZW50LFxyXG4gICAgRm9ybUZpZWxkQ29tcG9uZW50LFxyXG4gICAgSG9yaXpvbnRhbERpdmlkZXJDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHJcbiAgICBNYXRNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIC8vIG1zZGEgY29tcG9uZW50c1xyXG4gICAgTVNEQUljb24sXHJcbiAgICBNU0RBUGxhdGVJY29uLFxyXG4gICAgTVNEQUNhcmRCdXR0b24sXHJcbiAgICBNU0RBQ2FyZEJ1dHRvbnNDb250YWluZXIsXHJcbiAgICBNU0RBQmFubmVyQnV0dG9uLFxyXG4gICAgTVNEQVBhZ2luYXRvcixcclxuICAgIE1TREFNZW51QnV0dG9uLFxyXG4gICAgTVNEQVRvYXN0LFxyXG4gICAgQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgQnV0dG9uUm91bmRDb21wb25lbnQsXHJcbiAgICBNb2R1bGVDYXJkQ29tcG9uZW50LFxyXG4gICAgSWNvbkxhYmVsQ29tcG9uZW50LFxyXG4gICAgRm9ybUZpZWxkQ29tcG9uZW50LFxyXG4gICAgSG9yaXpvbnRhbERpdmlkZXJDb21wb25lbnRcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgTVNEQVRvYXN0XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIE1TREFUb2FzdFNlcnZpY2VcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFyTXNkYU1vZHVsZSB7XHJcbn1cclxuIl19