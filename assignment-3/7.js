const userMap=new map();
function addUser(name,age,email){    
    const user ={name,age,email};
    userMap.set(email,user);
    console.log(`user added: ${name}`);
    
}
function updateset(email,newname,newage,newemail){
    if(userMap.has(email)){
        const user= userMap.get(email);
        user.name= newName || user.name;
        user.age= newAge ||user.age;
        if(newemail && newEmail !== email){
            userMap.delete(email);
            userMap.set(newEmail,user);

        }
        console.log(`user updated: ${user.name}`);
    }else{
        console.log(`user not found with email: ${email}`);
    }
}

function deleteUser(email){
    if(userMap.has(email)){
        const user=userMap.get(email);
        userMap.delete(email);
        console.log(`user deleted : ${user.name}`);
    }else{
        console.log(`user not found with email: ${email}`);
    }
}
addUser("saksham",22,"saksham@gmail.com");
addUser("shyam",21,"shyam@gmail.com");
console.log("user map after adding:");
console.log(userMap);
 updateset("saksham@gmail.com,John Updated", 26, "john.updated@example.com");

 console.log("User Map after updating:");
 console.log(userMap);
 
 deleteUser("jane@example.com");
 
 console.log("User Map after deleting:");
 console.log(userMap);