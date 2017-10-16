local __exports = LibStub:NewLibrary("AceConfigDialog-3.0", 10000)
if not __exports then return end
local __class = LibStub:GetLibrary("tslib").newClass
local lib = {
    Embed = function(self, Base)
        return __class(Base, {
            SetDefaultSize = function(self, appName, width, height)
            end,
            Open = function(self, appName)
                self.OpenFrames[appName] = {}
            end,
            Close = function(self, appName)
                self.OpenFrames[appName] = nil
            end,
            AddToBlizOptions = function(self, appName, name, addon)
            end,
            constructor = function(self, ...)
                Base.constructor(...)
                self.OpenFrames = {}
            end
        })
    end,

}
for k,v in pairs(lib) do __exports[k] = v end
