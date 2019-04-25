import { connect } from 'react-redux'
import * as thunks from '../../thunks'

const mapStateToProps = (state) => {
  return {
    isScheduleLoading: state.app.isScheduleLoading,
    schedule: state.app.schedule,
  }
}

const mapDispatchToProps = {
  loadSchedule: thunks.loadSchedule,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)
