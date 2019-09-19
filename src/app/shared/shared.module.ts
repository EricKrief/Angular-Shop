import { NgModule } from '@angular/core';
import { LocalizePipe } from './pipes/localize.pipe';
import { ConfirmationDirective } from './directives/confirmation.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LocalizePipe,
        ConfirmationDirective,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        CommonModule,
        LocalizePipe,
        ConfirmationDirective
    ]
})
export class SharedModule { }