var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => tratarNumero_default
});
const tratarNumero = (numero) => {
  const arrNumero = numero.toString().split("").reverse();
  const arrNumeroFinal = [];
  for (let i = 0; i < arrNumero.length; i++) {
    if (i % 3 === 0) {
      arrNumeroFinal.push(".");
      arrNumeroFinal.push(arrNumero[i]);
    } else {
      arrNumeroFinal.push(arrNumero[i]);
    }
  }
  const numeroFinal = arrNumeroFinal.reverse().join("").slice(0, -1);
  return numeroFinal;
};
var tratarNumero_default = tratarNumero;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=tratarNumero.js.map
