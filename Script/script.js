const seatLeft = document.getElementById("seat-left");
const selectedSeat = document.getElementById("selected-seat")


// Seat Select Function.
function SelectSeat(event) {
    const seats = parseInt(selectedSeat.innerText);
    const innerText = event.target.innerText;
    const selectedInnerText = `S${innerText}`;
    const seatSelected = document.getElementById(selectedInnerText);
    const seatSelectedText = seatSelected?.id;
    if (selectedInnerText === seatSelectedText) {
        const seat = document.getElementById(innerText);
        // seat.style.backgroundColor = "#f2f2f2";
        // seat.style.color = "#7b7d82";
        seat.style.removeProperty("background-color");
        seat.style.removeProperty("color");
        removeSelectedSeatInfo(seatSelectedText);
        increaseLeftSeats();
        decreaseSeatSelected();
        calculateTotalAmount("remove seat");
    }
    else if (seats <= 3) {
        const seat = document.getElementById(innerText);
        seat.style.backgroundColor = "#1DD100";
        seat.style.color = "#FFFFFF";
        addSelectedSeatInfo(event);
        decreaseLeftSeats();
        increaseSeatSelected();
        calculateTotalAmount("add seat");
    }
    else {
        return alert("You can't select more than 4 seats.")
    }
    activeNextBtn();



    // const seats = parseInt(selectedSeat.innerText);
    // if (seats <= 3) {
    //     const innerText = event.target.innerText;
    //     const seat = document.getElementById(innerText);
    //     seat.style.backgroundColor = "#1DD100";
    //     seat.style.color = "#FFFFFF";

    //     // Call Total Amount Function.
    //     calculateTotalAmount(innerText);
    // }
    // else {
    //     return alert("You can't select more than 4 seats.")
    // }
    // updateLeftSeats();
    // updateSeatSelected();
    // addSelectedSeatInfo(event);
};


// Decrease Left Seats Function.
function decreaseLeftSeats() {
    const seat = parseInt(seatLeft.innerText);
    seatLeft.innerText = seat - 1;
};


// Increase Left Seats Function.
function increaseLeftSeats() {
    const seat = parseInt(seatLeft.innerText);
    seatLeft.innerText = seat + 1;
};


// Decrease Seats Selected Function.
function decreaseSeatSelected() {
    const seat = parseInt(selectedSeat.innerText);
    selectedSeat.innerText = seat - 1;
};


// Increase Seats Selected Function.
function increaseSeatSelected() {
    const seat = parseInt(selectedSeat.innerText);
    selectedSeat.innerText = seat + 1;
};



// Add Selected Seat Info Function.
function addSelectedSeatInfo(event) {
    const innerText = event.target.innerText;
    const table = document.getElementById("table");
    const tBody = document.createElement("tbody");
    tBody.innerHTML = `
    <tr class="border-b border-[#03071233]">
        <td class="px-0 py-4 text-base text-[#03071299]">${innerText}</td>
        <td class="px-0 py-4 pl-12 text-base text-[#03071299]">Economy</td>
        <td id="S${innerText}" class="text-right px-0 py-4 text-base text-[#03071299]">550</td>
    </tr>
    `;
    table.appendChild(tBody)
};


// Remove Selected Seat Info Function.
function removeSelectedSeatInfo(event) {
    const item = document.getElementById(event)
    item.parentNode.remove();
};



// Calculate Total Amount.
function calculateTotalAmount(parameter) {
    const totalPrice = document.getElementById("total-price");
    const grandPrice = document.getElementById("grand-total");
    const priceInt = parseInt(totalPrice.innerText);
    let newTotal = priceInt;
    if (parameter === "add seat") {
        newTotal = priceInt + 550;
    } else {
        newTotal = priceInt - 550;
    }
    totalPrice.innerText = newTotal;
    grandPrice.innerText = newTotal;
    if (parseInt(totalPrice.innerText) === 2200) {
        const couponApplyBtn = document.getElementById("coupon-apply-btn");
        couponApplyBtn.classList.remove("btn-disabled");
    } else {
        const couponApplyBtn = document.getElementById("coupon-apply-btn");
        couponApplyBtn.classList.add("btn-disabled");
    }
};




// Apply Discount Coupon.
function applyCoupon() {
    const input = document.getElementById("coupon-input");
    const inputValue = input.value.toLowerCase()
    if (inputValue === 'new15') {
        const grandPrice = document.getElementById("grand-total");
        const priceInt = parseInt(grandPrice.innerText);
        const discount = priceInt * 15 / 100;
        grandPrice.innerText = priceInt - discount;
        const couponApplyBtn = document.getElementById("coupon-apply-btn");
        couponApplyBtn.classList.add("btn-disabled");
    }
    else if (inputValue === "couple20") {
        const grandPrice = document.getElementById("grand-total");
        const priceInt = parseInt(grandPrice.innerText);
        const discount = priceInt * 20 / 100;
        grandPrice.innerText = priceInt - discount;
        const couponApplyBtn = document.getElementById("coupon-apply-btn");
        couponApplyBtn.classList.add("btn-disabled");
    }
    else {
        return alert("Invalid Coupon Code!!")
    }
};


// Activate/Deactivate Next or Submit Button.
function activeNextBtn() {
    const grandPrice = document.getElementById("grand-total");
    const passengerNumber = document.getElementById("passenger-number");
    const number = passengerNumber.value;
    const priceInt = parseInt(grandPrice.innerText);
    const inputValue = parseInt(number);
    if (priceInt > 0 && inputValue > 0) {
        const nextBtn = document.getElementById("next-btn");
        nextBtn.classList.remove("btn-disabled");
    }
    else {
        const nextBtn = document.getElementById("next-btn");
        nextBtn.classList.add("btn-disabled");
    }
};