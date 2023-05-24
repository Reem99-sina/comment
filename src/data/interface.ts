export interface commentsinterface{
    
    id: number,
    content: string,
    createdAt: string,
    score: number,
    user: userinterface,
    replies: replyinterface[]
  
}
export interface userinterface{
    
    image: imageinterface,
    username: string
}
export interface imageinterface{

    png?: string,
    webp?: string
  
}
export interface replyinterface{

id: number,
content: string,
createdAt: string,
score: number,
user: userinterface,
  
}
export interface  currentuserinterface{
    
        image:userinterface ,
        username: string
}
export interface datainterface{
    currentUser: currentuserinterface,
      comments: commentsinterface[]
    
}