package pages;

import static core.DriverFactory.getDriver;

import org.openqa.selenium.By;

import core.BasePage;

public class LoginPage extends BasePage{
	
	public LoginPage acccessLoginPage(){
        getDriver().get("https://srbarriga.herokuapp.com/login");
        return this;
    }
	public String getLoginFailMessage(){
        //Problemas com o login do usuário
        return getDriver().findElement(By.xpath("//*[.=\"Problemas com o login do usuário\"]")).getText();
    }
	
	public NewUserPage goToNewUserPage() {
		getDriver().findElement(By.linkText("Novo usuário?")).click();
        return new NewUserPage();		
	}

}
