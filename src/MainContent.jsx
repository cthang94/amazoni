import React, { Component } from "react";

class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "123-456",
        address: { city: "New York" },
        photo: "https://picsum.photos/id/111/200/300",
      },
      {
        id: 2,
        name: "Alex",
        phone: "123-111",
        address: { city: "Chicago" },
        photo: "https://picsum.photos/id/120/200/300",
      },
      {
        id: 3,
        name: "Smith",
        phone: "516-410",
        address: { city: "Indianpolis" },
        photo: "https://picsum.photos/id/237/200/300",
      },
      {
        id: 4,
        name: "Rob",
        phone: null,
        address: { city: "Las Vegas" },
        photo: "https://picsum.photos/id/121/200/300",
      },
      {
        id: 5,
        name: "Billy",
        phone: "917-676",
        address: { city: "New Orleans" },
        photo: "https://picsum.photos/id/10/200/300",
      },
    ],
  };

  customerNameStyle = (customerName) => {
    if (customerName.startsWith("S")) return "even-highlight";
    if (customerName.startsWith("A")) return "odd-highlight";
    if (customerName.startsWith("B")) return { backgroundColor: "blue" };
    if (customerName.startsWith("R")) return { backgroundColor: "turquoise" };
    else return "even-highlight";
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary m-2">
            {this.state.customersCount}
          </span>

          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Easy Button
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>ID #</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone Number</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  // executes when the user clicks on Refresh button
  onRefreshClick = () => {
    this.setState({
      customersCount: 32,
    });
  };

  getPhoneToRender = (customerInput) => {
    return customerInput.phone == null ? (
      <div className="nullCT"> Not listed </div>
    ) : (
      customerInput.phone
    );
  };

  getCustomerRow = () => {
    return this.state.customers.map((customerInput) => {
      return (
        <tr key={customerInput.id}>
          <td>{customerInput.id}</td>
          <td>
            <img src={customerInput.photo} alt="Customer"></img>
          </td>
          <td className={this.customerNameStyle(customerInput.name)}>
            {customerInput.name}
          </td>
          <td>{this.getPhoneToRender(customerInput)}</td>
          <td>{customerInput.address.city}</td>
        </tr>
      );
    });
  };
}

export default MainContent;
