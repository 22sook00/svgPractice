import React, { FC } from "react";
// import Icon, { Props as IconProps } from "@src/components/common/Icon/Icon";
import styles from "./BtnIcon.module.scss";

interface Props {
  // iconName: IconProps["name"];
  children?: string;
  onClick?: () => void;
}

const BtnIcon: FC<Props> = ({ iconName, children, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={styles.wrapper}>
      {/* <Icon name={iconName} /> */}
      {children}
    </button>
  );
};

export default BtnIcon;
