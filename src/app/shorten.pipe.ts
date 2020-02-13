import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'shotenPipe'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any){
        return value.substr(0,2);
    }
}