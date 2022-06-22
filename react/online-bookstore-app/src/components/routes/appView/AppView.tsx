import "./AppView.scss";
import React from "react";
import AppMenu from "../../common/appMenu/AppMenu";
import AppHeader from "../../common/appHeader/AppHeader";

const AppView: React.FC = () => {
  return (
    <div>
      <AppHeader />
      <AppMenu />
    </div>
  );
};
export default AppView;
