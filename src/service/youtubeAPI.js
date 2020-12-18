class Youtube{
    constructor(key) {
        this.key = key;
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
    }

    search = async (name) => {
        const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${name}&type=video&key=${this.key}`, this.requestOptions);
        const data = await res.json();
        return data.items;
    }

    default = async () => {
        const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&part=snippet&chart=mostPopular&maxResults=30&key=${this.key}`, this.requestOptions);
        const data = await res.json();
        return data.items; 
    }
    
}

export default Youtube;