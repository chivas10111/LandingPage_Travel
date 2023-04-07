const flightBtn = document.querySelector(".flightBtn");
const hotelBtn = document.querySelector(".hotelBtn");
const rentalBtn = document.querySelector(".rentalBtn");
const flightBooking = document.querySelector(".flightBooking");
const hotelBooking = document.querySelector(".hotelBooking");
const rentalBooking = document.querySelector(".rentalBooking");

//Hotel button
//1. Gắn sự kiện click vào nút hotelBtn
//2. Sau khi gắn, nó sx thực hiện hành động add class "active" cho hotelBtn
//3. Đồng thời, remove 2 li tag còn lại
// function addActiveBtn() {
    hotelBtn.addEventListener("click", function(){
        hotelBtn.classList.add("active");
        flightBtn.classList.remove("active");
        rentalBtn.classList.remove("active");
        hotelBooking.style.display = "block";
        flightBooking.style.display = "none";
        rentalBooking.style.display = "none";
    })

    flightBtn.addEventListener("click", function(){
        flightBtn.classList.add("active");
        hotelBtn.classList.remove("active");
        rentalBtn.classList.remove("active");
        flightBooking.style.display = "block";
        hotelBooking.style.display = "none";
        rentalBooking.style.display = "none";
    })

    rentalBtn.addEventListener("click", function(){
        rentalBtn.classList.add("active");
        flightBtn.classList.remove("active");
        hotelBtn.classList.remove("active");
        rentalBooking.style.display = "block";
        flightBooking.style.display = "none";
        hotelBooking.style.display = "none";
    })
// }