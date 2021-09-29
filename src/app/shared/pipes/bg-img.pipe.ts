import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bgImg',
})
export class BgImgPipe implements PipeTransform {
  transform(path: string): string {
    return path || 'assets/images/generic.png';
  }
}
