import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.паркомат.caption'),
          title: i18n.t('forms.application.sitemap.паркомат.title'),
          children: [{
            link: 'i-i-s-novoe-prilozhenie-водитель-l',
            caption: i18n.t('forms.application.sitemap.паркомат.i-i-s-novoe-prilozhenie-водитель-l.caption'),
            title: i18n.t('forms.application.sitemap.паркомат.i-i-s-novoe-prilozhenie-водитель-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-novoe-prilozhenie-услуга-l',
            caption: i18n.t('forms.application.sitemap.паркомат.i-i-s-novoe-prilozhenie-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.паркомат.i-i-s-novoe-prilozhenie-услуга-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-novoe-prilozhenie-шлагбаум-l',
            caption: i18n.t('forms.application.sitemap.паркомат.i-i-s-novoe-prilozhenie-шлагбаум-l.caption'),
            title: i18n.t('forms.application.sitemap.паркомат.i-i-s-novoe-prilozhenie-шлагбаум-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-novoe-prilozhenie-парковка-l',
            caption: i18n.t('forms.application.sitemap.паркомат.i-i-s-novoe-prilozhenie-парковка-l.caption'),
            title: i18n.t('forms.application.sitemap.паркомат.i-i-s-novoe-prilozhenie-парковка-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-novoe-prilozhenie-автомобиль-l',
            caption: i18n.t('forms.application.sitemap.паркомат.i-i-s-novoe-prilozhenie-автомобиль-l.caption'),
            title: i18n.t('forms.application.sitemap.паркомат.i-i-s-novoe-prilozhenie-автомобиль-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-novoe-prilozhenie-терминал-l',
            caption: i18n.t('forms.application.sitemap.паркомат.i-i-s-novoe-prilozhenie-терминал-l.caption'),
            title: i18n.t('forms.application.sitemap.паркомат.i-i-s-novoe-prilozhenie-терминал-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-novoe-prilozhenie-парк-место-l',
            caption: i18n.t('forms.application.sitemap.паркомат.i-i-s-novoe-prilozhenie-парк-место-l.caption'),
            title: i18n.t('forms.application.sitemap.паркомат.i-i-s-novoe-prilozhenie-парк-место-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }
      ]
    };
  }),
})