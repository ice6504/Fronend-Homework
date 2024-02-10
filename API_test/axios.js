let info = document.querySelector("#tbody");
const url =
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

axios.get(url).then((response) => {
  console.log(response.data[0].image_link);
  response.data.map((element) => {
    const { id, name, price, description, image_link } = element;
    let newRow = `
        <tr>
        <th>
            <h1>${id}</h1>
        </th>
        <td class="flex flex-col gap-5 text-center"><img src="${image_link}">${name}</td>
        <td class="text-center" >$ ${price}</td>
        <td>${description}</td>
        </tr>
        `;
    info.innerHTML += newRow;
  });
});
