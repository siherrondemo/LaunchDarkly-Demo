# LaunchDarkly-Demo
> Simple implementation of a Feature Flag to deliver a single line of response in an Express app.

This is a basic demo of how a Feature Flag would work in a Node//Express app.

## LaunchDarkly Steps

1. Create your Trial account with [LaunchDarkly](https://launchdarkly.com/).
2. Create a new feature flag called `my-demo-feature`.
3. Leave this as a Boolean with two variations (true|false).

![Feature Flag](https://github.com/siherrondemo/LaunchDarkly-Demo/blob/master/screenshots/Create_flag.png)

4. Check that the default value is set to `true`

![Default EQ True](https://github.com/siherrondemo/LaunchDarkly-Demo/blob/master/screenshots/My_Demo_Feature_-_Targeting.png)


## Updating and running the Express App

1. Create a local clone of this Repo

```
$ cd desktop
$ mkdir myDemoFlag

$ git clone https://github.com/siherrondemo/LaunchDarkly-Demo.git
```

2. Open `app.js` in your favourite editor and replace `[[SDK KEY]]` with the SDK KEY found in your Environment setting in your LaunchDarkly account

![SDK KEY](https://github.com/siherrondemo/LaunchDarkly-Demo/blob/master/screenshots/Projects.png)

3. Having updated the `app.js` with the right SDK KEY run the following to start the app on `localHost:3000`

```
node app.js
```
