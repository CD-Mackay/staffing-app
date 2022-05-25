import { filterByDept, filterByName, filterBySkills } from '../utilities/helpers';

test('Removes names which do not contain search parameter match', () =>{
  const data = [
    {name: "Frank"},
    {name: "Charlie"},
    {name: "Rogerio"},
    {name: "Kamaru"}
  ];

  expect(filterByName(data, "f")).toEqual([{name: "Frank"}])
});

test('Keeps department names with a partial name match', () => {
  const data = [
    {department: "sales"},
    {department: "marketing"}
  ];

  expect(filterByDept(data, "mark")).toEqual([{department: "marketing"}])
})

test('Matches employees with appropriate skillsets', () => {
  const data = [
    {skills: ["sales", "marketing"]},
    {skills: ["marketing"]}
  ];

  expect(filterBySkills(data, "sales")).toEqual([{skills: ["sales", "marketing"]}])
})
