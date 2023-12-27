import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      терминал: { serialize: 'odata-id', deserialize: 'records' },
      услуга: { serialize: 'odata-id', deserialize: 'records' },
      шлагбаум: { serialize: 'odata-id', deserialize: 'records' },
      парковка: { serialize: 'odata-id', deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
