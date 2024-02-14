import { emailTemlate } from "../../src/js-foundation/template";
describe("js-foundation/template.ts", () => {
	test("EmailtTemplate should contain a greeting", () => {
		expect(emailTemlate).toContain("Hi,");
	});
	test("EmailtTemplate should contain {{name}} and {{orderId}}", () => {
		expect(emailTemlate).toMatch(/{{name}}/);
		expect(emailTemlate).toMatch(/{{orderId}}/);
	});
});
