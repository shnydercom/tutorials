export type UXEventType =
  | "session_start"
  | "on_click"
  | "is_visible_changed_to"
  | "color_palette_changed_to";

export interface UXEvent {
  sourceID: string;
  eventType: UXEventType;
  eventValue: string;
}

export interface PastUXEvent extends UXEvent {
  timeStamp: number;
  sessionID: string;
  relativeTime: number;
  firstEventTimeStamp: number;
}

export const UX_SOURCE_UNKNOWN = "source_unknown";

/**
 * UXEventType is a union type of string literals. This is useful for making switch-case statements exhaustive:
 * https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking
 *
 * below however, we want to get an exhaustive list of all string literals in the union type. By building a helper
 * object with the key set to "s in UXEventType", we effectively create an enum-like structure with all the
 * string literals of UXEventType. When you create or change UXEventType, this helps to keep the
 * array in UXEventTypeKeys up-to-date by throwing a typing error. The order of the entries is also preserved
 */
const UXEventTypeHelperObj: { [s in UXEventType]: UXEventType } = {
  session_start: "session_start",
  on_click: "on_click",
  is_visible_changed_to: "is_visible_changed_to",
  color_palette_changed_to: "color_palette_changed_to"
};

export const UXEventTypeKeys: UXEventType[] = Object.keys(
  UXEventTypeHelperObj
) as UXEventType[];
