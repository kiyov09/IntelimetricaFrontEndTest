import { MexicoJobAppPage } from './app.po';

describe('mexico-job-app App', function() {
  let page: MexicoJobAppPage;

  beforeEach(() => {
    page = new MexicoJobAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
