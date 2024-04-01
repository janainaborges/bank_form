import colors from "@/shared/themes/colors";
import styled, { css } from "styled-components";

interface ButtonCustomsProps {
  backgroundColor: string;
  size: string;
  border: string;
}

export const Container = styled.div`
  :hover {
    filter: brightness(0.9);
  }
`;

export const ButtonCustoms = styled.button<ButtonCustomsProps>`
  background-color: ${(props: any) => props.backgroundColor};
  width: ${(props: any) =>
    (props.size === "small" && "3rem") ||
    (props.size === "medium" && "5rem") ||
    (props.size === "large" && "9rem")};
  border: none;
  border-radius: ${(props: any) => props.border};
  display: flex;
  flex-direction: row;
  padding: 8px;
  gap: 7px;
  color: #ccc;
  justify-content: space-around;
  place-items: center;
  font-size: ${(props: any) =>
    (props.size === "small" && "10px") ||
    (props.size === "medium" && "12px") ||
    (props.size === "large" && "14px")};

  @media (max-width: 768px) {
    width: ${(props: any) =>
      (props.size === "small" && "3rem") ||
      (props.size === "medium" && "4rem") ||
      (props.size === "large" && "5rem")};
    font-size: ${(props: any) =>
      (props.size === "small" && "6px") ||
      (props.size === "medium" && "8px") ||
      (props.size === "large" && "10px")};
  }
`;

interface IconWrapperProps {
  color: string;
  size: string;
  backgroundColor?: string;
  filter?: boolean; 
}

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  place-content: center;

  color: ${(props) => props.color};
  font-size: ${(props: any) =>
    (props.size === "small" && "16px") ||
    (props.size === "medium" && "22px") ||
    (props.size === "large" && "26px") ||
    props.size};

  ${Container}:hover & {
    animation: shake 0.5s ease;
    animation-iteration-count: infinite;
  }

  @keyframes shake {
    0% {
      transform: rotate(-1deg);
    }
    50% {
      transform: rotate(1deg);
    }
    100% {
      transform: rotate(-1deg);
    }
  }

  @media (max-width: 768px) {
    font-size: ${(props: any) =>
      (props.size === "small" && "14px") ||
      (props.size === "medium" && "20px") ||
      (props.size === "large" && "24px")};
  }
`;

export const ListItemText = styled.div<IconWrapperProps>`
  display: flex;
  background-color: ${(props: any) => props.backgroundColor};
  filter:  ${(props: any) => props.filter && "brightness(1.6)"};
  place-content: center;
  place-items: center;
  width: ${(props: any) =>
    (props.size === "small" && "23px") ||
    (props.size === "medium" && "25px") ||
    (props.size === "large" && "27px")};
  height: ${(props: any) =>
    (props.size === "small" && "25px") ||
    (props.size === "medium" && "27px") ||
    (props.size === "large" && "29px")};
  border-radius: 50%;
  color: ${(props) => props.color};
  font-size: ${(props: any) =>
    (props.size === "small" && "10px") ||
    (props.size === "medium" && "14px") ||
    (props.size === "large" && "16px")};

  @media (max-width: 768px) {
    width: ${(props: any) =>
      (props.size === "small" && "18px") ||
      (props.size === "medium" && "20px") ||
      (props.size === "large" && "24px")};
    height: ${(props: any) =>
      (props.size === "small" && "18px") ||
      (props.size === "medium" && "20px") ||
      (props.size === "large" && "24px")};
  }
`;