let notifications = [
    {
        user:"Mark Webber",
        action:"reacted to your recent post",
        title:"My first tournamant today!",
        isNew:true,
        ago:"1m ago",
        type:"post",
        userImg:'assets/images/avatar-mark-webber.webp'

    },
    {
        user:"Angela Gray",
        action:"followed you",
        isNew:true,
        ago:"5m ago",
        type:"follow",
        userImg:"assets/images/avatar-angela-gray.webp"

    },
    {
        user:"Jacob Thampson",
        action:"has joined your group",
        title:"Chess Club",
        isNew:true,
        ago:"1day ago",
        type:"group",
        userImg:"assets/images/avatar-jacob-thompson.webp"
    },
    {
        user:"Rizky Hassanuddin",
        action:"sent you a private message",
        isNew:false,
        ago:"5days ago",
        type:"message",
        message:"Hello, thanks for setting up the Chess Club. I've beena member for few weeks now and I'm already having a lot of fun and improving my  games.",
        userImg:"assets/images/avatar-rizky-hasanuddin.webp"
    },
    {
        user:"Kimberly Smith",
        action:"commented on your picture",
        isNew:false,
        ago:"1week ago",
        type:"comment",
        img:"assets/images/image-chess.webp",
        userImg:"assets/images/avatar-kimberly-smith.webp"
    },
    {
        user:"Nathan Peterson",
        action:"reacted on your recent post",
        title:"5 end-game strategies to increase your win rate",
        isNew:false,
        ago:"2weeks ago",
        type:"post",
        userImg:"assets/images/avatar-nathan-peterson.webp"
    },
    {
        user:"Anna Kim",
        action:"left the group",
        title:"Chess club",
        isNew:false,
        ago:"2weeks ago",
        type:"group",
        userImg:"assets/images/avatar-anna-kim.webp"
    },
];

const notificationsHolder = document.getElementById('holder');
const markAllBtn = document.getElementById('mark-all');
const count = document.getElementById('count');
count.innerText = currentCount();

function currentCount(){
    const news = notifications.filter((e)=>e.isNew == true);
    if(news.length == 0){
        count.remove();
    }
    return news.length;
}


markAllBtn.addEventListener('click',()=>{
    markAllAsRead();
    
    count.innerText = currentCount();
});

notifications.forEach((e,index)=>{
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.id = "notif-"+index
    notificationsHolder.appendChild(notification);

    const userImg = document.createElement('img');
    userImg.src=e.userImg;
    userImg.className='user-img';
    notification.append(userImg);

    const content = document.createElement('div');
    content.className = 'content';
    notification.appendChild(content);

    const up = document.createElement('div');
    up.className ='up'
    content.appendChild(up);

    const user = document.createElement('span');
    user.className = 'user';
    user.innerText= e.user+" "
    up.appendChild(user);

    const action = document.createElement('span');
    action.className = 'action';
    action.innerText = e.action+" " ;
    up.appendChild(action);
    if(e.hasOwnProperty('title')){
        const tile = document.createElement('span');
        tile.className = 'tile';
        tile.innerText = e.title;
        if(e.type=="group"){
            tile.style.color = "#0a317b"
        }
        up.appendChild(tile);
    }
    
    if(e.isNew){
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.id = index;
        up.appendChild(dot);
        notification.style.cursor='pointer'
    }

    const ago = document.createElement('div');
    ago.className = 'ago';
    ago.innerText = e.ago;
    content.appendChild(ago);

    if(e.hasOwnProperty('message')){
        const comment = document.createElement('div');
        comment.className = 'comment';
        comment.innerText = e.message;
        content.appendChild(comment)
    }
    if(e.hasOwnProperty('img')){
        const react  = document.createElement('div');
        react.className ='react';
        notification.appendChild(react);
        react.appendChild(content);

        const otherImg = document.createElement('img');
        otherImg.className = 'other-img';
        otherImg.src = e.img;
        react.appendChild(otherImg); 
    }
    if(e.isNew){
        notification.classList.add('blues');
    }
    notification.addEventListener('click',  ()=>{
        markAsRead(index);
        count.innerText = currentCount();
    })


});

function markAsRead(index){
    notifications[index].isNew = false;
    notifications[index].isNew = false;

    const notifBadge = document.getElementById(index);
    const notifCard = document.getElementById('notif-'+index);
    if(notifBadge)
        notifBadge.remove();
    notifCard.classList.remove('blues');
}

function markAllAsRead(){
    notifications.forEach((e,i) => {
    notifications[i].isNew = false;
        const notif = document.getElementById(i);
        const notifCard = document.getElementById('notif-'+i);
        if(notif)
        notif.remove();
        notifCard.classList.remove('blues');
    });
    
}

