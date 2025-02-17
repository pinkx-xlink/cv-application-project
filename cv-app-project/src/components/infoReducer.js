import { useReducer } from "react";

export const initialState = {
    selectedId: 0,
    messages: {
      0: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
  };
export default function infoReducer(state, action) {
    switch (action.type) {
        case 'CHANGED_SELECTION': {
            return {
                ...state,
                selectedId: action.inputFieldId,
            };
        }
        case 'EDITED_MESSAGE': {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: action.message,
                },
            };
        }
        case 'SENT_MESSAGE': {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: '',
                },
            };
        }
        default: {
            throw Error('ERROR' + action.type)
        }
    }
}