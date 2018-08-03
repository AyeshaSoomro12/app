let celebrities = [

    {

        name: "Muhammad Ali Jinnah",
        title: " founder of Pakistan",
        imgURL:"Quid-e-azam.jpg",
        readForMore: "https://en.wikipedia.org/wiki/Muhammad_Ali_Jinnah",
        quot: "“I  do not believe in taking the right decision, I take a decision and make it right.”"
    
     } ,
     {

        name: "Muhammad Iqbal",
        title: "National Poet",
        imgURL: "Alama-Iqbal.jpg",
        readForMore: "https://en.wikipedia.org/wiki/Muhammad_Iqbal",
        quot: "If one cannot live the life of the brave, then it is better to die like the brave."
   
    }
    ,
    {

        name: "Fatima Jinnah",
        title: "Mother of the Nation",
        imgURL: "Fatima-jinnah.jpg",
        readForMore: "https://en.wikipedia.org/wiki/Fatima_Jinnah",
        quot: "”No struggle can ever succeed without women participating side by side with men.”"
    
    }
    ,
    

  
    {
    name: "Abdul Sattar Edhi",
    title: "Founder of Edhi Foundation",
    imgURL: "edhi.jpg",
    readForMore: "https://en.wikipedia.org/wiki/Abdul_Sattar_Edhi",
    quot: "No religion is higher than humanity"
},
{

    name: "Zulfikar Ali Bhutto",
     title: "Founder of the Pakistan People's Party (PPP)",
    imgURL: "Zulfikar-Ali-Bhutto.jpg",
    readForMore: "https://en.wikipedia.org/wiki/Zulfikar_Ali_Bhutto",
    quot: "I'm not trying to minimize things; I'm trying to bring them back to reality."
 },


{
    name: "Dr Abdul Qadeer Khan",
    title: "Nuclear physicist",
    imgURL: "Abdul-Qadeer-khan.jpg",
    readForMoreURL: "https://en.wikipedia.org/wiki/Abdul_Qadeer_Khan",
    quot: "I am proud of my work for my country"

},

{

    name: "Benazir Bhutto",
    title: "First female Prime Minister of Pakistan",
    imgURL: "Benazir-Bhutto.jpg",
    readForMore: "https://en.wikipedia.org/wiki/Benazir_Bhutto",
    quot: "Democracy is the best revenge"

},
{
    name: "Malala Yousafzai",
    title: "Activist for female education",
    imgURL: "malala-yousafzai.jpg",
    readForMoreURL: "https://en.wikipedia.org/wiki/Malala_Yousafzai",
    quot: "One child, one teacher, one book, one pen can change the world"

},
{

    name: "Arfa Karim",
    title: "Youngest Microsoft Certified Professional",
    imgURL: "Arfa-Karim.jpg",
    readForMore: "https://en.wikipedia.org/wiki/Arfa_Karim",
    quot: "Microsoft has changed the way people think about computers."

},







]

function initialize() {
    let celebritiesGroupEl = document.querySelector("#celebrities-list");
    
    for (let i = 0; i < celebrities.length; i++) {
    celebritiesGroupEl.innerHTML +=
`
    <div class="celebrity-img-div"
     style="background-image:url(images/${celebrities[i].imgURL})" onclick=" changeCard(${i})">
     <p class="celeb-text" >${celebrities[i].name}</p>
     </div>

     `
    
    }
    changeCard(0);
}

function changeCard(celebIndex) {
         document.querySelector("#celeb-name").innerHTML = celebrities
         [celebIndex].name;
         document.querySelector("#celeb-title").innerHTML = celebrities
         [celebIndex].title;
         document.querySelector("#celebrity-imge").style["background-image"] = `url(images/${celebrities
         [celebIndex].imgURL})`;
         document.querySelector("#celeb-quot").innerHTML = celebrities
         [celebIndex].quot;
         console.log(celebrities
            [celebIndex].readForMore)
         document.querySelector("#celeb-link a").href = celebrities
         [celebIndex].readForMore;
         ;
 

}

