
// VARIABLES

const addonOne = document.getElementById("addon-one");
const addonTwo = document.getElementById("addon-two");
const addonThree = document.getElementById("addon-three");
const checkbox1 = document.getElementById("addon-checkbox-1");
const checkbox2 = document.getElementById("addon-checkbox-2");
const checkbox3 = document.getElementById("addon-checkbox-3")
const stepOnePage = document.getElementById("step-one");
const stepTwoPage = document.getElementById("step-two");
const stepThreePage = document.getElementById("step-three");
const stepFourPage = document.getElementById("step-four");
const stepFiveage = document.getElementById("step-five");
const nextBtn1 = document.getElementById("nextBtn1");
const nextBtn2 = document.getElementById("nextBtn2");
const nextBtn3 = document.getElementById("nextBtn3");
const confirmBtn = document.getElementById("confirmBtn");
const backtxt1 = document.getElementById("back1");
const backtxt2 = document.getElementById("back2");
const backtxt3 = document.getElementById("back3");
const planPeriodToggle = document.getElementById("toggle-btn");
const planPeriodToggleniddle = document.getElementById("toggle-niddle");
const advancedLabel = document.getElementById("advanced-label");
const arcadeLabel = document.getElementById("arcade-label");
const proLabel = document.getElementById("pro-label");
const advancedRadio = document.getElementById("advanced-radio");
const arcadeRadio = document.getElementById("arcade-radio");
const proRadio = document.getElementById("pro-radio");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const mainplan = document.getElementById("main-sub");
const addonplan = document.getElementById("addon-subs");

let currentPage = 1;
let planPeriod = "monthly";
let selectedplan = "";
let choosenAddons = [];

const plans = [[
    {
        title: "Arcade",
        price: 9,
        duration: "Monthly",
        per: "mo"
    },
    {   
        title: "Advanced",
        price: 12,
        duration: "Monthly",
        per: "mo"
    },
    {
        title: "Pro",
        price: 15,
        duration: "Monthly",
        per: "mo"
    }]
    ,[ 
    {
        title: "Arcade",
        price: 90,
        duration: "Yearly",
        per: "yr"
    },
    {   
        title: "Advanced",
        price: 12,
        duration: "Yearly",
        per: "yr"

    },
    {
        title: "Pro",
        price: 150,
        duration: "Yearly",
        per: "yr"
    }]
];

const addons =[
    [{
        title: "Online service",
        price: 1,
        duration: "month",
        per: "mo"
    },
    {   
        title: "Large storage",
        price: 2,
        duration: "month",
        per: "mo"
    },
    {
        title: "Customizable profile",
        price: 2,
        duration: "month",
        per: "mo"
    }], 
    [{
        title: "Online service",
        price: 10,
        duration: "year",
        per: "yr"
    },
    {   
        title: "Large storage",
        price: 20,
        duration: "year",
        per: "yr"
    },
    {
        title: "Customizable profile",
        price: 20,
        duration: "year",
        per: "yr"
    }]
];
// EVENT LISTENERS

pageSwap();

arcadeRadio.addEventListener("change", () =>{
    arcadeLabel.parentElement.classList.add("selected");
    proLabel.parentElement.classList.remove("selected");
    advancedLabel.parentElement.classList.remove("selected");
});

advancedRadio.addEventListener("change", () =>{

    advancedLabel.parentElement.classList.add("selected");
    arcadeLabel.parentElement.classList.remove("selected");
    proLabel.parentElement.classList.remove("selected");
});

proRadio.addEventListener("change", () =>{

    proLabel.parentElement.classList.add("selected");
    advancedLabel.parentElement.classList.remove("selected");
    arcadeLabel.parentElement.classList.remove("selected");
});

planPeriodToggle.addEventListener("click", ()=>{
    planPeriodToggleniddle.classList.toggle("t-right");
    if(planPeriod === "monthly"){
    planPeriod = "yearly";
}
    else if(planPeriod === "yearly"){
        planPeriod = "monthly";
    }
    montlyYearly();
});

checkbox1.addEventListener('change', ()=>{
    addonOne.classList.toggle("a-checked");
});

checkbox2.addEventListener('change', ()=>{
    addonTwo.classList.toggle("a-checked");
});

checkbox3.addEventListener('change', ()=>{
    addonThree.classList.toggle("a-checked");
});

