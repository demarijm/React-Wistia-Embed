/// <reference types="react" />
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
declare function WistiaEmbed({ hashedId, isResponsive, padding, width, height }: WistiaEmbedProps): JSX.Element;
export default WistiaEmbed;
