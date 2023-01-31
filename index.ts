// В файле index.ts создать функцию getUsersJobPositions(usersArray) , которая на вход принимает массив пользователей из users.ts,
// на выход возвращает новый массив с объектами c новой структурой.
// Далее в index.ts создать переменную usersPositions и присвоить ей результат вызова функции.
// const usersPositions = getUsersJobPositions(usersArray);
// // в users должен записаться новый массив

import {IUsers, IUsersNew} from "./Interface/Iusers";
import {usersInfoArray} from "./userInfo";
import {usersArray} from "./users";


function getUsersJobPositions(usersArray: IUsers[]): IUsersNew [] {
const NewUsersArray: IUsersNew[]=[];
if (Array.isArray(usersArray)){
    usersArray.forEach((usersItem)=>{
        const userInfo = usersInfoArray.find(item=>item.userid === usersItem.userid);

        if(userInfo!=null){
            const UsersNew: IUsersNew = {
                name: usersItem.name,
                position: userInfo.organization.position,
                age: userInfo.age,
                gender: usersItem.gender
            }
           NewUsersArray.push(UsersNew);
        }
    })
}
    return NewUsersArray;

}
const usersPositions = getUsersJobPositions(usersArray);
console.log('userPositions', usersPositions);