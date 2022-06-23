import React from "react";

import StaffList from "../components/StaffList/StaffList";

export default function SingleEmployee({ staff }) {
  return (
    <div>
      <StaffList staff={staff} />
    </div>
  );
}
