import React from 'react'
import Nav_tab from './Nav_tab';
import Header_Text from './Header_Text';
import {CloseOutlined} from '@ant-design/icons';
import { Form, Button, Input } from 'antd';
import 'antd/dist/antd.css';


function FrankForm(prop){

  var arrayOfObjects = [   
    {
        name: 'Diana',
        born: 1373925600000, // Mon, Jul 15 2013
        num: 4,
        sex: 'female'
    },
    {

        name: 'Beyonce',
        born: 1366832953000, // Wed, Apr 24 2013
        num: 2,
        sex: 'female'
    },
    {            
        name: 'Albert',
        born: 1370288700000, // Mon, Jun 3 2013
        num: 3,
        sex: 'male'
    },    
    {
        name: 'Doris',
        born: 1354412087000, // Sat, Dec 1 2012
        num: 1,
        sex: 'female'
    }
];

var byDate = arrayOfObjects.slice(0);
byDate.sort(function(a,b) {
    return a.born - b.born;
});
console.log('by date:');
console.log(byDate);

var byName = arrayOfObjects.slice(0);
byName.sort(function(a,b) {
    var x = a.sex.toLowerCase();
    var y = b.sex.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
});

console.log('by name:');
console.log(byName);

// var sorty = arrayOfObjects.slice(0);
// var boss = sorty.map((item)=>{item.name})

// // var b = sorty.sort(boss)
//     console.log('sorty:');
// console.log(boss);



return(
    <div>
        case
    </div>
)
    
  }
  export default FrankForm