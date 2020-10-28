import React from "react";
import { Link } from "gatsby";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      content: "",
      navigation: [],
      isMenuOpen: false,
      isNavigationVisible: false,
    };
    this.activateMenu = this.activateMenu.bind(this);
    this.deactivateMenu = this.deactivateMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.deactivateMenu);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.deactivateMenu);
  }

  activateMenu() {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  }

  deactivateMenu() {
    this.setState({
      isMenuOpen: false,
    });
  }

  render() {
    const activeClassName = "nav-link--active";

    let btnClass =
      "btn btn-nav" + (this.state.isMenuOpen ? " btn-nav--active" : "");
    let navClass =
      "mobile-nav" + (this.state.isMenuOpen ? " mobile-nav--active" : "hidden");

    return (
      <>
        <header className="header z-10 top-0 pt-12 absolute w-full">
          <div className="navigation__ghost"></div>
          <nav className="navigation">
            <div className="container">
              <div className="navigation__inner text-white py-5 flex items-center justify-between">
                <Link className="brand font-bold" to="/">
                  Hotely
                </Link>
                <div className={btnClass} onClick={this.activateMenu}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="navigation__list lg:block hidden">
                  <Link
                    to="/"
                    className="nav-link mr-16"
                    activeClassName={activeClassName}
                    partiallyActive
                  >
                    Home
                  </Link>
                  <Link
                    to="/"
                    className="nav-link mr-16"
                    activeClassName={activeClassName}
                    partiallyActive
                  >
                    Find Hotel
                  </Link>
                  <Link
                    to="/"
                    className="nav-link mr-16"
                    activeClassName={activeClassName}
                    partiallyActive
                  >
                    About us
                  </Link>
                  <Link
                    to="/"
                    className="nav-link mr-16"
                    activeClassName={activeClassName}
                    partiallyActive
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/"
                    className="btn border px-10 py-4 rounded-lg font-bold"
                    activeClassName={activeClassName}
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className={navClass}></div>
      </>
    );
  }
}
