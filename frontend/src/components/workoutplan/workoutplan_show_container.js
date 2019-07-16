import { connect } from 'react-redux';
import { fetchWorkoutPlan } from '../../actions/workoutPlan_actions';
import workoutPlanShow from './workoutplan_show';

const mapStateToProps = (state, ownProps) => {
    let workoutPlan = state.entities.workoutPlans[ownProps.match.params.workoutPlanId]
    return {
        workoutPlan,
        workoutPlanId: ownProps.match.params.workoutPlanId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchWorkoutPlan: (id) => dispatch(fetchWorkoutPlan(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(workoutPlanShow);