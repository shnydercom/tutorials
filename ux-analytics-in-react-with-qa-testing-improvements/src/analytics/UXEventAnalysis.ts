import { PastUXEvent, UXEvent } from "./UXEventInterfaces";
import { LOG_URL_DEFAULT } from "./UXEventLogging";

/**
 * retrieves past UX events from the server asynchronously
 * @param attribute 
 * @param value 
 * @param logUrl 
 * @returns 
 */
export async function getUXEventsfor(
  attribute: keyof UXEvent,
  value: string,
  logUrl?: string
): Promise<PastUXEvent[]> {
  let _logUrl = logUrl || LOG_URL_DEFAULT;
  const params = new URLSearchParams({
      [attribute]: value
  });
  _logUrl = _logUrl + params;
  const pastEventsRes = await fetch(_logUrl, {
    method: "GET"
  });
  const pastEventsArr = pastEventsRes.json();
  return pastEventsArr;
}
