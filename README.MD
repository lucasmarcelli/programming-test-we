###Lucas Marcelli - wecharity assignment

## To Run (dev mode)

1. Open console in project

2. install the `npm-run-all` package

3. run `yarn` to install dependencies (or `npm`)

4. replace `apikey` in `Stores/Store.js` with your own api key.

5. run `yarn run start`

## To Test

1. Do step 1 to 4 above first.

2. run `yarn test`

3. react-scripts testing suite will come up, will run all suites, continue testing as desired. 


If nothing shows up and/or the console throws a CORS error, you will need to either install
a chrome extension here: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi

or

Run a local proxy server to proxy requests and add `"proxy":"proxy-address"` to `package.json`

If it still doesn't work, ensure the correct `apikey` was added in.

## Choices and next steps

Total time spent: `5 hours`.

I used my own flux-like store framework in lieu of redux, for the same reason - it has been more than a year 
since I last used redux. If required, I can relearn it before the pair programming portion.

I used sass, because its more extensible, despite the limited scope of the project here.

I used css grid for layout, because pretty soon that will be the best way to do *anything* high level.

I used `react-router-dom` for routing because it is the 'goto' routing module, and if the app needs new routes, adding them will be easier.

Testing done using Jest and Enzyme. Did not get to `details.test.js` or any of the stores tests, as I didn't want to go over the max time of 5 hours.
