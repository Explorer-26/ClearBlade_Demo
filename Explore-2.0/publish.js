function publish(req, resp) {
  ClearBlade.init({ request: req });

  var messaging = ClearBlade.Messaging();

  // Publish a message to a topic
  messaging.publish("demo", "This is third message", function(err, data) {
    if (err) {
      resp.error("Publish failed: " + JSON.stringify(data));
      return;
    }
    resp.success("Message published successfully!");
  });
}
