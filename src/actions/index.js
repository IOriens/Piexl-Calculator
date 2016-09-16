export const inputChange = (changedAttr, heightOrWidth, value) => {
    return {
        type: 'INPUT_CHANGE',
        changedAttr,
        heightOrWidth,
        value
    }
}

