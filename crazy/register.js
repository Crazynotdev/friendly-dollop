import { supabase } from './supabase.js'

const form = document.getElementById('registerForm')
const message = document.getElementById('message')

form.addEventListener('submit', async (e)=>{
    e.preventDefault()
    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    })

    if(error) message.innerText = error.message
    else{
        // Créer user dans table users + credits
        await supabase.from('users').insert([{id: data.user.id, username, email}])
        await supabase.from('credits').insert([{user_id: data.user.id, balance: 0}])
        message.innerText = "Compte créé ! Vérifiez votre email."
    }
})
