import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерВод: DS.attr('number'),
  телефон: DS.attr('number'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  номерВод: {
    descriptionKey: 'models.i-i-s-novoe-prilozhenie-водитель.validations.номерВод.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-novoe-prilozhenie-водитель.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-novoe-prilozhenie-водитель.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('Водитель', 'i-i-s-novoe-prilozhenie-водитель', {
    номерВод: attr('ID водителя', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    фИО: attr('ФИО', { index: 2 })
  });

  modelClass.defineProjection('Водитель', 'i-i-s-novoe-prilozhenie-водитель', {
    номерВод: attr('ID водителя', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    фИО: attr('ФИО', { index: 2 })
  });
};
