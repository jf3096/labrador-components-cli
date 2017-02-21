import {Component} from 'labrador-immutable';

export interface IToastProps {
    message: string;
    visible: boolean;
    mask?: boolean;
    updateVisibility: (visible: boolean) => void;
}

interface IToastStates {
    visible: boolean;
}

export default class Toast extends Component<IToastProps,IToastStates> {

    public TOAST_DEFAULT_DURATION = 2500;

    public constructor(props) {
        super(props);
        this.state = {
            visible: props.visible
        }
    }

    public async onUpdate(props: IToastProps) {
        const oldVisible = this.props.visible;
        if (oldVisible != props.visible) {
            await setStateAsync({visible: props.visible});
            if (!oldVisible) {
                await this.hide(this.TOAST_DEFAULT_DURATION);
            }
        }
    }

    public async hide(duration: number) {
        const {updateVisibility} = this.props;
        await delay(duration);
        updateVisibility && updateVisibility(false);
    }
}

function delay(ms: number, val?: any): Promise<{}> {
    return new Promise(resolve => setTimeout(resolve.bind(null, val), ms))
}

function setStateAsync(newState): Promise<{}> {
    return new Promise(resolve => this.setState(newState, resolve));
}