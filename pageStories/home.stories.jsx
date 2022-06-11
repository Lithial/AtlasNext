import Home from "../pages";

export default {
    title: "Pages/Home",
    component: Home
}

export const HomeExample = (args) => {
    return <Home {...args}/>
}

HomeExample.parameters = {
    initialUser: {
        isLoading: false,
        user: {
            name: "John Doe",
            email: 'john@doe.com',
            email_verified: true,
            nickname: 'Joe',
            picture: 'https://picsum.photos/200',
            sub: 'mock:johndoe',
            updated_at: '2021-04-02T12:42:42.042Z',
        }
    }
}
