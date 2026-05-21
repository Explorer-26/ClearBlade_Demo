function subscribe(req, resp) {
  ClearBlade.init({ request: req });
  var messaging = ClearBlade.Messaging();
  var topic = "demo";

  messaging.subscribe(topic, function(err, data) {
    if (err) {
      resp.error("Subscribe failed: " + JSON.stringify(data));
      return;
    }

    messaging.waitForMessage([topic], function(err, message, topic) {
      if (err) {
        resp.error("Failed: " + JSON.stringify(message));
        return;
      }
      resp.success({
        status: "Success!",
        topic: topic,
        retrieved_message: message
      });
    });
  });
}
