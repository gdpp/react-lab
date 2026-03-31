import type { Row, Sort } from "../types";

type State = {
  data: Row[];
  sort: Sort | null;
  filters: Record<string, string>;
  page: number;
  pageSize: number;
};

type Action =
  | { type: "SET_SORT"; payload: Sort | null }
  | { type: "SET_FILTER"; payload: { key: string; value: string | null } }
  | { type: "SET_PAGE"; payload: number }
  | { type: "SET_PAGE_SIZE"; payload: number }
  | {
      type: "UPDATE_CELL";
      payload: { rowId: string; key: string; value: unknown };
    }
  | { type: "RESET_FILTERS" }
  | { type: "RESET_ALL" };

// function reducer(state: State, action: Action): State {
//   switch (action.type) {
//     default:
//       return state;
//   }
// }
