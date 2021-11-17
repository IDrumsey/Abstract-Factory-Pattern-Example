import { CCompiler } from './c-compiler';

describe('CCompiler', () => {
  it('should create an instance', () => {
    expect(new CCompiler()).toBeTruthy();
  });
});
