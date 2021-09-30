## Introducción
Este proyecto es el resultado de mi curso en <a href="https://www.youtube.com/watch?v=BBkiI74WvyQ&list=PLT2usuNCFnxWiv9DafkEu0RZcGYgADal7&index=1&t=2s">Youtube</a>. La idea es que se use como modelo para nuevos bots. Los mejores forks, serán publicados en [mi servidor de Discord](https://discord.gg/smZ4uXZdN9)

<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="🤖 Modelo Bot Discord" src="https://i.goopics.net/z568r8.jpg">  

# Modelo Bot Discord

[![⭐ GitHub](https://img.shields.io/github/stars/LyricalString/Modelo-Discord-Bot.svg?style=social&label=Stars&style=flat)](https://github.com/LyricalString/Modelo-Discord-Bot/stargazers)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=LyricalString_Modelo-Discord-Bot&metric=ncloc)](https://sonarcloud.io/dashboard?id=LyricalString_Modelo-Discord-Bot)
[![](https://img.shields.io/badge/discord.js-v13.0.0--dev-blue.svg?logo=npm)](https://github.com/discordjs)
[![DevServer](https://discordapp.com/api/guilds/834440041010561074/widget.png?style=shield)](https://discord.gg/SbsFVV5dNG)
[![](https://img.shields.io/github/languages/top/LyricalString/Modelo-Discord-Bot)]()

> Más de 1000 personas siguieron el curso de YouTube.


## 🛠️ Características:
Pensando en el futuro, este bot está completamente preparado para el futuro, donde no se podrá leer el contenido de los mensajes de Discord. Por eso, usa interacciones (slash commands y menús) para poder ser usado.


## 🚀 Instalación

Este bot usa [node.js](https://nodejs.org) como motor. Necesitarás instalar al menos Node.JS 16.

## ⚙️ Configuración 

Será tan sencillo como crear un archivo `.env` donde añadas tu token, quedando tal que:

```json
token = "tu token"
```

⚠️ **Nota: En el .env no se usan comillas, pon tu token sin comillas.** 

Luego, deberás de crear un archivo `config.json` donde añadas la siguiente información:

```json
{
    "token": "tu token",
    "clientId": "id del bot",
    "guildId": "id del servidor",
    "defaultSuccessColor": "color para los embeds exitosos",
    "defaultErrorColor": "color para los embeds de errores",
    "mongoURL": "URL de la base de datos Mongo"
}

EJEMPLO: 

{
    "token": "ODgwMDE1NjM1Ndjsklajildjslajdkasjdbnjaskbi231b321",
    "clientId": "880015625485260821",
    "guildId": "623324757975816206",
    "defaultSuccessColor": "WHITE",
    "defaultErrorColor": "RED",
    "mongoURL": "mongodb+srv://usuario23:ghkldfhlkgdf@cluster0.qdznh.mongodb.net/BotCurso"
}
```

🚨 **Notas:**
* Para obtener la URL de Mongo, podeis revisar [este video](https://www.youtube.com/watch?v=Mo2h7FyAF8k&list=PLT2usuNCFnxWiv9DafkEu0RZcGYgADal7&index=6)
* El guildId se usa en caso de que en slashcommands.js quieras publicarlos en un único servidor. De lo contrario, deberás de cmabiar el método de "Routes.applicationGuildCommands" en la línea 21 de slashcommands.js a "Routes.applicationCommands" y a su vez quitarle el parámetro de guildId. De esta manera se publicarán para todo el bot.



## 🕹️ Arranque
Para iniciar el bot, en caso de que ya tengais el .env y config.json creados, debereis de en la consola poner los siguientes comandos:

```sh
npm install
node slashcommands.js
node index.js
```

## 📎 Links

*   [Discord](https://discord.gg/smZ4uXZdN9)
*   [Github](https://github.com/LyricalString)

## 🤝 Contribuciones

Antes de **reportar un error**, por favor asegúrate de que no ha sido reportado/sugerido anteriormente.   
Si tienes cualquier duda, pregúntanosla en el [servidor de Discord](https://discord.gg/SbsFVV5dNG) en vez de crear un reporte.
Si quieres contribuir, siéntete libre de bifurcar el repositorio y solicitar una pull request.

## 📜 Licencia

Node esta licenciado bajo la licencia GPL 3.0. Revisa el archivo `LICENSE` para más información. Si planeas usar cualquier parte de este código base en tu propio bot, estaría agradecido si se me incluyese en los créditos.
