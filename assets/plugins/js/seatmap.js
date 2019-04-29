window.addEventListener('DOMContentLoaded', (e) => {
  const seatContainer = document.getElementById('selected-seats-no');
  const availableSeat = document.getElementsByClassName('available-seat');
  const selectedSeat = document.getElementsByClassName('selected-seat');
  const counter = document.getElementById('counter');
  const totalPrice = document.getElementById('total-price');
  const grandTotal = document.getElementById('grand-total');
  const discount = document.getElementById('discount');

  const updateSeat = (arr, className) => {
    for (let i = 0; i < arr.length; i++) {
      const seatNo = document.getElementById(arr[i]);
      seatNo.classList.remove('available-seat');
      seatNo.classList.add(className);
  }
}

updateSeat([1, 2, 4], 'reserved-seat');
updateSeat([5, 3], 'booked-seat');

  const renderSeat = (seatLayout) => {
    const seatContainer = document.getElementsByClassName('seat-map-container')[0];
    seatContainer.insertAdjacentHTML('afterbegin', seatLayout);
  }

  const addSeat = (seatNo) => {
    const li = document.createElement('li')
    let node = document.createTextNode(`Seat #${seatNo}, `);
    li.id = `seat${seatNo}`;
    li.appendChild(node);
    seatContainer.appendChild(li);
  }

  const removeSeat = (seatNo) => {
    const child = document.getElementById(`seat${seatNo}`);
    console.log(child);
    seatContainer.removeChild(child);
  }

  const countSeat = () => {
    const { length } = selectedSeat;
    counter.innerHTML = `x ${length}`;
    return length;
  }

  const calculatePrice = (price) => {
    const value = countSeat();
    const total = price * value;
    totalPrice.innerHTML = `${total}.00`;
    return total;
  }

  calculateGrandTotal = (price, priceDiscount = 0) => {
    const totalPrice = calculatePrice(price);
    const grand = totalPrice - priceDiscount;
    discount.innerHTML = `${priceDiscount}.00`;
    grandTotal.innerHTML = `${grand}.00`;
  }

  for (let i = 0; i < availableSeat.length; i++) {
        availableSeat[i].addEventListener('click', () => {
        availableSeat[i].classList.toggle('selected-seat');
        const seatNo = (availableSeat[i].children[1].innerText);
        if (availableSeat[i].classList.contains('selected-seat')) {
          addSeat(seatNo); 
        }
        else {
          removeSeat(seatNo);
        }
        calculateGrandTotal(1000, 500);
    })
  }
});