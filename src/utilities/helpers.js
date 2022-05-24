export const filterByName = (array, parameter) => {
  return array.filter((employee) => {
    return employee.name.toLowerCase().includes(parameter.toLowerCase())
   })
};

export const filterByDept = (array, parameter) => {
  return array.filter((employee) => {
    return employee.department.toLowerCase().includes(parameter.toLowerCase())
   }) 
}

