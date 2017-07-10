// const selectFile = require("./src/fileselect.js");

import { FileSelect } from "./src/file-select";
import Config from "./src/config";

setTimeout(()=>{
	Config.init();
	delete Config.data.hello;
	Config.save();
	const fs:FileSelect = new FileSelect("hello",(path:string)=>{
		console.log(path);
	});
	
},100);