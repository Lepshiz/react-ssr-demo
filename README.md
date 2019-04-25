# [https://github.com/cullenjett/react-ssr-boilerplate](react-ssr-boilerplate) demo ⚛️

## Initial setup

- `npm install`

## Development

- `npm start`
  - Start the dev server at [http://localhost:3000](http://localhost:3000)
- `npm test`
  - Start `jest` in watch mode
- `npm start:api`
- Start api server [http://localhost:4000](http://localhost:4000)

## Production

- `npm run build && npm run start:prod`
  - Bundle the JS and fire up the Express server for production
- `npm run docker`
  - Build and start a local Docker image in production mode (mostly useful for debugging)
