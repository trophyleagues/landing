import LocalizedStrings from 'react-localization';
import {useSelector} from 'react-redux';

export const HomeLang = new LocalizedStrings({
          en: {
            welcome: "The game combines the functions of technical direction of the team, training, economic management of the club, stadiums, aesthetics, leagues and a passionate community about soccer. Trophy Manager is a massive free browser game in which players manage their own soccer club"
          },
          es: {
            welcome: "Hola"
          },
          cat: {
            welcome: "Alo"
          },
          pt: {
            welcome: "Alo"
          }
        })