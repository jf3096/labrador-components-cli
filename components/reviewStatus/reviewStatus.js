"use strict";
const labrador_immutable_1 = require('labrador-immutable');
class ReviewStatus extends labrador_immutable_1.Component {
    constructor(props) {
        super(props);
        this.SUCCESS_TYPE = `success`;
        this.FAIL_TYPE = `fail`;
        this.updateState();
    }
    updateState() {
        const { type } = this.props;
        if (type === this.SUCCESS_TYPE) {
            this.state = ReviewStatus.getSuccessState();
        }
        else if (type === this.FAIL_TYPE) {
            this.state = ReviewStatus.getFailState();
        }
        else {
            throw new Error(`unexpected review type. review type = ${type}`);
        }
    }
    static getSuccessState() {
        return {
            iconClass: ``,
            title: `提交成功!`,
            message: `您的资料正在审核中，我们会\n在3个工作日内给你答复，请耐心等待`
        };
    }
    static getFailState() {
        return {
            iconClass: ``,
            title: `审核失败!`,
            message: `经过我们审核，\n我们不得不拒绝您的申请`
        };
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ReviewStatus;
