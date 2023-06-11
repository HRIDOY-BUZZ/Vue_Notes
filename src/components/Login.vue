    <template>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">Login</div>
                            <div class="card-body">
                            <form @submit.prevent="login">
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <input v-model="email" type="email" class="form-control" id="email" required>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input v-model="password" type="password" class="form-control" id="password" required>
                                </div>
                                <button type="submit" class="btn btn-primary">Login</button>
                                <span class="ms-3">Not Registered? <a href="/register">Register Now</a></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
    
    <script>
    import { ref } from 'vue';
    
    export default {
        data() {
            return {
            email: '',
            password: ''
            };
        },
        methods: {
            async login() {
                try {
                    // Send login request to the API
                    const response = await fetch('your-api-url/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: this.email,
                            password: this.password
                        })
                    });

                    if (response.ok) {
                        // Login successful, redirect to the home page or perform any other necessary actions
                        this.$router.push('/home');
                    } else {
                        // Login failed, display an error message or handle the error accordingly
                        alert('Invalid email or password.');
                    }
                } catch (error) {
                    // Handle any network or server errors
                    console.error('Login failed:', error);
                    alert('An error occurred during login. Please try again later.');
                }
            }
        }
    };
    </script>
    
    <style scoped>
    .container {
        margin-top: 100px;
    }
    </style>
    