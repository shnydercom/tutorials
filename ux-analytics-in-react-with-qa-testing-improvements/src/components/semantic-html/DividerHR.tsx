import { useEffect, useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export interface DividerHRProps {
	/**
	 * this id gets used for react's id as well as for the <hr/>-element's data-qa-id attribute and should be unique on the page
	 */
	elementId?: string;
	/**
	 * css class name on the <hr/> element
	 */
	className?: string;
	/**
	 * callback when the divider's visibility changes
	 */
	onVisibilityChanged?: (visible: boolean) => void;
}

/**
 * a component that displays a <hr/>-element which can notify about changes to its visibility.
 * <hr/> is a horizontal divider in html, mostly displayed as a 1px line. That makes it useful for finding out if users have finished reading a part of a webpage
 * @param props 
 * @returns 
 */
export const DividerHR = (props?: DividerHRProps) => {
	const hrRef = useRef<HTMLHRElement | null>(null);
	const [isVisible /*entry*/] = useIntersectionObserver({
		elementRef: hrRef,
	});

	useEffect(
		() => props && props.onVisibilityChanged && props.onVisibilityChanged(isVisible),
		[isVisible, !!(props && props.onVisibilityChanged)]
	);

	const compProps: { className?: string; id?: string; "data-qa-id"?: string } = {};
	if (props) {
		if (props.className) compProps["className"] = props.className;
		if (props.elementId) {
			compProps["id"] = props.elementId;
			compProps["data-qa-id"] = props.elementId;
		}
	}
	return <hr ref={hrRef} {...compProps} />;
};