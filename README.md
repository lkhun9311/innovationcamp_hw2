# innovationcamp_hw2
이노베이션캠프 in 동작구 두번째 Spring 과제  
[YouTube 시연영상 링크](https://youtu.be/1FeP9hatKKA)  

- API 명세서

| Method | Url               | Request                                                                                                                                   | Response                                                                                                                                                                                                                         |
| ------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /blog/boards      | \-                                                                                                                                        | \[<br>{<br>"createdAt": "2022-07-28T07:45:00.671",<br>"modifiedAt": "2022-07-28T07:45:00.671",<br>"id": 3,<br>"title": "뿌듯합니다.",<br>"username": "이율곡",<br>"password": "1234",<br>"contents": "열심히 노력한 만큼 성장하니 뿌듯합니다."<br>}<br>\] |
| POST   | /blog/boards      | {<br>"title": "뿌듯합니다.",<br>"username": "이율곡",<br>"password": "1234",<br>"contents": "열심히 노력한 만큼 성장하니 뿌듯합니다."<br>}                         | {<br>"createdAt": "2022-07-28T07:45:00.671",<br>"modifiedAt": "2022-07-28T07:45:00.671",<br>"id": 3,<br>"title": "뿌듯합니다.",<br>"username": "이율곡",<br>"password": "1234",<br>"contents": "열심히 노력한 만큼 성장하니 뿌듯합니다."<br>}             |
| PUT    | /blog/boards/{id} | {<br>"title": "내일이 기대됩니다.",<br>"username": "이황",<br>"password1": "1234",<br>"password2": "5678",<br>"contents": "성장하는 내일의 제가 기대됩니다."<br>} | TRUE                                                                                                                                                                                                                             |
| DELETE | /blog/boards/{id} | {<br>"password": "5678"<br>}                                                                                                              | TRUE                                                                                                                                                                                                                             |

  
- Usecase Diagram
![](https://i.imgur.com/JcWjNZP.jpg)
 
  
- Architecture
![](https://i.imgur.com/OE1vk1x.jpg)

[아이콘 출처] 'User, Manager, Laptop, Cloud 아이콘 제작자: Freepik - Flaticon' - 이 커버는 Flaticon.com의 자료를 사용해 디자인되었습니다. 
