import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-novoe-prilozhenie-паркомат', 'Unit | Model | i-i-s-novoe-prilozhenie-паркомат', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-novoe-prilozhenie-автомобиль',
    'model:i-i-s-novoe-prilozhenie-водитель',
    'model:i-i-s-novoe-prilozhenie-зап-об-усл',
    'model:i-i-s-novoe-prilozhenie-парк-место',
    'model:i-i-s-novoe-prilozhenie-парковка',
    'model:i-i-s-novoe-prilozhenie-паркомат',
    'model:i-i-s-novoe-prilozhenie-терминал',
    'model:i-i-s-novoe-prilozhenie-услуга',
    'model:i-i-s-novoe-prilozhenie-шлагбаум',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
