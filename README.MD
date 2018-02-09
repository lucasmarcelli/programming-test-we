###Lucas Marcelli - wecharity assignment

## To Run (dev mode)

1. Open console in project

2. install the `npm-run-all` package

3. run `yarn` to install dependencies (or `npm`)

4. replace `apikey` in `Stores/Store.js` with your own api key.

5. run `yarn run start`


If nothing shows up and/or the console throws a CORS error, you will need to either install
a chrome extension here: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi

or

Run a local proxy server to proxy requests and add `"proxy":"proxy-address"` to `package.json`

If it still doesn't work, ensure the correct `apikey` was added in.

## Choices and next steps

I haven't used jest for testing in more than a year, so despite the fact that I prefer test-driven development in general, I didn't feel
comfortable doing it in that way for this. I also decided that it would be most beneficial 
for myself and the interview process if I left tests until the pair programming session, or if you'd like
I can commit tests over the weekend - this gives me a chance to refresh myself with jest sufficiently.
Ideally TDD *is* my general method, however.

I used my own flux-like store framework in lieu of redux, for the same reason - it has been more than a year 
since I last used redux. If required, I can relearn it before the pair programming portion.

I used sass, because its more extensible, despite the limited scope of the project here.

I used css grid for layout, because pretty soon that will be the best way to do *anything* high level.
