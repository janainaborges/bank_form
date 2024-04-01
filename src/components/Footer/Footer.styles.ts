import colors from '@/shared/themes/colors';
import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  padding: 2rem;
  flex-direction: row;
  justify-content: space-around;
  border-top: ${colors.gray};
  gap: 1rem;
`;

export const FooterSection = styled.section`
    width: 50%;
    padding: 8px;
`;

export const FooterTitles = styled.h1`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 24px;
  color: ${colors.blueDark};
`;
export const FooterSubtitle = styled.h4`
  display: flex;
  gap: 10px;
  font-size: 14px;
  color: ${colors.blueDark};
`;

export const FooterSubtitleSpan = styled.span`
  display: flex;
  gap: 10px;
  font-size: 12px;
  color: ${colors.gray};
`;

export const FooterDivision = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
 
`;

export const FooterSpan = styled.span`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 16px;
  color: ${colors.secondary};
`;