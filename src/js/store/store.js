"use strict";

import {createStore} from 'redux';
import homeMenuReducer from '../reducers/homeMenuReducer.js'

const store = createStore(homeMenuReducer);

export default store;