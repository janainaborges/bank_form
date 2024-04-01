"use client";
import React from "react";
import { PiMetaLogo } from "react-icons/pi";
import {
  FooterContainer,
  FooterDivision,
  FooterSection,
  FooterSpan,
  FooterSubtitle,
  FooterSubtitleSpan,
  FooterTitles,
} from "./Footer.styles";

interface SubtitlesI {
  subtitle: string;
}

interface FooterData {
  title: string;
  subtitles: SubtitlesI[];
  link: string;
}

const data: FooterData[] = [
  {
    title: "Company",
    subtitles: [
      { subtitle: "Example Company 1" },
      { subtitle: "Example Company 2" },
      { subtitle: "Example Company 3" },
    ],
    link: "/link",
  },
  {
    title: "Use Cases",
    subtitles: [
      { subtitle: "Example Use Case 1" },
      { subtitle: "Example Use Case 2" },
    ],
    link: "/link",
  },
  {
    title: "Guides",
    subtitles: [{ subtitle: "Guide 1" }],
    link: "/link",
  },
];

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterTitles>
          <PiMetaLogo fontSize={70} />
          Your Logo
        </FooterTitles>
        <FooterSpan>Lorem ipsum dolor sit amet.</FooterSpan>
      </FooterSection>
      {data.map((item) => {
        return (
          <FooterSection key={item.title}>
            <FooterDivision>
              <FooterSubtitle>{item.title}</FooterSubtitle>
              {item.subtitles.map((sub) => (
                <FooterSubtitleSpan key={sub.subtitle}>
                  {sub.subtitle}
                </FooterSubtitleSpan>
              ))}
            </FooterDivision>
          </FooterSection>
        );
      })}
    </FooterContainer>
  );
};

export default Footer;