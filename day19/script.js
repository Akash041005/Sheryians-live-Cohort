
var tl = gsap.timeline()
tl.from(".left h1",
    {
    x:-100,
    duration:0.2,
    delay:0.2,

})

tl.from(".left a",
    {
    x:101,
    duration:0.2,
    
    
})
tl.from(".werk img",
    {
    y:10,
    duration:0.2,
    delay:0.5,
    opacity:0
})

tl.from(".view2 img",
    {
    y:-30,
    duration:0.2,
    delay:0.5,
    opacity:0
})

tl.from(".view2 h1",
    {
    x:-30,
    duration:0.2,
    delay:0.5,
    opacity:0
})
tl.from(".view2 p",
    {
    y:-30,
    duration:0.2,
    delay:0.5,
    opacity:0
})









console.log("hello")