import React from "react";
import Iframe from "react-iframe";
import { generate } from "shortid";
import styled from "styled-components";
import { ArrowUpRight } from "react-feather";

const StyledAnchorBtn = styled.a`
  cursor: pointer;
`;

const DemoFromURL = (props) => {
  const URL = props.url;
  return (
    <div className="items-baseline m-3 p-4 flex flex-row justify-content-center align-items-stretch">
      <Iframe
        url={URL}
        height="1200px"
        width="1200px"
        id={generate()}
        display="initial"
        position="relative"
      />
      <StyledAnchorBtn href={URL} target="_blank" rel="noreferrer">
        <ArrowUpRight size={48}>Open Site in Standalone Tab</ArrowUpRight>
      </StyledAnchorBtn>
    </div>
  );
};

export default DemoFromURL;
