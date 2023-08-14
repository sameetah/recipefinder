import { QuantityConversionPipe } from './quantity-conversion.pipe';

describe('QuantityConversionPipe', () => {
  it('create an instance', () => {
    const pipe = new QuantityConversionPipe();
    expect(pipe).toBeTruthy();
  });
});
