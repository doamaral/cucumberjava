Feature: User Login 
	As Accountant
	I must login to the application
	In order to keep accounts register safe
	
	Scenario: Login Successful Test
		Given I'm in the login page
		And Fill the "email" field with "asdf@gmail.com"
		And Fill the "password" field with "123456"
		When I click the "Submit" button
		Then I get the Successfully logged user Message
	
	Scenario: Wrong User Login
		Given I'm in the login page
		And Fill the "email" field with "asdf@gmail.com"
		And Fill the "password" field with "123456"
		When I click the "Submit" button
		Then I get the wrong user message
	
	Scenario: Create new user
		Given I'm in the login page
		And click the New User link
		And Fill the "name" field with "random name"
		And Fill the "email" field with "random email"
		And Fill the "password" field with "123456"
		When I click the "Register" button
		Then get the Successfully created user Message
	
	Scenario: Already Existent User
		Given I'm in the login page
		And click the New User link
		And Fill the "name" field with "Lucas"
		And Fill the "email" field with "asdf@gmail.com"
		And Fill the "password" field with "123456"
		When I click the "Register" button
		Then get the already taken email Message
		