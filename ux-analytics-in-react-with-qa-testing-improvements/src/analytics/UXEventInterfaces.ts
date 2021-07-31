export type UXEventTypes = "is_visible_changed_to" | "on_click";

export interface UXEvent {
	sourceID: string;
	eventType: UXEventTypes;
	eventValue: string;
}

export interface PastUXEvent extends UXEvent {
	timeStamp: Date;
}

export const UX_SOURCE_UNKNOWN = "source_unknown";