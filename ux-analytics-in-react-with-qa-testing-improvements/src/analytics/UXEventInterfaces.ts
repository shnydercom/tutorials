export type UXEventTypes = "is_visible_changed_to";
export interface UXEvent {
	sourceID: string;
	eventType: UXEventTypes;
	eventValue: string;
}