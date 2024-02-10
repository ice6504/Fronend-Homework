async function loadData() {
    const url =
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
    const response = await fetch(url);
    const data = await response.json();
    let info = document.getElementById("tbody");
  
    data.forEach((element) => {
      const { name, description, image_link } = element;
      let newRow = `
          <tr>
          <th>
            <label>
              <input id="check" type="checkbox" class="checkbox" />
            </label>
          </th>
          <td class="flex flex-col gap-5 text-center"><img src="${image_link}">${name}</td>
          <td>${description}</td>
          </tr>
          `;
      console.log(newRow);
      info.innerHTML += newRow;
    });
  }
  