function sample(req, resp) {
  ClearBlade.init({
    request: req
  });

  var email = "newuser@example.com";
  var password = "password123";

  // Step 1: Register/Create the user
  ClearBlade.registerUser(email, password, function(err, body) {
    if (err) {
      resp.error("Failed to create user: " + JSON.stringify(body));
      return;
    }
    
    console.log("User created successfully!");

    // Step 2: Login/Connect with that user
    ClearBlade.loginUser(email, password, function(err, user) {
      if (err) {
        resp.error("Failed to login: " + JSON.stringify(user));
        return;
      }

      console.log("User logged in successfully!");
      resp.success({
        message: "User created and connected!",
        user: user
      });
    });
  });
}
