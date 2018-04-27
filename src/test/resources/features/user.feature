Feature: User Login 
	As Accountant
	I must login to the application
	In order to keep accounts Cadastrar safe
	
	@Ready 
	Scenario: Login Successful
		Given I'm in the login page
		And Fill the "email" field with "asdf@gmail.com"
		And Fill the "senha" field with "123456"
		When I click the "Entrar" button
		Then I get the Successfully logged user Message
	
	@Ready
	Scenario: Wrong User Login
		Given I'm in the login page
		And Fill the "email" field with "asdf-erro@gmail.com"
		And Fill the "senha" field with "123456"
		When I click the "Entrar" button
		Then I get the wrong user message
	
	@Ready
	Scenario: Create new user
		Given I'm in the login page
		And click the New User link
		And Fill the "nome" field with "random name"
		And Fill the "email" field with "random email"
		And Fill the "senha" field with "123456"
		When I click the "Cadastrar" button
		Then get the Successfully created user Message
	
	Scenario: Already Existent User
		Given I'm in the login page
		And click the New User link
		And Fill the "nome" field with "Lucas"
		And Fill the "email" field with "asdf@gmail.com"
		And Fill the "senha" field with "123456"
		When I click the "Cadastrar" button
		Then get the already taken email Message
		