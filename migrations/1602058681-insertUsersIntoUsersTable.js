const users = [
  {
    first_name: 'Karl',
    last_name: 'Horky',
    location: 'Vienna',
  },
  {
    first_name: 'Sabine',
    last_name: 'Ballata',
    location: 'Vienna',
  },
];

exports.up = async (sql) => {
  // You can automate this:
  await sql`
    INSERT INTO users ${sql(users, 'first_name', 'last_name', 'location')}
  `;
  // Or, by hand:
  // await sql`
  //   INSERT INTO users (
  //     first_name,
  //     last_name,
  //     location
  //   ) VALUES (
  //     'Karl',
  //     'Horky',
  //     'Vienna'
  //   );
  // `;
};

exports.down = async (sql) => {
  for (const user in users) {
    await sql`
      DELETE FROM users WHERE
//i think there is an error on the loop, because user is the number of the index.
        first_name = ${users[user].first_name} AND
        last_name = ${users[user].last_name};
    `;
  }
  // Or, by hand:
  // await sql`
  //   DELETE FROM users WHERE first_name = 'Karl';
  // `;
};
