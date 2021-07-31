const insert = document.querySelector(".lyric-insert")
const time = document.querySelector(".bridgr-time")
const date = document.querySelector(".bridgr-date")
const random42 = Math.floor(Math.random() * 42)

const lyrics = [
    "When your skinhead neighbour goes missing I'll plant a garden in the yard.",
    "I grew up here, 'til it all went up in flames.",
    "I don't know when you got taller.",
    "I hopped the fence when I was seventeen. Then I knew what I wanted.",
    "And when I grow up, I'm gonna look up from my phone and see my life.",
    "I don't know how, but I'm taller.",
    "The doctor put her hands over my liver. She told me my resentment's getting smaller.",
    "No, I'm not afraid of hard work.",
    "I get everything I want.",
    "I have everything I wanted.",
    "It cost a dollar a minute to tell me you're getting sober.",
    "I'm gonna kill you if you don't beat me to it.",
    "I wanted to see the world.",
    "I don't forgive you.",
    "When the speed kicks in I go to the store for nothing.",
    "The drugstores are open all night.",
    "What if I told you I feel like I know you but we never met?",
    "I swear I'm not angry, that's just my face.",
    "I hate living by the hospital.",
    "Baby, it's Halloween and we can be anything.",
    "Always surprised by what I'd do for love.",
    "I've been running around in circles pretending to be myself.",
    "I want to believe.",
    "You were screaming at the Evangelicals. They were screaming right back from what I remember.",
    "If I could give you the moon I would give you the moon.",
    "You are sick and you're married and you might be dying.",
    "I'm too tired to have a pissing contest.",
    "Turn me on and turn me down.",
    "Baby, you're a vampire.",
    "I've been playing dead my whole life.",
    "I feel something when I see you.",
    "If you're a work of art. I'm standing too close. I can see the brush strokes.",
    "I hate your mom. I hate it when she opens her mouth.",
    "It's amazing to me how much you can say when you don't know what you're talking about.",
    "No longer a danger to herself or others.",
    "I would do anything for you.",
    "Man, I hate this part of Texas.",
    "When I get back I'll lay around and I'll get up and lay back down.",
    "There's no place like my room.",
    "When the sirens sound, you'll hide under the floor.",
    "Went looking for a creation myth. Ended up with a pair of cracked lips.",
    "The billboard said, \"The end is near\"."
]

const newLyric = () => {
    insert.textContent = lyrics[random42]
}

const newTime = () => {
    time.textContent = new Date().toLocaleTimeString();
    setTimeout(newTime, 1000)
}

const newDate = () => {
    const d = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    date.textContent = `${d.getDate()}-${months[d.getMonth()]}-${d.getFullYear()}`
}

window.onload = () => {
    newLyric()
    newTime()
    newDate()
}