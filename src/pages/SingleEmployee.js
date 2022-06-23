import React from "react";
import { useParams } from "react-router-dom";
import { filterById } from "../utilities/helpers";

import StaffList from "../components/StaffList/StaffList";

export default function SingleEmployee({ staff }) {
  const params = useParams();
  const id = params.employeeId;
  const employee = filterById(staff, id);
  return (
    <div>
      <StaffList staff={employee} />
    </div>
  );
}
