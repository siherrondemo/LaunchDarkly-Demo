const express = require('express');
const app = express();
const port = 3000;
const uuid = require('uuid/v4');
const LaunchDarkly = require('launchdarkly-node-server-sdk');
const user = {"key": uuid()};
  console.log("My random userId is: "+ user.key);
var ldClient = LaunchDarkly.init("[[SDK Key]]");
ldClient.once("ready", function() {
  ldClient.variation("my-demo-feature", user, false, function(err, showFeature) {
      console.log("Is my feature active: "+showFeature);
    if (showFeature) {
      app.get('/', (req, res) => res.send('Hello LaunchDarkly!'));
    } else {
      app.get('/', (req, res) => res.send('Something has gone wrong.'));
    }
  });
  ldClient.close();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
