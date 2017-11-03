import { GuardianPage } from './app.po';

describe('guardian App', () => {
  let page: GuardianPage;

  beforeEach(() => {
    page = new GuardianPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
