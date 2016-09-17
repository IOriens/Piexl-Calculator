import { connect } from 'react-redux'
import InputCard from '../components/InputCard/InputCard'
import { inputChange } from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        height: state[ownProps.cardType]['height'],
        width: state[ownProps.cardType]['width'],
        cardName: ownProps.cardType.toUpperCase(),
        cardType: ownProps.cardType
    }
}

const mapDisPatchToProps = (dispatch, ownProps) => {
    return {
        valueChange: (cardType, heightOrWidth, value) => {
            dispatch(inputChange(cardType, heightOrWidth, value))
        }
    }
}

const InputCardContainer = connect(mapStateToProps, mapDisPatchToProps)(InputCard)

export default InputCardContainer