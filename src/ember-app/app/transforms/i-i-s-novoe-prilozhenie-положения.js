import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПоложенияEnum from '../enums/i-i-s-novoe-prilozhenie-положения';

export default FlexberryEnum.extend({
  enum: ПоложенияEnum,
  sourceType: 'IIS.Novoe_prilozhenie.Положения'
});
