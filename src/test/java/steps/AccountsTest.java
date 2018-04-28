package steps;

import static core.DriverFactory.getDriver;

import cucumber.api.java.en.*;
import pages.LoginPage;
import pages.UserPage;

public class AccountsTest {
	LoginPage loginPage = new LoginPage();
	UserPage userPage = new UserPage();
	
	@Given("^I'm in the Logged User Page$")
	public void iMInTheListAccountsPage() throws Throwable {
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

}
