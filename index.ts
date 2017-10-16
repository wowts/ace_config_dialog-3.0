import { Constructor, Library} from "@wowts/tslib";
import { LuaObj } from "@wowts/lua";

export interface AceConfigDialog {
    SetDefaultSize(appName:string, width: number, height:number):void;
    Open(appName: string):void;
    Close(appName: string):void;
    AddToBlizOptions(appName: string, name?: string, addon?:string):void;
    OpenFrames:LuaObj<any>;
}

const lib: Library<AceConfigDialog> = {
    Embed<T extends Constructor<{}>>(Base: T): Constructor<AceConfigDialog> & T {
        return class extends Base {
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
        };
    },
};
export default lib;

