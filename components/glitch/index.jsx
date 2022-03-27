"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Glitch_module_css_1 = __importDefault(require("./glitch.module.css"));
const Glitch = ({
  children = "React Glitch Text",
  color = "whitesmoke",
  fontSize = "42px",
}) => {
  return react_1.default.createElement(
    "p",
    { className: Glitch_module_css_1.default.item, style: { color, fontSize } },
    react_1.default.createElement("span", { "aria-hidden": "true" }, children),
    children,
    react_1.default.createElement("span", { "aria-hidden": "true" }, children)
  );
};
const _default = Glitch;
export { _default as default };
//# sourceMappingURL=Glitch.js.map
