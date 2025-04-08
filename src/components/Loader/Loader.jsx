import { FadeLoader } from "react-spinners";
import { StyledLoader } from "./Loader.styled";

export default function Loader() {
  return (
  <StyledLoader>
    <FadeLoader color="#36d7b7" height={40} width={5} radius={20} margin={28} />
    </StyledLoader>
  );
}
