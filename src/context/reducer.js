export const reducerCases = {
  TOKEN: "TOKEN",
  USER_TOKEN: "UESR_TOKEN",
  SEARCH: "SEARCH",
  SEARCH_TYPE: "SEARCH_TYPE",
  USER: "USER",
  SELECTED_LIST: "SELECTED_LIST",
  PLAYING: "PLAYING",
  CURRENT_TIME: "CURRENT_TIME",
  PLAYER_STATE: "PLAYER_STATE",
  OPEN_DIALOG: "OPEN_DIALOG",
}

export const initialState = {
  token: null,
  userToken: null,
  search: "",
  searchType: "artists",
  userInfo: null,
  selectedList: null,
  currentlyPlaying: null,
  currentTime: 0,
  playerState: false,
  openDialog: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.TOKEN:
      return {
        ...state,
        token: action.token,
        userInfo: null,
        userToken: null,
      }
    case reducerCases.USER_TOKEN:
      return {
        ...state,
        userToken: action.userToken,
      }
    case reducerCases.SEARCH:
      return {
        ...state,
        search: action.search,
      }
    case reducerCases.SEARCH_TYPE:
      return {
        ...state,
        searchType: action.searchType,
      }
    case reducerCases.USER:
      return {
        ...state,
        userInfo: action.userInfo,
      }
    case reducerCases.SELECTED_LIST:
      return {
        ...state,
        selectedList: action.selectedList,
      }
    case reducerCases.PLAYING:
      return {
        ...state,
        currentlyPlaying: action.currentlyPlaying,
      }
    case reducerCases.CURRENT_TIME:
      return {
        ...state,
        currentTime: action.currentTime,
      }
    case reducerCases.PLAYER_STATE:
      return {
        ...state,
        playerState: action.playerState,
      }
    case reducerCases.OPEN_DIALOG:
      return {
        ...state,
        openDialog: action.openDialog,
      }
    default:
      return state;
  }
}

export default reducer;