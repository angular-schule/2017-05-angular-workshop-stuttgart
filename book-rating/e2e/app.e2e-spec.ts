import { BookRatingPage } from './app.po';
import { browser, protractor } from 'protractor';

describe('book-rating App', () => {
  let page: BookRatingPage;

  beforeEach(() => {
    page = new BookRatingPage();
  });

  it('should display message saying Book Rating', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Book Rating');
  });
});
