const {mongoose} = require('./db/mongoose');
const {Person} = require('./model/person');
const {ObjectId} = require('mongodb');
let id = '612f2e0d18c06794332b2861';
let newPerson = new Person({
    firstName : 'Benyamin',
    lastName : 'Morteza',
    age: 38
});

// newPerson.save().then((Person) =>{
//     console.log('Person has been save', Person);
// }, (err)=>{
//     console.log('Unable to save person', err);   

// });

// Person.find({
//     _id: id
// }).then((Person)=> {
//     console.log(Person);
// });

// Person.findById(id).then((Person)=>{
//     console.log(Person);;
// })

// Person.findOneAndUpdate({
//     _id:id
// },{
//     $set:{
//         firstName: 'بنیامین',
//         lastName: 'مرتضی'
//     }
// }).then(() =>{
//     console.log('Person has been Updated.');
// });
// Person.updateMany({
//     _id: id
// },{
//     $set : {
//         firstName: 'Benyamin',
//         lastName: 'Morteza'
//     }
// }).then(() => {
//     console.log('Person updated');
// });

// Person.deleteMany({
//     _id: id
// }).then((Person) => {
//     console.log('Person has been deleted for ever', Person);
// });




if(!ObjectId.isValid(id)){
    console.log('Person id is not valid');
}Person.findByIdAndRemove(id).then((Person) => {
    console.log('Person has been deleted for ever', Person); 
});

