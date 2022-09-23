function pressureConverter(num: number) {
    const nowPressureCoefficient = 1.33
    return Math.round(num / nowPressureCoefficient)
}
export default pressureConverter
