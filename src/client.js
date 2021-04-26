import * as contentful from 'contentful'
require('dotenv').config()


export const client = contentful.createClient({
        space : process.env.SPACE_KEY,
        accessToken : process.env.ACCESS_TOKEN
    })
    