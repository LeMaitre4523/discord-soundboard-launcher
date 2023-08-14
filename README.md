
# Discord SoundBoard Launcher

A player capable of playing soundboards uploaded to a discord server.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
## Roadmap

- [x] Fetch default soundboards
- [ ] Fetch guild soundboards
- [x] Play default soundboards
- [ ] Play guild soundboards


## Usage/Examples
### Caution: The client must be connected to the voice channel and not muted

```javascript
const SoundBoardLauncher = require("./bot-soundboard-launcher")

const soundboard = new SoundBoardLauncher(client)

soundboard.fetchSoundBoards(null, true)

setTimeout(function() {
    soundboard.playSoundBoard("992791685266419844", "747412099361407077", "3")
}, 10000)
```


## API Reference

#### Get all soundboards for guild

```javascript
  fetchSoundBoards(guildId, default)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `guildId` | `string` | **Required**. ID of the guild |
| `default` | `boolean` | Fetch discord default soundboard |


#### Play soundboard to a voice channel

```javascript
  playSoundBoard(channelId, guildId, soundboardId)
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `channelId` | `string` | **Required**. ID of the voice channel |
| `guildId` | `string` | **Required**. ID of the guild |
| `soundboardId` | `string` | **Required**. ID of the soundboard |


## Authors

- [@LeMaitre4523](https://www.github.com/lemaitre4523)

