export type Row = {
  id: string;
} & Record<string, unknown>;

export type Column = {
  key: string;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  editable?: boolean;
};

export type Sort = {
  key: Column["key"];
  direction: "asc" | "desc";
} | null;
