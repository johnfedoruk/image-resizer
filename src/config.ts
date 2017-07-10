const fs = require("fs");

const CONFIG:string = `${__dirname}/../config.json`;
const UTF8:string = "utf8";

export default class Config {
	public static data:any = {};
	public static init():void {
		if(fs.existsSync(CONFIG)) {
			this.data = JSON.parse(fs.readFileSync(CONFIG,UTF8));
		}
		else {
			fs.writeFileSync(CONFIG,JSON.stringify({}),UTF8);
		}
	}
	public static save():void {
		fs.writeFileSync(CONFIG,JSON.stringify(this.data),UTF8);
	}
}