## Web Authenticator

This is a simple web based **TOTP** Authenticator app.  I am built this because we needed a better way to manage 2fa tokens at work and I wanted something that was accessible via a web browser that I could put behind a zero trust portal or similiar infrastructure. 

#### Setup
- Copy `src/tokens.example.ts` to `src/tokens.ts` and update accordingly.

This app is designed to work completely offline at the moment.  In the future I may utilize the [Akeyless](https://akeyless.io) api to store/retrieve the secrets but for now this app will live on an internal server where the tokens are manually added since the codebase is extremely simple at the moment.

I opted for a "Vanilla" experience because this is meant to be a prototype and I didn't need a bunch of overhead.