import { fromJS } from "immutable"


const defaultState = fromJS({
   topicList:[
       {
           id:1,
           title:'手绘',
           imgUrl:'//upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
       },
       {
           id:2,
           title:'社会热点',
           imgUrl:'//upload.jianshu.io/users/upload_avatars/7416466/fc1a1a0d-e3c7-4bca-9720-028c5c9914f3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
       },
       {
           id:3,
           title:'程序员',
           imgUrl:'//upload.jianshu.io/users/upload_avatars/1835526/83d24e1a-0a0f-43f6-8a1d-289be6101e73.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
       },
       {
        id:4,
        title:'手绘',
        imgUrl:'//upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        },
        {
            id:5,
            title:'社会热点',
            imgUrl:'//upload.jianshu.io/users/upload_avatars/7416466/fc1a1a0d-e3c7-4bca-9720-028c5c9914f3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        },
        {
            id:6,
            title:'程序员',
            imgUrl:'//upload.jianshu.io/users/upload_avatars/1835526/83d24e1a-0a0f-43f6-8a1d-289be6101e73.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        }, {
            id:7,
            title:'手绘',
            imgUrl:'//upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        },
        {
            id:8,
            title:'社会热点',
            imgUrl:'//upload.jianshu.io/users/upload_avatars/7416466/fc1a1a0d-e3c7-4bca-9720-028c5c9914f3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        },
        {
            id:9,
            title:'程序员',
            imgUrl:'//upload.jianshu.io/users/upload_avatars/1835526/83d24e1a-0a0f-43f6-8a1d-289be6101e73.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        }
   ],
   articleList:[{
       id:1,
       title:'经常说这4种话的人，永远不要深交。',
       desc:'我们常说宁交君子不交小人，指的就是交友看人品。人品是生命的通行证，在利益至上的时代里，人品是心灵最后的港湾。 而一个人的语言，则最能看出来一个人',
       imgUrl:'//upload-images.jianshu.io/upload_images/16050459-132d168e69f8de3d.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
       shangjin:30.87,
       author:'蓓蓓情',
       pingNum:200,
       shoucangNum:34
    },{
        id:1,
        title:'经常说这4种话的人，永远不要深交。',
        desc:'我们常说宁交君子不交小人，指的就是交友看人品。人品是生命的通行证，在利益至上的时代里，人品是心灵最后的港湾。 而一个人的语言，则最能看出来一个人',
        imgUrl:'//upload-images.jianshu.io/upload_images/16050459-132d168e69f8de3d.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        shangjin:30.87,
        author:'蓓蓓情',
        pingNum:200,
        shoucangNum:34
    },{
        id:1,
        title:'经常说这4种话的人，永远不要深交。',
        desc:'我们常说宁交君子不交小人，指的就是交友看人品。人品是生命的通行证，在利益至上的时代里，人品是心灵最后的港湾。 而一个人的语言，则最能看出来一个人',
        imgUrl:'//upload-images.jianshu.io/upload_images/16050459-132d168e69f8de3d.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        shangjin:30.87,
        author:'蓓蓓情',
        pingNum:200,
        shoucangNum:34
    }]


})

export default (state = defaultState,action) => {
    switch(action.type){
        case '':
        default:
        return state;
    }
}