nextBtn1.addEventListener("click" , (e)=>{
    e.preventDefault();

    if(name.value && email.value && phone.value){
        if(!name.value){
            document.getElementById("name-error").innerText = "";
        }
         if(!email.value){
             document.getElementById("email-error").innerText = "";
        }
         if (!phone.value){
             document.getElementById("phone-error").innerText = "";
        }
         currentPage += 1;
         pageSwap();
    }
    else{
        if(!name.value){
            document.getElementById("name-error").innerText = "This field is required";
        }
         if(!email.value){
             document.getElementById("email-error").innerText = "This field is required";
        }
         if (!phone.value){
             document.getElementById("phone-error").innerText = "This field is required";
        }
    }
});

nextBtn2.addEventListener("click" , (e)=>{
    e.preventDefault();
    selectedplan = document.querySelector(`input[type="radio"]:checked`).value;
    if(selectedplan !== ""){
    currentPage += 1;
   
    pageSwap();
    }
});

nextBtn3.addEventListener("click" , (e)=>{
    e.preventDefault();
    currentPage += 1;
    pageSwap();
    choosenAddons = [];
    document.querySelectorAll(`input[type="checkbox"]:checked`).forEach((item)=>{
        choosenAddons.push(item.value);
    });
    renderPageFour();
});

confirmBtn.addEventListener("click" , (e)=>{
    e.preventDefault();
    currentPage += 1;
    pageSwap();
})

backtxt1.addEventListener("click", ()=>{
    currentPage -= 1;
    pageSwap();
});

backtxt2.addEventListener("click", ()=>{
    currentPage -= 1;
    pageSwap();
});

backtxt3.addEventListener("click", ()=>{
    currentPage -= 1;
    pageSwap();
});
// FUNCTIONS

function montlyYearly(){
    let yearHtml1 = ` <div class="plan-img"><img src="./assets/images/icon-arcade.svg" alt=""></div>
    <h3>Arcade</h3>
    <p class="mm-yy-price">$90/yr</p> 
    <h5 class="freeMonth">2 month free</h5> `;
    let yearHtml2 = `  <div class="plan-img"><img src="./assets/images/icon-advanced.svg" alt=""></div>
    <h3>Advanced</h3>
    <p class="mm-yy-price">$120/yr</p>
    <h5 class="freeMonth">2 month free</h5>`;
    let yearHtml3 = `<div class="plan-img"><img src="./assets/images/icon-pro.svg" alt=""></div>
  <h3>Pro</h3>
  <p class="mm-yy-price">$150/yr</p>
  <h5 class="freeMonth">2 month free</h5> `;


    let monthHtml1 = ` <div class="plan-img"><img src="./assets/images/icon-arcade.svg" alt=""></div>
    <h3>Arcade</h3>
    <p class="mm-yy-price">$9/mo</p> `;
    let monthHtml2 = `<label id="advanced-label" for="advanced-radio" class="radio-label">
    <div class="plan-img"><img src="./assets/images/icon-advanced.svg" alt=""></div>
    <h3>Advanced</h3>
    <p class="mm-yy-price">$12/mo</p>`;
    let monthHtml3 = `<div class="plan-img"><img src="./assets/images/icon-pro.svg" alt=""></div>
  <h3>Pro</h3>
  <p class="mm-yy-price">$15/mo</p>`;


    if(planPeriod === "yearly"){
        arcadeLabel.innerHTML = yearHtml1;
        advancedLabel.innerHTML = yearHtml2;
        proLabel.innerHTML = yearHtml3;
        arcadeLabel.parentElement.style.height = "190px";
        advancedLabel.parentElement.style.height = "190px";
        proLabel.parentElement.style.height = "190px" ;
        document.getElementById('os').innerText = "+$10/yr";
        document.getElementById('ls').innerText = "+$20/yr";
        document.getElementById('cp').innerText = "+$20/yr";
    }
    else{
        arcadeLabel.innerHTML = monthHtml1;
        advancedLabel.innerHTML = monthHtml2;
        proLabel.innerHTML = monthHtml3;
        arcadeLabel.parentElement.style.height = "170px";
        advancedLabel.parentElement.style.height = "170px";
        proLabel.parentElement.style.height = "170px" ;
        document.getElementById('os').innerText = "+$1/mo";
        document.getElementById('ls').innerText = "+$2/mo";
        document.getElementById('cp').innerText = "+$2/mo";
    }
}

