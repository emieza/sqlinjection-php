
const { mytest: test01 } = require("./01-page-h1.js")
const { mytest: test02 } = require("./02-login-error-pwd.js")

const { mytest: test15 } = require("./15-sqli-attack-fails.js")

describe("vulnerableLoginForm", () => {
	test("01 Header H1 de la pàgina correcte", async () => {
		const code = await test01();
		expect(code).toBe(0);
	}, 30000);

	/*test("02 Error de password en el login, usuari correcte", async () => {
		const code = await test02();
		expect(code).toBe(0);
	}, 30000);*/

	test("15 atac de SQLi a index2.php ha de fallar", async () => {
		const code = await test15();
		expect(code).toBe(0);
	}, 30000);
});

