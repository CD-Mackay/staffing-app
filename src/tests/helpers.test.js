import { filterByName } from '../utilities/helpers';

test('Removes names which do not contain search parameter match', () =>{
  const data = [
    {name: "Frank"},
    {name: "Charlie"},
    {name: "Rogerio"},
    {name: "Kamaru"}
  ];

  expect(filterByName(data, "f")).toEqual([{name: "Frank"}])
});
