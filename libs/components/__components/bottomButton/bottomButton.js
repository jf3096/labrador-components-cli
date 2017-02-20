"use strict";
const labrador_immutable_1 = require('labrador-immutable');
class BottomButton extends labrador_immutable_1.Component {
    constructor(props) {
        super(props);
    }
    bindTap() {
        const { bindTap } = this.props;
        bindTap && bindTap();
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BottomButton;