function pageSwap(){
    switch(currentPage){
        case 1:
            stepOnePage.classList.remove("hidden");
            stepTwoPage.classList.add("hidden");
            stepThreePage.classList.add("hidden");
            stepFourPage.classList.add("hidden");
            stepFiveage.classList.add("hidden");
            document.getElementById("one").classList.add('sel');
            document.getElementById("two").classList.remove('sel');
            document.getElementById("three").classList.remove('sel');
            document.getElementById("four").classList.remove('sel');
            break;
        case 2:
            stepOnePage.classList.add("hidden");
            stepTwoPage.classList.remove("hidden");
            stepThreePage.classList.add("hidden");
            stepFourPage.classList.add("hidden");
            stepFiveage.classList.add("hidden");
            document.getElementById("one").classList.remove('sel');
            document.getElementById("two").classList.add('sel');
            document.getElementById("three").classList.remove('sel');
            document.getElementById("four").classList.remove('sel');
            break;
        case 3:
            stepOnePage.classList.add("hidden");
            stepTwoPage.classList.add("hidden");
            stepThreePage.classList.remove("hidden");
            stepFourPage.classList.add("hidden");
            stepFiveage.classList.add("hidden");
            document.getElementById("one").classList.remove('sel');
            document.getElementById("two").classList.remove('sel');
            document.getElementById("three").classList.add('sel');
            document.getElementById("four").classList.remove('sel');
            break;
        case 4:
            stepOnePage.classList.add("hidden");
            stepTwoPage.classList.add("hidden");
            stepThreePage.classList.add("hidden");
            stepFourPage.classList.remove("hidden");
            stepFiveage.classList.add("hidden");
            document.getElementById("one").classList.remove('sel');
            document.getElementById("two").classList.remove('sel');
            document.getElementById("three").classList.remove('sel');
            document.getElementById("four").classList.add('sel');
            break;
        case 5:
            stepOnePage.classList.add("hidden");
            stepTwoPage.classList.add("hidden");
            stepThreePage.classList.add("hidden");
            stepFourPage.classList.add("hidden");
            stepFiveage.classList.remove("hidden");
            document.getElementById("one").classList.remove('sel');
            document.getElementById("two").classList.remove('sel');
            document.getElementById("three").classList.remove('sel');
            document.getElementById("four").classList.remove('sel');
            break;
    }
}

function renderPageFour(){
    var total = 0;
    var plan ; 
    var addonss = [];
    var perwhat;
    if (planPeriod == "yearly"){
        perwhat = "yr"
        switch(selectedplan){
            case 'arcade':
                plan = plans[1][0];
                break;
            case 'advanced':
                plan = plans[1][1];
                break;
            case 'pro':
                plan = plans[1][0];
                break;
        }

        choosenAddons.forEach((item)=>{
        
            switch(item){
                case 'online service':
                    addonss.push(addons[1][0]);
                    break;
                case 'large storage':
                    addonss.push(addons[1][1]);
                    break;
                case 'customizable profile':
                    addonss.push(addons[1][0]);
                    break;
                }
        })
    
    }
    else{
        perwhat = "mo"
        switch(selectedplan){
            case 'arcade':
                plan = plans[0][0];
                break;
            case 'advanced':
                plan = plans[0][1];
                break;
            case 'pro':
                plan = plans[0][0];
                break;
        }

          choosenAddons.forEach((item)=>{
            switch(item){
                 case 'online service':
                addonss.push(addons[0][0]);
                break;
            case 'large storage':
                addonss.push(addons[0][1]);
                break;
            case 'customizable profile':
                addonss.push(addons[0][0]);
                break;
            }
        })
    }

    mainplan.innerHTML  = ` <div class="planChoosen">
        <h5>${plan.title}(${plan.duration})</h5>
        <p>change</p>
      </div>
      <div class="plan-pay">$${plan.price}/${plan.per}</div>
    </div>`;
    total += plan.price;

    addonplan.innerHTML = "";
    console.log("Current Total: " + total);
    for(i = 0; i< addonss.length ; i++){
        console.log("Idex: "+ i);
        console.log("price" + addonss[i].price);
        addonplan.innerHTML += `<div class="addon-added"><p class="addon-title">${addonss[i].title}</p> <div class="addon-pay">$${addonss[i].price}/${addonss[i].per}</div></div></div>`;
        total += addonss[i].price;
    }
    console.log("final total" + total);
    document.getElementById("total-price").innerText = `$${total}/${perwhat}`;

}