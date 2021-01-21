import { Cat } from './schema'

const kyet = new Cat({ name: 'kyet' })
const notKyet = new Cat({ name: 'notKyet' })

const cats = [kyet, notKyet]

export {
    cats
}