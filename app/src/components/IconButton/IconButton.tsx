import React, {FC} from 'react';
import "./IconButton.css";
import {Button} from "antd";
import Icon from "../Icon/Icon";

interface IconButtonProps {
  icon: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const IconButton: FC<IconButtonProps> = ({icon, className, onClick}) => {
  return <Button shape="circle"
                 className={className}
                 icon={<Icon icon={`${icon}`}/>}
                 onClick={onClick}
  />;
};

export default IconButton;