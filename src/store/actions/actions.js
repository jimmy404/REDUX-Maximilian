export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBSTRACT = 'SUBSTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

const increment = () => {
    return {
        type: INCREMENT
    };
};
const decrement = () => {
    return {
        type: DECREMENT
    };
};
const add = (value) => {
    return {
        type: ADD,
        val: value
    };
};
const substract = (value) => {
    return {
        type: SUBSTRACT,
        val: value
    };
};
const storeResult = (res) => {
    return {
        type: STORE_RESULT,
        result: res
    };
};
const deleteResult = (res) => {
    return {
        type: DELETE_RESULT,
        resultElId: res
    };
};