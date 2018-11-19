const { prisma } = require("./generated/prisma-client");
const { request } = require("graphql-request");

// A `main` function so that we can use async/await
async function main() {
  // Does this work?

  // const hello_something = something => console.log("hello, " + something);

  //hello_something("etel");

  // TODO: Display all restaurants
  // This is a QUERY
  //const allRestaurants = await prisma.restaurants();

  //console.log(allRestaurants);

  //with a graphqlquery
  const allRestaurantsDeepData = await prisma.$graphql(`
    {
      allRestaurantsDeep: restaurants {
        name
        bracketLocation
        cuisine {
          id
          name
        }
        votes {
          createdAt
          id
        }
      }
    }`);

  const { allRestaurantsDeep } = allRestaurantsDeepData;

  //   // deconstructor
  // const {restaurants} = allRestaurantsDeep

  console.log(allRestaurantsDeep);
  // for (var i = 0; i < allRestaurantsDeep.length; i++) {
  //   console.log(allRestaurantsDeep[i].votes.length);
  // }

  // allRestaurantsDeep.forEach(restaurant => {
  //   // template string
  //   const fn = () => "Hello World";
  //   console.log(`${restaurant.name} ${fn()} ${restaurant.votes.length}`);
  // });

  // const restaurantsOnRoids = allRestaurantsDeep.map(r => {
  //   r.voteCount = r.votes.length;
  //   return r;
  // });

  const restaurantsOnRoids = allRestaurantsDeep.map(r => {
    return {
      ...r,
      voteCount: r.votes.length
    };
  });

  console.log(restaurantsOnRoids);

  // TODO: Display votes for each restaurant
  // This is a QUERY

  const allRestaurantVotes = await prisma.restaurants().votes();

  // console.log(allRestaurantVotes);

  // TODO: Vote for a restaurant
  // This is a MUTATION
  /*
  function vote(vote, token, name){return {
    "voter: "la",
  token: "hahaha",
  restaurant: {
    connect: {
      name: "Mamay""}

  const newVotes = await prisma.createVote({
    voter: "la",
    token: "hahaha",
    restaurant: {
      connect: {
        name: "Mamay"
      }
    }
  });
*/
  // TODO: Order restaurants by vote
  // 🤷🏼‍♀️

  // TODO: Change ranking based on votes
  // This is a MUTATION? 🧐
}

main().catch(e => console.error(e));

/*
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

//ISLAND OF LOST TOYS CONTINUES BELOW

/*
 const allRestaurantsArray = [];
  //Make arrays for things

  function makeArray(object, arrayName, loopOver) {
    for (var i = 0; i < object.length; i++) {
      console.log(loopOver);
      arrayName.push(object[i].loopOver);
    }
  }
  makeArray(allRestaurants, allRestaurantsArray, "id");

  console.log(allRestaurantsArray);

   //console.log(allRestaurants[0].id);

  //console.log(allRestaurantVotes[0].votes.length);

  */
