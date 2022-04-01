import styled from 'styled-components';

export const NavContainer = styled.div`
  box-shadow: 0px 5px 10px 0px #0000000d;
  -webkit-box-shadow: 0px 5px 10px 0px #0000000d;
  -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 1);
  padding: 0px 20px;
  background-color: white;
`;

export const NavLink = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
  font-size: ${(props) => props.theme.fonts.font_size.normal_font};
  font-weight: bold;
  color: ${(props) => (props.active
    ? props.theme.colors.primary_grey_darkest
    : props.theme.colors.primary_grey_darker)};
  padding-right: ${(props) => props.pr}px;
  font-weight: ${(props) => (props.active ? '800' : '400')};
  background-color: white;
  cursor: pointer;
`;

export const UserContainer = styled.div`
  display: flex;
  height: 34px;
  background-color: ${(props) => props.theme.colors.primary_white};
`;

export const UserAvatar = styled.div`
  width: 34px;
  margin-right: 5px;
  padding-left: 8px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.theme.fonts.font_size.small_font};
  background-color: ${(props) => props.theme.colors.primary_white};
`;

export const IconWrapper = styled.div`
  padding: 0 8px;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;
`;


export const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Para = styled.div`
  font-size: ${(props) => props.fontSize || '14px'};
  position: relative;
  text-align: ${(props) => props.textAlign};
  margin: 0;
  font-style: italic;
  padding: ${(props) => props.p || 0}px;
  font-weight: ${(props) => props.weight || 400};
  padding-top: ${(props) => props.pt}px;
  padding-bottom: ${(props) => props.pb}px;
  padding-right: ${(props) => props.pr}px;
  padding-left: ${(props) => props.pl}px;
  line-height: ${(props) => props.lineHeight || '16'}px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
`;

export const Icon = styled.div`
  width: 29;
  height: 30;
  fill: none;

`;