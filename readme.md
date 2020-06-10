# Mocha For Loop Tests
A simple example how you can run Mocha tests with a for loop. The tests are run from app.js from the for loop instead of running them from the /test folder.

## How to
to run the tests simply $npm run start

### testsLookup.json
Contains all the describe and it statements for all the tests available. The key serves as an identifier for the filename of the test itself e.g. "titleCheck" will call /test/titleCheck.js

### testConfigs.json
Contains a list of tests that will be run, they must follow the naming convention from testsLookup.json
Every test under the key tests should be available in the test folder with the .js extension.
The test will run against all URLs under the "pages" key

### test folder
The test folder contain all the tests, but does not have any Mocha methods, since they are run and set in app.js


### Note
I understand that there are many different ways of creating such tests, but this is one example that could help specific use cases...