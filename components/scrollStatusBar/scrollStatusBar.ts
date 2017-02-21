import {Component} from 'labrador-immutable';

export type ScrollStatusBarStatus = 'ready' | 'loading' | 'empty' | 'end';

export interface IScrollStatusBarProps {
    status: ScrollStatusBarStatus
}

export default class ScrollStatusBar extends Component<IScrollStatusBarProps,void> {
}