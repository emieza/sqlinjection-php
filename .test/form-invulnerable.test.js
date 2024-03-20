
const { mytest: test15 } = require("./15-sqli-attack-fails.js")


describe("Invulerable Login Form", () => {
	test("15 atac de SQLi a index2.php ha de fallar", async () => {
		const code = await test15();
		expect(code).toBe(0);
	}, 30000);
});

