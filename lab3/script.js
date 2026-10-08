 
const item1 = { name: "Notebook", price: 60, qty: 3 };
const item2 = { name: "Pen", price: 10, qty: 5 };
const item3 = { name: "Bag", price: 800, qty: 1 };


 
console.log(typeof item1.price);
console.log(typeof item2.price);
console.log(typeof item3.price);



const subtotal1 = item1.price * item1.qty;
const subtotal2 = item2.price * item2.qty;
const subtotal3 = item3.price * item3.qty;



const grandTotal = subtotal1 + subtotal2 + subtotal3;



const discountPercent = grandTotal >= 5000 ? 20 :
                        grandTotal >= 2000 ? 10 :
                        grandTotal >= 1000 ? 5 :
                        0;

                        
const discountAmount = grandTotal * discountPercent / 100;
const afterDiscount = grandTotal - discountAmount;
const gst = afterDiscount * 18 / 100;
const finalAmount = afterDiscount + gst;
const freeShipping = afterDiscount >= 1500 || 3 >= 3;
const loyaltyPoints = finalAmount / 100;
const shippingStatus = freeShipping
    ? "FREE"
    : "₹100 shipping charge";

const receipt =
`----- SHOPPING RECEIPT -----


${item1.name}: ₹${subtotal1}
${item2.name}: ₹${subtotal2}
${item3.name}: ₹${subtotal3}

Grand Total: ₹${grandTotal.toFixed(2)}

Discount: ${discountPercent}%
Discount Amount: ₹${discountAmount.toFixed(2)}

After Discount: ₹${afterDiscount.toFixed(2)}

GST (18%): ₹${gst.toFixed(2)}

Final Payable: ₹${finalAmount.toFixed(2)}

Shipping: ${shippingStatus}

Loyalty Points: ${loyaltyPoints}
`;

console.log(receipt);

document.getElementById("receipt").textContent = receipt;