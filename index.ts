import { LuaObj } from "@wowts/lua";

export class AceConfigDialog {
    SetDefaultSize(appName:string, width: number, height:number):void{
    }
    Open(appName: string):void {
        this.OpenFrames[appName] = {};
    }
    Close(appName: string):void {
        delete this.OpenFrames[appName];
    }
    AddToBlizOptions(appName: string, name?: string, addon?:string):void {
    }
    OpenFrames:LuaObj<any> = {}
}

const lib = new AceConfigDialog();
export default lib;

