import React, {FC} from 'react';
import classNames from "classnames";

import "./Icon.css";

interface IIconProps {
  icon: string;
  className?: string;
}

const Icon: FC<IIconProps> = ({icon, className}) => {
  return <svg className={classNames("icon", className)}>
    <use xlinkHref={`#${icon}`}/>
  </svg>;
};

export default Icon;