package pages;

import core.BasePage;
import static core.DriverFactory.getDriver;
import org.openqa.selenium.By;

public class ListAccountsPage extends BasePage{
	public ListAccountsPage deleteAccount(String accountName){
        getDriver().findElement(By.xpath("//td[.=\"" + accountName + "\"]/..//span[@class=\"glyphicon glyphicon-remove-circle\"]/..")).click();
        return this;
    }
}
