function get_secret(req, resp) {
  ClearBlade.init({ request: req });

  var secret = ClearBladeAsync.Secret();

  secret.read("NAME")
    .then(function(data) {
      resp.success({
        message: "Secret fetched successfully!",
        secret_value: data
      });
    })
    .catch(function(err) {
      resp.error("Failed to get secret: " + JSON.stringify(err));
    });
}
