
const api = async function () {
    const data = await fetch("http://10.227.6.68:3000/api")
        .then((e) => e.json())
        .catch((e) => console.log(e));
    return data;
}

const main = async () =>
{
    const datos = await api();

    console.log(datos);
}

main();