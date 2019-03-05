import {EventEmitter} from 'events';

let eventSwitchLeftMenu = new EventEmitter(),
    eventOpenBasket = new EventEmitter();

export {eventSwitchLeftMenu, eventOpenBasket};