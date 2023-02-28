const { log: Log } = console;
const fs = require('fs')
const config = require('../config.json');
require('colors');
const path = require('path');

module.exports = class Validator {
  static configValifator() {
    Log('[⏳] Validando configuraciones...' .bgBlue .black);

    // Bot Token
    if(!process.env.token) {
      Log("[❌]ERROR:(env) 'token' no puede estar vacío." .red);
      process.exit(1);
    }

    // MongoURL
    if(!process.env.mongoURL) {
      Log("[❌]ERROR:(env) 'MongoURL' no puede estar vacío." .red);
      process.exit(1);
    } 

    // Langs
    const langs = fs.readdirSync('./locales');
    const langNames = langs.map(lang => path.parse(lang).name)
    if(!langNames.includes(config.defaultLanguage)) {
      Log(`[❌]ERROR:(config.json) '${config.defaultLanguage}' Es un idioma invalido, idiomas registrados: ${langNames.join(", ")}` .red)
      process.exit(1);
    }

    // Colors
    if(!config.defaultSuccessColor) {
      Log("[❌]ERROR:(config.json 'defaultSuccessColor' no puede estar vacío." .red);
      process.exit(1);
    }
    if(!config.defaultErrorColor) {
      Log("[❌]ERROR:(config.json) 'defaultErrorColor' no puede estar vacío." .red);
      process.exit(1);
    }
    const HexaColor = /^#?([0-9A-F]{6})$/i
    if(!HexaColor.test(config.defaultSuccessColor)){
      Log(`[⚠]WARN:(config.json) '${config.defaultSuccessColor}' No es un HexaColor valido` .yellow)
    }
    if(!HexaColor.test(config.defaultErrorColor)){
      Log(`[⚠]WARN:(config.json) '${config.defaultErrorColor}' No es un HexaColor valido` .yellow)
    }

    // CLIENT Id
    if(!config.clientId) {
      Log("[❌]ERROR:(config.json) 'clientId' esta vacío!" .red);
      process.exit(1)
    }

    // Guild Id
    if(!config.guildId) {
      Log("(config.json) 'guildId' esta vacío!, los slashCommands se publicaran para todos los servidores." .yellow)
      Log('[✅] Configuraciones Validadas correctamente' .bgGreen .black)
    }
    else Log('[✅] Configuraciones Validadas correctamente' .bgGreen .black)
  }

}