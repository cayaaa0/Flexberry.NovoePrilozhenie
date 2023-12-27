import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-novoe-prilozhenie-автомобиль-l');
  this.route('i-i-s-novoe-prilozhenie-автомобиль-e',
  { path: 'i-i-s-novoe-prilozhenie-автомобиль-e/:id' });
  this.route('i-i-s-novoe-prilozhenie-автомобиль-e.new',
  { path: 'i-i-s-novoe-prilozhenie-автомобиль-e/new' });
  this.route('i-i-s-novoe-prilozhenie-водитель-l');
  this.route('i-i-s-novoe-prilozhenie-водитель-e',
  { path: 'i-i-s-novoe-prilozhenie-водитель-e/:id' });
  this.route('i-i-s-novoe-prilozhenie-водитель-e.new',
  { path: 'i-i-s-novoe-prilozhenie-водитель-e/new' });
  this.route('i-i-s-novoe-prilozhenie-парк-место-l');
  this.route('i-i-s-novoe-prilozhenie-парк-место-e',
  { path: 'i-i-s-novoe-prilozhenie-парк-место-e/:id' });
  this.route('i-i-s-novoe-prilozhenie-парк-место-e.new',
  { path: 'i-i-s-novoe-prilozhenie-парк-место-e/new' });
  this.route('i-i-s-novoe-prilozhenie-парковка-l');
  this.route('i-i-s-novoe-prilozhenie-парковка-e',
  { path: 'i-i-s-novoe-prilozhenie-парковка-e/:id' });
  this.route('i-i-s-novoe-prilozhenie-парковка-e.new',
  { path: 'i-i-s-novoe-prilozhenie-парковка-e/new' });
  this.route('i-i-s-novoe-prilozhenie-терминал-l');
  this.route('i-i-s-novoe-prilozhenie-терминал-e',
  { path: 'i-i-s-novoe-prilozhenie-терминал-e/:id' });
  this.route('i-i-s-novoe-prilozhenie-терминал-e.new',
  { path: 'i-i-s-novoe-prilozhenie-терминал-e/new' });
  this.route('i-i-s-novoe-prilozhenie-услуга-l');
  this.route('i-i-s-novoe-prilozhenie-услуга-e',
  { path: 'i-i-s-novoe-prilozhenie-услуга-e/:id' });
  this.route('i-i-s-novoe-prilozhenie-услуга-e.new',
  { path: 'i-i-s-novoe-prilozhenie-услуга-e/new' });
  this.route('i-i-s-novoe-prilozhenie-шлагбаум-l');
  this.route('i-i-s-novoe-prilozhenie-шлагбаум-e',
  { path: 'i-i-s-novoe-prilozhenie-шлагбаум-e/:id' });
  this.route('i-i-s-novoe-prilozhenie-шлагбаум-e.new',
  { path: 'i-i-s-novoe-prilozhenie-шлагбаум-e/new' });
});

export default Router;
