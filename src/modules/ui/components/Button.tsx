import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const HoverContent = styled.span`
  background: inherit;
  color: inherit;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

type ButtonProps = {
  $hoverContent?: React.ReactNode;
};

export const Button = styled.button.attrs<ButtonProps>(
  ({ children, $hoverContent, ...props }) => {
    return {
      ...props,
      children: (
        <React.Fragment>
          {children}
          {$hoverContent && <HoverContent>{$hoverContent}</HoverContent>}
        </React.Fragment>
      ),
    };
  }
)`
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  background: #bb9c76;
  color: #272624;
  padding: 2rem;
  display: inline-flex;
  height: 64px;
  align-items: center;
  outline: none;
  border: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 1rem;
  gap: 0.5rem;
  text-decoration: none;
  transition: all 0.2s;
  svg {
    font-size: 1.5em;
  }

  ${HoverContent} {
    opacity: 0;
    scale: 1.25;
    transition: all 0.2s;
  }

  &:hover {
    box-shadow: inset 0 0 1000px 0 rgba(0, 0, 0, 0.1);
    ${HoverContent} {
      opacity: 1;
      scale: 1;
    }
  }
`;
