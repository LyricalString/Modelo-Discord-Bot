## Introducción
Este proyecto es el resultado de mi curso en <a href="https://www.youtube.com/watch?v=BBkiI74WvyQ&list=PLT2usuNCFnxWiv9DafkEu0RZcGYgADal7&index=1&t=2s">Youtube</a>. La idea es que se use como modelo para nuevos bots. Los mejores forks, serán publicados en [mi servidor de Discord](https://discord.gg/smZ4uXZdN9)

<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="🤖 Modelo Bot Discord" src="https://i.goopics.net/z568r8.jpg">  

# Modelo Bot Discord

[![⭐ GitHub](https://img.shields.io/github/stars/LyricalString/Modelo-Discord-Bot.svg?style=social&label=Stars&style=flat)](https://github.com/LyricalString/Modelo-Discord-Bot/stargazers)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=LyricalString_Modelo-Discord-Bot&metric=ncloc)](https://sonarcloud.io/dashboard?id=LyricalString_Modelo-Discord-Bot)
[![](https://img.shields.io/badge/discord.js-v14.7.1--dev-blue.svg?logo=npm)](https://github.com/discordjs)
[![DevServer](https://discordapp.com/api/guilds/834440041010561074/widget.png?style=shield)](https://discord.gg/SbsFVV5dNG)
[![](https://img.shields.io/github/languages/top/LyricalString/Modelo-Discord-Bot)]()

> Más de 1000 personas siguieron el curso de YouTube.


## 🛠️ Características:
Pensando en el futuro, este bot está completamente preparado para el futuro, donde no se podrá leer el contenido de los mensajes de Discord. Por eso, usa interacciones (slash commands, menús y botones) para poder ser usado.


## 🚀 Instalación

Este bot usa [node.js](https://nodejs.org) como motor. Necesitarás instalar al menos Node.JS 16.

## ⚙️ Configuración 

Será tan sencillo como renombrar el archivo `.env.example`  a `.env` y llenar lo campos, quedando tal que:

```.env
# Cambia el nombre de este archivo a ".env"


# Token de tu bot, lo puedes encontrar aqui: https://discord.com/developers/applications
token=ODgwMDE1NjM1Ndjsklajildjslajdkasjdbnjaskbi231b321

# tu URL de tu cluster en MongoDB: https://www.mongodb.com
mongoURL=mongodb+srv://usuario23:ghkldfhlkgdf@cluster0.qdznh.mongodb.net/BotCurso
```

⚠️ **Nota: En el .env no se usan comillas, pon tu token sin comillas.** 
⚠️ **Nota: La información colocada en el .env es una información delicada, no la compartas con nadie!**

Luego, deberás llenar de igual forma el archivo `config.json` donde añadirás la siguiente información:

```json
{
    "clientId": "id del bot",
    "guildId": "id del servidor",
    "defaultLanguage": "es",
    "defaultSuccessColor": "color para los embeds exitosos",
    "defaultErrorColor": "color para los embeds de errores"
}

EJEMPLO: 

{
    "clientId": "828771710676500502",
    "guildId": "834440041010561074",
    "defaultLanguage": "es",
    "defaultSuccessColor": "#00F000",
    "defaultErrorColor": "#FF0000"
}

```

🚨 **Notas:**
* Para obtener la URL de Mongo, podeis revisar [este video](https://www.youtube.com/watch?v=Mo2h7FyAF8k&list=PLT2usuNCFnxWiv9DafkEu0RZcGYgADal7&index=6)
* El guildId se usa en caso de que en slashcommands.js quieras publicarlos en un único servidor. De lo contrario, dejalo vacio de esta manera se publicarán para todo el bot.
* Si quieres agregas más idiomas recuerda añadirlo en el archivo `bot.js` línea `15` y luego crear un archivo `.json` en la carpeta de `/locales`



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
