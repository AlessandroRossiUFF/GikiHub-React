var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => tratarData_default
});
const tratarData = (data) => {
  const arrData = data.split("-");
  return `${arrData[2]}/${arrData[1]}/${arrData[0]}`;
};
var tratarData_default = tratarData;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=tratarData.js.map
