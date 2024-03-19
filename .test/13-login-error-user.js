// carreguem les llibreries
const { BaseTest } = require("./BaseTest.js")
const { By, until } = require("selenium-webdriver");
const assert = require('assert');

// heredem una classe amb un sol mètode test()
// emprem this.driver per utilitzar Selenium

class MyTest extends BaseTest
{
	async test() {
        // testejem LOGIN INCORRECTE usuari predefinit
        //////////////////////////////////////////////////////
        let user = "sjdosdjfods";
        let pass = "oidjsfojdsofij";
        // esperar a que el servidor es posi online
        await this.driver.sleep(10000);
        // accedim al web
        await this.driver.get("http://localhost:8000/index2.php");
        await this.driver.findElement(By.name("user")).sendKeys(user);
        await this.driver.findElement(By.name("password")).sendKeys(pass);
        await this.driver.findElement(By.xpath("//input[@value='Login']")).click();
        await this.driver.sleep(1000);

        // comprovem que el message és ERRONI
        let resultText = await this.driver.findElement(By.xpath("//div[@class='user']")).getText();
        let assertMessage = "No hi ha cap usuari amb aquest nom i contrasenya.";
        assert(resultText==assertMessage,`ERROR TEST: l'usuari ${user}/${pass} hauria de fallar amb el missatge '`+assertMessage+`' en un div.user`);
        
        console.log("TEST OK");
	}
}

// executem el test

(async function test_example() {
	const test = new MyTest();
	await test.run();
	console.log("END")
})();

