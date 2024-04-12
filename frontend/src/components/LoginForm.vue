<template>
  <div class="page-holder align-items-center py-4 bg-gray-100 vh-100">
      <div class="container">
        <div class="row align-items-center">
          
            <!-- Login -->
            <!-- <transition name="simple-transition"> -->
            <div class="col-lg-6 px-lg-4"  v-if="userlogin">
              <div class="card">
                <div class="card-header px-lg-5">
                  <div class="card-heading text-primary">Leitti Login</div>
                </div>
                <div class="card-body p-lg-5">
                  <h3 class="mb-4">Hi, welcome back! ??</h3>
                  <p class="text-muted text-sm mb-5">Just hit your credential and let's start a new aventure.</p>
                  <form id="loginForm" action="index.html">
                    <div class="form-floating mb-3">
                      <input class="form-control" id="floatingInput" type="email" placeholder="name@example.com" required>
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input class="form-control" id="floatingPassword" type="password" placeholder="Password" required>
                      <label for="floatingPassword">Password</label>
                    </div>
                    <div class="form-check mb-3">
                      <input class="form-check-input" type="checkbox" name="remember" id="remember">
                      <label class="form-check-label" for="remember">Remember me</label>
                    </div>
                    <button class="btn btn-primary" type="button">Submit</button>
                  </form>
                </div>
                <div class="card-footer px-lg-5 py-lg-4">
                  <div class="text-sm text-muted">Don't have an account? <a @click="user_register()">Register</a>.</div>
                </div>
              </div>
            </div>
            <!-- </transition> -->
            <!-- register -->
            <!-- <transition name="simple-transition"> -->
             <div class="col-lg-6 px-lg-4" v-if="userregister">
              <div class="card">
                <div class="card-header px-lg-5">
                  <div class="card-heading text-primary">Leitti Register</div>
                </div>
                <div class="card-body p-lg-5">
                  <h3 class="mb-4">Get started with Leitti</h3>
                  <p class="text-muted text-sm mb-5">Sign up to get access to our services.</p>
                  <form action="index.html">
                    <div class="form-floating mb-3">
                      <input class="form-control" id="username" type="email" placeholder="name@example.com" required>
                      <label for="username">Username</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input class="form-control" id="floatingInput" type="email" placeholder="name@example.com" required>
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input class="form-control" id="floatingPassword" type="password" placeholder="Password" required>
                      <label for="floatingPassword">Password</label>
                    </div>
                    <div class="form-check mb-3">
                      <input class="form-check-input" type="checkbox" name="agree" id="agree">
                      <label class="form-check-label" for="agree">I agree with the <a href="#">Terms & Conditions</a>.</label>
                    </div>
                    <div class="form-group">
                      <button class="btn btn-primary" id="regidter" type="button" name="registerSubmit">Register</button>
                    </div>
                  </form>
                </div>
                <div class="card-footer px-lg-5 py-lg-4">
                  <div class="text-sm text-muted">Already have an account? <a @click="user_login()">Login</a>.</div>
                </div>
              </div>
            </div>
          <!-- </transition> -->
         <div class="col-lg-6 d-none d-sm-block col-xl-5 ms-xl-auto px-lg-4 text-center text-primary"><img class="img-fluid mb-4" width="300" src="https://therichpost.com/wp-content/uploads/2021/06/login_page_image.png" alt="" style="transform: rotate(10deg)">
            <h1 class="mb-4">Leitti.com <br class="d-none d-lg-inline">Reduce school drop out.</h1>
            <p class="lead text-muted">We offer you, simple, easy used and powerful app to evaluation the drop out score of your students.</p>
          </div>
        </div>
      </div>
    </div>

    
</template>

<script>

export default {
  name:"LoginForm",
    methods: {
      //user login button click event
      user_login()
      {
        this.userlogin = true,
        this.userregister = false
      },
      //user register button click event
       user_register()
      {
        this.userlogin = false,
        this.userregister = true
      }
    },
      data: function() {
  return {
    userlogin:true,
    userregister:false
  }
}  
}
</script>