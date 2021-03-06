export interface ScriptingAPI {
	parse(rawCodeString: string): string;
	/**
	 * Evaluates the given JavaScript code and returns the result, throwing if there were errors.
	*/
	evalJavaScript(code: string, output: any): any;

	/**
	 * Evaluates the given TwineScript code and returns the result, throwing if there were errors.
	 */
	evalTwineScript(code: string, output: string): any;
}
