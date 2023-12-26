import requestData from './components/data.js';
import getAgeUser from './components/searchAge.js';


async function displayUsers() {
    const users = await requestData();
    
    const userList = document.querySelector('.users');
  
    users.forEach(user => {
      const age = getAgeUser(user.birthday);

      const listItem = document.createElement('li');
      listItem.innerText = `ID: ${user.id}, 
      Name: ${user.name}, 
      Age: ${age}, 
      Email: ${user.email}, 
      Country: ${user.country}, 
      Company: ${user.company}, 
      Birthday: ${user.birthday}`;
      
      userList.append(listItem);
    });
}
  
displayUsers();
