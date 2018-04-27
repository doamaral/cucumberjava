package pages;

import static core.DriverFactory.getDriver;

import core.BasePage;

public class LoginPage extends BasePage{
	
	public LoginPage acccessLoginPage(){
        getDriver().get("https://srbarriga.herokuapp.com/login");
        return this;
    }

}
