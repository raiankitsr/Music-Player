console.log("Instant Play");

let songIndex = 0 ;
let textindex = 0 ;
//songIndex = (textindex + 1) % text.length; 
let audioElement = new Audio('songs/1.MP3');
let masterPlay = document.getElementById('pla');
let photo = document.getElementById('image');
let progressbar = document.getElementById('progress');
let playlist = Array.from(document.getElementsByClassName("playlist"));
let sname = document.getElementById('name');
let artist = document.getElementById('artist');


let songs = [
    { songName:"Kanna Yaari " , Filepath: "songs/1.MP3"},
    { songName:"Wakh Ho Jana" , Filepath: "songs/2.MP3" },
    { songName:"She Move It Like" , Filepath: "songs/3.MP3"},
    { songName:"Dil Nu" , Filepath: "songs/4.MP3" },
    { songName:"Isq Risk" , Filepath: "songs/5.MP3"},
    { songName:"Mercy" , Filepath: "songs/6.MP3"},
    { songName:"Mi Amor" , Filepath: "songs/7.MP3"},
    { songName:"Baller" , Filepath: "songs/8.MP3" }
]

let text = [
    { artist : "Kaifi Khalil , Eva B , Wahab Bugti", img : "Image/music1.jpeg" },
    { artist : "Gurnam Bhullar" , img : "image/music2.jpg"},
    { artist : "Badshah", img : "image/music3.jpeg" },
    { artist : "AP Dhillon , Shinda Kahlon", img : "image/music4.jpg" },
    { artist : "Sohail Sen, Irshad kamil", img : "image/music5.jpg" },
    { artist : "Badshah", img : "image/music6.jpeg" },
    { artist : "Sharn", img : "https://img.wynk.in/unsafe/200x200/filters:no_upscale():strip_exif():format(jpg)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/20230203133535558/3617056081142/1675428914364/resources/3617056081142.jpg" },
    { artist : "Shubh", img : "https://a10.gaanacdn.com/gn_img/artists/mGjKr1b6zX/GjKroMAQ36/size_m_1663380513.webp" }

];

const loadsong = ()=>{
  //  Array.from(document.getElementById('picture')).forEach((element)=>{
    //        element.classList.add(img);
       // })
    artist.innerText = text[textindex].artist;
    photo.src = text[textindex].img

};

loadsong(text);
















//audioElement.play();

 playlist.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName('img')[0].scr = text[i].img;
    element.getElementsByClassName("name")[0].innerText = songs[i].songName;
});



masterPlay.addEventListener('click' , ()=>{
    
    if(audioElement.paused || audioElement.currentTime<= 0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        photo.classList.add("rotate");
    }

    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        photo.classList.remove("rotate");
    }
})

audioElement.addEventListener('timeupdate' , ()=>{

    console.log('timeupdate');

    process = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value = process;
})

progressbar.addEventListener('change' , ()=>{

    audioElement.currentTime = progressbar.value*audioElement.duration/100;

})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitem')).forEach((element)=>{
            element.classList.remove('fa-pause');
            element.classList.add('fa-play');
    
        })

}


Array.from(document.getElementsByClassName('songitem')).forEach((element)=>{

    element.addEventListener('click',(e)=>{
        makeAllPlays();
        if(audioElement.paused || audioElement.currentTime<= 0)
        {
        songIndex = parseInt(e.target.id);
        textindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex}.MP3`;
        sname.innerText = songs[songIndex-1].songName;
        artist.innerText = text[textindex-1].artist;
        photo.src = text[textindex-1].img
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        photo.classList.add("rotate");
        }
        else
        {
            audioElement.pause();
            masterPlay.classList.remove('fa-pause');
            masterPlay.classList.add('fa-play');
            photo.classList.remove("rotate");
        }



    })

})

document.getElementById('forward').addEventListener('click' ,()=>{
    loadsong(text[textindex]);
    textindex++;
    if(songIndex>=9)
    {
        songIndex = 0;
    }
    else
    {
        songIndex += 1;
    }

    audioElement.src = `songs/${songIndex}.MP3`;
    sname.innerText = songs[songIndex-1].songName;
    artist.innerText = text[textindex-1].artist;
    photo.src = text[textindex-1].img
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    photo.classList.add("rotate");
})

document.getElementById('backward').addEventListener('click' ,()=>{
    loadsong(text[textindex]);
    textindex--;

    if(songIndex<=0)
    {
        songIndex = 0;
    }
    else
    {
        songIndex -= 1;
    }

    audioElement.src = `songs/${songIndex}.MP3`;
    sname.innerText = songs[songIndex-1].songName;
    artist.innerText = text[textindex-1].artist;
    photo.src = text[textindex-1].img
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    photo.classList.add("rotate");
})