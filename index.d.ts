import { LuaObj } from "@wowts/lua";
export declare class AceConfigDialog {
    SetDefaultSize(appName: string, width: number, height: number): void;
    Open(appName: string): void;
    Close(appName: string): void;
    AddToBlizOptions(appName: string, name?: string, addon?: string): void;
    OpenFrames: LuaObj<any>;
}
declare const lib: AceConfigDialog;
export default lib;
