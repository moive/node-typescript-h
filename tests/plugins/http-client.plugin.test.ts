import { httpclientPlugin } from "../../src/plugins/http-client.plugin";
describe("plugin/http-client.plugin.ts", () => {
	test("httpClientPlugin.get() should return a string", async () => {
		const data = await httpclientPlugin.get(
			"https://jsonplaceholder.typicode.com/todos/1"
		);
		expect(data).toEqual({
			userId: 1,
			id: 1,
			title: "delectus aut autem",
			completed: expect.any(Boolean),
		});
	});

	test("httpClientPlugin should have POST, PUT and DELETE methods", () => {
		expect(typeof httpclientPlugin.get).toBe("function");
		expect(typeof httpclientPlugin.post).toBe("function");
		expect(typeof httpclientPlugin.put).toBe("function");
		expect(typeof httpclientPlugin.delete).toBe("function");
	});
});
