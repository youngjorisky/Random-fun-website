const memeimages = ['https://wallpapers.com/images/featured/funny-memes-picture-rzemn8642wst0ckw.jpg', 'https://miro.medium.com/v2/resize:fit:1400/1*GI-td9gs8D5OKZd19mAOqA.png', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Y59P6eyfJ6DApfVMT5TIkYanHtBZc66bAQ&s', 'https://global.discourse-cdn.com/flex027/uploads/typesy/optimized/2X/c/c7c977a6a83853f8133658cf716a2afca01dd084_2_598x500.jpeg', 'https://storage.googleapis.com/pod_public/1300/200776.jpg', 'https://media.npr.org/assets/img/2015/03/03/overly_custom-dd57085dc9a9e7e18a9ddf242ee8b4aa0c84c764.jpg?s=800&c=85&f=jpeg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmyTB_qmgq_q8m83WdZO7dqQqQyUU_Yeduw&s', 'https://i0.wp.com/copyhackers.com/wp-content/uploads/2020/06/90167758_10163286879800083_3052680505649528832_n.jpg?resize=444%2C466&ssl=1', 'https://i0.wp.com/copyhackers.com/wp-content/uploads/2020/06/91080453_10163333459945083_2233604339354566656_n.jpg?resize=521%2C527&ssl=1', 'https://static01.nyt.com/images/2022/01/31/crosswords/31meme-wordplay/31meme-wordplay-mediumSquareAt3X.png'];
const memedisplay = document.querySelector('.memedisplay');

function showmeme(){
    resetalldisplays();
    const randomindex1 = Math.floor(Math.random() * memeimages.length);
    const memeimage = memeimages[randomindex1];
    const imgtag = document.createElement('img');
    imgtag.src = memeimage;

    const isimg = memedisplay.querySelector('img');

    if(isimg){
        memedisplay.innerHTML = '';
    }

    memedisplay.appendChild(imgtag);

    resizeImage();
}

function resizeImage() {
    const image = document.querySelector('.memedisplay img'); // Select the image
    if (image) {
        image.style.width = '300px';
        image.style.height = 'auto';
    }
}

const joketexts = ["I used to be indecisive, but now I'm not sure.", "Parallel lines have so much in common. It's a shame they'll never meet.", "What do you call a fish wearing a bowtie? Sofishticated.", "Why did the scarecrow win an award? Because he was outstanding in his field.", "I wondered why the baseball was getting bigger. Then it hit me.", "What do you call a bear with no teeth? A gummy bear.", "Why can't a bicycle stand on its own? It's two tired.", "Did you hear about the comedian who got arrested in the park? He was charged with battery.", "Why shouldn't you trust atoms? They make up everything!"];
const jokedisplay = document.querySelector('.jokedisplay');

function telljoke(){
    resetalldisplays();
    const randomindex2 = Math.floor(Math.random() * joketexts.length);
    const joketext = joketexts[randomindex2];
    const p1tag = document.createElement('p');
    p1tag.textContent = joketext;

    const isp1tag = jokedisplay.querySelector('p');

    if(isp1tag){
        jokedisplay.innerHTML = '';
    }

    jokedisplay.style.color = "white";
    jokedisplay.appendChild(p1tag);
}

const wisdomquotes = ["When the going gets rough - turn to wonder.", "If you have knowledge, let others light their candles in it.", "A bird doesn't sing because it has an answer, it sings because it has a song.", "We are not what we know but what we are willing to learn.", "Good people are good because they've come to wisdom through failure.", "Your word is a lamp for my feet, a light for my path.", "The first problem for all of us, men and women, is not to learn, but to unlearn.", "Be wise like serpents and harmless like doves.", "By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.", "By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest."];
const wisdomdisplay = document.querySelector('.wisdomdisplay');

function randomquote(){
    resetalldisplays();
    const randomindex3 = Math.floor(Math.random() * wisdomquotes.length);
    const wisdomquote = wisdomquotes[randomindex3];
    const p2tag = document.createElement('p');
    p2tag.textContent = wisdomquote;

    const isp2tag = wisdomdisplay.querySelector('p');

    if(isp2tag){
        wisdomdisplay.innerHTML = '';
    }

    wisdomdisplay.style.color = "white";
    wisdomdisplay.appendChild(p2tag);
}

const riddles = ["I'm not a blanket, yet I cover the ground; a crystal from heaven that doesn't make a sound. What am I?", "I'm sweet and cold with a stick to hold; a treat on a hot day, worth more than gold. What am I?", "What has a head but no brain?"];
const answers = ["Snowflake.", "Popsicle.", "A lettuce."];

const riddledisplay = document.querySelector('.riddledisplay');
const answerdisplay = document.querySelector('.answerdisplay');

let currentRiddleAnswer = ''; // Store the current riddle answer globally  

function riddle() {  
    resetalldisplays(); // Resets all displays before generating a new riddle  
    const randomindex4 = Math.floor(Math.random() * riddles.length);  
    const riddleText = riddles[randomindex4];  

    riddledisplay.textContent = ''; // Clear previous riddles  

    const p3tag = document.createElement('p');  
    p3tag.textContent = riddleText;  
    riddledisplay.style.color = "white";  
    riddledisplay.appendChild(p3tag);  

    currentRiddleAnswer = answers[randomindex4]; // Store the current answer  
    answerdisplay.innerHTML = ''; // Clear answer display when generating new riddle  
}  

function riddleanswer() {  
    if (!currentRiddleAnswer) {  
        alert("Please generate a riddle first!");  
        return;  
    }  
    answerdisplay.innerHTML = ''; // Clear previous answers  
    const p4tag = document.createElement('p');  
    p4tag.textContent = currentRiddleAnswer; // Show the current answer  
    answerdisplay.style.color = "gold";  
    answerdisplay.appendChild(p4tag);  
}  

function resetalldisplays() {  
    memedisplay.innerHTML = ''; // Clear meme display  
    jokedisplay.innerHTML = ''; // Clear joke display  
    wisdomdisplay.innerHTML = ''; // Clear wisdom display  
    riddledisplay.innerHTML = ''; // Clear riddle display  
    currentRiddleAnswer = ''; // Reset current riddle answer  
    answerdisplay.innerHTML = ''; // Keep answer display cleared  
}