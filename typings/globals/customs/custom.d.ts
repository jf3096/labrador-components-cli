declare const __DEV__: boolean;

interface IPromise extends Promise<any> {
}

type RouteType =  'navigate' | 'redirect'

interface WXRouteDataSet {
    type: RouteType;
    url: string;
}

interface WXEvent {
    "type": "tap",
    "timeStamp": 960,
    "target": {
        "id": "",
        "offsetLeft": 295,
        "offsetTop": 205,
        "dataset": {
            "bindtap": "testTap",
            "path": "drugItems.2"
        }
    },
    "currentTarget": {
        "id": "",
        "offsetLeft": 295,
        "offsetTop": 205,
        "dataset": any
    },
    "detail": {
        "x": 316,
        "y": 284
    },
    "touches": [
        {
            "identifier": 0,
            "pageX": 316,
            "pageY": 284,
            "clientX": 316,
            "clientY": 284
        }
        ],
    "changedTouches": [
        {
            "identifier": 0,
            "pageX": 316,
            "pageY": 284,
            "clientX": 316,
            "clientY": 284
        }
        ]
}