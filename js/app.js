const certNoInput = document.querySelector("#certNo");
const submitBtn = document.querySelector("#submit");
let certLink = undefined;
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (certNoInput.value) {
    let certNo = certNoInput.value;
    let splitedCertNo = certNo.slice(0,6);
    if (splitedCertNo[4]=="-") {
      certLink = certNo;
      location.href = `https://certificates.itshirazu.ir/certificates/4029/${certLink}.pdf`;
    }else{
      certLink = certNo;
      location.href = `https://certificates.itshirazu.ir/certificates/4029/${certLink}.pdf`;
    }
      certNoInput.style.border = "1px solid gray";
      document.getElementsByClassName("error")[0].style.display = "none";
    } else {
      document.getElementsByClassName("error")[0].innerText =
        "کدملی/شماره پاسپورت نمیتواند خالی اشد!";
      document.getElementsByClassName("error")[0].style.display = "block";
      certNoInput.style.border = "1px solid red";
    }
});
