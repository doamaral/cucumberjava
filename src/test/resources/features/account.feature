Feature: Account Mantainance
	As a User
	I want to maintain my accounts
	So I can keep myself organized
	
	Scenario: Add new Account successfuly
		Given I'm in the Logged User Page
		When I select Add Account Option
		And Fill the "nome" field with "random name"
		And I click the "Salvar" button
		Then I get the "Conta adicionada com sucesso!" message