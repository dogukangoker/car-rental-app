import React from "react";

interface SelectProps {
  children: React.ReactNode;
  className?: string;
}

export default function Select() {
  return React.createElement("div", null, "Select");
}

function SelectItem() {
  return React.createElement("div", null, "SelectItem");
}

Select.Item = SelectItem;
