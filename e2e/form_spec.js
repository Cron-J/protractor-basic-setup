'use strict';

describe('Attribute page', function() {
  var ptor;
  beforeEach(function() {
    //browser loading
    browser.ignoreSynchronization = true;
    ptor = protractor.getInstance();
    //passing initial url
    browser.get('http://localhost:9000/#/');
    ptor.sleep(500);
    //expecting url
    expect(browser.getCurrentUrl()).toContain('/');
    ptor.sleep(500);
  });

  afterEach(function() {

  })

  describe('able to test new page using', function() {
    beforeEach(function() {
      ptor.sleep(500);   
    });
    it('element tested by id', function() {
      var ele = element(by.id('divId'));
    });
    it('element tested by class', function() {
      var ele = element(by.css('.heading'));
    });
    it('element tested by tag name', function() {
      var ele = element(by.tagName('h4'));
    });
    it('element tested by repeater', function() {
      var ele = element.all(by.repeater('item in itemList'));
    });
    it('element tested by model name', function() {
      var ele = element(by.model('attribute.name')).sendKeys('Attribute one');
    });
    it('element tested by checkbox', function() {
      var ele = element(by.model('attribute.name')).click();
    });
    it('expecting element by class', function() {
      expect(element(by.css('.class2')).isDisplayed()).toBe(true);
    });
    it('expecting element count by repeater', function() {
      expect(itemList.count()).toBe(4);
    });
    it('expecting element by text message', function() {
      expect(element(by.tagName('h5')).getText()).toContain("This is test example");      
    });
    it('expecting element by url', function() {
      expect(browser.getCurrentUrl()).toContain('/');
    });
    it('get element by tag li', function() {
      element.all(by.repeater('item in itemList')).get(0);
    });
    it('get element by url', function() {
      browser.get('http://localhost:9000/#/');
    });

  });
  
  describe('able to test form by', function() {
    beforeEach(function() {
      ptor.sleep(500);   
    });
    it('successful submit', function() {
      expect(element(by.tagName('h1')).getText()).toContain("Test form");
      expect(element(by.tagName('h4')).getText()).toContain("Attribute");
      expect(element(by.tagName('h5')).getText()).toContain("This is test example");
      expect(element(by.css('.class2')).getText()).toContain("New Attribute");
      element(by.model('attribute.name')).sendKeys('Attribute name');
      element(by.model('attribute.isChecked')).click();
      var listCount = element.all(by.repeater('item in itemList'));
      expect(listCount.count()).toBe(3);
      element(by.css('[ng-click="save(attribute)"]')).click();
      ptor.sleep(1000);
      expect(element(by.css('.class1')).getText()).toContain("View Attribute 1");
      ptor.sleep(1000);
      element(by.css('[ng-click="back()"]')).click();
      expect(element(by.css('.class2')).getText()).toContain("New Attribute");
      ptor.sleep(1000);
    });
    it('error submit', function() {
      element(by.css('[ng-click="save(attribute)"]')).click();
      ptor.sleep(1000);
      expect(element(by.css('.error')).getText()).toContain("Fill the form with valid data");
    });

  });

});