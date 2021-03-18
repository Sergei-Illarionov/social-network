

export type PostType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type AppStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type DialogType = {
    id: number
    name: string

}

export type MessageType = {
    id: number
    message: string
}

let state: AppStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you'},
            {id: 2, message: 'It\' s my first post'},
            {id: 3, message: 'Blabla'},
            {id: 4, message: 'Dada'},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are your?'},
            {id: 3, message: 'Good day'},
            {id: 4, message: 'Hello'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Goodbye'}
        ]
    }

}

export default state;