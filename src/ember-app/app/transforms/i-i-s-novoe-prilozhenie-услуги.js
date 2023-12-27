import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import УслугиEnum from '../enums/i-i-s-novoe-prilozhenie-услуги';

export default FlexberryEnum.extend({
  enum: УслугиEnum,
  sourceType: 'IIS.Novoe_prilozhenie.Услуги'
});
