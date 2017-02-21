"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const labrador_immutable_1 = require('labrador-immutable');
class PlainInput extends labrador_immutable_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnLoading: false,
            btnDisable: false,
            counter: null,
            value: ''
        };
    }
    static mockRequest() {
        return __awaiter(this, void 0, void 0, function* () {
            yield delay(3000);
        });
    }
    bindFetchSMSTap() {
        return __awaiter(this, void 0, void 0, function* () {
            const { bindFetchSMSTap } = this.props;
            const isValid = bindFetchSMSTap && bindFetchSMSTap();
            if (isValid) {
                yield setStateAsync({ btnLoading: true, btnDisable: true });
                yield PlainInput.mockRequest();
                yield setStateAsync({ btnLoading: false });
                yield this.countDown();
                yield setStateAsync({ btnDisable: false });
            }
        });
    }
    countDown() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.countDownBySeconds(10);
        });
    }
    countDownBySeconds(seconds) {
        return __awaiter(this, void 0, void 0, function* () {
            yield setStateAsync({ counter: seconds-- });
            if (this.state.counter > 0) {
                yield delay(1000);
                yield this.countDownBySeconds(seconds);
            }
        });
    }
    bindInput(e) {
        const { value } = e.detail;
        const { bindInput } = this.props;
        this.setState({ value }, () => {
            bindInput && bindInput(value);
        });
    }
    bindTap() {
        const { bindTap } = this.props;
        bindTap && bindTap();
    }
}
__decorate([
    loading, 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', Promise)
], PlainInput.prototype, "bindFetchSMSTap", null);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PlainInput;
function delay(ms, val) {
    return new Promise(resolve => setTimeout(resolve.bind(null, val), ms));
}
function setStateAsync(newState) {
    return new Promise(resolve => this.setState(newState, resolve));
}
function loading(target, key, descriptor) {
    let isLoading = false;
    const raw = descriptor.value;
    descriptor.value = function () {
        return __awaiter(this, arguments, void 0, function* () {
            if (isLoading) {
                return;
            }
            isLoading = true;
            try {
                yield raw.apply(this, arguments);
                /* 防止过快 */
                yield delay(100);
            }
            finally {
                isLoading = false;
            }
        });
    };
    return descriptor;
}
