let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.enable()
tg.MainButton.text = "Сохранить прогресс";
tg.MainButton.setText("Сохранить прогресс");
tg.MainButton.textColor = "#F55353";
tg.MainButton.color = "#143F6B";
tg.MainButton.setParams({"color": "#143F6B"});

const currentUrl = window.location.href;
const url = new URL(currentUrl);
const params = new URLSearchParams(url.search)
const val = params.get('count');
const name = params.get('name');
var t = document.getElementById("count_text");
var name_t = document.getElementById("name_text");
var count = val;

t.innerHTML = count + "";
name_t.innerHTML = "Привет, " + name;

function OnClick(){
    count ++;
    t.innerHTML = count + "";
}
Telegram.WebApp.onEvent('mainButtonClicked', function(){
	tg.sendData(count);
});