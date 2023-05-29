import { useNavigate } from "react-router-dom";
import logo from '../../assets/images/header_logo.png'

type Props = {};

function Logo({}: Props) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/")}>
      <img
        alt="logo"
        className="hidden md:block cursor-pointer"
        height="100"
        width="100"
        src={logo}
      />
    </div>
  );
}

export default Logo;
