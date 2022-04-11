let valAPI = "https://valorant-api.com/v1/bundles/";

let uuidBundle = [
    "d958b181-4e7b-dc60-7c3c-e3a3a376a8d2",
    "05e8add9-404d-5d37-8973-9f93f8880e2d",
    "957f55ff-48a1-d0e2-41b1-ca89bf036b6e",
    "9be3549b-4124-7fc2-aa79-8d817f728a18",
    "a31f7d1f-89d8-47ae-875b-1ae2117655c2"
]

let veritcalAPI = "https://media.valorant-api.com/bundles/";
let veritcalImg = "/verticalpromoimage.png";

let bundle = {
    getBundle:function (uuid) {
        fetch(valAPI+uuid).then((response)=>{
            return response.json();
        }).then((data) => {
            const {displayName, displayIcon} = data.data;
            document.querySelector("#bundle").innerHTML = displayName;
            document.querySelector("#picture").src = displayIcon;
        })
    },
};

bundle.getBundle(uuidBundle[0]);
document.querySelector("#glitchpop").src = veritcalAPI+uuidBundle[1]+veritcalImg;
document.querySelector("#endeavor").src = veritcalAPI+uuidBundle[2]+veritcalImg;;
document.querySelector("#infantry").src = veritcalAPI+uuidBundle[3]+veritcalImg;
document.querySelector("#blastx").src = veritcalAPI+uuidBundle[4]+veritcalImg;

function changeBundle(num){
    bundle.getBundle(uuidBundle[num]);
}