import _ from 'lodash';

const data = [
  { hello: 'Hello webpack babel eslint !', active: true },
  { hello: '...', active: false },
];
const say = _.find(data, 'active');
document.getElementById('root').innerHTML = say.hello;
