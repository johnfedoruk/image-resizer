import * as blessed from "blessed";
import Screen from "./screen";
import Config from "./config";

export class FileSelect {
	protected fm;
	constructor(msg:string,cb:(path:string)=>void) {
		var screen:any = Screen.getScreen();

		this.fm = (<any> blessed).filemanager({
			parent: screen,
			border: 'line',
			style: {
				selected: {
					bg: 'blue'
				}
			},
			height: 'half',
			width: 'half',
			top: 'center',
			left: 'center',
			label: ' {blue-fg}%path{/blue-fg} ',
			cwd: Config.data.cwd || "./",
			keys: true,
			vi: true,
			scrollbar: {
				ch: ' '
			}
		});

		var box = (<any> blessed).box({
			parent: screen,
			style: {
				bg: 'green'
			},
			border: 'line',
			height: 'half',
			width: 'half',
			top: 'center',
			left: 'center',
			hidden: true
		});

		this.fm.refresh();

		screen.render();

		screen.key(['escape', 'q', 'C-c'], function () {
			screen.destroy();
		});

		screen.key(["space"], (ch, key) => {
			const CWD = this.fm.cwd;
			const PATH = (<any> this.fm).ritems[(<any> this.fm).selected].replace(/\{(.+?)\}/g, "");
			if (PATH == "../")
				return;
			cb(CWD+PATH);
			this.fm.destroy();
			screen.render();
		});
	}
}
