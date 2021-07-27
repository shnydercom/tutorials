import ReactDOM from 'react-dom';
const LOG_URL_DEFAULT: string = "/api/log";

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

export function logDOMevent(e: Event, eventType: string, eventValue: string) {
} 