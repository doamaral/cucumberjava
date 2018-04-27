package core;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class DriverFactory {
	
	private static WebDriver driver;
	
	private DriverFactory() {}
	
	public static WebDriver getDriver(){
		if(driver == null) {
			switch (Properties.BROWSER) {
				case FIREFOX:
					System.setProperty("webdriver.gecko.driver", "C:\\Users\\user\\webdrivers\\geckodriver.exe");
					driver = new FirefoxDriver();
					break;
				case CHROME:
					System.setProperty("webdriver.gecko.driver", "C:\\Users\\user\\webdrivers\\chromedriver.exe");
					driver = new ChromeDriver();
					break;
			}			
		}
		return driver;
	}

	public static void killDriver(){
		if(driver != null) {
			driver.quit();
			driver = null;
		}
	}
}