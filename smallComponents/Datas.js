const usersDataList = [
    {
        userName :'Sienna Cardoso' ,
        userImage: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=100&q=60' ,
        conversationContent:'is writing',
        isRead: true ,
        id: '11cg'
    } ,
    {
        userName : 'Todd Christien',
        userImage: 'https://images.unsplash.com/photo-1616434116710-c45ce99c1a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=100&q=60',
        conversationContent: 'This looks good ! you can try it out...',
        isRead: false,
        key:'54kp'
    },
    {
        userName : 'Emmanuel Oladipo' ,
        userImage: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=100&q=60',
        conversationContent: 'Will let you ...',
        isRead: true ,
        key:'47oc'
    } ,
    {
        userName :'Odunlade Adekola ' ,
        userImage: 'https://images.unsplash.com/photo-1616434116710-c45ce99c1a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        conversationContent:'Hi there...' ,
        isRead:true ,
        key:'87hg'
    },
    {
        userName : 'Patrice Oladipo' ,
        userImage: 'https://lh3.googleusercontent.com/a/AAcHTtfC7Ufjsj2JraOcCq6aPwKn6gcKD64FyEG0rBS8qaYrT8I=s288-c-no' ,
        conversationContent:'is writing...' ,
        isRead: false,
        key:'20du'
    } ,
    {
        userName :'Swii' ,
        userImage:'https://plus.unsplash.com/premium_photo-1692310681436-c51dedd3e944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' ,
        conversationContent:'hi' ,
        isRead: false,
        key:'36kd'
    },
    {
        userName :'Sienna Cardoso' ,
        userImage: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=100&q=60' ,
        conversationContent:'is writing',
        isRead: true ,
        key:'12mk'
    } ,
    {
        userName : 'Todd Christien',
        userImage: 'https://images.unsplash.com/photo-1616434116710-c45ce99c1a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=100&q=60',
        conversationContent: 'This looks good ! you can try it out...',
        isRead: false,
        key:'53pd'
    },
    {
        userName : 'Emmanuel Oladipo' ,
        userImage: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=100&q=60',
        conversationContent: 'Will let you ...',
        isRead: true ,
        key:'22ga'
    } ,
    {
        userName :'Odunlade Adekola ' ,
        userImage: 'https://images.unsplash.com/photo-1616434116710-c45ce99c1a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        conversationContent:'Hi there...' ,
        isRead:true ,
        key:'37lm'
    },
    {
        userName : 'Patrice Oladipo' ,
        userImage: 'https://lh3.googleusercontent.com/a/AAcHTtfC7Ufjsj2JraOcCq6aPwKn6gcKD64FyEG0rBS8qaYrT8I=s288-c-no' ,
        conversationContent:'is writing...' ,
        isRead: false,
        key:'28mw'
    } ,
    {
        userName :'Swii' ,
        userImage:'https://plus.unsplash.com/premium_photo-1692310681436-c51dedd3e944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' ,
        conversationContent:'hi' ,
        isRead: false,
        key:'12mx'
    },
    {
        userName : 'Patrice Oladipo' ,
        userImage: 'https://lh3.googleusercontent.com/a/AAcHTtfC7Ufjsj2JraOcCq6aPwKn6gcKD64FyEG0rBS8qaYrT8I=s288-c-no' ,
        conversationContent:'is writing...' ,
        isRead: false,
        key:'25hr'
    } ,
    {
        userName :'Swii' ,
        userImage:'https://plus.unsplash.com/premium_photo-1692310681436-c51dedd3e944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' ,
        conversationContent:'hi' ,
        isRead: false,
        key:'54ls'
    },
    {
        userName :'Sienna Cardoso' ,
        userImage: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=100&q=60' ,
        conversationContent:'is writing',
        isRead: true ,
        key:'48ju'
    } ,
]
export default usersDataList;