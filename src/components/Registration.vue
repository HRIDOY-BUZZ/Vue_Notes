    <template>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">Registration</div>
                            <div class="card-body">
                            <form @submit.prevent="register">
                                <div class="mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input v-model="name" type="text" class="form-control" id="name" required>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <input v-model="email" type="email" class="form-control" id="email" required>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input v-model="password" type="password" class="form-control" id="password" required>
                                </div>
                                <div class="mb-3">
                                    <label for="confirmPassword" class="form-label">Confirm Password</label>
                                    <input v-model="confirmPassword" type="password" class="form-control" id="confirmPassword" required>
                                </div>
                                <button type="submit" class="btn btn-primary">Register</button>
                                <span class="ms-3">Back to the <a href="/">Login Page</a></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
    
    <script>
    export default {
        data() {
            return {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            };
        },
        methods: {
            async register() {
                try {
                    // Validate password match
                    if (this.password !== this.confirmPassword) {
                        alert('Passwords do not match.');
                        return;
                    }

                    // Send registration request to the API
                    const response = await fetch('your-api-url/register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: this.name,
                            email: this.email,
                            password: this.password
                        })
                    });

                    if (response.ok) {
                        // Registration successful, redirect to the login page or perform any other necessary actions
                        this.$router.push('/login');
                    } else {
                        // Registration failed, display an error message or handle the error accordingly
                        alert('Registration failed. Please try again.');
                    }
                } catch (error) {
                    // Handle any network or server errors
                    console.error('Registration failed:', error);
                    alert('An error occurred during registration. Please try again later.');
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
    