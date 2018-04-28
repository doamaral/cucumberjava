package steps;

import static core.DriverFactory.getDriver;

import cucumber.api.java.en.*;
import pages.LoginPage;
import pages.UserPage;
import pages.AddAccountPage;
import pages.ListAccountsPage;

public class AccountFeatureSteps {
	LoginPage loginPage = new LoginPage();
	UserPage userPage = new UserPage();
	ListAccountsPage listAccountsPage = new ListAccountsPage();
	AddAccountPage addAccountPage = new AddAccountPage();
	
	@Given("^I'm in the Logged User Page$")
	public void iMInTheLoggedUserPage() throws Throwable {
		getDriver().get("https://srbarriga.herokuapp.com/login");
		loginPage.acccessLoginPage();
		loginPage.fillTextFieldById("email", "asdf@gmail.com");
		loginPage.fillTextFieldById("senha", "123456");
		loginPage.buttonClickByLabel("Entrar");
		
	}

	@When("^I select Add Account Option$")
	public void iSelectAddAccountOption() throws Throwable {
	    userPage.selectAddAccountMenu();
	}
	
	@When("^I select List Account Option$")
	public void iSelectListAccountOption() throws Throwable {
	    userPage.selectListAccountsMenu();
	}
	
	@When("^Add an account named \"([^\"]*)\"$")
	public void addAnAccountNamed(String arg1) throws Throwable {
	    userPage.selectAddAccountMenu();
	    addAccountPage.fillTextFieldById("nome", arg1);
	    addAccountPage.buttonClickByLabel("Salvar");
	}

	@When("^Click the account \"([^\"]*)\" delete icon$")
	public void clickTheAccountDeleteIcon(String arg1) throws Throwable {
		listAccountsPage.deleteAccount(arg1);
	}

}
