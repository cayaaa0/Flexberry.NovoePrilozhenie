import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISNovoe_prilozhenieАвтомобильLForm from './forms/i-i-s-novoe-prilozhenie-автомобиль-l';
import IISNovoe_prilozhenieВодительLForm from './forms/i-i-s-novoe-prilozhenie-водитель-l';
import IISNovoe_prilozhenieПаркМестоLForm from './forms/i-i-s-novoe-prilozhenie-парк-место-l';
import IISNovoe_prilozhenieПарковкаLForm from './forms/i-i-s-novoe-prilozhenie-парковка-l';
import IISNovoe_prilozhenieТерминалLForm from './forms/i-i-s-novoe-prilozhenie-терминал-l';
import IISNovoe_prilozhenieУслугаLForm from './forms/i-i-s-novoe-prilozhenie-услуга-l';
import IISNovoe_prilozhenieШлагбаумLForm from './forms/i-i-s-novoe-prilozhenie-шлагбаум-l';
import IISNovoe_prilozhenieАвтомобильEForm from './forms/i-i-s-novoe-prilozhenie-автомобиль-e';
import IISNovoe_prilozhenieВодительEForm from './forms/i-i-s-novoe-prilozhenie-водитель-e';
import IISNovoe_prilozhenieПаркМестоEForm from './forms/i-i-s-novoe-prilozhenie-парк-место-e';
import IISNovoe_prilozhenieПарковкаEForm from './forms/i-i-s-novoe-prilozhenie-парковка-e';
import IISNovoe_prilozhenieТерминалEForm from './forms/i-i-s-novoe-prilozhenie-терминал-e';
import IISNovoe_prilozhenieУслугаEForm from './forms/i-i-s-novoe-prilozhenie-услуга-e';
import IISNovoe_prilozhenieШлагбаумEForm from './forms/i-i-s-novoe-prilozhenie-шлагбаум-e';
import IISNovoe_prilozhenieАвтомобильModel from './models/i-i-s-novoe-prilozhenie-автомобиль';
import IISNovoe_prilozhenieВодительModel from './models/i-i-s-novoe-prilozhenie-водитель';
import IISNovoe_prilozhenieЗапОбУслModel from './models/i-i-s-novoe-prilozhenie-зап-об-усл';
import IISNovoe_prilozhenieПаркМестоModel from './models/i-i-s-novoe-prilozhenie-парк-место';
import IISNovoe_prilozhenieПарковкаModel from './models/i-i-s-novoe-prilozhenie-парковка';
import IISNovoe_prilozhenieПаркоматModel from './models/i-i-s-novoe-prilozhenie-паркомат';
import IISNovoe_prilozhenieТерминалModel from './models/i-i-s-novoe-prilozhenie-терминал';
import IISNovoe_prilozhenieУслугаModel from './models/i-i-s-novoe-prilozhenie-услуга';
import IISNovoe_prilozhenieШлагбаумModel from './models/i-i-s-novoe-prilozhenie-шлагбаум';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-novoe-prilozhenie-автомобиль': IISNovoe_prilozhenieАвтомобильModel,
    'i-i-s-novoe-prilozhenie-водитель': IISNovoe_prilozhenieВодительModel,
    'i-i-s-novoe-prilozhenie-зап-об-усл': IISNovoe_prilozhenieЗапОбУслModel,
    'i-i-s-novoe-prilozhenie-парк-место': IISNovoe_prilozhenieПаркМестоModel,
    'i-i-s-novoe-prilozhenie-парковка': IISNovoe_prilozhenieПарковкаModel,
    'i-i-s-novoe-prilozhenie-паркомат': IISNovoe_prilozhenieПаркоматModel,
    'i-i-s-novoe-prilozhenie-терминал': IISNovoe_prilozhenieТерминалModel,
    'i-i-s-novoe-prilozhenie-услуга': IISNovoe_prilozhenieУслугаModel,
    'i-i-s-novoe-prilozhenie-шлагбаум': IISNovoe_prilozhenieШлагбаумModel
  },

  'application-name': 'Novoe_prilozhenie',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Novoe_prilozhenie',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Novoe_prilozhenie',
          title: 'Novoe_prilozhenie'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        паркомат: {
          caption: 'Паркомат',
          title: 'Паркомат',
          'i-i-s-novoe-prilozhenie-водитель-l': {
            caption: 'Водитель',
            title: ''
          },
          'i-i-s-novoe-prilozhenie-услуга-l': {
            caption: 'Услуга',
            title: ''
          },
          'i-i-s-novoe-prilozhenie-шлагбаум-l': {
            caption: 'Шлагбаум',
            title: ''
          },
          'i-i-s-novoe-prilozhenie-парковка-l': {
            caption: 'Парковка',
            title: ''
          },
          'i-i-s-novoe-prilozhenie-автомобиль-l': {
            caption: 'Автомобиль',
            title: ''
          },
          'i-i-s-novoe-prilozhenie-терминал-l': {
            caption: 'Терминал',
            title: ''
          },
          'i-i-s-novoe-prilozhenie-парк-место-l': {
            caption: 'Парк место',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-novoe-prilozhenie-автомобиль-l': IISNovoe_prilozhenieАвтомобильLForm,
    'i-i-s-novoe-prilozhenie-водитель-l': IISNovoe_prilozhenieВодительLForm,
    'i-i-s-novoe-prilozhenie-парк-место-l': IISNovoe_prilozhenieПаркМестоLForm,
    'i-i-s-novoe-prilozhenie-парковка-l': IISNovoe_prilozhenieПарковкаLForm,
    'i-i-s-novoe-prilozhenie-терминал-l': IISNovoe_prilozhenieТерминалLForm,
    'i-i-s-novoe-prilozhenie-услуга-l': IISNovoe_prilozhenieУслугаLForm,
    'i-i-s-novoe-prilozhenie-шлагбаум-l': IISNovoe_prilozhenieШлагбаумLForm,
    'i-i-s-novoe-prilozhenie-автомобиль-e': IISNovoe_prilozhenieАвтомобильEForm,
    'i-i-s-novoe-prilozhenie-водитель-e': IISNovoe_prilozhenieВодительEForm,
    'i-i-s-novoe-prilozhenie-парк-место-e': IISNovoe_prilozhenieПаркМестоEForm,
    'i-i-s-novoe-prilozhenie-парковка-e': IISNovoe_prilozhenieПарковкаEForm,
    'i-i-s-novoe-prilozhenie-терминал-e': IISNovoe_prilozhenieТерминалEForm,
    'i-i-s-novoe-prilozhenie-услуга-e': IISNovoe_prilozhenieУслугаEForm,
    'i-i-s-novoe-prilozhenie-шлагбаум-e': IISNovoe_prilozhenieШлагбаумEForm
  },

});

export default translations;
