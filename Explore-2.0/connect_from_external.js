var ClearBlade = require('clearblade');

ClearBlade.init({
  systemKey: "",
  systemSecret: "",
  URI: "https://platform.clearblade.com",
  email: "",
  password: "",
  callback: function(err, body) {
    if (err) {
      console.log("Connection failed:", JSON.stringify(body));
      return;
    }
    console.log("Connected successfully!");
    console.log("Full response:", JSON.stringify(body, null, 2));
    
    // Print the token
    console.log("User Token:", ClearBlade.user.authToken);
  }
});
