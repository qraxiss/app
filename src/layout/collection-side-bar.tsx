import { FC } from "react";

import logo from "../assets/images/icon.svg";
import { useSelector } from "react-redux";

interface CollectionsSideBarProps {
  openSideBar: () => void;
}

export const CollectionsSideBar: FC<CollectionsSideBarProps> = ({ openSideBar }) => {
  const sideBarData = useSelector((state: any) => state.sideBar.data);
  return (
    <div onMouseEnter={openSideBar} className="collections-sidebar">
      <div className="header">
        <img src={logo} alt="" />
      </div>
      <div className="icons">
        {sideBarData.map((item: any, idx: number) => {
          return (
            <img
              src={`${process.env.REACT_APP_API_URL}${item.icon?.url}`}
              alt=""
              key={'collection-sidebar-' + idx}
            />
          );
        })}
      </div>
    </div>
  );
};
