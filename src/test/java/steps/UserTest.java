package steps;

import cucumber.api.java.en.*;
import org.junit.Assert;
import pages.LoginPage;
import pages.UserPage;

public class UserTest {
	LoginPage loginPage = new LoginPage();
	UserPage userPage = new UserPage();
	
	@Given("^I'm in the login page$")
	public void iMInTheLoginPage() throws Throwable {
		loginPage.acccessLoginPage();	    
	}

	@Given("^Fill the \"([^\"]*)\" field with \"([^\"]*)\"$")
	public void fillTheFieldWith(String arg1, String arg2) throws Throwable {
	    loginPage.fillTextFieldById(arg1, arg2);
	    
	}

	@When("^I click the \"([^\"]*)\" button$")
	public void iClickTheButton(String arg1) throws Throwable {
	    loginPage.buttonClickByLabel(arg1);
	    
	}

	@Then("^I get the Successfully logged user Message$")
	public void iGetTheSuccessfullyLoggedUserMessage() throws Throwable {
		String message = userPage.getSuccessMessage();
		Assert.assertEquals("Bem vindo, Lucas!", message);
	}

	@Then("^I get the wrong user message$")
	public void iGetTheWrongUserMessage() throws Throwable {
	    
	    
	}

	@Given("^click the New User link$")
	public void clickTheNewUserLink() throws Throwable {
	    
	    
	}

	@Then("^get the Successfully created user Message$")
	public void getTheSuccessfullyCreatedUserMessage() throws Throwable {
	    
	    
	}

	@Then("^get the already taken email Message$")
	public void getTheAlreadyTakenEmailMessage() throws Throwable {
	    
	    
	}

}
