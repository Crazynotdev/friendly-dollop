/*import { supabase } from "./supabase.js"

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
*/
const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", async function(e) {
    e.preventDefault(); // empêche le rechargement

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    message.innerHTML = "Création du compte...";

    try {

        const res = await fetch("/api/register.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        });

        const data = await res.json();

        if(data.success){

            message.innerHTML = "✅ Compte créé avec succès";

            setTimeout(()=>{
                window.location.href = "login.html";
            },1500);

        } else {

            message.innerHTML = "❌ " + data.message;

        }

    } catch(err){

        message.innerHTML = "Erreur serveur";

    }

});
