let Products=[
    {
        id:1,
        name:"maggie noodles",
        price:10,
        category:"food",
        quantity:120,
        pic:"https://i.pinimg.com/originals/1a/40/a0/1a40a052b153844197963c641d558206.png"
    },
    {
        id:2,
        name:"Amul chesee",
        price:180,
        category:"dairy",
        quantity:50,
        pic:"https://nozzle.s3-ap-southeast-1.amazonaws.com/shop_125814/amulcheese_1589866269_.png"
    },
    {
        id:3,
        name:"Amul Butter",
        price:100,
        category:"dairy",
        quantity:80,
        pic:"https://2.imimg.com/data2/DM/BO/IMFCP-1545451/images-product-new-3-250x250.png"
    },
    {
        id:4,
        name:"CocoCola",
        price:30,
        category:"drink",
        quantity:90,
        pic:"https://toppng.com/uploads/preview/coca-cola-ml-coca-cola-11563491982fxhabavkuw.png"
    },
    {
        id:5,
        name:"Red bull",
        price:200,
        category:"Drink",
        quantity:22,
        pic:"https://m.media-amazon.com/images/I/61xF-XCi97L._SX569_.jpg"
    },
    {
        id:6,
        name:"Yippee noodles",
        price:20,
        category:"food",
        quantity:99,
        pic:"https://m.media-amazon.com/images/I/81vAX4DGjxL._SL1500_.jpg"
    },
    {
        id:7,
        name:"Yippee noodles",
        price:20,
        category:"food",
        quantity:99,
        pic:"https://m.media-amazon.com/images/I/81vAX4DGjxL._SL1500_.jpg"
    }
];

function displayData(arr)
{
    document.getElementById("data").innerHTML="";

    arr.forEach((product,index)=>{

        let row=document.createElement("tr");

        let numberTD=document.createElement("td");
        numberTD.append(index+1);

        let nameTD=document.createElement("td");
        nameTD.append(product.name);

        let priceTD=document.createElement("td");
        priceTD.append(product.price);

        let categoryTD=document.createElement("td");
        categoryTD.append(product.category);

        let quantityTD=document.createElement("td");
        quantityTD.append(product.quantity);

        let picTD=document.createElement("td");
        let propic=document.createElement("img");
        propic.setAttribute("src",product.pic);
        picTD.appendChild(propic);

        row.appendChild(numberTD);
        row.appendChild(nameTD);
        row.appendChild(priceTD);
        row.appendChild(categoryTD);
        row.appendChild(quantityTD);
        row.appendChild(picTD);

        document.getElementById("data").appendChild(row);
               

    })
    
}

displayData(Products);


let filterStatus=false;
function openFilterSection(){
    if(filterStatus===false)
    {
         document.getElementById("filter_box").style.marginLeft="0px";
         filterStatus=true;
    }
    else{
        document.getElementById("filter_box").style.marginLeft="-30%";
         filterStatus=false;
    }
}

let filters={
    category:null,
    quantity:null,
    minPrice:null,
    maxPrice:null
    
}

function setFilters(property,value)
{
    // let quantity=document.getElementById("quantity").value;
    // console.log(quantity);
    // let c="category";
    // c="price";
    // console.log(filters[c]);
    if(value!=="")
    {
        filters[property]=value;

        if(property==="minPrice")
        {
            document.getElementById("maxPrice").min=Number(value)+1;
            document.getElementById("Lowmaxpricelable").innerText=Number(value)+1;
        }

    }
    else{
        filters[property]=null;
    }
   console.log(filters);
}



function filter()
{
    let filteredData=Products;
    if(filters.category!==null)
    {
        filteredData=Products.filter((product,index)=>{

            return product.category.toUpperCase()===filters.category.toUpperCase();
        })
    }

    if(filters.quantity!==null){
        filteredData=filteredData.filter((product,index)=>{
            return Number(filters.quantity)<=product.quantity;
        })
    }

    if(filters.minPrice!==null)
    {
        filteredData=filteredData.filter((product,index)=>{
            return Number(filters.minPrice)<=product.quantity;
        })

    }

    if(filters.maxPrice!==null)
    {
        filteredData=filteredData.filter((product,index)=>{
            return Number(filters.maxPrice)>=product.quantity;
        })

    }
    displayData(filteredData).appendChild(row);
}


function closewindow()
{
   
    document.getElementById("filter_box").style.marginLeft="-30%";
    
}

//************ROUGH Work************* */

// let arr=[10,50,44,10,90,90,74];
// let data=arr.filter((num,index)=>{

//     return num===90;
// })

// console.log(data);

// let arr1=[
//     {name:"priya",age:23},
//     {name:"parag",age:25},
//     {name:"pramod",age:25},
//     {name:"riya",age:23}
// ];


// let data1=[];

// for(let i=0;i<arr1.length;i++)
// {
//     if(arr1[i].age===25)
//     {
//         data1.push(arr1[i]);
//     }
    
// }
// console.log(data1)