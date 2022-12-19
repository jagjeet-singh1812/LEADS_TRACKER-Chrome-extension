let myleads = [];
let inputele = document.getElementById("text_element");
let output = document.getElementById("unorderd_ele");
let btn = document.getElementById("inpu-btn");
let delete_btn = document.getElementById("del-btn");
let save_btn = document.getElementById("save-btn");
const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"));

if (leadsfromlocalstorage) {
  myleads = leadsfromlocalstorage;
  renderlead(myleads);
}

// const tab = [{ url: "www.innerhtml.com" }];

save_btn.addEventListener("click", function () {
  chrome.tabs.query({active: true,currentWindow: true }, function (tabs) {
    // console.log(tabs);
    myleads.push(tabs[0].url);
  localStorage.setItem("myleads", JSON.stringify(myleads));
  renderlead(myleads);
  });
  
});

delete_btn.addEventListener("dblclick", function () {
  // console.log("double clicked");
  localStorage.clear();
  myleads = [];
  renderlead(myleads);
});

btn.addEventListener("click", function () {
  // console.log("saved");
  // myleads.push("www.jagjeet.com");
  myleads.push(inputele.value);
  inputele.value = "";
  localStorage.setItem("myleads", JSON.stringify(myleads));
  renderlead(myleads);
  //   console.log(leadsfromlocalstorage);
});

function renderlead(leads) {
  let listitems = "";
  for (let i = 0; i < leads.length; i++) {
    // output.innerHTML+="<li>"+myleads[i]+"</li>";
    // const li=document.createElement('li');
    // li.textContent=myleads[i];
    // output.append(li);
    listitems += `<li>
            <a target='blank' href=${leads[i]}>${leads[i]}</a>
        </li>`;
  }

  output.innerHTML = listitems;
  // console.log(myleads);
}
