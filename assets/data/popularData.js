const popularData = [
    {
        id:'1',
        title:'Primavera Pizza',
        image:require('../images/pizza1.png'),
        weight: '540 gr',
        rating: '5.0',
        price:4.99,
        sizeName:'Medium',
        sizeNumber:16,
        crust :'Think Crust',
        deliverTime:30,
        ingridents:[
            {
                id:'1',
                name:'ham',
                image:require('../images/ham.png')
    
            },
           
            {
                id:'4',
                name:'garlic',
                image:require('../images/garlic.png')
    
            },
        ]
    },
   
    {
        id:'2',
        title:'Vegitarian Pizza',
        image:require('../images/pizza2.png'),
        weight: '450 gr',
        rating: '4.0',
        price:3.99,
        sizeName:'Small',
        sizeNumber:14,
        crust :'Thin Crust',
        deliverTime:30,
        ingridents:[
            {
                id:'1',
                name:'ham',
                image:require('../images/ham.png')
    
            },
            {
                id:'2',
                name:'tomoto',
                image:require('../images/tomato.png')
    
            },
            {
                id:'3',
                name:'cheese',
                image:require('../images/cheese.png')
    
            },
            {
                id:'4',
                name:'garlic',
                image:require('../images/garlic.png')
    
            },
        ]
    },
   
    {
        id:'3',
        title:'Precron Pizza',
        image:require('../images/pizza3.png'),
        weight: '700 gr',
        rating: '5.0',
        price:9.99,
        sizeName:'Large',
        sizeNumber:14,
        crust :'Thik Crust',
        deliverTime:30,
        ingridents:[
            {
                id:'1',
                name:'ham',
                image:require('../images/ham.png')
    
            },
        
            {
                id:'3',
                name:'cheese',
                image:require('../images/cheese.png')
    
            },
            {
                id:'4',
                name:'garlic',
                image:require('../images/garlic.png')
    
            },
        ]
    },
   
    
    ]
    
    export default popularData;