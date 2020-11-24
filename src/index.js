import _ from 'lodash';
import Lion, {NAME as NAME_OF_HAM} from './utilities';

console.log(Lion.say());

function component () {
    const element = document.createElement('div');
    const array = ['Hello','webpack','!'];
    element.innerHTML = _.join(array,' ')
    return element;
}

document.body.appendChild(component());