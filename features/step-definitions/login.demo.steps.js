const { When, Given, Then } = require("@wdio/cucumber-framework");

// Given("user is on the login page", function () {
//   return "Pending";
// });

// When("user enters username and password", function () {
//   return "pending";
// });

// When("clicks on login button", function () {
//   return "pending";
// });

// When("user is navigated to the home page", function () {
//   return "pending";
// });


Given(/^user is on the login page$/, async () => {
    await driver.pause(2000);
});

When(/^user enters username and password$/, async () => {
    await $('~App').click();
});

When(/^clicks on login button$/, async () => {
    await $('~Alert Dialogs').click();
    await $('~OK Cancel dialog with a message').click();
});

Then(/^user is navigated to the home page$/, async () => {
    await expect(await driver.getAlertText()).toContain('Lorem ipsum dolor');
});
