import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantityConversion',
})
export class QuantityConversionPipe implements PipeTransform {
  transform(value: any, measure: string): unknown {
    const threshold = 500;
    const packets = Math.ceil(value / 500);
    const jar = Math.ceil(value / 0.25);

    switch (measure) {
      case 'gram':
      case 'grams':
      case 'milliliter':
      case 'milliliters':
      case 'pound':
      case 'pounds':
        return value <= 500 ? 1 + ' ' + 'packet' : packets + ' ' + 'packets';

      case 'tablespoon':
      case 'teaspoon':
        return '1 small jar';

      case 'ounce':
        return value <= 500 ? 1 + ' ' + 'bottle' : packets + ' ' + 'bottles';

      case 'cup':
        return value <= 0.25 ? 1 + ' ' + 'jar' : jar + ' ' + 'mason jars';

      case '<unit>':
        return value % 1 !== 0 ? 'optional' : value;
    }

    return value;
  }
}
