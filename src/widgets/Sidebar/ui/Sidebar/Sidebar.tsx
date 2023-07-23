import {classNames} from "@helpers/classNames/classNames";
import cls from "./Sidebar.module.scss";
import React, {useState} from "react";
import {Button} from "@shared/ui/Button/Button";
import {ThemeSwitcher} from "@widgets/ThemeSwitcher";
import {LangSwitcher} from "@widgets/LangSwitcher/LangSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const onToggle = () => {
    setIsCollapsed(prev => !prev);
  }


  return (
    <div
      className={classNames(cls.Sidebar, {[cls.collapsed]: isCollapsed}, [className])}
    >
      <Button onClick={onToggle}>toggle</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
