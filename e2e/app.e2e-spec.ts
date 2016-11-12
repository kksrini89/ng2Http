import { SampleNg2HttpPage } from './app.po';

describe('sample-ng2-http App', function() {
  let page: SampleNg2HttpPage;

  beforeEach(() => {
    page = new SampleNg2HttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
