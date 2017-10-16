"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib = {
    Embed(Base) {
        return class extends Base {
            constructor() {
                super(...arguments);
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
        };
    },
};
exports.default = lib;
