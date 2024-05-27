import { CSSProperties } from "react";
import styled, { css } from "styled-components";

const gaps = {
  /**
   * usually for container for text elements
   */
  text: css`
    gap: 0.25rem;
  `,
  /**
   * small element with flexbox, such as button with text and icon
   */
  element: css`
    gap: 0.5rem;
  `,
  /**
   * examples:
   * - container with large icon or avatar and text
   * - resource tile list
   */
  elementsContainer: css`
    gap: 1rem;
  `,
  /**
   * e.g. container of page sections
   */
  sections: css`
    gap: 2rem;
  `,
  /**
   * e.g. container of bigger boxed elements which are placed visually closer together
   */
  sectionsShort: css`
    gap: 1.25rem;
  `,
  /**
   * e.g. container of page sections with larger gap to visually clearly separate each block
   * The gap is shorter on mobile to avoid too much empty vertical space compared to the horizontal white spacing
   */
  sectionsLarge: css`
    gap: 5rem;
  `,
  /**
   * e.g. container of page sections with a medium gap to visually separate each block
   */
  sectionsMedium: css`
    gap: 2.5rem;
  `,
};

type FlexProps = {
  direction?: "row" | "column";
  gap?: keyof typeof gaps;
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  flexWrap?: CSSProperties["flexWrap"];
  flexGrow?: CSSProperties["flexGrow"] | boolean | number;

  maxWidth?: CSSProperties["maxWidth"];
  maxHeight?: CSSProperties["maxHeight"];
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${(p) => css`
    flex-direction: ${p.direction || "row"};
    ${p.gap ? gaps[p.gap] : "gap: 0px;"};
  `}
  ${(p) => p.alignItems && `align-items: ${p.alignItems};`}
  ${(p) => p.justifyContent && `justify-content: ${p.justifyContent};`}
  ${(p) => p.flexWrap && `flex-wrap: ${p.flexWrap};`}
  ${(p) =>
    p.flexGrow &&
    `flex-grow: ${typeof p.flexGrow === "boolean" ? 1 : p.flexGrow};`}

  ${(p) => p.maxWidth && `max-width: ${p.maxWidth};`}
  ${(p) => p.maxHeight && `max-height: ${p.maxHeight};`}
`;
