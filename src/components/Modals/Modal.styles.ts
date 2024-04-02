import styled from "styled-components";
import colors from '@/shared/themes/colors';

interface Props {
    active: boolean;
  }
export const ModalBackdrop = styled.div`
  width: 100%;
  height: 50vw;
  /* background-color: rgba(0, 0, 0, 0.5); */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: white;
  width: 80%;
  padding: 10px;
  border-radius: 5px;
  padding: 23px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: x-large;
`;

export const CloseButton = styled.button`
  float: right;
  background: none;
  border: none;
  cursor: pointer;
`;

export const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  width: 100%;
`;

export const Step = styled.div<Props>`
  flex-grow: 1;
  height: 5px;
  background-color: ${(props) => (props.active ? "#B3DCE8" : "#EFF0F0")};
  margin: 0 5px;
  transition: background-color 0.3s;
`;

export const Circle = styled.div<Props>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#EFF0F0" : "#B3DCE8")};
  border: 8px solid ${(props) => (props.active ? "#B3DCE8" : "#EFF0F0")};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s, color 0.3s;
`;
export const CircleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StepLabel = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: #333;
  width: 8%;
  word-wrap: break-word;
  text-align: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: flex-end;
  padding: 0 10px;
  width: 100%;
  gap: 10px;
  padding: 20px;
`;
