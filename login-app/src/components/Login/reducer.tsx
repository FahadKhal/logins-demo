export const types = {
  update: "update",
  resetFilter: "resetFilter",
};

export const initialState = {
  username: "",
  password: "",
  error: "",
  loading: "",
  showPassword: "",
};

export type State = typeof initialState;

export type ActionTypes =
  | "username"
  | "password"
  | "error"
  | "loading"
  | "showPassword";

export type Action = {
  type: string;
  payload?: { type: ActionTypes; value: any };
};

export const actions = {
  update: (type: ActionTypes, value: any) => ({
    type: types.update,
    payload: { type, value },
  }),
  resetFilter: () => ({
    type: types.resetFilter,
    page: 1,
  }),
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case types.update:
      if (!action.payload) return state;
      return {
        ...state,
        [action.payload.type]: action.payload.value,
      };
    case types.resetFilter:
      return initialState;

    default:
      return state;
  }
};
