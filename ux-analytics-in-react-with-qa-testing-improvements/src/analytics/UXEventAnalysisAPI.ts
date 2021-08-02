import { PastUXEvent } from "./UXEventInterfaces";
import { LOG_URL_DEFAULT } from "./UXEventLoggingAPI";

/**
 * retrieves a filtered sub-set of past UX events from the server asynchronously
 * @param attribute a property name of PastUXEvent, i.e. `sourceID`, `eventType`, `eventValue` and `timeStamp`
 * @param value the value for that property that the server will filter by
 * @param logUrl (optional) base url for the GET-request
 * @returns
 */
export async function getUXEventsfor(
  attribute: keyof PastUXEvent,
  value: string,
  logUrl?: string
): Promise<PastUXEvent[]> {
  let _logUrl = logUrl || LOG_URL_DEFAULT;
  const params = new URLSearchParams({
    [attribute]: value,
  });
  _logUrl = _logUrl + params;
  const pastEventsRes = await fetch(_logUrl, {
    method: "GET",
  });
  const pastEventsArr: [] = await pastEventsRes.json();
  return pastEventsArr;
}

/**
 * retrieves all past UX events from the server asynchronously
 * @param logUrl (optional) base url for the GET-request
 * @returns
 */
export async function getAllUXEvents(logUrl?: string): Promise<PastUXEvent[]> {
  let _logUrl = logUrl || LOG_URL_DEFAULT;
  const pastEventsRes = await fetch(_logUrl, {
    method: "GET",
  });
  const pastEventsArr: [] = await pastEventsRes.json();
  return pastEventsArr;
}
