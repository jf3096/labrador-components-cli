import {Component} from 'labrador-immutable';

export interface ISwiperProps {
    indicatorDots?: boolean;
    autoplay?: boolean;
    interval?: number;
    duration?: number;
    imgUrls: string[];
}

interface ISwiperStates {
}

export default class Swiper extends Component<ISwiperProps,ISwiperStates> {

    public bindTapImage(e: WXEvent) {
        const url = e.currentTarget.dataset[`url`];
        const {imgUrls} = this.props;
        wx.previewImage({
            current: url,
            urls: imgUrls
        })
    }
}