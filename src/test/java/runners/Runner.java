package runners;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty", "html:target/cucumber_reports"},
		//features = "src/test/resources/features",
		features = "src/test/resources/features/account.feature",
		tags = {"@Ready"}, 
		//if have more tags, separate with comma
		//@Ready @InProgress
		glue = "steps",
		//dryRun = true,
		monochrome = true,
		snippets = SnippetType.CAMELCASE
	)
public class Runner {
	
}
