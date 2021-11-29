class MusicService {
    constructor() {
        this._apiBase = "http://localhost:3000";
    }

    async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
            
        return await res.json();
    }

    async getAllTracks () {
        const res = await this.getResource("/tracks");
        return res.map(this._transformTracks);
    }

    async getAllAlbums () {
        const res = await this.getResource("/albums");
        return res.map(this._transformAlbums);
    }

    async getCurrentAllTracksInAlbum (id) {
        const res = await this.getResource(`/albums/${id}/tracks`);
        return res.map(this._transformTracks);
    }

    _transformTracks (char) {
        return {
            id: char.id,
            albumId: char.albumId,
            title: char.title,
            artist: char.artist,
            imgSrc: char.imgSrc,
            src: char.src,
            status: char.status
        };
    }

    _transformAlbums (char) {
        return {
            id: char.id,
            title: char.title,
            imgSrc: char.imgSrc
        };
    }
}

const musicService = new MusicService();
export default musicService;