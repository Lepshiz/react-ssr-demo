import { connect } from 'react-redux'
import * as thunks from '../../thunks'

const mapStateToProps = (state) => {
  return {
    isEventLoading: state.app.isEventLoading,
    event: state.app.event,
  }
}

const mapDispatchToProps = {
  loadEvent: thunks.loadEvent,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)
