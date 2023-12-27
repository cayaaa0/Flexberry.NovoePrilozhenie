import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерПарк: DS.attr('number'),
  терминал: DS.belongsTo('i-i-s-novoe-prilozhenie-терминал', { inverse: null, async: false }),
  услуга: DS.belongsTo('i-i-s-novoe-prilozhenie-услуга', { inverse: null, async: false }),
  шлагбаум: DS.belongsTo('i-i-s-novoe-prilozhenie-шлагбаум', { inverse: null, async: false }),
  парковка: DS.belongsTo('i-i-s-novoe-prilozhenie-парковка', { inverse: 'паркомат', async: false })
});

export let ValidationRules = {
  номерПарк: {
    descriptionKey: 'models.i-i-s-novoe-prilozhenie-паркомат.validations.номерПарк.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  терминал: {
    descriptionKey: 'models.i-i-s-novoe-prilozhenie-паркомат.validations.терминал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-novoe-prilozhenie-паркомат.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  шлагбаум: {
    descriptionKey: 'models.i-i-s-novoe-prilozhenie-паркомат.validations.шлагбаум.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  парковка: {
    descriptionKey: 'models.i-i-s-novoe-prilozhenie-паркомат.validations.парковка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('Паркомат', 'i-i-s-novoe-prilozhenie-паркомат', {
    номерПарк: attr('ID паркомата', { index: 0 }),
    терминал: belongsTo('i-i-s-novoe-prilozhenie-терминал', 'Терминал', {
      номерТер: attr('Номер терминала', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номерТер' }),
    услуга: belongsTo('i-i-s-novoe-prilozhenie-услуга', 'Услуга', {
      длительность: attr('Длительность', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'длительность' }),
    шлагбаум: belongsTo('i-i-s-novoe-prilozhenie-шлагбаум', 'Шлагбаум', {
      номерШлаг: attr('Номер шлагбаума', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'номерШлаг' })
  });
};
