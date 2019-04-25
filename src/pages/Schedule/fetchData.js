import * as thunks from '../../thunks'

export default async (store) => {
  await store.dispatch(thunks.loadSchedule())
}
