package steps;

import cucumber.api.java.en.*;
import org.junit.Assert;
import pages.LoginPage;
import pages.UserPage;
import pages.NewUserPage;
import org.apache.commons.lang3.RandomStringUtils;

public class UserTest {
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
		if (arg1.equals("Entrar")) {
			loginPage.buttonClickByLabel(arg1);
		}
		if (arg1.equals("Cadastrar")) {
			newUserPage.submitNewUserForm();
		}
	}

	@Then("^I get the Successfully logged user Message$")
	public void iGetTheSuccessfullyLoggedUserMessage() throws Throwable {
		String message = userPage.getSuccessMessage();
		Assert.assertEquals("Bem vindo, Lucas!", message);
	}

	@Then("^I get the wrong user message$")
	public void iGetTheWrongUserMessage() throws Throwable {
		String message = loginPage.getLoginFailMessage();
		Assert.assertEquals("Problemas com o login do usuário", message);
	}

	@Given("^click the New User link$")
	public void clickTheNewUserLink() throws Throwable {
		loginPage.goToNewUserPage();
	}

	@Then("^get the Successfully created user Message$")
	public void getTheSuccessfullyCreatedUserMessage() throws Throwable {
		String message = loginPage.getSuccessMessage();
		Assert.assertEquals("Usuário inserido com sucesso", message);
	}

	@Then("^get the already taken email Message$")
	public void getTheAlreadyTakenEmailMessage() throws Throwable {

	}

}
