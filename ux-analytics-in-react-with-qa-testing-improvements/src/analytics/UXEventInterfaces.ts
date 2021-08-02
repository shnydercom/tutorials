export type UXEventType = "is_visible_changed_to" | "on_click";

export interface UXEvent {
	sourceID: string;
	eventType: UXEventType;
	eventValue: string;
}

export interface PastUXEvent extends UXEvent {
	timeStamp: number;
	sessionID: string;
}

export const UX_SOURCE_UNKNOWN = "source_unknown";

export const UXEventTypeKeys: UXEventType[] = ["is_visible_changed_to", "on_click"]