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
        //Problemas com o login do usu�rio
        return getDriver().findElement(By.xpath("//*[.=\"Problemas com o login do usu�rio\"]")).getText();
    }
	
	public NewUserPage goToNewUserPage() {
		getDriver().findElement(By.linkText("Novo usu�rio?")).click();
        return new NewUserPage();		
	}

}
