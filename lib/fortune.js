const fortunes = [
    'Conquer your fears or they will conquer you.',
    'River need springs.',
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple."
]

exports.getFortune =()=> {
    const idx = Math.floor(Math.random() * fortunes.length)
    return fortunes[idx]
}