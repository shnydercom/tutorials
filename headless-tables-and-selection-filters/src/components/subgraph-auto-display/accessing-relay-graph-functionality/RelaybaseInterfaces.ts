export interface RelayNode {
  id?: string | null;
  __typename?: string | null;
}

export interface RelayConnection {
  __typename?: string;
  edges?: RelayEdge[];
  pageInfo?: RelayPageInfo;
}

export interface RelayEdge {
  __typename?: string | null;
  cursor?: string | null;
  node?: RelayNode | null;
}

export interface RelayPageInfo {
  __typename?: string;
  startCursor?: string;
  endCursor?: string;
}

export interface RelayQueryData {
  [s: string]: RelayNode | RelayNode[];
}
