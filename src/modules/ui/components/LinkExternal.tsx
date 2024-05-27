import styled from "styled-components";

export const LinkExternal = styled.a.attrs((props) => {
  return {
    target: "_blank",
    rel: "noopener noreferrer",
    ...props,
  };
})``;
