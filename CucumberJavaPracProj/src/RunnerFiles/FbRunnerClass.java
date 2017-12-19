package RunnerFiles;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features={"FeatureFiles"},
		format={"pretty","html:C:\\Users\\Hemchand\\workspace\\CucumberJavaPracProj\\target\\reports"},
		glue={"StepDefinitions"}
		
		
		
		
		
		
		)
public class FbRunnerClass {

}
