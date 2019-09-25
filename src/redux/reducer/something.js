import {
  SOMETHING_SIGNIFICANT_HAPPENED,
  SOMETHING_INSIGNIFICANT_HAPPENED
} from "../actionTypes";

const initialState = {
  dates: {
    significant: [],
    insignificant: []
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SOMETHING_SIGNIFICANT_HAPPENED:
      return {
        ...state,
        dates: {
          ...state.dates,
          significant: [
            ...state.dates.significant,
            new Date(),
          ]
        }
      };
    case SOMETHING_INSIGNIFICANT_HAPPENED:
      return {
        ...state,
        dates: {
          ...state.dates,
          insignificant: [
            ...state.dates.insignificant,
            new Date(),
          ]
        }
      };
    default:
      return state;
  }
};
