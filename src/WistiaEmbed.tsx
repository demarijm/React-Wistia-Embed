import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    _wq: WistiaEmbedQueueItem[];
  }
}

interface WistiaEmbedProps {
  hashedId: string;
  isResponsive?: boolean;
  padding?: string;
  width?: number;
  height?: number;
}

interface WistiaEmbedQueueItem {
  id: string;
  options: WistiaEmbedProps;
  onHasData: (video: any) => void;
}

function WistiaEmbed({ hashedId, isResponsive = true, padding, width, height }: WistiaEmbedProps): JSX.Element {
  const [handle, setHandle] = useState<any>(null);

  useEffect(() => {
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

  const addEmbedToQueue = (wistiaEmbed: WistiaEmbedQueueItem[]) => {
    wistiaEmbed.push({
      id: hashedId,
      options: { hashedId, isResponsive, padding, width, height },
      onHasData: (video: any) => setHandle(video),
    });
  };

  const swatchStyle: React.CSSProperties = {
    height: '100%',
    left: 0,
    opacity: 0,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    transition: 'opacity 200ms',
    width: '100%',
  };

  const swatchImgStyle: React.CSSProperties = {
    filter: 'blur(5px)',
    height: '100%',
    objectFit: 'contain',
    width: '100%',
  };

  const renderCommon = (): JSX.Element => (
    <div className="wistia_swatch" style={swatchStyle}>
      <img
        src={`https://fast.wistia.com/embed/medias/${hashedId}/swatch`}
        style={swatchImgStyle}
        alt=""
        aria-hidden="true"
        onLoad={() => {
          (document.querySelector('.wistia_swatch') as HTMLElement).style.opacity = '1';
        }}
      />
    </div>
  );

  const responsiveWrapperStyle: React.CSSProperties = {
    height: '100%',
    left: '0',
    position: 'absolute',
    top: 0,
    width: '100%',
  };

  const responsiveEmbedStyle: React.CSSProperties = {
    height: '100%',
    width: '100%',
    position: 'relative',
  };

  const renderResponsive = (): JSX.Element => (
    <div className="wistia_responsive_padding" style={{ padding, position: 'relative' }}>
      <div className="wistia_responsive_wrapper" style={responsiveWrapperStyle}>
        <div className={`wistia_embed wistia_async_${hashedId} videoFoam=true`}
        style={responsiveEmbedStyle}
        >
          {renderCommon()}
        </div>
      </div>
    </div>
  );

  const fixedEmbedStyle: React.CSSProperties = {
    height: height || 480,
    position: 'relative',
    width: width || 640,
  };

  const renderFixed = (): JSX.Element => (
    <div className={`wistia_embed wistia_async_${hashedId}`} style={fixedEmbedStyle}>
      {renderCommon()}
    </div>
  );

  return isResponsive ? renderResponsive() : renderFixed();
}

export default WistiaEmbed;