package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class FbregistrationStepDef {

	WebDriver driver;
	
	@Given("^user opens fb page$")
	public void user_opens_fb_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		System.setProperty("webdriver.chrome.driver", "C:\\SelDrive\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://www.facebook.com");
		driver.manage().window().maximize();
	    //throw new PendingException();
	}

	@Then("^enters email$")
	public void enters_email() throws Exception {
	    driver.findElement(By.id("email")).sendKeys("indiratest");
	    
	}

	@Then("^enters password$")
	public void enters_password() throws Exception {
	    driver.findElement(By.id("pppass")).sendKeys("indiratest");
	    Thread.sleep(2000);
	    //throw new PendingException();
	}

	@Then("^press login$")
	public void press_login() throws Exception{
	   
		 driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		 driver.findElement(By.id("u_0_a")).click();
		//throw new PendingException();
	}

	@And("^clicks close$")
	public void clicks_close() throws Exception{
	    // Write code here that turns the phrase above into concrete actions
	    driver.quit();
	}

	
}
