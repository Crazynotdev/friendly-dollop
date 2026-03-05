import { supabase } from "./supabase.js"

const urlParams = new URLSearchParams(window.location.search)
const username = urlParams.get("user")

const form = document.getElementById("voteForm")

form.addEventListener("submit", async (e)=>{

e.preventDefault()

const name = document.getElementById("name").value
const phone = document.getElementById("phone").value

const { data:user } = await supabase
.from("users")
.select("*")
.eq("username", username)
.single()

await supabase
.from("votes")
.insert([
{
candidate_id: user.id,
voter_name: name,
voter_phone: phone
}
])

alert("Vote enregistré. En attente de validation admin.")

})
