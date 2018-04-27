package steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import static core.DriverFactory.getDriver;

import core.DriverFactory;
import core.Properties;

public class Hooks {
	
	
	@Before
	public void setUp() {
		
        getDriver().get("https://srbarriga.herokuapp.com/login");
	}
	
	@After
	public void tearDown() {
		//if(Properties.FECHAR_BROWSER) DriverFactory.killDriver();
	}
	
	
}
