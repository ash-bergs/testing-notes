/_=============================================
= Annotations =
=============================================_/
Like Jest and other test runners, Playwright has several annotations - group tests into suites - skip tests - run one single test at a time (or a group marked together)

test.describe('A describe block marks a test suite', () => {
test.skip('.skip marks this test to be ignored', () => {
_tests_
})
test.only('only this test will be run', () => {
_tests_
})
})

- when 1 or more tests are marked with only, they will all be run

test.describe('Test suite', () => {
test.skip('ignored test', () => {
_tests_
})
test.only('this test will be run', () => {
_tests_
})
test.only('so will this one', () => {
_tests_
})
test('this test will not be run', () => {
_tests_
})
})
_============ End of Annotations =============_

/_=============================================
= Tagging =
=============================================_/
Playwright allows us to place tags on tests and run them as a group.
Tagging is an extension of annotations.

```
test('Assertions @tagName', async({ page }) => {
    await page.goto('https://www.example.com');
    // not very useful in this case, but comparing url is handy when testing redirects
    await expect(page).toHaveURL('https://www.example.com');
    // also useful for testing redirects and accessibility/usability
    await expect(page).toHaveTitle('Example Domain');
});
```

syntax: @ + name of the tag in the description of test/test suite
In the description of the test we've created a new tag: `@tagName`

Now we can do a couple of things:

1. Use playwright to just run the tests with our tag:

- npx playwright --grep @tagName

2. We can do the inverse and run every test _except_ a tagged test:

- npx playwright --grep-invert @tagName

_============ End of Tagging =============_
