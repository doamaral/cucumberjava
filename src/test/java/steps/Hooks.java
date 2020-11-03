package steps;

import static core.DriverFactory.getDriver;

import core.DriverFactory;
import core.Properties;
import io.cucumber.java.*;

public class Hooks {
	
	
	@Before
	public void setUp() {
        getDriver().get("https://srbarriga.herokuapp.com");
	}
	
	@After
	public void tearDown() {
		if(Properties.FECHAR_BROWSER) DriverFactory.killDriver();
	}
	
	
}
