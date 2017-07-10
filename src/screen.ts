import * as blessed from "blessed";

export default class Screen {
	protected static screen;
	public static getScreen():void {
		if(!Screen.screen) {
			Screen.screen = (<any> blessed).screen({
				tput: true,
				smartCSR: true,
				dump: __dirname + '/file.log',
				warnings: true
			});
		}
		return Screen.screen;
	}
}