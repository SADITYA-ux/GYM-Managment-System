import React, { useState } from "react";
import "./AddMember.css";

export default function AddMember({ onAdd }) {

  const [details, setDetails] = useState({
    id : crypto.randomUUID(),
    name: "",
    email: "",
    phone: "",
    membership: ""
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (
      details.name.trim() === "" ||
      details.email.trim() === "" ||
      details.phone.trim() === "" ||
      details.membership.trim() === ""
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    const newMember = {
      id : crypto.randomUUID(),
      name: details.name,
      email: details.email,
      phone: Number(details.phone),
      membership: details.membership
    };

    console.log(newMember);
    onAdd(newMember);

    setDetails({
      id : crypto.randomUUID(),
      name: "",
      email: "",
      phone: "",
      membership: ""
    });
  }

  return (
    <div className="add-member">
      <form onSubmit={handleSubmit}>
        <div className="form-group">

          <label>Name</label>
          <input
            type="text"
            placeholder="Please enter member name"
            value={details.name}
            onChange={(e) =>
              setDetails({ ...details, name: e.target.value })
            }
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Please enter member email"
            value={details.email}
            onChange={(e) =>
              setDetails({ ...details, email: e.target.value })
            }
          />

          <label>Phone</label>
          <input
            type="text"
            placeholder="Please enter member phone number"
            value={details.phone}
            onChange={(e) =>
              setDetails({ ...details, phone: e.target.value })
            }
          />

          <label>Membership</label>
          <input
            list="membership-options"
            type="text"
            placeholder="Please enter member membership type"
            value={details.membership}
            onChange={(e) =>
              setDetails({ ...details, membership: e.target.value })
            }
          />

          <datalist id="membership-options">
            <option value="1 month = Rs 2000" />
            <option value="3 months = Rs 5000" />
            <option value="6 months = Rs 9000" />
            <option value="12 months = Rs 15000" />
          </datalist>

        </div>

        <button type="submit">Add Member</button>
      </form>
    </div>
  );
}