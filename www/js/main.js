(function(){
    var cards = document.getElementById("cards");
    var check = document.getElementById("check");
    var retry = document.getElementById("retry");
    
    
    check.addEventListener("click", function(){
        var msgs = [
            "究極の真価を遂げた",
            "太鼓よりよみがえった",
            "最も恐れられた"
        ];
        
        var jobs = [
            {name: "勇者", img: "hero.gif"},
            {name: "魔法使い", img: "wizard.gif"},
            {name: "舞踏家", img:"fighter.gif"}
        ];
        var types = [
            {name: "その炎はすべてを焼き尽くす", img: "bg-fire"},
            {name: "その清水ですべてを浄化する", img: "bg-water"},
            {name: "その雷撃は万物の怒りを鎮める", img: "bg-thunder"}
        ];
        
        var resultImg = document.getElementById("result_img")
                
        function getRandomElement(array){
            return array[Math.floor(Math.random() * array.length)];
        }
        
        function setTextContentI(id, text){
            document.getElementById(id).textContent = text;
        }
        
        var msg = getRandomElement(msgs);
        var job = getRandomElement(jobs);
        var type = getRandomElement(types);
        
        
        setTextContentI("result_msg", msg);
        setTextContentI("result_job", job.name);
        resultImg.children[0].src = "img/" + job.img;
        setTextContentI("result_type", type.name);
        
        cards.className = "move"
    });
    
    
    retry.addEventListener("click", function(){
        cards.className = "";
    })
})();