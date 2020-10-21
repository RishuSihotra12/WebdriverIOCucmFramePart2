import {Given,When,Then} from 'cucumber';

// const Given= require('cucumber').default;
// const When= require('cucumber').default;
// const Then= require('cucumber').default;



Given(/^ I'm on the login page$/,function(){
browser.url("https://www.zara.com/in/")
});

When(/^ I log in with default user$/,function(){
browser.element("//span[text()='LOG IN']").click();
browser.element("//input[@name='email']").setValue("rishu");
browser.element("//input[@name='password']").setValue("rishu");
browser.element("//span[text()='LOG IN']").click();
});
Then(/^ I shall be on the Flight finder page$/,function(){

});