import { FadeLoader } from "react-spinners";
import { StyledLoader } from "./Loader.styled";

export default function Loader() {
  return (
  <StyledLoader>
    <FadeLoader color="#36d7b7" height={30} width={5} radius={2} margin={8} />
    </StyledLoader>
  );
}
