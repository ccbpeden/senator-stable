import { SenatorStablePage } from './app.po';

describe('senator-stable App', () => {
  let page: SenatorStablePage;

  beforeEach(() => {
    page = new SenatorStablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
