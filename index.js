const { prisma } = require("./generated/prisma-client");
const { request } = require('graphql-request');


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
  const endpoint = `https://eu1.prisma.sh/beigeotter-539e45/foodbracket/dev`
  
  const query = `query {
    restaurants {
    name
    id
    cuisine {
      name
    }
  }
}`

  const data = await request(endpoint, query)

dataStringified = JSON.stringify(data, undefined, 2);
  //console.log(dataStringified)
//console.log(dataStringified["restaurants"]);

//console.log(data.restaurants[0].name);

wwcRestaurants = data.restaurants;
//console.log(wwcRestaurants);
//then need to loop through
//trying to display this on a page :) 

async function wwcShowRestaurants(wwcRestaurants){
for (var i = 0; i < wwcRestaurants.length; i++){
  console.log(wwcRestaurants[i].name);
}};

let listElement = document.getElementById("list");

console.log(listElement);


wwcShowRestaurants(wwcRestaurants);

    //allRestaurantNames = [];
/*
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
  */
}

main().catch(e => console.error(e));