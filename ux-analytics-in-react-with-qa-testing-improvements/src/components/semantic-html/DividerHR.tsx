import { useCallback, useEffect, useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export type VisibilityChangeFunction = (
  isVisible: boolean,
  domElement?: Element
) => void;

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
   * callback when the divider's visibility changes, can optionally reference the DOM element
   * @param isVisible whether the <hr/> is visible or not now
   * @param domElement a reference to the exact <hr/> DOM element which changed visibility
   */
  onVisibilityChanged?: VisibilityChangeFunction;
}

/**
 * a component that displays a <hr/>-element which can notify about changes to its visibility.
 * <hr/> is a horizontal divider in html, mostly displayed as a 1px line. That makes it useful for finding out if users have finished reading a part of a webpage
 * @param props
 * @returns
 */
export const DividerHR = (props?: DividerHRProps) => {
  const hrRef = useRef<HTMLHRElement | null>(null);
  const [isVisible] = useIntersectionObserver({
    elementRef: hrRef,
  });
  const handleVisibilityChangedMemoized = useCallback<VisibilityChangeFunction>(
    (isVisible, domElement) => {
      if (props && props.onVisibilityChanged) props.onVisibilityChanged(isVisible, domElement);
    },
    [props]
  );
  useEffect(
    () => handleVisibilityChangedMemoized(isVisible, hrRef.current!),
    [isVisible, handleVisibilityChangedMemoized]
  );

  const compProps: { className?: string; id?: string; "data-qa-id"?: string } =
    {};
  if (props) {
    if (props.className) compProps["className"] = props.className;
    if (props.elementId) {
      compProps["id"] = props.elementId;
      compProps["data-qa-id"] = props.elementId;
    }
  }
  return <hr ref={hrRef} {...compProps} />;
};
