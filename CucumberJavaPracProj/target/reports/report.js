$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Fbfeature.feature");
formatter.feature({
  "line": 1,
  "name": "fb registration feature",
  "description": "",
  "id": "fb-registration-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "fb login page",
  "description": "",
  "id": "fb-registration-feature;fb-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user opens fb page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "enters email",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "enters password",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "press login",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "clicks close",
  "keyword": "And "
});
formatter.match({
  "location": "FbregistrationStepDef.user_opens_fb_page()"
});
formatter.result({
  "duration": 12283911724,
  "status": "passed"
});
formatter.match({
  "location": "FbregistrationStepDef.enters_email()"
});
formatter.result({
  "duration": 120176624,
  "status": "passed"
});
formatter.match({
  "location": "FbregistrationStepDef.enters_password()"
});
formatter.result({
  "duration": 33248929,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"pppass\"}\n  (Session info: chrome\u003d63.0.3239.84)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9020\u0027, time: \u00272017-08-21T17:54:21.164Z\u0027\nSystem info: host: \u0027HEMCHAND-PC\u0027, ip: \u0027192.168.0.11\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\Hemchand\\AppData\\Local\\Temp\\scoped_dir3524_19100}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.84, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 0e8ac43cf339bfd255caf18e7a834167\n*** Element info: {Using\u003did, value\u003dpppass}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:457)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat StepDefinitions.FbregistrationStepDef.enters_password(FbregistrationStepDef.java:37)\r\n\tat ✽.Then enters password(Fbfeature.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FbregistrationStepDef.press_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FbregistrationStepDef.clicks_close()"
});
formatter.result({
  "status": "skipped"
});
});