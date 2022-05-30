export async function getAllEvents() {
  const response = await fetch(' https://staffing-app-8610f-default-rtdb.firebaseio.com/staff.json');
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key]
    });
  }

  return events;
};


