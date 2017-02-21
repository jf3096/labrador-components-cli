"use strict";
const labrador_immutable_1 = require('labrador-immutable');
class Swiper extends labrador_immutable_1.Component {
    bindTapImage(e) {
        const url = e.currentTarget.dataset[`url`];
        const { imgUrls } = this.props;
        wx.previewImage({
            current: url,
            urls: imgUrls
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Swiper;
