import terminalImage from 'terminal-image';
import got from 'got';

const api = async (url, cb) => {
    await fetch(url)
      .then((response) => response.json())
      .then((json) => cb(json))
      .catch((e) => console.log(e))
}

let datos = [];
const func = async () => {
    fetch("https://rickandmortyapi.com/api")
        .then((response) => response.json())
        .then((v) => fetch(v["episodes"]))
        .then((response) => response.json())
        .then((v) => {
            v["results"].forEach((v) => {
                datos.push({ name: v.name, episode: v.episode, air_date: v.air_date, characters: [] });

                // console.log(`Nombre: ${v["name"]}`);
                // console.log(`  Episodio: ${v["episode"]}`);
                // console.log(`  Fecha de emisión: ${v["air_date"]}`);

                // console.log(`  Personajes: `)
                if (v["characters"])
                {
                    v["characters"].forEach((v) => {
                        fetch(v)
                            .then((response) => response.json())
                            .then((v) => datos[datos.length - 1]["characters"].push({ name: v.name, image: v.image }) )
                            .catch((e) => console.log(e))
                    })
                }
                
            });
        })
        .catch((e) => console.log(e));
}

await func();

setTimeout(() => {
    datos.forEach((v) => {
        console.log(`Nombre: ${v["name"]}`);
        console.log(`  Episodio: ${v["episode"]}`);
        console.log(`  Fecha de emisión: ${v["air_date"]}`);

        console.log(`  Personajes: `);
        console.log(v["characters"]);
        // v["characters"].forEach((v) => {
            //const buffer = got(v.image).buffer();
            // console.log(terminalImage.buffer(buffer));
        // });
    });
}, 5000);

/*
api("https://rickandmortyapi.com/api", (v) => {
    api(v["episodes"], async (v) => {
        v["results"].forEach((v) => {
            console.log(`Nombre: ${v["name"]}`);
            console.log(`  Episodio: ${v["episode"]}`);
            console.log(`  Fecha de emisión: ${v["air_date"]}`);

            console.log(`  Personajes:`)
            v["characters"].forEach((v) => {
                api(v, async (v) => {
                    console.log(`      ${v["name"]}`);
                });
            });
        });
    });
});*/