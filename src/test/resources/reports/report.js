$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/user.feature");
formatter.feature({
  "line": 1,
  "name": "User Login",
  "description": "As Accountant\r\nI must login to the application\r\nIn order to keep accounts Cadastrar safe",
  "id": "user-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7924475733,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Login Successful",
  "description": "",
  "id": "user-login;login-successful",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Ready"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I\u0027m in the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Fill the \"email\" field with \"asdf@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Fill the \"senha\" field with \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click the \"Entrar\" button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I get the Successfully logged user Message",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTest.iMInTheLoginPage()"
});
formatter.result({
  "duration": 393146880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 10
    },
    {
      "val": "asdf@gmail.com",
      "offset": 29
    }
  ],
  "location": "UserTest.fillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 74924373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "senha",
      "offset": 10
    },
    {
      "val": "123456",
      "offset": 29
    }
  ],
  "location": "UserTest.fillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 59404800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Entrar",
      "offset": 13
    }
  ],
  "location": "UserTest.iClickTheButton(String)"
});
formatter.result({
  "duration": 1215961600,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.iGetTheSuccessfullyLoggedUserMessage()"
});
formatter.result({
  "duration": 24403627,
  "status": "passed"
});
formatter.after({
  "duration": 207899307,
  "status": "passed"
});
formatter.before({
  "duration": 6299095040,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Wrong User Login",
  "description": "",
  "id": "user-login;wrong-user-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@Ready"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I\u0027m in the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Fill the \"email\" field with \"asdf-erro@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Fill the \"senha\" field with \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click the \"Entrar\" button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I get the wrong user message",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTest.iMInTheLoginPage()"
});
formatter.result({
  "duration": 203919360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 10
    },
    {
      "val": "asdf-erro@gmail.com",
      "offset": 29
    }
  ],
  "location": "UserTest.fillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 85153706,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "senha",
      "offset": 10
    },
    {
      "val": "123456",
      "offset": 29
    }
  ],
  "location": "UserTest.fillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 59141973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Entrar",
      "offset": 13
    }
  ],
  "location": "UserTest.iClickTheButton(String)"
});
formatter.result({
  "duration": 1049580373,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.iGetTheWrongUserMessage()"
});
formatter.result({
  "duration": 25599573,
  "status": "passed"
});
formatter.after({
  "duration": 287959466,
  "status": "passed"
});
formatter.before({
  "duration": 6011568213,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Create new user",
  "description": "",
  "id": "user-login;create-new-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@Ready"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I\u0027m in the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "click the New User link",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Fill the \"nome\" field with \"random name\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Fill the \"email\" field with \"random email\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Fill the \"senha\" field with \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click the \"Cadastrar\" button",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "get the Successfully created user Message",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTest.iMInTheLoginPage()"
});
formatter.result({
  "duration": 356953600,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.clickTheNewUserLink()"
});
formatter.result({
  "duration": 225145600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nome",
      "offset": 10
    },
    {
      "val": "random name",
      "offset": 28
    }
  ],
  "location": "UserTest.fillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 54977280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 10
    },
    {
      "val": "random email",
      "offset": 29
    }
  ],
  "location": "UserTest.fillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 59409067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "senha",
      "offset": 10
    },
    {
      "val": "123456",
      "offset": 29
    }
  ],
  "location": "UserTest.fillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 36995413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cadastrar",
      "offset": 13
    }
  ],
  "location": "UserTest.iClickTheButton(String)"
});
formatter.result({
  "duration": 2013777494,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.getTheSuccessfullyCreatedUserMessage()"
});
formatter.result({
  "duration": 27050240,
  "status": "passed"
});
formatter.after({
  "duration": 279164587,
  "status": "passed"
});
formatter.before({
  "duration": 6231355307,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Already Existent User",
  "description": "",
  "id": "user-login;already-existent-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@Ready"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I\u0027m in the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "click the New User link",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Fill the \"nome\" field with \"Lucas\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Fill the \"email\" field with \"asdf@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Fill the \"senha\" field with \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click the \"Cadastrar\" button",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "get the already taken email Message",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTest.iMInTheLoginPage()"
});
formatter.result({
  "duration": 291376640,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.clickTheNewUserLink()"
});
formatter.result({
  "duration": 263316053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nome",
      "offset": 10
    },
    {
      "val": "Lucas",
      "offset": 28
    }
  ],
  "location": "UserTest.fillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 60716800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 10
    },
    {
      "val": "asdf@gmail.com",
      "offset": 29
    }
  ],
  "location": "UserTest.fillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 56066987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "senha",
      "offset": 10
    },
    {
      "val": "123456",
      "offset": 29
    }
  ],
  "location": "UserTest.fillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 42085120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cadastrar",
      "offset": 13
    }
  ],
  "location": "UserTest.iClickTheButton(String)"
});
formatter.result({
  "duration": 1401237760,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.getTheAlreadyTakenEmailMessage()"
});
formatter.result({
  "duration": 29081173,
  "status": "passed"
});
formatter.after({
  "duration": 222460160,
  "status": "passed"
});
});