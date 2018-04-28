package steps;

import cucumber.api.java.en.*;
import org.junit.Assert;
import pages.LoginPage;
import pages.UserPage;
import pages.NewUserPage;
import org.apache.commons.lang3.RandomStringUtils;

public class UserFeatureSteps {
	LoginPage loginPage = new LoginPage();
	UserPage userPage = new UserPage();
	NewUserPage newUserPage = new NewUserPage();

	@Given("^I'm in the login page$")
	public void iMInTheLoginPage() throws Throwable {
		loginPage.acccessLoginPage();
	}

	@Given("^Fill the \"([^\"]*)\" field with \"([^\"]*)\"$")
	public void fillTheFieldWith(String arg1, String arg2) throws Throwable {
		String content = arg2;
		if (arg2.contains("random")) {
			content = RandomStringUtils.randomAlphabetic(7);
			if (arg2.contains("email")) {
				content += "@email.com";
			}
		}

		loginPage.fillTextFieldById(arg1, content);
	}

	@When("^I click the \"([^\"]*)\" button$")
	public void iClickTheButton(String arg1) throws Throwable {
		if (arg1.equals("Entrar") || arg1.equals("Salvar")) {
			loginPage.buttonClickByLabel(arg1);
		}
		if (arg1.equals("Cadastrar")) {
			newUserPage.submitNewUserForm();
		}
	}

	@Given("^click the New User link$")
	public void clickTheNewUserLink() throws Throwable {
		loginPage.goToNewUserPage();
	}
	
	@Then("^I get the \"([^\"]*)\" message$")
	public void iGetTheUserMessage(String arg1) throws Throwable {
	    Assert.assertTrue(loginPage.searchForMessageText(arg1));
	}

}
