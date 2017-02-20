import {Component} from 'labrador-immutable';

export interface IBottomButtonProps {
    bindTap: () => void;
    text: string;
    type: string;
}

export default class BottomButton extends Component<IBottomButtonProps,void> {
    public constructor(props: IBottomButtonProps) {
        super(props);
    }

    public bindTap() {
        const {bindTap} = this.props;
        bindTap && bindTap();
    }
}