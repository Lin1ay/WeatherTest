export function dateFormatter(date: number) {
    return new Date(date * 1000).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
    })
}
