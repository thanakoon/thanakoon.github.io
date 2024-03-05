let select_option = document.getElementById('option');
let item_option = ['หน้าไม้ที่จะใช้ 20 มม.','หน้าไม้ที่จะใช้ 100 มม.'];
let select = "";

let select_optioninstall = document.getElementById('optioninstall');
let item_optioninstall = ['ระยะชนชิด','เว้นร่อง 10 มม.','เว้นร่อง 20 มม.','เว้นร่อง 30 มม.','เว้นร่อง 40 มม.','เว้นร่อง 50 มม.','เว้นร่อง 60 มม.','เว้นร่อง 70 มม.','เว้นร่อง 80 มม.','เว้นร่อง 90 มม.','เว้นร่อง 100 มม.'];
let selectinstall = "";

for(let i = 0; i < item_option.length; i++){

    select += '<option value="'+ item_option[i] + '">' + item_option[i] + "</option>";

}

select_option.innerHTML = select;

for(let i = 0; i < item_optioninstall.length; i++){

    selectinstall += '<option value="'+ item_optioninstall[i] + '">' + item_optioninstall[i] + "</option>";

}

select_optioninstall.innerHTML = selectinstall;

let button_sam = document.getElementById('btnSum');

function sumitem(option_item,option_install,width,length){
    //คำนวนพื้นที่
    let area = width * length;

    if(option_item === "หน้าไม้ที่จะใช้ 20 มม."){

        if(option_install === "ระยะชนชิด"){
            total_item = Math.ceil(area) * 16.66;
            return total_item;
        }else if(option_install === "เว้นร่อง 10 มม."){
            total_item = Math.ceil(area) * 11.11;
            return total_item;    
        }else if(option_install === "เว้นร่อง 20 มม."){
            total_item = Math.ceil(area) * 8.33;
            return total_item;    
        }else if(option_install === "เว้นร่อง 30 มม."){
            total_item = Math.ceil(area) * 6.66;
            return total_item;    
        }else if(option_install === "เว้นร่อง 40 มม."){
            total_item = Math.ceil(area) * 5.55;
            return total_item;    
        }else if(option_install === "เว้นร่อง 50 มม."){
            total_item = Math.ceil(area) * 4.76;
            return total_item;    
        }else if(option_install === "เว้นร่อง 60 มม."){
            total_item = Math.ceil(area) * 4.16;
            return total_item;    
        }else if(option_install === "เว้นร่อง 70 มม."){
            total_item = Math.ceil(area) * 3.70;
            return total_item;    
        }else if(option_install === "เว้นร่อง 80 มม."){
            total_item = Math.ceil(area) * 3.33;
            return total_item;    
        }else if(option_install === "เว้นร่อง 90 มม."){
            total_item = Math.ceil(area) * 3.03;
            return total_item;    
        }else if(option_install === "เว้นร่อง 100 มม."){
            total_item = Math.ceil(area) * 2.77;
            return total_item;    
        }

    }else if(option_item === "หน้าไม้ที่จะใช้ 100 มม."){

        if(option_install === "ระยะชนชิด"){
            total_item = Math.ceil(area) * 3.33;
            return total_item;
        }else if(option_install === "เว้นร่อง 10 มม."){
            total_item = Math.ceil(area) * 3.03;
            return total_item;    
        }else if(option_install === "เว้นร่อง 20 มม."){
            total_item = Math.ceil(area) * 2.77;
            return total_item;    
        }else if(option_install === "เว้นร่อง 30 มม."){
            total_item = Math.ceil(area) * 2.56;
            return total_item;    
        }else if(option_install === "เว้นร่อง 40 มม."){
            total_item = Math.ceil(area) * 2.38;
            return total_item;    
        }else if(option_install === "เว้นร่อง 50 มม."){
            total_item = Math.ceil(area) * 2.22;
            return total_item;    
        }else if(option_install === "เว้นร่อง 60 มม."){
            total_item = Math.ceil(area) * 2.08;
            return total_item;    
        }else if(option_install === "เว้นร่อง 70 มม."){
            total_item = Math.ceil(area) * 1.96;
            return total_item;    
        }else if(option_install === "เว้นร่อง 80 มม."){
            total_item = Math.ceil(area) * 1.85;
            return total_item;    
        }else if(option_install === "เว้นร่อง 90 มม."){
            total_item = Math.ceil(area) * 1.75;
            return total_item;    
        }else if(option_install === "เว้นร่อง 100 มม."){
            total_item = Math.ceil(area) * 1.66;
            return total_item;    
        }

    }

}

button_sam.addEventListener('click', () => {
    let area_width = document.getElementById('width').value;
    let area_length = document.getElementById('length').value;
    let option_input = document.getElementById('option').value;
    let option_install = document.getElementById('optioninstall').value;
    let show_data = document.getElementById('data_amount');

    show_data.style.display = 'block';

    let sum_item = sumitem(option_input,option_install,area_width,area_length);
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