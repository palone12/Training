function one() {
  const username = "Pranay";

  function two() {
    const website = "youtube";
    console.log(username);
  }

  // console.log(website); // not accessible outside of the scope

  two();
}

one();
