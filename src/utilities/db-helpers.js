const connectionString = 'https://staffing-app-8610f-default-rtdb.firebaseio.com'

export async function getAllStaff() {
  const response = await fetch(
    ` ${connectionString}/staff.json`
  );
  const data = await response.json();

  const staff = [];

  for (const key in data) {
    staff.push({
      id: key,
      ...data[key],
    });
  }

  return staff;
}

export async function getAllTeams() {
  const response = await fetch(
    ` ${connectionString}/teams.json`
  );
  const data = await response.json();

  const teams = [];

  for (const key in data) {
    teams.push({
      id: key,
      ...data[key],
    });
  }

  return teams;
}

export async function addTeam(object) {
  const response = await fetch(
    `${connectionString}/teams.json`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object),
    }
  );

  const data = await response.json();
  console.log(data);
  return data;
}

export async function AddEmployee(object) {
  const response = await fetch(
    `${connectionString}/staff.json`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object),
    }
  );

  const data = await response.json();
  console.log(data);
  return data;
}

export async function deleteEmployee(userId) {
  const response = await fetch(
    `${connectionString}/staff/${userId}.json`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userId),
    }
  );

  const data = await response.json();
  console.log(data);
  return data;
}

export async function deleteTeam(teamId) {
  const response = await fetch(
    `${connectionString}/teams/${teamId}.json`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(teamId),
    }
  );

  const data = await response.json();
  console.log(data);
  return data;
}

export async function addFlag(flag, userId) {
  const response = await fetch(
    `${connectionString}/staff/${userId}.json`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ flag: flag }),
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
}

export async function updateSKill(userId, skills) {
  const response = await fetch(
    `${connectionString}/staff/${userId}.json`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ skills: skills }),
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
}

export async function updateTeam(teamId, teamList) {
  const response = await fetch(
    `${connectionString}/teams/${teamId}.json`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ team: teamList }),
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
}
