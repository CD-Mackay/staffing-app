export const filterByName = (array, parameter) => {
  return array.filter((employee) => {
    return employee.name.toLowerCase().includes(parameter.toLowerCase());
  });
};

export const filterByDept = (array, parameter) => {
  return array.filter((employee) => {
    if (employee.department) {
      return employee.department
        .toLowerCase()
        .includes(parameter.toLowerCase());
    }
  });
};

export const filterBySkills = (array, parameter) => {
  return array.filter((employee) => {
    if (employee.skills) {
      for (let skill of employee.skills) {
        if (skill.toLowerCase().includes(parameter.toLowerCase())) {
          return true;
        }
      }
    }
  });
};

export const filterById = (array, parameter) => {
  return array.filter((employee) => {
    return employee.id === parameter;
  });
};

export const dateCountDown = (deadline) => {
  const current = Date.now();
  const dateStamp = new Date(deadline).getTime();
  const difference = dateStamp - current;
  const minutes = difference / 60000;
  let weeks = minutes / 10080;
  console.log(weeks);
  let days = (minutes % 10080) / 1440;
  console.log(weeks, days);
  days = Math.floor(days);
  weeks = Math.floor(weeks);
  return {
    weeks,
    days
  }
};
