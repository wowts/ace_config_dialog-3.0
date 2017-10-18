"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AceConfigDialog {
    constructor() {
        this.OpenFrames = {};
    }
    SetDefaultSize(appName, width, height) {
    }
    Open(appName) {
        this.OpenFrames[appName] = {};
    }
    Close(appName) {
        delete this.OpenFrames[appName];
    }
    AddToBlizOptions(appName, name, addon) {
    }
}
exports.AceConfigDialog = AceConfigDialog;
const lib = new AceConfigDialog();
exports.default = lib;
