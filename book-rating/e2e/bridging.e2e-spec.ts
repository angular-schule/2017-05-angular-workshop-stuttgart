import { browser, element, by } from 'protractor';

describe('bridging IT website', () => {

  beforeAll(() => {
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();
    //browser.driver.manage().window().setSize(100, 100);
  });

  const year = 2016; // ^_^
  it('should show a footer text with the correct year', () => {

    browser.get('http://www.bridging-it.de/');
    const footerElement = element(by.css('footer .muted.hidden-xs'));

    expect(footerElement.getText()).toContain(year);
  });

  afterAll(() => browser.ignoreSynchronization = false);
});
