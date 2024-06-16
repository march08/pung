import styled from "styled-components";
import ListStyleImage from "./list-style-item.svg";

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
  padding-left: 0;
  display: flex;
  gap: 0.375rem;
  flex-direction: column;
  li {
    line-height: 1.5rem;
    font-size: 1rem;
    letter-spacing: 0.04em;
    padding-left: 1rem;
    position: relative;
    color: var(--text-primary);
    font-weight: 300;
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 7px;
      left: 0;
      height: 9px;
      width: 8px;
      background-image: url(${ListStyleImage.src});
      background-size: 8px;
      margin-right: 1rem;
    }
  }
`;
