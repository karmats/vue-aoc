export const matchPeople = (people) => {
  // Return an array of randomly matched up people.
  // The array should have objects with the following structure:
  // { giver: {name: 'NAME_HERE, email: 'EMAIL_HERE'}, receiver: {name: 'NAME_HERE, email: 'EMAIL_HERE'}}

  // Rules:
  // 1. For every person there has to be a giver
  // 2. A person cannot be their own giver
  let secretSantaList = [];
  let peopleList = people.slice();
  for (const giver of peopleList) {
    const peopleWithoutMe = peopleList.filter((p) => p.email !== giver.email);
    if (
      peopleWithoutMe.every(
        (p) => !!secretSantaList.find((l) => l.receiver.email === p.email)
      )
    ) {
      // Start over
      return matchPeople(people);
    }
    let receiver =
      peopleWithoutMe[Math.floor(Math.random() * peopleWithoutMe.length)];
    while (!!secretSantaList.find((l) => l.receiver.email === receiver.email)) {
      receiver =
        peopleWithoutMe[Math.floor(Math.random() * peopleWithoutMe.length)];
    }

    secretSantaList.push({
      giver,
      receiver,
    });
  }
  return secretSantaList;
};
