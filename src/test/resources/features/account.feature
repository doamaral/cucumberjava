Feature: Account Maintenance
	As a User
	I want to maintain my accounts
	So I can keep myself organized
	
	Background:
		Given I'm in the Logged User Page
		
	@Ready
	Scenario Outline: Add Account
		When I select Add Account Option
		And Fill the "<field>" field with "<account name>"
		And I click the "Salvar" button
		Then I get the "<text message>" message
		Examples:
	    | field| account name            | text message                        |
	    | nome | random name             | Conta adicionada com sucesso!       |
	    | nome | Conta com movimentacao  | Já existe uma conta com esse nome!  |
	    | nome |                         | Informe o nome da conta             |
	
	
	@Ready
	Scenario: Delete Account with movement
		When I select List Account Option
		And Click the account "Conta com movimentacao" delete icon
		Then I get the "Conta em uso na movimentações" message
	
	@Ready
	Scenario: Delete listed Account
		When Add an account named "Conta para Remover"
		And I select List Account Option
		And Click the account "Conta para Remover" delete icon
		Then I get the "Conta removida com sucesso!" message
		