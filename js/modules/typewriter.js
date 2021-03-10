export default function typeWriterInit() {
    new TypeIt('.typewriter', {
        speed: 150,
        startDelay: 1000,
        cursor: false,
        lifeLike: true,
        deleteSpeed: 100,
        loop: true,	
    })
    .type("< Front End Developer >")
    .pause(1000)
    .delete(null)
    .pause(1000)
    .type("< UX / UI Designer >")
    .pause(1000)
    .delete(null)
    .pause(1000)
    .go();
}