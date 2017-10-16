import { Library } from "@wowts/tslib";
import { LuaObj } from "@wowts/lua";
export interface AceConfigDialog {
    SetDefaultSize(appName: string, width: number, height: number): void;
    Open(appName: string): void;
    Close(appName: string): void;
    AddToBlizOptions(appName: string, name?: string, addon?: string): void;
    OpenFrames: LuaObj<any>;
}
declare const lib: Library<AceConfigDialog>;
export default lib;
