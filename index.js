
gsap.from (".card", {
    y:20, 
    ease:"bounce",
    duration:3,
    stagger:1}  )
    
gsap.to(".header-subtitle", {
    "text":" Je suis developpeur web front-end.",
    duration:2,
    repeat:3,
    repeatDelay:.7,
    ease:"power1.in",
    yoyou:true,
    delay:2
})

