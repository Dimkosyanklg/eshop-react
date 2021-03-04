import React from "react";
import styled from "styled-components";
import { FOOTER_LIST } from "./FOOTER_LIST.js";
import { FOOTER_LIST_CONTACTS } from "./FOOTER_LIST_CONTACTS.js";

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      {FOOTER_LIST.map(({ header, content }, index) => (
        <FooterItem key={index}>
          <FooterItemHeader>{header}</FooterItemHeader>
          <FooterItemContent>
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </FooterItemContent>
        </FooterItem>
      ))}
      <FooterItem>
        <FooterItemHeader>{FOOTER_LIST_CONTACTS[0].header}</FooterItemHeader>
        <FooterItemContent>
          <ul>
            {FOOTER_LIST_CONTACTS[0].content.map(({ upper, lower }, index) => (
              <li key={index}>
                <Upper>{upper}</Upper>
                <Lower>{lower}</Lower>
              </li>
            ))}
          </ul>
        </FooterItemContent>
      </FooterItem>
    </FooterContent>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  height: 37vw;
  bottom: 0;
  background-color: #005aab;
  position: relative;
  width: 100%;
  margin-top: 10%;
`;

const FooterContent = styled.div`
  margin: 0 15% 0 15%;
  padding-top: 3%;
  display: flex;
  justify-content: space-around;
  font-size: 1rem;
  color: #ffffff;
`;

const FooterItem = styled.div`
  width: 20%;
  height: 100%;
  margin-top: 3%;
`;

const FooterItemHeader = styled.div`
  font-size: 1.5rem;
`;

const FooterItemContent = styled.div`
  margin-top: 15%;

  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
    margin-top: 7%;
  }
`;

const Upper = styled.div`
  color: #9fb0eb;
`;

const Lower = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;

  img {
    min-width: 15%;
    max-width: 45%;
  }
`;

export default Footer;

