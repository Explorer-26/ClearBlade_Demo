function trigger(req, resp) {
   ClearBlade.init({ request: req });

  // Get the message details from trigger payload
  var topic = req.params.topic;
  var message = req.params.body;
  var userId = req.params.userId;

  console.log("Trigger fired!");
  console.log("Topic:", topic);
  console.log("Message:", message);
  console.log("User ID:", userId);

  resp.success({
    status: "Trigger received!",
    topic: topic,
    message: message,
    userId: userId
  });
}
