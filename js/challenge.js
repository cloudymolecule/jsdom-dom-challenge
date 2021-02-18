document.addEventListener("DOMContentLoaded", () => {
    
    const counter = document.getElementById("counter")
    const minus = document.getElementById("minus")
    const plus = document.getElementById("plus")
    const heart = document.getElementById("heart")
    const pause = document.getElementById("pause")
    const likes = document.querySelector(".likes")
    const form = document.getElementById("comment-form")
    const comments = document.querySelector(".comments")
    let paused = false //checks if pause button was clicked

    let heartRate = 1
    let interval = setInterval(increment, 1000)

    function increment(){
        heartRate = heartRate % 360 + 1
    }

    counter.innerText = heartRate.toString()

    let pausedRate = 1
    setInterval(function(){
        
        if (paused == false){
            pausedRate = heartRate
            counter.innerText = heartRate.toString()
        } else {
            counter.innerText = pausedRate
        }
    })

    minus.addEventListener("click", function(e){
        heartRate = heartRate - 1
    })

    plus.addEventListener("click", function(e){
        heartRate = heartRate + 1
    })
    
    pause.addEventListener("click", function(e){
        if (paused == false){
            paused = true
        } else {
            heartRate = pausedRate
            paused = false
        }
    })

    let timesCounter = 1
    let ids2 = 0
    heart.addEventListener("click", function(e){
        
        function howManyTimes(id){
            ids = parseInt(id, 10)

            if (ids == ids2){
                timesCounter = timesCounter + 1
                return timesCounter
            } else {
                ids2 = ids
                timesCounter = 1
                return timesCounter
            }
        }
        rate = heartRate
        let li = document.createElement("li")
        li.setAttribute("id", pausedRate.toString())
        li.appendChild(document.createTextNode(`${pausedRate.toString()} has been liked ${howManyTimes(li.id)} times`))
        likes.appendChild(li)
        ids2 = li.id
    })
    
    form.addEventListener("submit", function(e){
        e.preventDefault()
        const input = document.getElementById("comment-input")
        let p = document.createElement("p")
        p.innerText = input.value
        comments.appendChild(p)
    })

  });