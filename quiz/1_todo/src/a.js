var arr = [

    {gender: 'male', name: 'John'},
    {gender: 'female', name: 'Sarah'},
    {gender: 'male', name: 'Bone'},

]

const filtered = arr.filter(function(item){

    if(item.gender === 'female'){
        return item;
    }
});

console.log(filtered);