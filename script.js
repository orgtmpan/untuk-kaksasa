const PASSWORD = "16112025";

function cekPassword(){

    const input =
    document.getElementById("password").value;

    if(input === PASSWORD){

        document.getElementById("passwordPage")
        .style.display = "none";

        document.getElementById("mainPage")
        .classList.remove("hidden");

    }else{

        document.getElementById("error")
        .innerText =
        "💗 Petunjuk: kita jadian kapan ya?.";

    }

}
