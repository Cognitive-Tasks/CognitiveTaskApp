<template>
    <div class="colonna">
        <div class="formLogin">
            <p>LOGIN</p>
            <div class="form">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <a href="">Hai dimenticato l'email?</a>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                        <a href="">Hai dimenticato la password?</a>
                    </div>
                    <a href="./indexAreaPersonale.html">
                        <button class="btn btn-primary" type="button">Login</button>
                    </a>
                    <br>
                    <RouterLink to="Register">Non sei registrato?</RouterLink>
                </form>
            </div>
        </div>
    </div>
</template>