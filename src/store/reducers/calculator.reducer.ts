import { Action } from "../../types/store.types";
import { GET_CALCULATOR_RESULT_SUCCESS, SET_CALCULATOR_INFORMATION } from "../actions/calculator.actions";


// const initialState = {
//   concrete: {
//     foundation: {
//       beam: {},
//       zapata: {},
//       pile: {},
//     },
//     column: {
//       squareColumn: {},
//       roundCoulumn: {},
//     },
//     beam: {
//       structuralBeam: {},
//       confinementBeam: {},
//     },
//     slabs: {
//       blockSlab: {},
//       lightenedSlab: {},
//       solidSlab: {},
//       metaldeckSlab: {},
//     }
//   },
//   walls: {
//     brick: {
//       block10: {},
//       block15:{},
//       block20:{},
//       block25:{},
//       customBlock: {},
//     },
//     ceramicBrick: {
//       brick3: {},
//       brick6: {},
//       brick9: {},
//       brick12: {}
//     },
//     solidBrick: {
//       solid: {},
//       perforated: {},

//     }
//   },
//   revoke: {},
//   tiles: {},
//   paint: {},
//   drywall: {},
// }

const initialState = {
  currentCalculator: {},
  result: {}
}

const reducer = (state= initialState, action: Action) => {
  switch(action.type){
    case SET_CALCULATOR_INFORMATION: {
      return {
        ...state,
        currentCalculator: action.payload
      }
    }
    case GET_CALCULATOR_RESULT_SUCCESS: {
      return {
        ...state,
        result: action.payload
      }
    }
    default:
      return state
  }
}


// let modelForActionPayload = {
//   mainMenu : "concrete",
//   subMenu: "",
//   name: "",
//   information: {}
// }

export default reducer;