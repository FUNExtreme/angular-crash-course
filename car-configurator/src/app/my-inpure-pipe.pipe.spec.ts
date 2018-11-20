import { MyInpurePipePipe } from './my-inpure-pipe.pipe';

describe('MyInpurePipePipe', () => {
  it('create an instance', () => {
    const pipe = new MyInpurePipePipe();
    expect(pipe).toBeTruthy();
  });
});
