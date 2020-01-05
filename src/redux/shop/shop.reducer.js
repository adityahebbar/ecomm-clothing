import data from './shop.data';

const INITIAL_STATE = {
    collections: data
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}