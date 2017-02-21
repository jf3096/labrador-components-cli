"use strict";
const labrador_immutable_1 = require('labrador-immutable');
class Tab extends labrador_immutable_1.Component {
    bindTabTap(e) {
        const { index } = e.currentTarget.dataset;
        const { activeIndex } = this.props;
        if (index != activeIndex) {
            this.updateActiveIndex(index);
        }
    }
    updateActiveIndex(activeTabIndex) {
        const { updateActiveIndex } = this.props;
        updateActiveIndex && updateActiveIndex(activeTabIndex);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tab;
