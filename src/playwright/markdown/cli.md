/_=============================================
= CLI Options =
=============================================_/
By default Playwright runs tests in headless mode to improve performance
but we can use a flag to run in headed mode:

- npx playwright test --headed

We can also specify which browser to use:

- npx playwright test --browser=firefox
  or all of them:
- npx playwright test --browser=all

and combine both headed and browser options:

- npx playwright test --headed --browser=chromium

- Follow Up Questions
  /_ -------------------------------------------------- _/

* Do tests always take in the 'page' object?
* Are we always doing a unit test with playwright? Or is this even considered a unit test?
* What's the difference between headless and headed?

_============ End of CLI Options =============_
