import { DocBlock } from "../Parser/Tags";
import { get_multiple } from "../../utils/functions";

export interface FunctionParameters {
	name: string;
	type: string;
	description: string;
}

export interface FunctionReturns {
	type: string;
	description: string;
}

export default class FunctionPage {
	readonly item: string;
	readonly parameters?: FunctionParameters[];
	readonly returns?: FunctionReturns[];
	readonly examples?: string[];

	constructor(
		public readonly name: string,
		public readonly description?: string,
		block: DocBlock = {}
	) {
		const params: FunctionParameters[] = get_multiple(block, "tparam").map(
			(param) => ({
				type: param[0],
				name: param[1],
				description: param[2],
			})
		);
		this.parameters = params.length > 0 ? params : undefined;
		const returns: FunctionReturns[] = get_multiple(block, "treturn").map(
			(ret) => ({
				type: ret[0],
				description: ret[1],
			})
		);
		this.returns = returns.length > 0 ? returns : undefined;
		const examples: string[] = get_multiple(block, "example").map(
			(example) => example[0]
		);
		this.examples = examples.length > 0 ? examples : undefined;

		this.item = "function";
	}

	print(level: number = 0) {
		console.log("    ".repeat(level) + this.name);
	}
}
