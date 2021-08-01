import { UXEvent, UX_SOURCE_UNKNOWN, UXEventType } from "./UXEventInterfaces";
export const LOG_URL_DEFAULT: string = "/api/log";

/**
 * logs a client-event to the server
 * @param data any JSON-serializable data to be logged
 * @param logUrl the API endpoint on the server where 'data' is sent to, defaults to "/api/log"
 */
export function logBeacon<T>(data: T, logUrl?: string) {
  const dataHistoryBlob = new Blob([JSON.stringify(data)], {
    type: "application/json",
  });
  navigator.sendBeacon(logUrl || LOG_URL_DEFAULT, dataHistoryBlob);
}

/**
 * logs a DOM-event from the client to the server, using the UXEvent interface
 * @param eventType an event type for logging. This is what the data analyst will see
 * @param eventValue a stringified value to store for this event
 * @param eTarget the target of a UIEvent coming from the DOM, e.g. `e.currentTarget` in the event of an onclick-hanlder
 * @param logUrl the API endpoint on the server where the UXEvent is sent to, defaults to `/api/log`
 */
export function logDOMevent(
  eventType: UXEventType,
  eventValue: string,
  eTarget?: Element,
  logUrl?: string
) {
  const sourceID =
    (eTarget && eTarget.getAttribute("data-qa-id")) || UX_SOURCE_UNKNOWN;
  const uxEvent: UXEvent = {
    sourceID,
    eventType,
    eventValue,
  };
  logBeacon(uxEvent, logUrl);
}
