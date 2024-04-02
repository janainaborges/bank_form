import colors from "@/shared/themes/colors";
import styled from "styled-components";

export const ContainerForm = styled.form`
  padding: 10px;
  width: 100%;
  gap: 8px;
`;
export const BoxForm = styled.section`
  display: flex;
  gap: 10px;
  padding: 8px 0;
  width: 100%;
`;

export const RedAsterisk = styled.span`
  color: red;
`;

export const Label = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0 10px;
  width: 100%;
  padding: 20px;

`;

export const Title = styled.h1`
  font-size: x-large;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0 10px;
  width: 100%;
  background-color: ${colors.yellowLight};
  padding: 20px;
`;

export const SubTitle = styled.h1`
  font-size: x-large;
  color: ${colors.yellow};
`;

export const BoxLabel = styled.ul`
  margin-top: 8px;
  font-size: 12px;
  text-align: start;
  word-wrap: break-word;
  padding: 0 20px;

  li {
    list-style: outside;
    color: ${colors.yellow};
  }
`;

export const BoxBlue = styled.h1`
  font-size: 16px;
  background-color: ${colors.blueLight};
  color: ${colors.blueDark};
  padding: 20px;
`;