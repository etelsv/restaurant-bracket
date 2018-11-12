const { prisma } = require("./generated/prisma-client");

// A `main` function so that we can use async/await
async function main() {
  /*
  // Create a new user called `Alice`
  const newUser = await prisma.createUser({ name: "Alice" });
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`);

  // Read all users from the database and print them to the console
  const allUsers = await prisma.users();
  console.log(allUsers);
  */

  /*
  await prisma.createRestaurant({
    name: "rosegarden",
    bracketLocation: 4,
    cuisine: {
      create: {
        name: "generic"
      }
    }
  });
*/
  var restaurantName, allRestaurants, allRestaurantNames;

  allRestaurantNames = [];

  allRestaurants = await prisma.restaurants();

  function listRestaurants(allRestaurants) {
    for (var i = 0; i < allRestaurants.length; i++) {
      allRestaurantNames.push(allRestaurants[i].name);
      //console.log(allRestaurants[i]);
    }
  }

  async function showVotes(allRestaurantNames) {
    for (var i = 0; i < allRestaurantNames.length; i++) {
      const voteInfo = await prisma
        .restaurant({ name: allRestaurantNames[i] })
        .votes();
      console.log(
        allRestaurantNames[i] + " has " + voteInfo.length + " votes "
      );
    }
  }

  listRestaurants(allRestaurants);
  console.log(allRestaurantNames);
  showVotes(allRestaurantNames);
  //const voteInfo = await prisma.restaurant({ name: restaurantName }).votes();
  //console.log(allRestaurants);
  //const allVotes = await prisma.votes();
  //console.log(allVotes);

  //console.log(allRestaurants);
  console.log("hello");
}

main().catch(e => console.error(e));
