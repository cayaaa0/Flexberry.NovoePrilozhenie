import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-novoe-prilozhenie-терминал', 'Unit | Serializer | i-i-s-novoe-prilozhenie-терминал', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-novoe-prilozhenie-терминал',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-novoe-prilozhenie-оплата',
    'transform:i-i-s-novoe-prilozhenie-положения',
    'transform:i-i-s-novoe-prilozhenie-статусы',
    'transform:i-i-s-novoe-prilozhenie-стоимость',
    'transform:i-i-s-novoe-prilozhenie-услуги',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
