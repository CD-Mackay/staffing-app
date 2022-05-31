export async function getAllStaff() {
  const response = await fetch(' https://staffing-app-8610f-default-rtdb.firebaseio.com/staff.json');
  const data = await response.json();

  const staff = [];

  for (const key in data) {
    staff.push({
      id: key,
      ...data[key]
    });
  }

  return staff;
};

export async function addFlag(flag, userId) {
  const response = await fetch(`https://staffing-app-8610f-default-rtdb.firebaseio.com/staff/1/flag.json`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ flag })
  })
  const data = await response.json();
  console.log(data);
  return data;
};


