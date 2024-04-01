import colors from "@/shared/themes/colors";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 50px;
  align-items: center;
  height: 4rem;
  border-bottom: 1px solid ${colors.gray};
`;
export const Start = styled.div`
  width: 13%;
  display: flex;
  flex-direction: row;
  place-items: center;
  gap: 10px;
  color: ${colors.blueDark};
`;
export const End = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 2%;
  align-items: center;
  height: 20%;
`;
export const Division = styled.div`
  border-left: 1px solid ${colors.gray};
  height: 25px;
`;