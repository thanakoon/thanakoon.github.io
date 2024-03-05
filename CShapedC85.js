let select_CShapedC85 = document.getElementById('optionCShaped');
let select_CShapedC85_Install = document.getElementById('optionCShapedInstall');
let CShapedC85_ITEM = ['ขาเกล็ดชนชิด','ขาเกล็ดเว้นร่อง 5 มม.','ขาเกล็ดเว้นร่อง 10 มม.','ขาเกล็ดเฉียง 30 องศา','ขาเกล็ดเฉียง 45 องศา'];
let CShapedC85_INSTALL = ['แนวนอน','แนวตั้ง'];
let option_CShapedC85 = "";
let option_CShapedC85_install = "";


for(let i = 0; i < CShapedC85_ITEM.length; i++){

    option_CShapedC85 += '<option value="'+ CShapedC85_ITEM[i] + '">' + CShapedC85_ITEM[i] + "</option>";

}

for(let a = 0; a < CShapedC85_INSTALL.length; a++){
    option_CShapedC85_install += '<option value="'+ CShapedC85_INSTALL[a] + '">' + CShapedC85_INSTALL[a] + "</option>";
}

select_CShapedC85.innerHTML = option_CShapedC85;
select_CShapedC85_Install.innerHTML = option_CShapedC85_install;


let button_sam = document.getElementById('btnSum');



//คำนวนขาเกล็ด
function sumEquipment(value_install,length,width) {

    if(value_install === "แนวนอน"){
        let Horizontal_sum_length = Number(length) + 1;
        let Horizontal_sum_width = Number(width) / 2.4;
        let sumAll = Horizontal_sum_length * Horizontal_sum_width;
        return sumAll;
    }else if(value_install === "แนวตั้ง"){
        let Vertical_sum_width = Number(width) + 1;
        let Vertical_sum_length = Number(length) / 2.4;
        let sumAll = Vertical_sum_width * Vertical_sum_length;
       return sumAll;
        
    }
    
    //console.log( Math.ceil(sumAll));
} 

//คำนวนหาราคาขาเกล็ด
function priceEquipment(quantity,item,){

    if(item === "ขาเกล็ดชนชิด" || item === "ขาเกล็ดเว้นร่อง 5 มม." || item === "ขาเกล็ดเว้นร่อง 10 มม." ){
        equipment_price_amount = quantity * 165;
        return equipment_price_amount;
    }else if(item === "ขาเกล็ดเฉียง 30 องศา"){
        equipment_price_amount = quantity * 260;
        return equipment_price_amount;
    }else if(item === "ขาเกล็ดเฉียง 45 องศา"){
        equipment_price_amount = quantity * 290;
        return equipment_price_amount;
    }

}


//หาจำนวนเส้นต่อตรม.
function sumglock (option,width,length){

    let sum_area = width * length;

    if(option === "แบบชนชิด"){
        total_item = Math.ceil(sum_area) * 3.92;
        return total_item;
    }else if(option === "ขาเกล็ดเว้นร่อง 5 มม."){
        total_item = Math.ceil(sum_area) * 3.70;
        return total_item;
    }else if(option === "ขาเกล็ดเว้นร่อง 10 มม."){
        total_item = Math.ceil(sum_area) * 3.50;
        return total_item;
    }else if(option === "ขาเกล็ดเฉียง 45 องศา" || option === "ขาเกล็ดเฉียง 30 องศา"){
        total_item = Math.ceil(sum_area) * 4;
        return total_item;
    }

}

button_sam.addEventListener('click', () => {

    let value_select_item = document.getElementById('optionCShaped').value;
    let value_select_install = document.getElementById('optionCShapedInstall').value;
    let area_width = document.getElementById('width').value;
    let area_length = document.getElementById('length').value;
    let show_data = document.getElementById('data_amount');
   //let area_total = document.getElementById('area_total');

    show_data.style.display = 'block';

    let suminstall = sumEquipment(value_select_install,area_length,area_width); //จำนวนเกล็ด 
    //console.log(Math.ceil(suminstall));
    let quantity_item = Math.ceil(suminstall); 

    let equipment_price = priceEquipment(quantity_item,value_select_item); //ราคาเกล็ด

    let sum_item = sumglock(value_select_item,area_width,area_length); // จำนวนเส้น

    let product_amount = sum_item;

    let area = area_width * area_length; //หาพื้นที่ ตรม.
    //let product_amount = Math.ceil(area) * 4; //หาจำนวนเส้นที่จะต้องสั่ง
    let product_price = product_amount * 305; //ราคาของ
    let amount = product_price + equipment_price; //ราคารวม

    console.log("จำนวนพื้นที่ " + Math.ceil(area) + " ตรม.");
    console.log("จำนวนสินค้า " + product_amount + " เส้น");
    console.log(value_select_item + " " + quantity_item + " เส้น");
    console.log("ราคา" + value_select_item + " " + equipment_price.toLocaleString() + " บาท");
    console.log("ราคาสินค้า " + product_price.toLocaleString() + " บาท");
    console.log("ราคารวม " + amount.toLocaleString() + " บาท");



   document.getElementById('area_total').innerHTML =  "<table>" +
                                                        "<tr>" +
                                                            "<td>จำนวนพื้นที่</td>" +
                                                            "<td>" + "&nbsp;" + "</td>" +                                                   
                                                            "<td class='text-end'>" + Math.ceil(area) + "</td>" +
                                                            "<td>" + "&nbsp;" + "</td>" +
                                                            "<td>" + " ตรม." + "</td>" +
                                                        "</tr>" +
                                                        "<tr>" +
                                                            "<td>จำนวนสินค้า</td>" +
                                                            "<td>" + "&nbsp;" + "</td>" +
                                                            "<td class='text-end'>" + Math.ceil(product_amount) + "</td>" +
                                                            "<td>" + "&nbsp;" + "</td>" +
                                                            "<td>" + " เส้น" + "</td>" +
                                                        "</tr>" +
                                                        "<tr>" +
                                                            "<td>" + value_select_item + "</td>" +
                                                            "<td>" + "&nbsp;" + "</td>" +
                                                            "<td class='text-end'>" + quantity_item + "</td>" +
                                                            "<td>" + "&nbsp;" + "</td>" +
                                                            "<td>" + " เส้น" + "</td>" +
                                                        "</tr>" +
                                                      "</table>" +
                                                        "<hr>" +
                                                      "<table>" +
                                                        "<tr>" +
                                                            "<td>" + "ราคา" + value_select_item + "</td>" +
                                                            "<td>" + "&nbsp;" + "</td>" +
                                                            "<td class='text-end'>" + equipment_price.toLocaleString() + "</td>" +
                                                            "<td>" + "&nbsp;" + "</td>" +
                                                            "<td>" + " บาท" + "</td>" +
                                                        "</tr>" +
                                                        "<tr>" +
                                                            "<td>ราคาสินค้า</td>" +
                                                            "<td>" + "&nbsp;" + "</td>" +
                                                            "<td class='text-end'>" + product_price.toLocaleString() + "</td>" +
                                                            "<td>" + "&nbsp;" + "</td>" +
                                                            "<td>" + " บาท" + "</td>" +
                                                        "</tr>" +
                                                        "<tr class='fw-bold'>" +
                                                            "<td>ราคารวม</td>" +
                                                            "<td>" + "&nbsp;" + "</td>" +
                                                            "<td class='text-end'>" + amount.toLocaleString() + "</td>" +
                                                            "<td>" + "&nbsp;" + "</td>" +
                                                            "<td>" + " บาท" + "</td>" +
                                                        "</tr>" +
                                                      "</table>";

});