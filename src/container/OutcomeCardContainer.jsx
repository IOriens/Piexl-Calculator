import OutcomeCard from '../components/OutcomeCard/OutcomeCard'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        cardName: ownProps.cardType.toUpperCase(),
        cardType: ownProps.cardType,
        height: state['outcome'][ownProps.cardType]['height'],
        width: state['outcome'][ownProps.cardType]['width']
    }
}

const OutcomeCardContainer = connect(mapStateToProps)(OutcomeCard)
export default OutcomeCardContainer

