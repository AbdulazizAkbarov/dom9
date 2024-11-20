// Simulate fetching user data
function fetchUserData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulating successful data retrieval
        resolve({ id: 1, name: "John Doe", email: "john.doe@example.com" });
        // Uncomment to simulate an error
        // reject("Error fetching user data");
      }, 2000);
    });
  }
  
  // Simulate fetching user posts
  function fetchUserPosts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulating successful posts retrieval
        resolve([
          { postId: 101, content: "Learning Promises!" },
          { postId: 102, content: "Promises are fun!" },
        ]);
        // Uncomment to simulate an error
        // reject("Error fetching user posts");
      }, 3000);
    });
  }
  
  // Chaining promises
  fetchUserData()
    .then((userData) => {
      console.log("User Details:");
      console.log(`ID: ${userData.id}`);
      console.log(`Name: ${userData.name}`);
      console.log(`Email: ${userData.email}`);
      return fetchUserPosts(); // Fetch posts after user data
    })
    .then((userPosts) => {
      console.log("\nUser Posts:");
      userPosts.forEach((post, index) => {
        console.log(`${index + 1}. ${post.content}`);
      });
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
  
  // Bonus: Using Promise.all
  Promise.all([fetchUserData(), fetchUserPosts()])
    .then(([userData, userPosts]) => {
      console.log("\nUsing Promise.all:");
      console.log("User Details:");
      console.log(`ID: ${userData.id}`);
      console.log(`Name: ${userData.name}`);
      console.log(`Email: ${userData.email}`);
      console.log("\nUser Posts:");
      userPosts.forEach((post, index) => {
        console.log(`${index + 1}. ${post.content}`);
      });
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
  