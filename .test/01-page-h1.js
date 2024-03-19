// carreguem les llibreries
const { BaseTest } = require("./BaseTest.js")
const { By, until } = require("selenium-webdriver");
const assert = require('assert');

// heredem una classe amb un sol mètode test()
// emprem this.driver per utilitzar Selenium

class MyTest extends BaseTest
{
	async test() {
        await this.driver.get("http://localhost:8000/");
        var text = await this.driver.findElement(By.tagName("h1")).getText();

        assert( text=="PDO vulnerable a SQL injection", "Títol H1 de la pàgina incorrecte");

        console.log("TEST OK");
	}
}

// executem el test

(async function test_example() {
	const test = new MyTest();
	await test.run();
	console.log("END")
})();

