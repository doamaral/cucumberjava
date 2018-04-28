package core;

import org.openqa.selenium.By;

import static core.DriverFactory.getDriver;

public class BasePage {
	
    public void fillTextFieldById(String id, String value){
        getDriver().findElement(By.id(id)).clear();
        getDriver().findElement(By.id(id)).sendKeys(value);
    }
   
    public void buttonClickByLabel(String label){
        getDriver().findElement(By.xpath("//button[.=\'"+label+"\']")).click();
    }
    public String getSuccessMessage(){
        return getDriver().findElement(By.className("alert-success")).getText();
    }
    public String getFailMessage(){
        return getDriver().findElement(By.className("alert-danger")).getText();
    }
    public String getAlertMessage(){
        return getDriver().findElement(By.className("alert-warning")).getText();
    }
	public boolean searchForMessageText(String message) {
		boolean result = false;
		result = message.equals(getDriver().findElement(By.xpath("//*[.='"+message+"']")).getText());
		return result;
	}

}
