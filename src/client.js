import * as contentful from 'contentful'



export const client = contentful.createClient({
    space: process.env.SPACE,
    accessToken: process.env.TOKEN
})



