import { PipeTransform, Pipe } from '@angular/core';
import { LocalizationService } from './localization.service'

@Pipe({
    name: 'localize'
})
export class LocalizePipe implements PipeTransform {

    constructor(private localizationService: LocalizationService) { }

    transform(value: string, transformTo: string) {
        return this.localizationService.getTranslatedWord(value, transformTo);

    }
}