/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
import { MSDAToast } from './toast/toast';
import { MSDAToastService } from './toast/toast.service';
import { ModuleCardComponent } from './module-card/module-card.component';
import { IconLabelComponent } from './icon-label/icon-label.component';
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
                    ModuleCardComponent,
                    IconLabelComponent
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
                    IconLabelComponent
                ],
                entryComponents: [
                    MSDAToast
                ],
                providers: [
                    MSDAToastService
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1tc2RhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItbXNkYS8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLW1zZGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O0FBRzNDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxjQUFjLENBQUM7O0FBR3ZDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDckMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBOENyRSxNQUFNLE9BQU8saUJBQWlCOzs7WUExQzdCLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUU7b0JBQ1Ysa0JBQWtCO29CQUNsQixRQUFRO29CQUNSLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCx3QkFBd0I7b0JBQ3hCLGdCQUFnQjtvQkFDaEIsYUFBYTtvQkFDYixjQUFjO29CQUNkLFNBQVM7b0JBQ1QsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLGtCQUFrQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osV0FBVztvQkFFWCxTQUFTO2lCQUNaO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxrQkFBa0I7b0JBQ2xCLFFBQVE7b0JBQ1IsYUFBYTtvQkFDYixjQUFjO29CQUNkLHdCQUF3QjtvQkFDeEIsZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsU0FBUztvQkFDVCxlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsa0JBQWtCO2lCQUNyQjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2IsU0FBUztpQkFDWjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1AsZ0JBQWdCO2lCQUNuQjthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG4vLyBBbmd1bGFyIE1hdGVyaWFsIG1vZHVsZVxyXG5pbXBvcnQge01hdE1vZHVsZX0gZnJvbSAnLi9tYXQubW9kdWxlJztcclxuXHJcbi8vIG1zZGEgY29tcG9uZW50c1xyXG5pbXBvcnQge01TREFJY29ufSBmcm9tICcuL2ljb24vaWNvbic7XHJcbmltcG9ydCB7TVNEQVBsYXRlSWNvbn0gZnJvbSAnLi9wbGF0ZS1pY29uL3BsYXRlLWljb24nO1xyXG5pbXBvcnQge01TREFDYXJkQnV0dG9ufSBmcm9tICcuL2NhcmQtYnV0dG9uL2NhcmQtYnV0dG9uJztcclxuaW1wb3J0IHtNU0RBQ2FyZEJ1dHRvbnNDb250YWluZXJ9IGZyb20gJy4vY2FyZC1idXR0b24vY2FyZC1idXR0b25zLWNvbnRhaW5lcic7XHJcbmltcG9ydCB7TVNEQUJhbm5lckJ1dHRvbn0gZnJvbSAnLi9iYW5uZXItYnV0dG9uL2Jhbm5lci1idXR0b24nO1xyXG5pbXBvcnQge01TREFQYWdpbmF0b3J9IGZyb20gJy4vcGFnaW5hdG9yL3BhZ2luYXRvcic7XHJcbmltcG9ydCB7TVNEQU1lbnVCdXR0b259IGZyb20gJy4vbWVudS1idXR0b24vbWVudS1idXR0b24nO1xyXG5pbXBvcnQge0J1dHRvbkNvbXBvbmVudH0gZnJvbSAnLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TVNEQVRvYXN0fSBmcm9tICcuL3RvYXN0L3RvYXN0JztcclxuaW1wb3J0IHtNU0RBVG9hc3RTZXJ2aWNlfSBmcm9tICcuL3RvYXN0L3RvYXN0LnNlcnZpY2UnO1xyXG5pbXBvcnQge01vZHVsZUNhcmRDb21wb25lbnR9IGZyb20gJy4vbW9kdWxlLWNhcmQvbW9kdWxlLWNhcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHtJY29uTGFiZWxDb21wb25lbnR9IGZyb20gJy4vaWNvbi1sYWJlbC9pY29uLWxhYmVsLmNvbXBvbmVudCc7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICAvLyBtc2RhIGNvbXBvbmVudHNcclxuICAgICAgICBNU0RBSWNvbixcclxuICAgICAgICBNU0RBUGxhdGVJY29uLFxyXG4gICAgICAgIE1TREFDYXJkQnV0dG9uLFxyXG4gICAgICAgIE1TREFDYXJkQnV0dG9uc0NvbnRhaW5lcixcclxuICAgICAgICBNU0RBQmFubmVyQnV0dG9uLFxyXG4gICAgICAgIE1TREFQYWdpbmF0b3IsXHJcbiAgICAgICAgTVNEQU1lbnVCdXR0b24sXHJcbiAgICAgICAgTVNEQVRvYXN0LFxyXG4gICAgICAgIEJ1dHRvbkNvbXBvbmVudCxcclxuICAgICAgICBNb2R1bGVDYXJkQ29tcG9uZW50LFxyXG4gICAgICAgIEljb25MYWJlbENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcblxyXG4gICAgICAgIE1hdE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICAvLyBtc2RhIGNvbXBvbmVudHNcclxuICAgICAgICBNU0RBSWNvbixcclxuICAgICAgICBNU0RBUGxhdGVJY29uLFxyXG4gICAgICAgIE1TREFDYXJkQnV0dG9uLFxyXG4gICAgICAgIE1TREFDYXJkQnV0dG9uc0NvbnRhaW5lcixcclxuICAgICAgICBNU0RBQmFubmVyQnV0dG9uLFxyXG4gICAgICAgIE1TREFQYWdpbmF0b3IsXHJcbiAgICAgICAgTVNEQU1lbnVCdXR0b24sXHJcbiAgICAgICAgTVNEQVRvYXN0LFxyXG4gICAgICAgIEJ1dHRvbkNvbXBvbmVudCxcclxuICAgICAgICBNb2R1bGVDYXJkQ29tcG9uZW50LFxyXG4gICAgICAgIEljb25MYWJlbENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgICAgIE1TREFUb2FzdFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIE1TREFUb2FzdFNlcnZpY2VcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJNc2RhTW9kdWxlIHtcclxufVxyXG4iXX0=