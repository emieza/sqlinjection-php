
const { mytest: test01 } = require("./01-page-h1.js")
const { mytest: test02 } = require("./02-login-error-pwd.js")

describe("Vulnerable Login Form", () => {
	test("01 Header H1 de la pàgina correcte", async () => {
		const code = await test01();
		expect(code).toBe(0);
	}, 30000);

	test("02 Error de password en el login, usuari correcte", async () => {
		const code = await test02();
		expect(code).toBe(0);
	}, 30000);
});
