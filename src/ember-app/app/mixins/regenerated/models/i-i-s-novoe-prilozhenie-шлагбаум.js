import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерШлаг: DS.attr('number'),
  положение: DS.attr('i-i-s-novoe-prilozhenie-положения')
});

export let ValidationRules = {
  номерШлаг: {
    descriptionKey: 'models.i-i-s-novoe-prilozhenie-шлагбаум.validations.номерШлаг.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  положение: {
    descriptionKey: 'models.i-i-s-novoe-prilozhenie-шлагбаум.validations.положение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('Шлагбаум', 'i-i-s-novoe-prilozhenie-шлагбаум', {
    номерШлаг: attr('ID шлагбаума', { index: 0 }),
    положение: attr('Положение шлагбаума', { index: 1 })
  });

  modelClass.defineProjection('Шлагбаум', 'i-i-s-novoe-prilozhenie-шлагбаум', {
    номерШлаг: attr('ID шлагбаума', { index: 0 }),
    положение: attr('Положение шлагбаума', { index: 1 })
  });
};
