function degToCompass(num: number) {
    while (num < 0) num += 360
    while (num >= 360) num -= 360
    let val = Math.round(num / 45)
    let arr = ['C', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ']
    return arr[Math.abs(val)]
}
export default degToCompass
