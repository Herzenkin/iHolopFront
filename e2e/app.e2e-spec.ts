import { IHolopFrontPage } from './app.po';

describe('i-holop-front App', () => {
  let page: IHolopFrontPage;

  beforeEach(() => {
    page = new IHolopFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
