import { supabase } from "./supabase.js"

const form = document.getElementById("registerForm")

form.addEventListener("submit", async (e) => {

e.preventDefault()

const username = document.getElementById("username").value
const email = document.getElementById("email").value
const phone = document.getElementById("phone").value

const shareLink = "https://llamabuzz-ga.vercel.app/vote.html?user=" + username

const { data, error } = await supabase
.from("users")
.insert([
{
username: username,
email: email,
phone: phone,
share_link: shareLink
}
])

if(error){
alert("Erreur")
}else{
alert("Compte créé !")
}

})
