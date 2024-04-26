import React, { FC } from "react";
import { Link } from "react-router-dom";

interface RecursiveDropdownProps {
  categories: any;
}
export const RecursiveDropdown: FC<RecursiveDropdownProps> = ({
  categories,
}) => {
  return (
    <>
      <ul
        className={
          "dropdown-menu dropdown-menu-md dropdown-menu-center dropdown-menu-list submenu"
        }
      >
        {categories.map((category: any) => {
          <li className="nav-item dropdown dropdown-hover">
            <Link
              to="/#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-key="t-multi-level"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              tesdasd
            </Link>
            {/* <ul
                      className={"dropdown-menu submenu"}
                    >
                      <li>
                        <Link className="nav-link" to="/#" data-key="t-level-1.1">
                          {"level-1.1"}
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link" to="/#" data-key="t-level-1.2">
                          {"level-1.2"}
                        </Link>
                      </li>
                      <li className="dropdown dropdown-hover">
                        <Link
                          to="/#"
                          className="nav-link dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          data-key="t-level-1.3"
                          onClick={(e) => {
                            e.preventDefault();
                          //   listSubMenuShow("level-1.3");
                          }}
                        >
                          {"level-1.3"}
                        </Link>
                        <ul
                          className={"dropdown-menu submenu"
                          //   showPageSubMenu === "level-1.3"
                          //     ? "dropdown-menu submenu show"
                          //     : "dropdown-menu submenu"
                          }
                        >
                          <li>
                            <Link className="nav-link" to="/#" data-key="t-level-2.1">
                              {"level-2.1"}
                            </Link>
                          </li>
                          <li>
                            <Link className="nav-link" to="/#" data-key="t-level-2.2">
                              {"level-2.2"}
                            </Link>
                          </li>
                          <li className="dropdown dropdown-hover">
                            <Link
                              to="/#"
                              className="nav-link dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-key="t-level-2.3"
                            >
                              {"level-2.3"}
                            </Link>
                            <ul className="dropdown-menu submenu">
                              <li>
                                <Link className="nav-link" to="/#" data-key="t-level-3.1">
                                  {"level-3.1"}
                                </Link>
                              </li>
                              <li>
                                <Link className="nav-link" to="/#" data-key="t-level-3.2">
                                  {"level-3.2"}
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul> */}
          </li>;
        })}
      </ul>
    </>
  );
};
