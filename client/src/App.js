import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    customerName: "",
    product: "",
    quantity: "",
    totalPrice: "",
  });

  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (res.ok) {
      setResponseMsg("✅ Order placed successfully!");
      setFormData({
        customerName: "",
        product: "",
        quantity: "",
        totalPrice: "",
      });
    } else {
      setResponseMsg("❌ Error: " + result.error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Place New Order</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          id="product"
          placeholder="Product"
          value={formData.product}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          id="quantity"
          type="number"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          id="totalPrice"
          type="number"
          placeholder="Total Price"
          value={formData.totalPrice}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>{responseMsg}</p>
    </div>
  );
}

export default App;
