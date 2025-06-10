import React from "react";
import { Switch } from "antd";
import type { CharacterStatus } from "../types";
import useCharacters from "../hooks/useCharacters";

const StatusFilter: React.FC = () => {
  const { statusFilter, setStatusFilter } = useCharacters();

  const onChange = (checked: boolean, status: CharacterStatus) => {
    if (!checked) {
      if (statusFilter.includes(status)) {
        setStatusFilter(statusFilter.filter((st) => st !== status));
      }
    }

    if (checked) {
      if (!statusFilter.includes(status)) {
        setStatusFilter([...statusFilter, status]);
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Switch
        checkedChildren="Alive"
        unCheckedChildren="Alive"
        defaultChecked
        onChange={(checked) => onChange(checked, "Alive")}
      />
      <Switch
        checkedChildren="Dead"
        unCheckedChildren="Dead"
        defaultChecked
        onChange={(checked) => onChange(checked, "Dead")}
      />
      <Switch
        checkedChildren="unknown"
        unCheckedChildren="unknown"
        defaultChecked
        onChange={(checked) => onChange(checked, "unknown")}
      />
    </div>
  );
};

export default StatusFilter;
