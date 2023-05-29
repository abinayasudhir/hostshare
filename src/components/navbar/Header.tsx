import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";
import Categories from "./Categories";

function Header() {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3">
            <Logo />
            <Search />
            <Menu />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
}

export default Header;
