import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[confirmation]'
})
export class ConfirmationDirective {

    @Output() userClickRespone = new EventEmitter<string>();
    @HostListener('click') click() {
        if (confirm('Are you sure?')) {
            this.userClickRespone.emit('yes');
        }
        else {
            this.userClickRespone.emit('no');
        }
    }

}