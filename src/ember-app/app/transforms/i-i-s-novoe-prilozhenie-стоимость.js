import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтоимостьEnum from '../enums/i-i-s-novoe-prilozhenie-стоимость';

export default FlexberryEnum.extend({
  enum: СтоимостьEnum,
  sourceType: 'IIS.Novoe_prilozhenie.Стоимость'
});
