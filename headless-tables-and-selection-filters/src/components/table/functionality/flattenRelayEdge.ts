import { RelayEdge } from "./RelaybaseInterfaces";

export function flattenRelayEdge<TEdge extends RelayEdge, TFlat extends object>(
  edge?: TEdge | undefined | null
): TFlat {
  if (edge) {
    return {
      cursor: edge.cursor,
      ...edge.node,
    } as TFlat;
  }
  return {} as TFlat;
}
