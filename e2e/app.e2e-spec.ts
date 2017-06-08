import { PRESENTATIONPage } from './app.po';

describe('presentation App', () => {
  let page: PRESENTATIONPage;

  beforeEach(() => {
    page = new PRESENTATIONPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
