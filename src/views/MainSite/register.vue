<template>
    <main-header></main-header>
    <div class="colonna">
            <div class="formLogin">
                <p>REGISTER</p>
                <div class="form">
                    <form>
                        <div class="mb-3">
                            <label>Name</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label>Surname</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label>Nickname</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Conferma Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>

                        <button type="submit" class="btn btn-primary">Register</button>
                    </form>
                    <RouterLink to="/login">Hai gia le credenziali?</RouterLink>
                </div>
            </div>
        </div>
        <main-footer></main-footer>
</template>