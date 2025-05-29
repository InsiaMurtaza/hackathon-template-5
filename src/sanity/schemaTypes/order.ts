
export const order = {
name:"order",
type:"document",
title:"Order",
fields:[
    {
        name:"name",
        type:"string",
        title:"Name"
    },
    {
        name:"email",
        type:"string",
        title:"Email",
    },
    {
        name:"phone",
        type:"string",
        title:"Phone"
    },
    {
        name:"address",
        type:"string",
        title:"Address"
    },
    {
        name:"city",
        type:"string",
        title:"City"
    },
    {
        name:"cartItems",
        title:"Cart Items",
        type:"array",
        of:[{type:'reference',to:{type:'product'}}]
    },
    {
        name:"total",
        type:"number",
        title:"Total Amount",
    },
    {
        name:"orderstatus",
        type:"string",
        title:"Order Status",
        options:{
            list:[
                {title:"Pending",value:"pending"},
                {title:"Success",value:"success"},
                {title:"Dispatch",value:"dispatch"}
            ],
            layout:"radio",
        },
        initialvalue:"pending"
    }
]
}