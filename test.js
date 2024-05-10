var play = document.getElementById('play');
var hagr_boot = document.getElementById('hagr-boot');
var value_boot = document.querySelector('.value-boot span');
var value_user = document.querySelector('.value-user span');
var hagr_user = document.getElementById('hagr-user');
var wal = document.querySelector('.wal');
var warq_user = document.getElementById('warq-user');
var mqs_user = document.getElementById('mqs-user');



let inter='';

let arry = ['👊','🖐','✌'];
let arryClass = ['hagr-boot','warq-boot',''];
let valu = ['انت تفوز','البوت يفوز','ربط عنق'];
let index = 0;
play.addEventListener('click',()=>{
    clearInterval(inter)
    inter = setInterval(() => {
        hagr_boot.innerHTML = arry[index];
        hagr_boot.className = arryClass[index];
        index++;
        if(index > 2){
            index = 0;
        }
    },100);
    wal.innerHTML = '';
    warq();
    hagrs();
    mqas();
});
function warq(){
    warq_user.onclick = ()=>{
        clearInterval(inter);
        if(hagr_boot.innerHTML == '🖐'){
            wal.innerHTML = `<p>لا احد يفوز </p>`;
        }else if(hagr_boot.innerHTML == '👊'){
            wal.innerHTML = `<p>الورقة تغلب الحجر</p>`;
            value_user.innerHTML++;
        }else{
            wal.innerHTML = `<p>المقص يقطع الورق</p>`;
            value_boot.innerHTML++;
        };
        clicks();
    };
};

function hagrs(){
    hagr_user.onclick = ()=>{
        clearInterval(inter);
        if(hagr_boot.innerHTML == '🖐'){
            value_boot.innerHTML++;
            wal.innerHTML = `<p>الورقة تغلب الحجر</p>`
        }else if(hagr_boot.innerHTML == '👊'){
            wal.innerHTML = `<p>لا احد يفوز</p>`
        }else{
            value_user.innerHTML++;
            wal.innerHTML = `<p>الحجر يغلب المقص</p>`
        };
        clicks();
    };
};

function mqas(){
    mqs_user.onclick = ()=>{
        clearInterval(inter);
        if(hagr_boot.innerHTML == '🖐'){
            value_user.innerHTML++;
            wal.innerHTML = `<p>المقص يقطع الورق</p>`
        }else if(hagr_boot.innerHTML == '👊'){
            value_boot.innerHTML++;
            wal.innerHTML = `<p>الحجر يغلب المقص</p>`;
        }else{
            wal.innerHTML = `<p>لا احد يفوز</p>`;
        };
        clicks();
    };
};
function tray(){
    clearInterval(inter);
    value_user.innerHTML = '0';
    value_boot.innerHTML = '0';
    hagr_boot.innerHTML = '؟';
    wal.innerHTML = '';
    hagr_boot.className = 'hagr-boot';
    clicks();
}
function clicks(){
    mqs_user.onclick = ()=>{};
    hagr_user.onclick = ()=>{};
    warq_user.onclick = ()=>{};
}