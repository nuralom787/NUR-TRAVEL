const seatLeft = document.getElementById("seat-left");
const selectedSeat = document.getElementById("selected-seat")


// Seat Select Function.
function SelectSeat(event) {
    const seats = parseInt(selectedSeat.innerText);
    if (seats <= 3) {
        const innerText = event.target.innerText;
        const seat = document.getElementById(innerText);
        seat.style.backgroundColor = "#1DD100";
        seat.style.color = "#FFFFFF";

        // Call Total Amount Function.
        calculateTotalAmount(innerText);
    }
    else {
        return alert("You can't select more than 4 seats.")
    }
    updateLeftSeats();
    updateSeatSelected();
    updateSelectedSeatInfo(event);


    // const innerText = event.target.innerText;
    // const selectedInnerText = `S${event.target.innerText}`;
    // const seatSelected = document.getElementById(`S${innerText}`);
    // const seatSelectedText = seatSelected?.id;
    // console.log(selectedInnerText, seatSelectedText)
    // if (selectedInnerText === seatSelectedText) {
    //     const seat = document.getElementById(innerText);
    //     seat.style.backgroundColor = "#f2f2f2";
    //     seat.style.color = "#7b7d82";
    // }
    // else {
    //     const seat = document.getElementById(innerText);
    //     seat.style.backgroundColor = "#1DD100";
    //     seat.style.color = "#FFFFFF";
    // }
};


// Update Left Seats Function.
function updateLeftSeats() {
    const seat = parseInt(seatLeft.innerText);
    seatLeft.innerText = seat - 1;
};


// Update Seats Selected Function.
function updateSeatSelected() {
    const seat = parseInt(selectedSeat.innerText);
    selectedSeat.innerText = seat + 1;
};


// Update Selected Seat Info Function.
function updateSelectedSeatInfo(event) {
    const innerText = event.target.innerText;
    const table = document.getElementById("table");
    const tBody = document.createElement("tbody");
    tBody.innerHTML = `
    <tr class="border-b border-[#03071233]">
        <td class="px-0 py-4 text-base text-[#03071299]">${innerText}</td>
        <td class="px-0 py-4 pl-12 text-base text-[#03071299]">Economy</td>
        <td id="S${innerText}" class="text-right px-0 py-4 text-base text-[#03071299]">500</td>
    </tr>
    `;
    table.appendChild(tBody)
};


// Calculate Total Amount.
function calculateTotalAmount() {
    const totalPrice = document.getElementById("total-price");
    const grandPrice = document.getElementById("grand-total");
    const priceInt = parseInt(totalPrice.innerText);
    const newTotal = priceInt + 500;
    totalPrice.innerText = newTotal;
    grandPrice.innerText = newTotal;
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
    }
    else if (inputValue === "couple20") {
        const grandPrice = document.getElementById("grand-total");
        const priceInt = parseInt(grandPrice.innerText);
        const discount = priceInt * 20 / 100;
        grandPrice.innerText = priceInt - discount;
    }
    else {
        return alert("Invalid Coupon Code!!")
    }
}