import * as fromFilter from './filter.actions';

const initialState: fromFilter.ValidFilters = 'all';

export function filterReducer(state = initialState, action: fromFilter.Actions): fromFilter.ValidFilters {

  switch (action.type) {
    case fromFilter.SET_FILTER:
      return action.filter;
    default:
      return state;
  }

}
