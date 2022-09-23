const weatherWeight = new Map([
    ['01d', 1],
    ['02d', 2],
    ['03d', 3],
    ['04d', 4],
    ['09d', 9],
    ['10d', 10],
    ['50d', 50],
    ['13d', 13],
    ['11d', 11],
])

function badWeather(icons: string[]) {
    const weigths = icons.map((icon) => {
        return weatherWeight.get(icon) || 0
    })
    const iconWeight = Math.max(...weigths)

    let iconID = '01d'
    for (let [key, value] of weatherWeight) {
        if (iconWeight === value) {
            iconID = key
            break
        }
    }
    return iconID
}

export default badWeather
