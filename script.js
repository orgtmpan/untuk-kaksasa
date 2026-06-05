const PASSWORD = "16112025";

const API_URL =
"https://script.google.com/macros/s/AKfycbxebYpT1laX8W2KkE8OFim1xrWK2FGCUNfA_ZlSGxdHolLI-CdxwrDOdZ5y5iLAWykaXw/exec";

async function cekPassword(){

```
const input =
document.getElementById("password").value;

if(input === PASSWORD){

    document.getElementById("passwordPage")
    .style.display = "none";

    document.getElementById("mainPage")
    .classList.remove("hidden");

    loadSurat();

}else{

    document.getElementById("error")
    .innerText =
    "💗 Petunjuk: tanggal, bulan,tahun jadian.";

}
```

}

async function loadSurat(){

```
const container =
document.getElementById("suratContainer");

container.innerHTML =
"<p>💌 Membuka surat-surat...</p>";

try{

    const response =
    await fetch(API_URL);

    const data =
    await response.json();

    if(data.length === 0){

        container.innerHTML = `
        <div class="surat">
            <h3>💗</h3>
            <p>
                Surat-surat untuk Kak Sasa
                sedang dikumpulkan 🌷
            </p>
        </div>
        `;

        return;
    }

    container.innerHTML = "";

    data.reverse().forEach(item => {

        container.innerHTML += `
        <div class="surat">
            <h3>💗 ${item.nama}</h3>
            <p>${item.ucapan}</p>
        </div>
        `;

    });

}catch(error){

    container.innerHTML = `
    <div class="surat">
        <p>Gagal memuat surat 💔</p>
    </div>
    `;

}
```

}

function createHeart(){

```
const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "💗";

heart.style.left =
Math.random() * 100 + "vw";

heart.style.fontSize =
(15 + Math.random() * 20) + "px";

heart.style.animationDuration =
(3 + Math.random() * 5) + "s";

document
.querySelector(".hearts")
.appendChild(heart);

setTimeout(() => {

    heart.remove();

}, 8000);
```

}

setInterval(createHeart, 500);
