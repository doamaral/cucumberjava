package pages;

import core.BasePage;
import static core.DriverFactory.getDriver;

import org.openqa.selenium.By;

public class NewUserPage extends BasePage {
	
	public NewUserPage submitNewUserForm(){
        getDriver().findElement(By.xpath("//input[@type=\"submit\"]")).click();
        return this;
    }
	public String getEmailFailMessage(){
        return getDriver().findElement(By.xpath("//*[.=\"Endereço de email já utilizado\"]")).getText();
    }

}
