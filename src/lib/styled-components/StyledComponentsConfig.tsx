import isPropValid from '@emotion/is-prop-valid';
import { PropsWithChildren } from 'react';
import { StyleSheetManager, WebTarget } from 'styled-components';

/**
 * This was made automatically in styled-components as of v5,
 * now we need to do it manually
 */
const shouldForwardProp = (prop: string, element: WebTarget) => {
  const isNativeHTMLElement = typeof element === 'string';

  return isNativeHTMLElement ? isPropValid(prop) : true;
};

/**
 * shouldForwardProp cleans up passing props to the dom
 * this is a global setting
 * otherwise we would need to use transient props
 * https://styled-components.com/docs/api#shouldforwardprop
 */
export const StyledComponentsConfig = ({ children }: PropsWithChildren) => {
  return <StyleSheetManager shouldForwardProp={shouldForwardProp}>{children}</StyleSheetManager>;
};
