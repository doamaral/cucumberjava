package runners;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty", "html:target/cucumber_reports"},
		features = "src/test/resources/features/user.feature",
		tags = {"@Ready"}, 
		//if have more tags, separate with comma
		//@Ready @InProgress
		glue = "steps",
		monochrome = true,
		snippets = SnippetType.CAMELCASE
	)
public class Runner {
	
}
