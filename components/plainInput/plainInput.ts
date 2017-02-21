import {Component} from 'labrador-immutable';

export type INPUT_TYPE = 'text' | 'number' | 'idcard' | 'digit'

export interface IPlainInputProps {
    label: string;
    placeholder: string;
    type?: INPUT_TYPE
    maxLength?: number;

    retrieveSMSCode?: boolean;
    bindFetchSMSTap?: () => boolean;

    clickable?: boolean;
    bindTap?: () => void;

    bindInput?: (value: string) => void;
}

export interface IControl {
    value: string
}

export interface IPlainInputStates extends IControl {
    btnLoading: boolean;
    btnDisable: boolean;
    counter: number;
}

export default class PlainInput extends Component<IPlainInputProps,IPlainInputStates> {

    public constructor(props) {
        super(props);
        this.state = {
            btnLoading: false,
            btnDisable: false,
            counter: null,
            value: ''
        }
    }

    public static async mockRequest() {
        await delay(3000);
    }

    @loading
    public async bindFetchSMSTap() {
        const {bindFetchSMSTap} = this.props;
        const isValid = bindFetchSMSTap && bindFetchSMSTap();
        if (isValid) {
            await setStateAsync({btnLoading: true, btnDisable: true});
            await PlainInput.mockRequest();
            await setStateAsync({btnLoading: false});
            await this.countDown();
            await setStateAsync({btnDisable: false});
        }
    }

    private async countDown() {
        await this.countDownBySeconds(10);
    }

    private async countDownBySeconds(seconds: number) {
        await setStateAsync({counter: seconds--});
        if (this.state.counter > 0) {
            await delay(1000);
            await this.countDownBySeconds(seconds);
        }
    }

    public bindInput(e: WXEvent) {
        const {value} = e.detail as any;
        const {bindInput} = this.props;
        this.setState({value} as any, () => {
            bindInput && bindInput(value);
        });
    }

    public bindTap() {
        const {bindTap} = this.props;
        bindTap && bindTap();
    }
}

function delay(ms: number, val?: any): Promise<{}> {
    return new Promise(resolve => setTimeout(resolve.bind(null, val), ms))
}

function setStateAsync(newState): Promise<{}> {
    return new Promise(resolve => this.setState(newState, resolve));
}

function loading(target, key, descriptor) {
    let isLoading = false;
    const raw = descriptor.value;
    descriptor.value = async function () {
        if (isLoading) {
            return;
        }
        isLoading = true;
        try {
            await raw.apply(this, arguments);
            /* 防止过快 */
            await delay(100);
        } finally {
            isLoading = false;
        }
    };
    return descriptor;
}