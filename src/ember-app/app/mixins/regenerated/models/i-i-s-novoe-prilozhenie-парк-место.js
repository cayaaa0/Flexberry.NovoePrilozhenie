import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  статус: DS.attr('i-i-s-novoe-prilozhenie-статусы')
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-novoe-prilozhenie-парк-место.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-novoe-prilozhenie-парк-место.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПаркМесто', 'i-i-s-novoe-prilozhenie-парк-место', {
    номер: attr('Номер места', { index: 0 }),
    статус: attr('Статус', { index: 1 })
  });

  modelClass.defineProjection('ПаркМесто', 'i-i-s-novoe-prilozhenie-парк-место', {
    номер: attr('Номер места', { index: 0 }),
    статус: attr('Статус', { index: 1 })
  });
};
