let select_option = document.getElementById('option');
let item_option = ['แบบชนชิด','แบบเว้นร่อง'];
let select = "";


for(let i = 0; i < item_option.length; i++){

    select += '<option value="'+ item_option[i] + '">' + item_option[i] + "</option>";

}

select_option.innerHTML = select;

let button_sam = document.getElementById('btnSum');


//หาจำนวนเส้นต่อตรม.
function sumglock (option,width,length){

    let sum_area = width * length;

    if(option === "แบบชนชิด"){
        total_item = Math.ceil(sum_area) * 3.70;
        return total_item;
    }else if(option === "แบบเว้นร่อง"){
        total_item = Math.ceil(sum_area) * 3.33;
        return total_item;
    }

}

button_sam.addEventListener('click', () => {

    let area_width = document.getElementById('width').value;
    let area_length = document.getElementById('length').value;
    let option_input = document.getElementById('option').value;
    let show_data = document.getElementById('data_amount');

    show_data.style.display = 'block';

    let sum_item = sumglock(option_input,area_width,area_length);
    price_amount = Math.ceil(sum_item) * 500;

    /*console.log("จำนวนพื้นที่ " + Math.ceil(area_width * area_length) + " ตรม.")
    console.log("จำนวนสินค้า " + Math.ceil(sum_item) + " เส้น")
    console.log("ราคา " + price_amount.toLocaleString() + " บาท")*/

    document.getElementById('area_total').innerHTML = "<table>" +
                                                        "<tr>" +
                                                            "<td>จำนวนพื้นที่</td>" +
                                                            "<td>" + "&nbsp;" + "</td>" +                                                   
                                                            "<td class='text-end'>" + Math.ceil(area_width * area_length) + "</td>" +
                                                            "<td>" + "&nbsp;" + "</td>" +
                                                            "<td>" + " ตรม." + "</td>" +
                                                        "</tr>" +
                                                        "<tr>" +
                                                            "<td>จำนวนสินค้า</td>" +
                                                            "<td>" + "&nbsp;" + "</td>" +
                                                            "<td class='text-end'>" + Math.ceil(sum_item) + "</td>" +
                                                            "<td>" + "&nbsp;" + "</td>" +
                                                            "<td>" + " เส้น" + "</td>" +
                                                        "</tr>" +
                                                        "<tr class='fw-bold'>" +
                                                            "<td>ราคา</td>" +
                                                            "<td>" + "&nbsp;" + "</td>" +
                                                            "<td class='text-end'>" + price_amount.toLocaleString() + "</td>" +
                                                            "<td>" + "&nbsp;" + "</td>" +
                                                            "<td>" + " บาท" + "</td>" +
                                                        "</tr>" +
                                                      "</table>";                 


})