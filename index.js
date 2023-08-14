const fetch = require("node-fetch");


class SoundBoardLauncher {
    constructor(client) {
        this.client = client;
        this.soundboards = new Map();
    }

    generatePOSTUrl(channelId) {
        return `https://discord.com/api/v9/channels/${channelId}/voice-channel-effects`
    }

    async fetchSoundBoards(guildId, dft) {
        if(dft) {
            let response = await this.request("GET", "https://discord.com/api/v9/soundboard-default-sounds")
            if(response.code) throw new Error(response.message);
            response.forEach(sound => {7
                let cl = new Sound(sound, true)
                this.soundboards.set(cl.id, cl)
                console.log(this.soundboards)
            })
        } else {

        }
    }

    async playSoundBoard(channelId, guildId, soundboardId) {
        let soundboard = this.soundboards.get(soundboardId);
        if(!soundboard) return;
        let response = await this.request("POST", this.generatePOSTUrl(channelId), { emoji_id: null, override_path: null, sound_id: soundboardId, source_guild_id: guildId })
        if(response.code) throw new Error(response.message);
    }


    request(method, url, body) {
        return fetch(url, {
            method: method,
            headers: { "Content-Type": "application/json", "Authorization": this.client.token },
            body: body ? JSON.stringify(body) : undefined
        }).then(r => r.json())
    }
}

class Sound {
    constructor(data, dflt) {
        this.id = data.sound_id;
        this.name = data.name;
        this.user_id = data.user_id;
        this.volume = data.volume;
        this.default = dflt;
    }
}

module.exports = SoundBoardLauncher;