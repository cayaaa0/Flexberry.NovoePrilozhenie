import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяНачала: DS.attr('string'),
  времяОкон: DS.attr('string'),
  времяОплаты: DS.attr('string'),
  датаНачала: DS.attr('date', { defaultValue() { return new Date(); } }),
  датаОкон: DS.attr('date'),
  статОпл: DS.attr('i-i-s-novoe-prilozhenie-оплата'),
  автомобиль: DS.belongsTo('i-i-s-novoe-prilozhenie-автомобиль', { inverse: null, async: false }),
  паркМесто: DS.belongsTo('i-i-s-novoe-prilozhenie-парк-место', { inverse: null, async: false }),
  услуга: DS.belongsTo('i-i-s-novoe-prilozhenie-услуга', { inverse: 'запОбУсл', async: false })
});

export let ValidationRules = {
  времяНачала: {
    descriptionKey: 'models.i-i-s-novoe-prilozhenie-зап-об-усл.validations.времяНачала.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  времяОкон: {
    descriptionKey: 'models.i-i-s-novoe-prilozhenie-зап-об-усл.validations.времяОкон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  времяОплаты: {
    descriptionKey: 'models.i-i-s-novoe-prilozhenie-зап-об-усл.validations.времяОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаНачала: {
    descriptionKey: 'models.i-i-s-novoe-prilozhenie-зап-об-усл.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкон: {
    descriptionKey: 'models.i-i-s-novoe-prilozhenie-зап-об-усл.validations.датаОкон.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  статОпл: {
    descriptionKey: 'models.i-i-s-novoe-prilozhenie-зап-об-усл.validations.статОпл.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  автомобиль: {
    descriptionKey: 'models.i-i-s-novoe-prilozhenie-зап-об-усл.validations.автомобиль.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  паркМесто: {
    descriptionKey: 'models.i-i-s-novoe-prilozhenie-зап-об-усл.validations.паркМесто.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-novoe-prilozhenie-зап-об-усл.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗапОбУсл', 'i-i-s-novoe-prilozhenie-зап-об-усл', {
    времяНачала: attr('Время начала', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    времяОкон: attr('Время окончания', { index: 2 }),
    датаОкон: attr('Дата окончания', { index: 3 }),
    статОпл: attr('Статус оплаты', { index: 4 }),
    времяОплаты: attr('Время оплаты', { index: 5 }),
    паркМесто: belongsTo('i-i-s-novoe-prilozhenie-парк-место', 'Парковочное место', {
      номер: attr('Номер', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'номер' }),
    автомобиль: belongsTo('i-i-s-novoe-prilozhenie-автомобиль', 'Автомобиль', {
      госНомер: attr('Гос номер', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'госНомер' })
  });
};
