const bitcoin = document.getElementById("bitcoin");
const ethereum = document.getElementById("ethereum");
const dogecoin = document.getElementById("dogecoin");

let settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  method: "GET",
  headers: {},
};

$.ajax(settings).done(function (response) {
  bitcoin.innerHTML = new Intl.NumberFormat("en-US").format(
    response.bitcoin.usd
  );
  ethereum.innerHTML = new Intl.NumberFormat("en-US").format(
    response.ethereum.usd
  );
  dogecoin.innerHTML = new Intl.NumberFormat("en-US").format(
    response.dogecoin.usd
  );
});
