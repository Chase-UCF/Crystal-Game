    var score = 0;
    var computerChoice = Math.floor(Math.random() * 100 + 1) + 50;
    var randomNumbers = [];
    var random1 = Math.floor(Math.random() * 15) + 1;
    var random2 = Math.floor(Math.random() * 15) + 1;
    var random3 = Math.floor(Math.random() * 15) + 1;
    var random4 = Math.floor(Math.random() * 15) + 1;
    var wins = 0;
    var loses = 0;
    var reset = function(){
         score = 0;
         computerChoice = Math.floor(Math.random() * 100 + 1) + 55;
         randomNumbers = [];
         random1 = Math.floor(Math.random() * 14) + 1;
         random2 = Math.floor(Math.random() * 14) + 1;
         random3 = Math.floor(Math.random() * 14) + 1;
         random4 = Math.floor(Math.random() * 14) + 1;
        $("small").html(computerChoice);
        $("#score").html(score);
    };

    console.log("random1", random1);
    console.log("random2", random2);
    console.log("random3", random3);
    console.log("random4", random4);

    $("small").html(computerChoice);


    $("img").click(function() {
        var imgId = $(this).attr("id");
        console.log(imgId);

        if (imgId === 'bud1') {
            score = score + random1;
        }
        if (imgId === 'bud2') {
            score = score + random2;
        }
        if (imgId === 'bud3') {
            score = score + random3;
        }
        if (imgId === 'bud4') {
            score = score + random4;
        }

        $("#score").html(score);

        if (computerChoice === score) {
            wins++;
            $('#wins').html(wins);
            alert('win');
            reset();
        } else if (score > computerChoice) {
            loses++;
            $('#loses').html(loses);
            alert('lose');
            reset();
        }

    });
