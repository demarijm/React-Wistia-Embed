"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
function WistiaEmbed({ hashedId, isResponsive = true, padding, width, height }) {
    const [handle, setHandle] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        loadWistiaScript();
        const wistiaEmbed = window._wq || [];
        addEmbedToQueue(wistiaEmbed);
        return () => {
            handle && handle.remove();
        };
    }, [hashedId, handle, isResponsive, padding, width, height]);
    const loadWistiaScript = () => {
        if (!document.getElementById('wistia_script')) {
            const wistiaScript = document.createElement('script');
            wistiaScript.id = 'wistia_script';
            wistiaScript.type = 'text/javascript';
            wistiaScript.src = 'https://fast.wistia.com/assets/external/E-v1.js';
            wistiaScript.async = true;
            document.body.appendChild(wistiaScript);
        }
    };
    const addEmbedToQueue = (wistiaEmbed) => {
        wistiaEmbed.push({
            id: hashedId,
            options: { hashedId, isResponsive, padding, width, height },
            onHasData: (video) => setHandle(video),
        });
    };
    const swatchStyle = {
        height: '100%',
        left: 0,
        opacity: 0,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        transition: 'opacity 200ms',
        width: '100%',
    };
    const swatchImgStyle = {
        filter: 'blur(5px)',
        height: '100%',
        objectFit: 'contain',
        width: '100%',
    };
    const renderCommon = () => (react_1.default.createElement("div", { className: "wistia_swatch", style: swatchStyle },
        react_1.default.createElement("img", { src: `https://fast.wistia.com/embed/medias/${hashedId}/swatch`, style: swatchImgStyle, alt: "", "aria-hidden": "true", onLoad: () => {
                document.querySelector('.wistia_swatch').style.opacity = '1';
            } })));
    const responsiveWrapperStyle = {
        height: '100%',
        left: '0',
        position: 'absolute',
        top: 0,
        width: '100%',
    };
    const responsiveEmbedStyle = {
        height: '100%',
        width: '100%',
        position: 'relative',
    };
    const renderResponsive = () => (react_1.default.createElement("div", { className: "wistia_responsive_padding", style: { padding, position: 'relative' } },
        react_1.default.createElement("div", { className: "wistia_responsive_wrapper", style: responsiveWrapperStyle },
            react_1.default.createElement("div", { className: `wistia_embed wistia_async_${hashedId} videoFoam=true`, style: responsiveEmbedStyle }, renderCommon()))));
    const fixedEmbedStyle = {
        height: height || 480,
        position: 'relative',
        width: width || 640,
    };
    const renderFixed = () => (react_1.default.createElement("div", { className: `wistia_embed wistia_async_${hashedId}`, style: fixedEmbedStyle }, renderCommon()));
    return isResponsive ? renderResponsive() : renderFixed();
}
exports.default = WistiaEmbed;
//# sourceMappingURL=WistiaEmbed.js.map