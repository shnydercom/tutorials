/**
 * generates React Elements that can contain children, without assigning those children
 */
export abstract class AbstractTablePartFactory {
  /**
   * Generates React container widgets with properties that don't contain children
   * @param props the properties that will be spread over the container
   * @param rtAPIObj the data that this container displays, can be cell-, row-, column-, or table-data. Use this for interactive logic
   */
  abstract generateReactWidget<TProps, TrtAPIObj>(
    props: React.PropsWithChildren<TProps> & {
      rtAPIObj?: TrtAPIObj;
    }
  ): JSX.Element;
}
