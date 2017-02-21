"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const labrador_immutable_1 = require('labrador-immutable');
class Toast extends labrador_immutable_1.Component {
    constructor(props) {
        super(props);
        this.TOAST_DEFAULT_DURATION = 2500;
        this.state = {
            visible: props.visible
        };
    }
    onUpdate(props) {
        return __awaiter(this, void 0, void 0, function* () {
            const oldVisible = this.props.visible;
            if (oldVisible != props.visible) {
                yield setStateAsync({ visible: props.visible });
                if (!oldVisible) {
                    yield this.hide(this.TOAST_DEFAULT_DURATION);
                }
            }
        });
    }
    hide(duration) {
        return __awaiter(this, void 0, void 0, function* () {
            const { updateVisibility } = this.props;
            yield delay(duration);
            updateVisibility && updateVisibility(false);
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Toast;
function delay(ms, val) {
    return new Promise(resolve => setTimeout(resolve.bind(null, val), ms));
}
function setStateAsync(newState) {
    return new Promise(resolve => this.setState(newState, resolve));
}
