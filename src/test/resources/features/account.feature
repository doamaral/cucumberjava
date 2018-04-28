Feature: Account Mantainance
	As a User
	I want to maintain my accounts
	So I can keep myself organized
	
	@Ready
	Scenario: Add new Random Account successfuly
		Given I'm in the Logged User Page
		When I select Add Account Option
		And Fill the "nome" field with "random name"
		And I click the "Salvar" button
		Then I get the "Conta adicionada com sucesso!" message
	
	@Ready
	Scenario: Account name already taken
		Given I'm in the Logged User Page
		When I select Add Account Option
		And Fill the "nome" field with "Conta com movimentacao"
		And I click the "Salvar" button
		Then I get the "Já existe uma conta com esse nome!" message
	
	@Ready
	Scenario: Add Empty Account Name field
		Given I'm in the Logged User Page
		When I select Add Account Option
		And Fill the "nome" field with ""
		And I click the "Salvar" button
		Then I get the "Informe o nome da conta" message
	
	@Ready
	Scenario: Remove Account with movement
		Given I'm in the Logged User Page
		When I select List Account Option
		And Click the account "Conta com movimentacao" delete icon
		Then I get the "Conta em uso na movimentações" message
	
	@Ready
	Scenario: Delete listed Account
		Given I'm in the Logged User Page
		When Add an account named "Conta para Remover"
		And I select List Account Option
		And Click the account "Conta para Remover" delete icon
		Then I get the "Conta removida com sucesso!" message
		