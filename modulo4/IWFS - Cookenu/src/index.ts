import app from "./app"
import { createRecipie } from "./endpoints/createRecipies"
import { getMyProfile } from "./endpoints/getMyProfile"
import { getUserById } from "./endpoints/getUserById"
import { getRecipiesById } from "./endpoints/getRecipiesByID"
import { login } from "./endpoints/login"
import { signup } from "./endpoints/signup"


app.get('/user/profile', getMyProfile)
app.get('/user/:id', getUserById)
app.get('/recipie/:id', getRecipiesById)
app.post('/signup', signup)
app.post('/login', login)
app.post('/recipie', createRecipie)




