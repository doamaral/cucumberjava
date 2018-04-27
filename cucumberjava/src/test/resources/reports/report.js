$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/user.feature");
formatter.feature({
  "line": 1,
  "name": "User Login",
  "description": "As Accountant\r\nI must login to the application\r\nIn order to keep accounts Cadastrar safe",
  "id": "user-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7227155200,
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
  "duration": 367645440,
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
  "duration": 72593494,
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
  "duration": 52032426,
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
  "duration": 1210025813,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.iGetTheSuccessfullyLoggedUserMessage()"
});
formatter.result({
  "duration": 30892800,
  "status": "passed"
});
formatter.after({
  "duration": 317355520,
  "status": "passed"
});
formatter.before({
  "duration": 6170732373,
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
  "duration": 285381120,
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
  "duration": 76778240,
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
  "duration": 45851733,
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
  "duration": 841856426,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.iGetTheWrongUserMessage()"
});
formatter.result({
  "duration": 22289920,
  "status": "passed"
});
formatter.after({
  "duration": 278158934,
  "status": "passed"
});
formatter.before({
  "duration": 5845343573,
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
  "duration": 346702506,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.clickTheNewUserLink()"
});
formatter.result({
  "duration": 226985813,
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
  "duration": 63171414,
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
  "duration": 53966507,
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
  "duration": 34283520,
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
  "duration": 1818620587,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.getTheSuccessfullyCreatedUserMessage()"
});
formatter.result({
  "duration": 26921387,
  "status": "passed"
});
formatter.after({
  "duration": 345551786,
  "status": "passed"
});
formatter.before({
  "duration": 6412695467,
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
  "duration": 418186667,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.clickTheNewUserLink()"
});
formatter.result({
  "duration": 315365120,
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
  "duration": 48861867,
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
  "duration": 52686506,
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
  "duration": 34400854,
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
  "duration": 1310194774,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.getTheAlreadyTakenEmailMessage()"
});
formatter.result({
  "duration": 22208000,
  "status": "passed"
});
formatter.after({
  "duration": 231317760,
  "status": "passed"
});
});