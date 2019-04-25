import * as thunks from '../../thunks'

export default async (store, match) => {
  const { params } = match
  await store.dispatch(thunks.loadEvent(params.date))
}
