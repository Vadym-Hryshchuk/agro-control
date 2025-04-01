import {
  LogoImg,
  LogoLink,
  LogoText,
  HeaderWrapper,
  StyledHeader,
} from "./Header.styled";
import Logo from "../../img/LogoA.png";
// import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

export default function Header() {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <LogoLink to="/">
          <LogoImg src={Logo} alt="Logo" />
          <LogoText>НА ВАРТІ ВРОЖАЮ</LogoText>
        </LogoLink>
        {/* <AuthNav /> */}
        <UserMenu />
      </HeaderWrapper>
    </StyledHeader>
  );
}
