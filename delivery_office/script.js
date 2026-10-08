// قائمة الهاتف
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(link => {
    link.addEventListener("click", () => mainNav.classList.remove("open"));
});

// تتبع الشحنة - بيانات تجريبية
document.getElementById("trackingForm").addEventListener("submit", function(e){
    e.preventDefault();
    const number = document.getElementById("trackingNumber").value.trim();
    const result = document.getElementById("trackingResult");
    if(!number){ return; }
    result.style.display = "block";
    result.innerHTML = `📦 الشحنة <strong>${number}</strong> قيد التوصيل الآن — السائق في الطريق إلى موقع التسليم.`;
});

// حاسبة السعر
document.getElementById("calculateBtn").addEventListener("click", function(){
    const area = Number(document.getElementById("area").value);
    const weight = Math.max(Number(document.getElementById("weight").value) || 1, 0.1);
    const base = {1:1.5, 2:2.0, 3:2.3, 4:4.0, 5:5.0}[area];
    const extra = Math.max(0, Math.ceil(weight - 1)) * 0.5;
    const total = base + extra;
    document.getElementById("priceResult").innerHTML =
        `السعر التقريبي: <strong>${total.toFixed(3)} ر.ع</strong>`;
});

// نموذج الطلب
document.getElementById("orderForm").addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const msg = document.getElementById("orderMessage");
    msg.textContent = `تم استلام طلبك يا ${name}! سيتواصل معك فريق وصّلني لتأكيد التفاصيل.`;
    this.reset();
});
