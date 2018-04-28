package pages;

import core.BasePage;
import static core.DriverFactory.getDriver;

import org.openqa.selenium.By;

public class UserPage extends BasePage{
	
	public AddAccountPage selectAddAccountMenu(){
        getDriver().findElement(By.xpath("//*[.=\"Contas \"]")).click();
        getDriver().findElement(By.linkText("Adicionar")).click();
        return new AddAccountPage();
    }
	
}
