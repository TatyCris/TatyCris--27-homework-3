export const ADD_MODEL = "ADD_MODEL"

export const addModel = (computer) => {
    return {
        type: ADD_MODEL,
        payload: computer
    }
}