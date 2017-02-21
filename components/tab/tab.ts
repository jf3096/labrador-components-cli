import {Component} from 'labrador-immutable';

export interface ITabProps {
    titles: string[];
    activeIndex: number;
    updateActiveIndex: (activeTabIndex: number) => void;
}

export default class Tab extends Component<ITabProps,void> {

    public bindTabTap(e) {
        const {index} = e.currentTarget.dataset;
        const {activeIndex} = this.props;
        if (index != activeIndex) {
            this.updateActiveIndex(index);
        }
    }

    private updateActiveIndex(activeTabIndex: number) {
        const {updateActiveIndex} = this.props;
        updateActiveIndex && updateActiveIndex(activeTabIndex);
    }
}