import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерТер: DS.attr('number')
});

export let ValidationRules = {
  номерТер: {
    descriptionKey: 'models.i-i-s-novoe-prilozhenie-терминал.validations.номерТер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('Терминал', 'i-i-s-novoe-prilozhenie-терминал', {
    номерТер: attr('ID терминала', { index: 0 })
  });

  modelClass.defineProjection('Терминал', 'i-i-s-novoe-prilozhenie-терминал', {
    номерТер: attr('ID терминала', { index: 0 })
  });
};
