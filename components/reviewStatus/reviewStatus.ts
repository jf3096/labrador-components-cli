import {Component} from 'labrador-immutable';

type ReviewStatusType =  'success' | 'fail'

export interface IReviewStatusProps {
    type: ReviewStatusType;
}

interface IReviewStatusStates {
    iconClass: string;
    title: string;
    message: string;
}

export default class ReviewStatus extends Component<IReviewStatusProps,IReviewStatusStates> {

    private SUCCESS_TYPE = `success`;
    private FAIL_TYPE = `fail`;

    public constructor(props) {
        super(props);
        this.updateState();
    }

    private updateState() {
        const {type} = this.props;
        if (type === this.SUCCESS_TYPE) {
            this.state = ReviewStatus.getSuccessState();
        } else if (type === this.FAIL_TYPE) {
            this.state = ReviewStatus.getFailState();
        } else {
            throw new Error(`unexpected review type. review type = ${type}`)
        }
    }

    private static getSuccessState(): IReviewStatusStates {
        return {
            iconClass: ``,
            title: `提交成功!`,
            message: `您的资料正在审核中，我们会\n在3个工作日内给你答复，请耐心等待`
        }
    }

    private static getFailState(): IReviewStatusStates {
        return {
            iconClass: ``,
            title: `审核失败!`,
            message: `经过我们审核，\n我们不得不拒绝您的申请`
        }
    }
}